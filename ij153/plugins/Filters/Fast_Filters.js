/*Compiled using CheerpJ (R) 2.1 by Leaning Technologies Ltd*/
cheerpjCL={cl:null};
var N12Fast_FiltersG;
function N12Fast_Filters(){N4java4lang6Object.call(this);this.flags0=0;this.impType1=0;this.nPasses2=0;this.pass3=0;this.maxThreads4=0;}
N12Fast_Filters.cl=cheerpjCL;
function N12Fast_FiltersX(a){a.f=N12Fast_FiltersX;if(cheerpjSafeInitGuard('N12Fast_Filters')) return;var q=a.q=N12Fast_Filters.prototype=Object.create(N4java4lang6Object.prototype);q.constructor=N12Fast_Filters;q.ifs=["ij/gui/DialogListener","ij/plugin/filter/ExtendedPlugInFilter","ij/plugin/filter/PlugInFilter"];q.ce$Wtupt0_Z2ij9ImagePlusEI=q.v11=_c4pJu_bin9_HSmrejLlrmr94vd;q.ylD4y1HaS4yCAJK0lYayqKUqjnr_d9X16plugin6filter18PlugInFf1aYRunnerEI=q.v12=_c4pJA_bin9_HSmrejvtlD4y1HaS4y4zd;q.d0Xay2T4ebd3bqJbXWPnsYTbfs9nirdreIqxrHyq_pFdynXRb36vr0m5nd=q.v13=_c4pJH_bin9_HSmrejvVpGaS4yiorWWDa0yqm4Dd;q.xhr1CAJKS_e5iqijvJlYayqKAudcCRWEV=q.v14=_c4pJs_bin9_HSmrejDhr14Hd;q.ce$YtNPassesIEV=q.v15=_c4pJA_bin9_HSmrejvtlrmDMcijri5Pd;q.v16=_c4pJC_bin9_HSmrejvBlD4yLg5yerij5Td;q.v17=_c4pJp_bin9_HSmrejvxxuech_T4am5Xd;q.v18=_c4pJp_bin9_HSmrejvxxuechxI0qi51d;N12Fast_Filters.TYPES0=null;N12Fast_Filters.MEAN1=0;N12Fast_Filters.BORDER_LIMITED_MEAN2=1;N12Fast_Filters.MEDIAN3=2;N12Fast_Filters.MIN4=3;N12Fast_Filters.MAX5=4;N12Fast_Filters.taskLists6=null;N12Fast_Filters.PREPROCESSES7=null;N12Fast_Filters.type8=0;N12Fast_Filters.xRadius9=0;N12Fast_Filters.yRadius10=0;N12Fast_Filters.linkXY11=null;N12Fast_Filters.preProcess12=0;N12Fast_Filters.subtract13=null;N12Fast_Filters.offset14=null;a.pc=-1276;_c4pJr_bin9_HSmrejfh7vZd(a);N12Fast_FiltersG=1;cheerpjSafeInitFinish('N12Fast_Filters');}
var N14Fast_Filters$1G;
var N2ij2IJG;
var N2ij5PrefsG;
var N2ij3gui13GenericDialogG;
var N2ij6plugin6filter11RankFiltersG;
var N4java3awt8CheckboxG;
var N4java3awt9RectangleG;
var N4java3awt9TextFieldG;
var N4java4lang6DoubleG;
var N4java4lang5FloatG;
var N4java4lang6ObjectG;
var N4java4lang7RuntimeG;
var N4java4lang13StringBuilderG;
var N4java4lang6ThreadG;
function _c4pJq_bin9_HSmrejXz7rd(g,p){var d=null,c=0;var a={p:p,pc:0,f:_c4pJq_bin9_HSmrejXz7rd,g:g};a.pc=-100;_n4VYObjectC2E0(g,a);g.flags0=16801887;g.nPasses2=1;a.pc=-162;;if((N4java4lang7RuntimeG|0)==0){cjG(a);};a.pc=-214;d=_m4FZ7Runtime10gethTGWE0(a);a.pc=-254;c=d.v21(d,a)|0;g.maxThreads4=c;}function _c4pJu_bin9_HSmrejLlrmr94vd(l,k,j,p){var d=null,c=0;var a={p:p,pc:0,f:_c4pJu_bin9_HSmrejLlrmr94vd,l:l,d:null};a.d=d=cheerpjInternString("1.38x");a.pc=-154;;if((N2ij2IJG|0)==0){cjG(a);};a.pc=-194;c=_c4V22ij2IJ15versionLessThanE92(d,a)|0;if((c|0)===0){return l.flags0|0|0;}return 4096|0;}function _c4pJA_bin9_HSmrejvtlD4y1HaS4y4zd(o,w,q,r,p){var c=0,e=null,h=null,g=null,k=null,j=0,d=0,m=0,l=0,n=-0.;var a=new createStacklet_c4pJA_bin9_HSmrejvtlD4y1HaS4y4zd(p,o,w,q,r);a.pc=-181;c=w.v88(w,a)|0;o.impType1=c;c=o.impType1|0;a.c=c=(c|0)!==2?0|0:2|0;a.pc=-258;;if((N2ij3gui13GenericDialogG|0)==0){cjG(a);};a.e=e=new N2ij3gui13GenericDialog();a.pc=-350;;if((N4java4lang13StringBuilderG|0)==0){cjG(a);};a.h=h=new N4java4lang13StringBuilder();a.pc=-448;_m4FJge_YBuilderC2E0(h,a);a.pc=-484;h=h.v71(h,q,a);a.pc=-509;h=h.v71(h,cheerpjInternString("..."),a);a.pc=-559;h=h.v4(h,a);a.pc=-581;_c4V22ij3gui13GenericDialogC2E0(e,h,a);h=cheerpjInternString("Filter Type");g=N12Fast_Filters.TYPES0;k=N12Fast_Filters.TYPES0;a.pc=-717;e.v549(e,h,g,k[((N12Fast_Filters.type8|0)+1|0)],a);g=cheerpjInternString("x Radius");a.pc=-812;e.v534(e,g,(+(N12Fast_Filters.xRadius9|0|0)),0.,0,a);g=cheerpjInternString("y Radius");a.pc=-909;e.v534(e,g,(+(N12Fast_Filters.yRadius10|0|0)),0.,0,a);g=cheerpjInternString("Lin\x6b x & y");a.pc=-1012;e.v542(e,g,((N12Fast_Filters.linkXY11|0)&255),a);g=cheerpjInternString("Preprocessing");k=N12Fast_Filters.PREPROCESSES7;h=N12Fast_Filters.PREPROCESSES7;a.pc=-1175;e.v549(e,g,k,h[((N12Fast_Filters.preProcess12|0)+1|0)],a);g=cheerpjInternString("Subtract Filtered");a.pc=-1287;e.v542(e,g,((N12Fast_Filters.subtract13|0)&255),a);g=cheerpjInternString("Offset (subtract only)");k=N12Fast_Filters.offset14;a.pc=-1424;e.v534(e,g, +k[((o.impType1|0)+1|0)],0.,c,a);a.pc=-1480;e.v544(e,r,a);a.pc=-1505;e.v570(e,o,a);a.pc=-1530;e.v589(e,a);a.pc=-1553;c=e.v571(e,a)|0;if((c|0)===0){a.pc=-1594;a.e=e=o.v0(o,a);a.pc=-1621;;if((N2ij2IJG|0)==0){cjG(a);};a.pc=-1662;_c4V02ij2IJ8registerE69(e,a);a.pc=-1702;;if((N4java4lang7RuntimeG|0)==0){cjG(a);};a.pc=-1755;g=_m4FZ7Runtime10gethTGWE0(a);a.pc=-1796;g.v21(g,a)|0;a.pc=-1820;c=_c4V12ij2IJ11setupDialogE93(w,(o.flags0|0),a)|0;o.flags0=c;if(((o.flags0|0)&32|0)!==0){c=o.impType1|0;a.c=c=(c|0)!==2?8|0:4|0;a.pc=-1959;a.j=j=w.v73(w,a)|0;a.pc=-1989;d=w.v74(w,a)|0;d=Math.imul(d,j)|0;a.c=c=mul64(d>>>0,(d>>31)>>>0,c>>>0,0>>>0)|0;a.j=j=hSlot|0;a.pc=-2093;;if((N2ij5PrefsG|0)==0){cjG(a);};a.pc=-2137;d=_c4p22ij5Prefs10getThreadsE34(a)|0;a.c=c=mul64(c>>>0,j>>>0,d>>>0,(d>>31)>>>0)|0;a.j=j=hSlot|0;a.pc=-2244;g=_m4FZ7Runtime10gethTGWE0(a);a.pc=-2285;d=g.v22(g,a)|0;m=hSlot|0;c=mul64(c>>>0,j>>>0,11>>>0,0>>>0)|0;c=sdiv64(c>>>0,(hSlot|0)>>>0,10>>>0,0>>>0)|0;j=hSlot|0;l=d>>>0<c>>>0? -1|0:1|0;d=(d|0)===(c|0)?0|0:l|0;l=(m|0)<(j|0)? -1|0:1|0;d=(m|0)===(j|0)?d|0:l|0;if((d|0)>=1){o.flags0=(o.flags0|0|32768);a.c=c=o.maxThreads4|0;a.pc=-2571;d=w.v76(w,a)|0;a.pc=-2597;n=+_m4FZ4Math4ceilE15(((+(c|0))*1.1/(+(d|0))),0.,a);d=~~n;d=(d|0)<1?1|0:d|0;o.maxThreads4=d;}}return o.flags0|0|0;}return 4096|0;}function _c4pJH_bin9_HSmrejvVpGaS4yiorWWDa0yqm4Dd(r,q,o,p){var c=null,g=null,j=null,d=0,h=-0.,k=null,e=null;var a=new createStacklet_c4pJH_bin9_HSmrejvVpGaS4yiorWWDa0yqm4Dd(p,r,q,o);a.pc=-182;a.c=c=q.v592(q,a);a.pc=-210;a.g=g=c.v24(c,0,a);a.pc=10;;if(g&&!(((N4java3awt9TextFieldG|0)&&g instanceof N4java3awt9TextField)>>0)){cjCastFailure(a,g);};a.pc=-345;a.c=c=c.v24(c,1,a);a.pc=20;;if(c&&!(((N4java3awt9TextFieldG|0)&&c instanceof N4java3awt9TextField)>>0)){cjCastFailure(a,c);};a.pc=-480;j=q.v594(q,a);a.pc=-504;a.j=j=j.v24(j,0,a);a.pc=33;;if(j&&!(((N4java3awt8CheckboxG|0)&&j instanceof N4java3awt8Checkbox)>>0)){cjCastFailure(a,j);};a.pc=-637;d=q.v582(q,a)|0;N12Fast_Filters.linkXY11=d;L0:do{if(((N12Fast_Filters.linkXY11|0)&255)!==0){a.pc=-739;a.k=k=g.v341(g,a);a.pc=-767;e=c.v341(c,a);a.pc=-791;d=k.v2(k,e,a)|0;if((d|0)===0){a.pc=-831;e=o.v11(o,a);if(e!==g){a.pc=-864;e=o.v11(o,a);if(e!==j){a.pc=-897;e=o.v11(o,a);if(e!==c)break L0;a.pc=-938;e=c.v341(c,a);a.pc=-962;g.v340(g,e,a);break L0;}}a.pc=-997;e=g.v341(g,a);a.pc=-1021;c.v340(c,e,a);}}}while(0);a.pc=-1058;d=q.v585(q,a)|0;N12Fast_Filters.type8=d;a.pc=-1109;h=+q.v573(q,a);N12Fast_Filters.xRadius9=~~h;a.pc=-1164;h=+q.v573(q,a);N12Fast_Filters.yRadius10=~~h;a.pc=-1220;d=q.v585(q,a)|0;N12Fast_Filters.preProcess12=d;a.pc=-1278;d=q.v582(q,a)|0;N12Fast_Filters.subtract13=d;a.c=c=N12Fast_Filters.offset14;a.d=d=r.impType1|0;a.pc=-1384;h=+q.v573(q,a);c[(d+1|0)]=h;a.pc=-1423;d=q.v579(q,a)|0;if((d|0)===0){if((N12Fast_Filters.xRadius9|0|0)>=0){if((N12Fast_Filters.yRadius10|0|0)>=0){if((N12Fast_Filters.xRadius9|0|0)<=999999){return ((N12Fast_Filters.yRadius10|0|0)<1000000?1:0)|0;}}}}return 0|0;}function _c4pJs_bin9_HSmrejDhr14Hd(x,w,p){var k=0,j=0,c=0,d=0,e=0,r=0,v=0,g=null,l=null,m=null,o=null,t=-0.,u=-0.,h=0,q=0,s=0,n=0;var a=new createStacklet_c4pJs_bin9_HSmrejDhr14Hd(p,x,w);a.pc=-187;a.r=r=w.v13(w,a)|0;a.pc=-216;a.v=v=w.v14(w,a)|0;a.pc=-245;a.g=g=w.v60(w,a);l=N12Fast_Filters.taskLists6;a.l=l=l[((N12Fast_Filters.type8|0)+1|0)];a.d=d=l.length-1|0;e=Math.imul(N12Fast_Filters.xRadius9|0,d-1|0)|0;a.j=j=Math.imul(N12Fast_Filters.yRadius10|0,d)|0;L0:do{if((N12Fast_Filters.preProcess12|0|0)<1){a.k=k=e;}else{a.k=k=(N12Fast_Filters.xRadius9|0)+e|0;if((N12Fast_Filters.xRadius9|0|0)>=1){if((N12Fast_Filters.yRadius10|0|0)>=1){h=N12Fast_Filters.preProcess12|0;a.c=c=j+1|0;a.pc=-680;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,1,1,k,c,(x.maxThreads4|0),a);h=N12Fast_Filters.preProcess12|0;a.pc=-792;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,1,0,k,j,(x.maxThreads4|0),a);a.j=j=c;break L0;}}if((N12Fast_Filters.xRadius9|0|0)<1){if((N12Fast_Filters.yRadius10|0|0)>=1){h=N12Fast_Filters.preProcess12|0;a.pc=-999;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,2,0,k,j,(x.maxThreads4|0),a);}}else{h=N12Fast_Filters.preProcess12|0;a.pc=-1118;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,2,1,k,j,(x.maxThreads4|0),a);}}}while(0);L0:do{if((d|0)>0){a.c=c=0;while(1){if((N12Fast_Filters.xRadius9|0|0)>=1){h=l[(c+1|0)]|0;q=N12Fast_Filters.xRadius9|0;s=N12Fast_Filters.xRadius9|0;n=d-c|0;e=N12Fast_Filters.yRadius10|0;a.pc=-1394;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,q,1,(Math.imul(s,n-1|0)|0),(Math.imul(e,n)|0),(x.maxThreads4|0),a);}a.e=e=c+1|0;if((N12Fast_Filters.yRadius10|0|0)>=1){h=l[e]|0;q=N12Fast_Filters.yRadius10|0;s=N12Fast_Filters.xRadius9|0;c=(d-c|0)-1|0;n=N12Fast_Filters.yRadius10|0;a.pc=-1676;_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(x,w,h,q,0,(Math.imul(s,c)|0),(Math.imul(n,c)|0),(x.maxThreads4|0),a);}a.pc=-1791;;if((N4java4lang6ThreadG|0)==0){cjG(a);};a.pc=-1843;m=_n4_ZThread13currentg5GWE4(a);a.pc=-1886;c=m.v21(m,a)|0;if((c|0)!==0)break L0;if((d|0)>(e|0)){a.c=c=e;continue;}break;}}if(((N12Fast_Filters.subtract13|0)&255)!==0){a.pc=-2021;a.l=l=w.v127(w,a);a.pc=295;;if(l&&!(l[0]==70)){cjCastFailure(a,l);};a.pc=-2100;a.m=m=w.v187(w,a);a.pc=307;;if(m&&!(m[0]==70)){cjCastFailure(a,m);};o=N12Fast_Filters.offset14;t=Math.fround( +o[((x.impType1|0)+1|0)]);c=g.y1|0;d=g.y1|0;if((c|0)<((g.height3|0)+d|0)){while(1){e=g.x0|0;d=g.x0|0;if((e|0)<((g.width2|0)+d|0)){d=e+(Math.imul(c,r)|0)|0;while(1){d=d+1|0;u=+m[d];l[d]=(t+(u- +l[d]));e=e+1|0;h=g.x0|0;if((e|0)<((g.width2|0)+h|0))continue;break;}}h=c+1|0;c=g.y1|0;if((h|0)<((g.height3|0)+c|0)){c=h;continue;}break;}}a.pc=-2552;;if((N4java4lang6ThreadG|0)==0){cjG(a);};a.pc=-2604;o=_n4_ZThread13currentg5GWE4(a);a.pc=-2647;h=o.v21(o,a)|0;if((h|0)!==0)break L0;}L1:do{if((g.height3|0|0)===(v|0)){if((g.width2|0|0)===(r|0))break L1;}a.pc=-2766;_c4pJD_bin9_HSmrejvFhrirmHsnHwS6G4Ld(w,k,j,a);}while(0);a.pc=-2833;_c4pJC_bin9_HSmrejvBlD4yLg5yerij5Td(x,1,0.,a);}while(0);}function _c4pJD_bin9_HSmrejvFhrirmHsnHwS6G4Ld(v,u,t,p){var h=0,c=0,g=0,k=0,e=null,d=null,l=null,n=null,j=0,m=0,r=0,q=0,o=0;var a=new createStacklet_c4pJD_bin9_HSmrejvFhrirmHsnHwS6G4Ld(p,v,u,t);a.pc=-193;a.k=k=v.v13(v,a)|0;a.pc=-222;a.h=h=v.v14(v,a)|0;a.pc=-251;a.e=e=v.v60(v,a);a.pc=-278;a.d=d=e.v3(e,a);a.pc=22;;if(d&&!(((N4java3awt9RectangleG|0)&&d instanceof N4java3awt9Rectangle)>>0)){cjCastFailure(a,d);};a.pc=-410;d.v74(d,u,t,a);a.pc=-435;;if((N4java3awt9RectangleG|0)==0){cjG(a);};a.l=l=new N4java3awt9Rectangle();a.pc=-521;_h4V03awt9RectangleC2E4(l,k,h,a);a.pc=-564;a.d=d=d.v69(d,l,a);a.pc=-593;a.l=l=v.v127(v,a);a.pc=55;;if(l&&!(l[0]==70)){cjCastFailure(a,l);};a.pc=-670;a.n=n=v.v187(v,a);a.pc=67;;if(n&&!(n[0]==70)){cjCastFailure(a,n);};c=d.y1|0;g=d.x0|0;if((c|0)<(e.y1|0|0)){h=(Math.imul(c,k)|0)+g|0;while(1){j=d.width2|0;if((j|0)>=1){g=1;while(1){m=g+h|0;l[m]=n[m];g=g+1|0;if((g|0)<=(j|0))continue;break;}}c=c+1|0;if((c|0)<(e.y1|0|0)){h=h+k|0;continue;}break;}}c=e.x0|0;g=c-(d.x0|0)|0;c=d.x0|0;j=d.width2|0;h=e.x0|0;j=((j+c|0)-h|0)-(e.width2|0)|0;h=e.y1|0;c=e.y1|0;if((h|0)<((e.height3|0)+c|0)){m=(g|0)<1?1:0;r=(j|0)<1?1:0;while(1){if(!(m)){q=(d.x0|0)+(Math.imul(h,k)|0)|0;c=1;while(1){o=q+c|0;l[o]=n[o];c=c+1|0;if((c|0)<=(g|0))continue;break;}}if(!(r)){c=e.x0|0;q=(c+(Math.imul(h,k)|0)|0)+(e.width2|0)|0;c=1;while(1){o=q+c|0;l[o]=n[o];c=c+1|0;if((c|0)<=(j|0))continue;break;}}h=h+1|0;c=e.y1|0;if((h|0)<((e.height3|0)+c|0))continue;break;}}c=e.y1|0;c=(e.height3|0)+c|0;g=d.x0|0;j=d.y1|0;if((c|0)<((d.height3|0)+j|0)){h=(Math.imul(c,k)|0)+g|0;while(1){j=d.width2|0;if((j|0)>=1){g=1;while(1){m=g+h|0;l[m]=n[m];g=g+1|0;if((g|0)<=(j|0))continue;break;}}c=c+1|0;g=d.y1|0;if((c|0)<((d.height3|0)+g|0)){h=h+k|0;continue;}break;}}}function _c4pJA_bin9_HSmrejvtlrmDMcijri5Pd(j,h,p){var c=0,d=null;if((N12Fast_Filters.xRadius9|0|0)<1){c=h;}else{c=N12Fast_Filters.yRadius10|0;c=h<<((c|0)>0?1:0);}d=N12Fast_Filters.taskLists6;j.nPasses2=(Math.imul(d[((N12Fast_Filters.type8|0)+1|0)].length-1|0,c)|0);j.pass3=0;}function _c4pJC_bin9_HSmrejvBlD4yLg5yerij5Td(m,l,k,p){var e=0,d=0,c=0;var a={p:p,pc:0,f:_c4pJC_bin9_HSmrejvBlD4yLg5yerij5Td,l:+l,e:0,d:0,c:0};if((m.nPasses2|0|0)!==0){a.e=e=m.pass3|0;a.d=d=m.nPasses2|0;a.c=c=m.nPasses2|0;a.pc=-221;;if((N2ij2IJG|0)==0){cjG(a);};a.pc=-261;_c4_12ij2IJ12showProgressE45(((+(e|0))/(+(d|0))+l/(+(c|0))),0.,a);}}function _c4pJp_bin9_HSmrejvxxuech_T4am5Xd(C,D,E,F,G,H,I,J,p){var d=0,h=0,g=0,l=0,e=0,c=null,s=-0.,j=null,n=0,x=0,t=0,u=0,v=0,k=0,w=0,r=0,o=null,q=null,m=null;var a=new createStacklet_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(p,C,D,E,F,G,H,I,J);a.pc=0;;a.s=s=(E|0)!==3?1: -1;a.pc=14;a.d=d=D.v13(D,a);a.pc=1;;a.pc=20;a.g=g=D.v14(D,a);a.pc=2;;a.pc=26;c=D.v60(D,a);a.pc=3;;a.pc=29;a.c=c=c.v3(c,a);a.pc=4;;a.pc=32;;if(c&&!(((N4java3awt9RectangleG|0)&&c instanceof N4java3awt9Rectangle)>>0)){cjCastFailure(a,c);};a.pc=43;c.v74(c,H,I,a);a.pc=5;;a.pc=48;;if((N4java3awt9RectangleG|0)==0){cjG(a);};a.j=j=new N4java3awt9Rectangle();a.pc=56;_h4V03awt9RectangleC2E4(j,d,g,a);a.pc=6;;a.pc=59;a.c=c=c.v69(c,j,a);a.pc=7;;a.pc=65;a.j=j=D.v127(D,a);a.pc=8;;a.pc=68;;if(j&&!(j[0]==70)){cjCastFailure(a,j);};a.n=n=(G&255)===0?g|0:d|0;a.x=x=(G&255)===0?d|0:1|0;a.t=t=(G&255)===0?1|0:d|0;if((G&255)===0){a.pc=9;;h=c.x0|0;a.h=h=(h|0)<0?0|0:h|0;g=c.x0|0;g=(c.width2|0)+g|0;a.g=g=(d|0)<(g|0)?d|0:g|0;a.d=d=c.y1|0;a.l=l=c.y1|0;a.e=e=c.height3|0;a.l=l=e+l|0;}else{a.pc=10;;d=c.y1|0;a.h=h=(d|0)<0?0|0:d|0;d=c.y1|0;d=(c.height3|0)+d|0;a.g=g=(g|0)<(d|0)?g|0:d|0;a.d=d=c.x0|0;a.l=l=c.x0|0;a.e=e=c.width2|0;a.l=l=e+l|0;}a.pc=11;;e=d-F|0;a.u=u=(e|0)<0?0|0:e|0;e=l+F|0;a.v=v=(e|0)>(n|0)?n|0:e|0;e=g-h|0;k=((Math.imul(l-d|0,e)|0)/100000|0)+1|0;k=(k|0)>(J|0)?J|0:k|0;a.k=k=(e|0)<(k|0)?e|0:k|0;a.w=w=k-1|0;a.c=c=["[Ljava/lang/Thread;"];for(var i=1;i<=w;i=i+1|0)c[i|0]=null;;a.e=e=0;while(1){a.pc=12;;if((e|0)>=(w|0)){break;}a.pc=13;;a.r=r=e+1|0;a.pc=342;;if((N4java4lang6ThreadG|0)==0){cjG(a);};a.o=o=new N4java4lang6Thread();a.pc=346;;if((N14Fast_Filters$1G|0)==0){cjG(a);};a.q=q=new N14Fast_Filters$1();a.pc=379;cjMethodDynamic('ZN14Fast_Filters$1C2E'+cheerpjResolveMethod(cheerpjGetClass('Fast_Filters$1'),'<init>','(LFast_Filters;[FIFIIIIIIIIIIII)V').i)(q,C,j,E,s,F,h,r,g,k,n,u,v,d,l,x,t,a);a.pc=15;;a.pc=382;;if((N4java4lang13StringBuilderG|0)==0){cjG(a);};a.m=m=new N4java4lang13StringBuilder();a.pc=386;_m4FJge_YBuilderC2E0(m,a);a.pc=16;;a.pc=391;m=m.v71(m,cheerpjInternString("FastFilters-"),a);a.pc=17;;a.pc=396;m=m.v79(m,e,a);a.pc=18;;a.pc=399;m=m.v4(m,a);a.pc=19;;a.pc=402;_n4_YThreadC2E17(o,q,m,a);a.pc=21;;a.pc=410;q=_n4_ZThread13currentg5GWE4(a);a.pc=22;;a.pc=412;e=q.v28(q,a);a.pc=23;;a.pc=415;o.v27(o,e,a);a.pc=24;;c[r]=o;a.pc=427;o.v14(o,a);a.e=e=r;}a.pc=25;;a.pc=466;_c4pJp_bin9_HSmrejvxxuechxI0qi51d(C,j,E,s,F,h,g,k,n,u,v,d,l,x,t,1,a);a.pc=27;;a.h=h=c.length-1|0;if((h|0)>0){a.pc=28;;d=0;while(1){a.pc=30;;a.d=d=d+1|0;a.j=j=c[d];if(j!==null){a.pc=31;;a.pc=502;j.v35(j,a);}a.pc=33;;if((d|0)<(h|0)){d=d;}else{break;}}a.pc=34;;}a.pc=35;;C.pass3=((C.pass3|0)+1|0);}function ec4pJp_bin9_HSmrejvxxuech_T4am5Xd(a,b){a.f=ec4pJp_bin9_HSmrejvxxuech_T4am5Xd;var d=a.d|0,h=a.h|0,g=a.g|0,l=a.l|0,e=a.e|0,c=a.c,C=a.C,D=a.D,E=a.E|0,F=a.F|0,G=a.G|0,H=a.H|0,I=a.I|0,J=a.J|0,s=+a.s,j=a.j,n=a.n|0,x=a.x|0,t=a.t|0,u=a.u|0,v=a.v|0,k=a.k|0,w=a.w|0,r=a.r|0,o=a.o,q=a.q,m=a.m;var pc=a.pc;if(pc===14){}else if(pc===20){}else if(pc===26){}else if(pc===29){}else if(pc===43){}else if(pc===56){}else if(pc===59){}else if(pc===65){}a.pc=36;;a.j=j=b;if((pc>=469&&pc<511)&&self.hasOwnProperty("N4java4lang20InterruptedException")&&(b instanceof N4java4lang20InterruptedException)|0){a.pc=37;;a.h=h=c.length-1|0;a.d=d=0;while(1){a.pc=38;;if((d|0)>=(h|0)){break;}a.pc=39;;a.d=d=d+1|0;a.pc=544;c[d].v20(c[d],a);}a.pc=40;;a.h=h=c.length-1|0;a.d=d=0;while(1){a.pc=41;;if((d|0)>=(h|0)){break;}a.pc=42;;a.d=d=d+1|0;a.pc=581;c[d].v35(c[d],a);}a.pc=44;;}else{a.pc=45;;if(!((pc>=553&&pc<590)&&self.hasOwnProperty("N4java4lang20InterruptedException")&&(b instanceof N4java4lang20InterruptedException)|0)){a.pc=46;;a.pc=-1;return;}}a.pc=47;;a.pc=595;;if((N4java4lang6ThreadG|0)==0){cjG(a);};a.pc=596;var j=_n4_ZThread13currentg5GWE4(a);a.pc=49;;a.pc=598;j.v20(j,a);a.f=_c4pJp_bin9_HSmrejvxxuech_T4am5Xd;a.pc=35;buildContinuations(a, true);currentThread.state='READY';throw 'CheerpJContinue';}function _c4pJp_bin9_HSmrejvxxuechxI0qi51d(G,F,E,D,C,B,A,z,M,y,ab,aa,$,Z,Y,X,p){var j=null,n=null,m=0,l=0,k=0,c=0,g=0,e=null,r=0,x=0,s=0,t=0,u=-0.,h=0,o=0,d=0,q=0,v=0,w=null;var a=new createStacklet_c4pJp_bin9_HSmrejvxxuechxI0qi51d(p,G,F,E,D,C,B,A,z,y,ab,aa,$,Z,Y,X);a.e=e=new Float32Array((M+1|0));e[0]=70;if((E|0)===2){c=N12Fast_Filters.xRadius9|0;j=new Float32Array(((Math.imul(((N12Fast_Filters.yRadius10|0)<<1)+1|0,(c<<1)+1|0)|0)+1|0));j[0]=70;c=N12Fast_Filters.xRadius9|0;n=new Float32Array(((Math.imul(((N12Fast_Filters.yRadius10|0)<<1)+1|0,(c<<1)+1|0)|0)+1|0));n[0]=70;a.n=n=n;a.j=j=j;}else{a.n=n=null;a.j=j=null;}a.pc=-622;c=_o4_2ystem17currentTimeMillisE14(a)|0;g=hSlot|0;if((A|0)>(B|0)){a.r=r=Math.imul(Z,aa)|0;a.x=x=Math.imul(Z,y)|0;a.s=s=(y|0)<(ab|0)?1:0;a.t=t=(X&255)===0?1:0;a.u=u=(+(A-B|0));a.k=k=c;a.l=l=g;a.m=m=B;while(1){a.c=c=Math.imul(m,Y)|0;a.h=h=c+r|0;a.pc=-875;a.g=g=_o4_2ystem17currentTimeMillisE14(a)|0;a.o=o=hSlot|0;d=sub64(g>>>0,o>>>0,k>>>0,l>>>0)|0;q=hSlot|0;v=d>>>0<110? -1|0:1|0;d=(d|0)===110?0|0:v|0;d=(q|0)===0?d|0:q>>31|1|0;if((d|0)>=1){if(!(t)){a.pc=-1080;_c4pJC_bin9_HSmrejvBlD4yLg5yerij5Td(G,((+(m-B|0))/u),0.,a);}a.pc=-1151;;if((N4java4lang6ThreadG|0)==0){cjG(a);};a.pc=-1203;w=_n4_ZThread13currentg5GWE4(a);a.pc=-1246;d=w.v21(w,a)|0;if((d|0)!==0)break;a.k=k=g;a.l=l=o;}if(s){g=c+x|0;c=y;while(1){c=c+1|0;e[c]=( +F[(g+1|0)]*D);if((c|0)<(ab|0)){g=g+Z|0;continue;}break;}}L0:do{switch(E|0){case 0:{a.pc=-1434;_c4pJy_bin9_HSmrejXVG0qysa04vtd(C,e,F,aa,$,h,Z,a);break L0;}case 1:{a.pc=-1513;_c4pJM_bin9_HSmrejzxVG0qS5enqevIWGmrmysa04vBd(C,e,F,aa,$,h,Z,a);break L0;}case 2:{a.pc=-1606;_c4pJt_bin9_HSmrejvtVG0qysGhe34vJd(C,e,F,aa,$,h,Z,n,j,a);break L0;}case 3:{}case 4:{a.pc=-1701;_c4pJx_bin9_HSmrejTVG0qycC5vNd(C,D,e,F,aa,$,h,Z,a);break L0;}default:{}}}while(0);d=m+z|0;if((d|0)<(A|0)){a.m=m=d;continue;}break;}}}function _c4pJy_bin9_HSmrejXVG0qysa04vtd(q,r,s,t,u,v,D,p){var c=-0.,d=0,h=0,e=0,g=0,k=-0.,o=-0.,j=0,n=-0.,m=-0.,l=0;var a=new createStacklet_c4pJy_bin9_HSmrejXVG0qysa04vtd(p,q,r,s,u,D);a.o=o=1/(+((q<<1)+1|0));a.j=j=r.length-1|0;a.n=n=+r[1];a.m=m=+r[j];e=t-q|0;g=t+q|0;if((e|0)>-1){d=e;c=0;}else{c=(+(-e|0))*n;d=0;}if((g|0)>(j|0)){h=j;c+=((+(g-j|0))*m);}else{h=g;}if((d|0)<(h|0)){while(1){d=d+1|0;c+= +r[d];if((d|0)<(h|0))continue;break;}}if((t|0)<(u|0)){a.h=h=g;a.g=g=t;a.d=d=v;a.e=e=e;while(1){if((h|0)<(j|0)){k=+r[(h+1|0)];}else{k=m;}a.c=c+=k;a.pc=-545;;if((N4java4lang6DoubleG|0)==0){cjG(a);};a.pc=-596;l=_n4VZDouble5isNaNE5(c,0.,a)|0;if((l|0)===0){s[(d+1|0)]=Math.fround(o*c);c=c;}else{a.pc=-690;c=+_c4pJC_bin9_HSmrejvx3a0OzberWsX4vxd(q,r,g,s,d,a);}l=e+1|0;if((e|0)<0){k=n;}else{k=+r[l];}e=g+1|0;if((e|0)<(u|0)){a.g=g=e;a.e=e=l;c-=k;a.h=h=h+1|0;a.d=d=d+D|0;continue;}break;}}}function _c4pJC_bin9_HSmrejvx3a0OzberWsX4vxd(u,t,s,r,q,p){var c=0,d=-0.,e=0,j=0,h=0,g=-0.;c=s-u|0;h=s+u|0;if((c|0)>(h|0)){d=0;c=0;}else{e=0;d=0;while(1){if((c|0)>-1){if((c|0)<(t.length-1|0|0)){j=c;}else{j=t.length-1|0;j=j-1|0;}}else{j=0;}g=+t[(j+1|0)];if(g===g&&0===0){d+=g;e=e+1|0;}c=c+1|0;if((c|0)<=(h|0))continue;break;}c=e;if((c|0)>=1){r[(q+1|0)]=Math.fround(d/(+(c|0)));}}d=(c|0)!==((u<<1)+1|0)?NaN:d;return d;}function _c4pJM_bin9_HSmrejzxVG0qS5enqevIWGmrmysa04vBd(n,o,q,r,s,B,t,p){var d=0,c=-0.,h=0,g=0,j=0,e=0,m=0,l=-0.,k=0;var a=new createStacklet_c4pJM_bin9_HSmrejzxVG0qS5enqevIWGmrmysa04vBd(p,n,o,q,s,t);a.m=m=o.length-1|0;h=r-n|0;d=(h|0)>0?h|0:0|0;g=r+n|0;j=(g|0)<(m|0)?g|0:m|0;e=j-d|0;if((j|0)>(d|0)){c=0;while(1){d=d+1|0;c+= +o[d];if((d|0)<(j|0))continue;break;}}else{c=0;}if((r|0)<(s|0)){k=h;a.j=j=r;a.h=h=g;a.g=g=k;a.d=d=B;while(1){if((h|0)<(m|0)){l=+o[(h+1|0)];a.c=c+=l;a.e=e=e+1|0;}else{a.e=e=e;a.c=c=c;}a.pc=-506;;if((N4java4lang6DoubleG|0)==0){cjG(a);};a.pc=-557;k=_n4VZDouble5isNaNE5(c,0.,a)|0;if((k|0)===0){q[(d+1|0)]=(Math.fround(c)/(+(e|0)));c=c;}else{a.pc=-660;l=+_c4pJF_bin9_HSmrejvJ3a0OzberSvAsa04vFd(n,o,j,e,q,d,a);c=l;}k=g+1|0;if((g|0)<0){e=e;}else{l=+o[k];c-=l;e=e-1|0;}g=j+1|0;if((g|0)<(s|0)){a.j=j=g;a.g=g=k;a.h=h=h+1|0;a.d=d=d+t|0;continue;}break;}}}function _c4pJF_bin9_HSmrejvJ3a0OzberSvAsa04vFd(k,l,m,n,o,w,p){var d=0,e=-0.,c=0,g=-0.,j=0,h=0;d=m-k|0;c=(d|0)<0?0|0:d|0;j=m+k|0;e=0;d=0;while(1){h=(l.length-1|0)-1|0;h=(h|0)<(j|0)?h|0:j|0;if((c|0)>(h|0)){if((d|0)>=1){o[(w+1|0)]=Math.fround(e/(+(d|0)));}e=(d|0)!==(n|0)?NaN:e;return e;}c=c+1|0;g=+l[c];if(!(g===g)||!(0===0))continue;e+=g;d=d+1|0;continue;}}function _c4pJt_bin9_HSmrejvtVG0qysGhe34vJd(t,u,v,s,w,J,x,y,z,p){var e=-0.,k=0,m=0,l=0,n=0,h=0,g=0,c=0,d=0,j=-0.,o=0,r=0,q=0;var a=new createStacklet_c4pJt_bin9_HSmrejvtVG0qysGhe34vJd(p,t,u,v,s,w,J,x,y,z);a.o=o=u.length-1|0;a.k=k=s+1|0;a.e=e=+u[k];a.pc=-248;;if((N4java4lang5FloatG|0)==0){cjG(a);};a.pc=-298;c=_m4VZ5Float5isNaNE5(e,a)|0;if((c|0)===0){e=+u[k];}else{e=0;}if((s|0)<(w|0)){a.r=r=o-1|0;a.n=n=s;a.k=k=J;a.l=l=s-t|0;a.m=m=s+t|0;while(1){d=(l|0)<0?0|0:l|0;q=(m|0)<(o|0)?m|0:r|0;c=0;g=0;h=0;while(1){if((d|0)<=(q|0)){d=d+1|0;j=+u[d];if(j>e){h=h+1|0;y[h]=j;continue;}if(j<e){g=g+1|0;z[g]=j;continue;}if(!(j===j)||!(0===0))continue;c=c+1|0;continue;}break;}c=(g+h|0)+c|0;if((c|0)===0){v[(k+1|0)]=NaN;}else{if((c&1|0)===0){j=+u[(n+1|0)];if(j>e){d=h+1|0;y[d]=j;a.h=h=d;a.g=g=g;}else{if(j<e){d=g+1|0;z[d]=j;a.g=g=d;a.h=h=h;}else{a.g=g=g;a.h=h=h;}}}else{a.g=g=g;a.h=h=h;}a.c=c=(c|0)/2|0;if((h|0)>(c|0)){a.pc=-905;;if((N2ij6plugin6filter11RankFiltersG|0)==0){cjG(a);};a.pc=-969;e=+_c4p22ij6plugin6filter11RankFfTq2s19findNthLowestNumberE22(y,h,(h+(c^ -1)|0),a);}else{if((g|0)>(c|0)){a.pc=-1084;;if((N2ij6plugin6filter11RankFiltersG|0)==0){cjG(a);};a.pc=-1149;e=+_c4p22ij6plugin6filter11RankFfTq2s19findNthLowestNumberE22(z,g,c,a);}}v[(k+1|0)]=e;}c=n+1|0;if((c|0)<(w|0)){a.n=n=c;a.l=l=l+1|0;a.m=m=m+1|0;a.k=k=k+x|0;continue;}break;}}}function _c4pJx_bin9_HSmrejTVG0qycC5vNd(x,y,w,z,A,L,B,C,p){var q=0,c=0,l=0,m=0,n=0,j=0,d=-0.,e=-0.,o=0,r=0,g=0,t=0,u=0,h=-0.,k=0,s=0,v=0;var a=new createStacklet_c4pJx_bin9_HSmrejTVG0qycC5vNd(p,y,w,z,C);a.t=t=w.length-1|0;q=(Math.imul((A^ -1)+L|0,C)|0)+B|0;if((q|0)>=(B|0)){c=x^ -1;a.u=u=t-1|0;r=c+A|0;a.j=j=q;n=B;a.m=m=c+L|0;o=A+x|0;a.e=e=-3.4028234663852886E+38;d=-3.4028234663852886E+38;a.l=l=L+x|0;c=1;a.q=q=1;while(1){if((n|0)>(j|0)){a.r=r=r;a.o=o=o;a.d=d=d;a.n=n=n;a.c=c=c;}else{a.g=g=r;a.r=r=o;a.o=o=n;a.n=n=c;a.d=d=d;a.c=c=0;L0:do{while(1){L1:do{L2:do{if((r|0)<(t|0)){if((n|0)===0){a.pc=-590;;if((N4java4lang5FloatG|0)==0){cjG(a);};a.pc=-640;k=_m4VZ5Float5isNaNE5(d,a)|0;if((k|0)===0){a.k=k=r+1|0;a.pc=-705;s=_m4VZ5Float5isNaNE5( +w[k],a)|0;if((s|0)===0){h=+w[k];if(!(d<=h)&&!(d<h))break L2;h=+w[k];z[(o+1|0)]=(h*y);d=h;n=c;c=0;break L1;}}}a.pc=-848;h=+_c4pJC_bin9_HSmrejvx3a0OzberycC5vRd((g+1|0),r,w,y,z,o,a);d=h;n=c;c=0;break L1;}}while(0);if((g|0)<0){c=c;d=d;}else{h=+w[(g+1|0)];if(!(h>=d)||h>d){c=c;d=d;}else{if((c|0)!==0){c=n;n=o;o=r;r=g;d=d;break L0;}k=(r|0)>=(t|0)?u|0:r|0;s=g+2|0;h=+w[s];d=h;c=s;while(1){if((c|0)<=(k|0)){s=c+1|0;if(d< +w[s]){c=s;h=+w[c];d=h;continue;}c=s;continue;}break;}c=1;}}z[(o+1|0)]=(d*y);k=c;c=n;n=k;}while(0);k=o+C|0;s=r+1|0;o=g+1|0;if((k|0)<=(j|0)){v=c;a.g=g=o;a.r=r=s;a.o=o=k;a.c=c=n;a.n=n=v;a.d=d=d;continue;}break;}r=o;o=s;n=k;}while(0);a.r=r=r;a.o=o=o;a.d=d=d;a.n=n=n;a.c=c=c;}if((n|0)>(j|0)){e=e;j=j;m=m;l=l;q=q;}else{while(1){L0:do{L1:do{if((m|0)>=0){if((q|0)===0){a.pc=-1514;;if((N4java4lang5FloatG|0)==0){cjG(a);};a.pc=-1565;k=_m4VZ5Float5isNaNE5(e,a)|0;if((k|0)===0){a.g=g=m+1|0;a.pc=-1631;k=_m4VZ5Float5isNaNE5( +w[g],a)|0;if((k|0)===0){if(!(e< +w[g]))break L1;h=+w[g];z[(j+1|0)]=(h*y);e=h;q=0;break L0;}}}a.pc=-1759;h=+_c4pJC_bin9_HSmrejvx3a0OzberycC5vRd(m,(l-1|0),w,y,z,j,a);e=h;q=0;break L0;}}while(0);if((l|0)<(t|0)){h=+w[(l+1|0)];if(!(h>=e)||h>e){e=e;}else{g=(l|0)>(t|0)?t|0:l|0;k=(m|0)>0?m|0:0|0;h=+w[g];g=g-2|0;if((g|0)<(k|0)){e=h;}else{e=h;while(1){s=g+1|0;if(e< +w[s]){h=+w[s];e=h;}g=g-1|0;if((g|0)>=(k|0))continue;break;}}}}else{e=e;}z[(j+1|0)]=(e*y);q=q;}while(0);j=j-C|0;m=m-1|0;l=l-1|0;if((n|0)<=(j|0)){a.e=e=e;a.j=j=j;a.m=m=m;a.l=l=l;a.q=q=q;continue;}break;}g=q;q=l;l=m;m=j;j=g;g=q;q=j;j=m;m=l;l=g;}if((n|0)<=(j|0)){r=r;o=o;a.e=e=e;d=d;a.j=j=j;n=n;a.m=m=m;a.l=l=l;c=c;a.q=q=q;continue;}break;}}}function _c4pJC_bin9_HSmrejvx3a0OzberycC5vRd(k,l,m,n,o,w,p){var e=-0.,h=0,d=0,c=0,g=0,j=-0.;var a=new createStacklet_c4pJC_bin9_HSmrejvx3a0OzberycC5vRd(p,l,m,n,o,w);c=(k|0)<0?0|0:k|0;d=0;h=0;a.e=e=-3.4028234663852886E+38;L0:while(1){a.h=h=h;L1:while(1){a.d=d=d;while(1){g=(m.length-1|0)-1|0;g=(g|0)<(l|0)?g|0:l|0;if((c|0)>(g|0)){c=h;h=d;e=e;if((c|0)!==0){o[(w+1|0)]=(e*n);}e=(h|0)===0?e:NaN;return e;}a.c=c=c+1|0;a.j=j=+m[c];a.pc=-425;;if((N4java4lang5FloatG|0)==0){cjG(a);};a.pc=-475;g=_m4VZ5Float5isNaNE5(j,a)|0;if((g|0)===0){d=d;c=c;if(e< +m[c]){e=+m[c];h=1;a.e=e=e;continue L0;}a.h=h=1;continue L1;}c=c;a.d=d=1;continue;}break;}break;}}function _c4pJB_bin9_HSmrejvtdiiqij5ttt7vVd(u,c,d,e,g,h,j,k,l,m,n,o,q,r,s,t,p){_c4pJp_bin9_HSmrejvxxuechxI0qi51d(u,c,d,e,g,h,j,k,l,m,n,o,q,r,s,(t&255),p);}function _c4pJr_bin9_HSmrejfh7vZd(p){var d=null,c=null;d=["[Ljava/lang/String;"];for(var i=1;i<=10;i=i+1|0)d[i|0]=null;;d[1]=cheerpjInternString("mean");d[2]=cheerpjInternString("border-limited mean");d[3]=cheerpjInternString("median");d[4]=cheerpjInternString("minimum");d[5]=cheerpjInternString("maximum");d[6]=cheerpjInternString("eliminate maxima");d[7]=cheerpjInternString("eliminate minima");d[8]=cheerpjInternString("bac\x6bground from minima");d[9]=cheerpjInternString("bac\x6bground from maxima");d[10]=cheerpjInternString("bac\x6bground from median");N12Fast_Filters.TYPES0=d;d=["[[I"];for(var i=1;i<=10;i=i+1|0)d[i|0]=null;;c=new Int32Array(2);c[0]=73;c[1]=0;d[1]=c;c=new Int32Array(2);c[0]=73;c[1]=1;d[2]=c;c=new Int32Array(2);c[0]=73;c[1]=2;d[3]=c;c=new Int32Array(2);c[0]=73;c[1]=3;d[4]=c;c=new Int32Array(2);c[0]=73;c[1]=4;d[5]=c;c=new Int32Array(3);c[0]=73;c[1]=3;c[2]=4;d[6]=c;c=new Int32Array(3);c[0]=73;c[1]=4;c[2]=3;d[7]=c;c=new Int32Array(4);c[0]=73;c[1]=3;c[2]=4;c[3]=1;d[8]=c;c=new Int32Array(4);c[0]=73;c[1]=4;c[2]=3;c[3]=1;d[9]=c;c=new Int32Array(3);c[0]=73;c[1]=2;c[2]=1;d[10]=c;N12Fast_Filters.taskLists6=d;d=["[Ljava/lang/String;"];for(var i=1;i<=3;i=i+1|0)d[i|0]=null;;d[1]=cheerpjInternString("none");d[2]=cheerpjInternString("smooth");d[3]=cheerpjInternString("median");N12Fast_Filters.PREPROCESSES7=d;N12Fast_Filters.type8=0;N12Fast_Filters.xRadius9=5;N12Fast_Filters.yRadius10=5;N12Fast_Filters.linkXY11=1;N12Fast_Filters.preProcess12=0;N12Fast_Filters.subtract13=0;d=new Float64Array(6);d[0]=68;d[1]=128;d[2]=32768;d[3]=0;d[4]=128;d[5]=128;N12Fast_Filters.offset14=d;}function createStacklet_c4pJC_bin9_HSmrejvx3a0OzberycC5vRd(p,l,m,n,o,w){this.p=p;this.pc=0;this.f=_c4pJC_bin9_HSmrejvx3a0OzberycC5vRd;this.e=-0.;this.h=0;this.d=0;this.c=0;this.l=l|0;this.m=m;this.n=+n;this.o=o;this.w=w|0;this.j=-0.;}function createStacklet_c4pJx_bin9_HSmrejTVG0qycC5vNd(p,y,w,z,C){this.p=p;this.pc=0;this.f=_c4pJx_bin9_HSmrejTVG0qycC5vNd;this.q=0;this.c=0;this.l=0;this.m=0;this.n=0;this.j=0;this.d=-0.;this.e=-0.;this.o=0;this.r=0;this.g=0;this.y=+y;this.w=w;this.z=z;this.C=C|0;this.t=0;this.u=0;this.k=0;}function createStacklet_c4pJt_bin9_HSmrejvtVG0qysGhe34vJd(p,t,u,v,s,w,J,x,y,z){this.p=p;this.pc=0;this.f=_c4pJt_bin9_HSmrejvtVG0qysGhe34vJd;this.e=-0.;this.k=0;this.m=0;this.l=0;this.n=0;this.h=0;this.g=0;this.c=0;this.t=t|0;this.u=u;this.v=v;this.s=s|0;this.w=w|0;this.J=J|0;this.x=x|0;this.y=y;this.z=z;this.o=0;this.r=0;}function createStacklet_c4pJy_bin9_HSmrejXVG0qysa04vtd(p,q,r,s,u,D){this.p=p;this.pc=0;this.f=_c4pJy_bin9_HSmrejXVG0qysa04vtd;this.c=-0.;this.d=0;this.h=0;this.e=0;this.g=0;this.q=q|0;this.r=r;this.s=s;this.u=u|0;this.D=D|0;this.o=-0.;this.j=0;this.n=-0.;this.m=-0.;}function createStacklet_c4pJs_bin9_HSmrejDhr14Hd(p,x,w){this.p=p;this.pc=0;this.f=_c4pJs_bin9_HSmrejDhr14Hd;this.k=0;this.j=0;this.c=0;this.d=0;this.e=0;this.x=x;this.w=w;this.r=0;this.v=0;this.g=null;this.l=null;this.m=null;}function createStacklet_c4pJM_bin9_HSmrejzxVG0qS5enqevIWGmrmysa04vBd(p,n,o,q,s,t){this.p=p;this.pc=0;this.f=_c4pJM_bin9_HSmrejzxVG0qS5enqevIWGmrmysa04vBd;this.d=0;this.c=-0.;this.h=0;this.g=0;this.j=0;this.e=0;this.n=n|0;this.o=o;this.q=q;this.s=s|0;this.t=t|0;this.m=0;}function createStacklet_c4pJA_bin9_HSmrejvtlD4y1HaS4y4zd(p,o,w,q,r){this.p=p;this.pc=0;this.f=_c4pJA_bin9_HSmrejvtlD4y1HaS4y4zd;this.o=o;this.w=w;this.q=q;this.r=r;this.c=0;this.e=null;this.h=null;this.j=0;}function createStacklet_c4pJD_bin9_HSmrejvFhrirmHsnHwS6G4Ld(p,v,u,t){this.p=p;this.pc=0;this.f=_c4pJD_bin9_HSmrejvFhrirmHsnHwS6G4Ld;this.h=0;this.v=v;this.u=u|0;this.t=t|0;this.k=0;this.e=null;this.d=null;this.l=null;this.n=null;}function createStacklet_c4pJH_bin9_HSmrejvVpGaS4yiorWWDa0yqm4Dd(p,r,q,o){this.p=p;this.pc=0;this.f=_c4pJH_bin9_HSmrejvVpGaS4yiorWWDa0yqm4Dd;this.r=r;this.q=q;this.o=o;this.c=null;this.g=null;this.j=null;this.d=0;this.k=null;}function createStacklet_c4pJp_bin9_HSmrejvxxuech_T4am5Xd(p,C,D,E,F,G,H,I,J){this.p=p;this.pc=0;this.f=_c4pJp_bin9_HSmrejvxxuech_T4am5Xd;this.d=0;this.h=0;this.g=0;this.l=0;this.e=0;this.c=null;this.C=C;this.D=D;this.E=E|0;this.F=F|0;this.G=G|0;this.H=H|0;this.I=I|0;this.J=J|0;this.s=-0.;this.j=null;this.n=0;this.x=0;this.t=0;this.u=0;this.v=0;this.k=0;this.w=0;this.r=0;this.o=null;this.q=null;this.m=null;}function createStacklet_c4pJp_bin9_HSmrejvxxuechxI0qi51d(p,G,F,E,D,C,B,A,z,y,ab,aa,$,Z,Y,X){this.p=p;this.pc=0;this.f=_c4pJp_bin9_HSmrejvxxuechxI0qi51d;this.j=null;this.n=null;this.m=0;this.l=0;this.k=0;this.c=0;this.g=0;this.G=G;this.F=F;this.E=E|0;this.D=+D;this.C=C|0;this.B=B|0;this.A=A|0;this.z=z|0;this.y=y|0;this.ab=ab|0;this.aa=aa|0;this.$=$|0;this.Z=Z|0;this.Y=Y|0;this.X=X|0;this.e=null;this.r=0;this.x=0;this.s=0;this.t=0;this.u=-0.;this.h=0;this.o=0;}