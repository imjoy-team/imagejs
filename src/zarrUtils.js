let zarrLib;
export async function loadZarrImage(config) {
  config = config || {};
  if (!config.source) {
    throw new Error("source field is missing.");
  }
  if (!zarrLib)
    zarrLib = await import(
      /* webpackIgnore: true */ "https://cdn.skypack.dev/@manzt/zarr-lite"
    );

  let store;
  if (typeof config.source === "string" && config.source.startsWith("http")) {
    config.name =
      config.name ||
      config.source
        .split("/")
        .pop()
        .split("#")[0]
        .split("?")[0];
    store = new zarrLib.HTTPStore(config.source);
  } else if (typeof config.source === "object" && config.source.getItem) {
    store = config.source;
  } else {
    throw new Error("Invalid source, it must be an URL or a zarr store.");
  }

  config.name = config.name || "zarr image";

  async function loadPyramid() {
    const rootAttrs = await zarrLib.getJson(store, ".zattrs");
    console.log("rootAttrs", rootAttrs);
    let paths = [];
    if ("multiscales" in rootAttrs) {
      const { datasets } = rootAttrs.multiscales[0];
      paths = datasets.map(d => d.path);
    }
    const p = paths.map(path =>
      zarrLib.openArray({
        store,
        path
      })
    );
    return Promise.all(p);
  }

  const pyramid = await loadPyramid();
  const zarr_arr = pyramid[0];

  let [sizeT, sizeC, sizeZ, sizeY, sizeX] = zarr_arr.shape;

  const dtypes = {
    "|i1": "int8",
    "|u1": "uint8",
    "<i2": "int16",
    "<u2": "uint16",
    "<i4": "int32",
    "<u4": "uint32",
    "<f4": "float32",
    "<f8": "float64"
  };

  if (sizeX * sizeY > 50000 * 50000) {
    throw new Error("The image size exceeded the limit for ImageJ.JS.");
  }

  return {
    name: config.name,
    dtype: dtypes[zarr_arr.dtype] || "uint16",
    width: sizeX,
    height: sizeY,
    nSlice: sizeC * sizeZ * sizeT,
    sizeC,
    sizeZ,
    sizeT,
    async getSlice(index) {
      const t = parseInt(index / (sizeC * sizeZ));
      const c = parseInt(index / sizeZ);
      const z = parseInt(index % sizeZ);
      // const d = await zarr_arr.getRawChunk([t, c, z, 0, 0]);
      const d = await zarr_arr.getRaw([t, c, z, null, null]);
      return d.data.buffer;
    }
  };
}
