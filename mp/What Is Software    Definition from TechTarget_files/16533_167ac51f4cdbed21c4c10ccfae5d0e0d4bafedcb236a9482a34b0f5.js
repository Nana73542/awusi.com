/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={5251:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="model",l="name",d="type",v="vendor",h="version",p="architecture",g="console",m="mobile",_="tablet",w="smarttv",y="wearable",b="embedded",E="Amazon",I="Apple",A="ASUS",T="BlackBerry",S="Firefox",k="Google",R="Huawei",C="LG",N="Microsoft",D="Motorola",O="Opera",x="Samsung",M="Sharp",P="Sony",L="Xiaomi",V="Zebra",U="Facebook",F=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},B=function(t,n){return typeof t===s&&-1!==z(n).indexOf(z(t))},z=function(t){return t.toLowerCase()},j=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,350)},G=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},q=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(B(n[e][i],t))return"?"===e?o:e}else if(B(n[e],t))return"?"===e?o:e;return t},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,h],[/opios[\/ ]+([\w\.]+)/i],[h,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[h,[l,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[l,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[h,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],h],[/\bfocus\/([\w\.]+)/i],[h,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[h,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[h,[l,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],h],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,U],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[h,q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,h],[/(cobalt)\/([\w\.]+)/i],[l,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,z]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",z]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[v,x],[d,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[v,x],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[v,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[v,I],[d,_]],[/(macintosh);/i],[f,[v,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[v,M],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[v,R],[d,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[v,R],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[v,L],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[v,L],[d,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[v,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[v,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[v,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[v,D],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[v,D],[d,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[v,C],[d,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[v,C],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[v,"Lenovo"],[d,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[v,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[v,k],[d,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[v,k],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[v,P],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[v,P],[d,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[v,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[v,E],[d,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[v,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,v,[d,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[v,T],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[v,A],[d,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[v,A],[d,m]],[/(nexus 9)/i],[f,[v,"HTC"],[d,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[v,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[v,"Acer"],[d,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[v,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[v,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[v,f,[d,_]],[/(surface duo)/i],[f,[v,N],[d,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[v,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[v,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[v,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[v,"RCA"],[d,_]],[/\b(venue[\d ]{2,7}) b/i],[f,[v,"Dell"],[d,_]],[/\b(q(?:mv|ta)\w+) b/i],[f,[v,"Verizon"],[d,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[v,"Barnes & Noble"],[d,_]],[/\b(tm\d{3}\w+) b/i],[f,[v,"NuVision"],[d,_]],[/\b(k88) b/i],[f,[v,"ZTE"],[d,_]],[/\b(nx\d{3}j) b/i],[f,[v,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[v,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[v,"Swiss"],[d,_]],[/\b((zeki)?tb.*\b) b/i],[f,[v,"Zeki"],[d,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[v,"Dragon Touch"],f,[d,_]],[/\b(ns-?\w{0,9}) b/i],[f,[v,"Insignia"],[d,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[v,"NextBook"],[d,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[v,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[v,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[v,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[v,"Envizen"],[d,_]],[/\b(trio[-\w\. ]+) b/i],[f,[v,"MachSpeed"],[d,_]],[/\btu_(1491) b/i],[f,[v,"Rotor"],[d,_]],[/(shield[\w ]+) b/i],[f,[v,"Nvidia"],[d,_]],[/(sprint) (\w+)/i],[v,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[v,N],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[v,V],[d,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[v,V],[d,m]],[/smart-tv.+(samsung)/i],[v,[d,w]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[v,x],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[v,C],[d,w]],[/(apple) ?tv/i],[v,[f,"Apple TV"],[d,w]],[/crkey/i],[[f,"Chromecast"],[v,k],[d,w]],[/droid.+aft(\w)( bui|\))/i],[f,[v,E],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[v,M],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[f,[v,P],[d,w]],[/(mitv-\w{5}) bui/i],[f,[v,L],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[v,f,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[v,j],[f,j],[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[v,f,[d,g]],[/droid.+; (shield) bui/i],[f,[v,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[v,P],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[v,N],[d,g]],[/((pebble))app/i],[v,f,[d,y]],[/droid.+; (glass) \d/i],[f,[v,k],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[f,[v,V],[d,y]],[/(quest( 2| pro)?)/i],[f,[v,U],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[v,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[v,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[h,q,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[h,q,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,h],[/\(bb(10);/i],[h,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[h,[l,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,h],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,h]]},K=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof K))return new K(t,n).getResult();var e=t||(typeof r!==u&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==u&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,a=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(Y,n):Y;return this.getBrowser=function(){var t,n={};return n.name=o,n.version=o,G.call(n,e,a.browser),n.major=typeof(t=n.version)===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,n},this.getCPU=function(){var t={};return t.architecture=o,G.call(t,e,a.cpu),t},this.getDevice=function(){var t={};return t.vendor=o,t.model=o,t.type=o,G.call(t,e,a.device),!t.type&&i&&i.mobile&&(t.type=m),t},this.getEngine=function(){var t={};return t.name=o,t.version=o,G.call(t,e,a.engine),t},this.getOS=function(){var t={};return t.name=o,t.version=o,G.call(t,e,a.os),!t.name&&i&&"Unknown"!=i.platform&&(t.name=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(t){return e=typeof t===s&&t.length>350?j(t,350):t,this},this.setUA(e),this};K.VERSION="0.7.33",K.BROWSER=F([l,h,"major"]),K.CPU=F([p]),K.DEVICE=F([f,v,d,g,m,w,_,y,b]),K.ENGINE=K.OS=F([l,h]),typeof n!==u?(t.exports&&(n=t.exports=K),n.UAParser=K):e.amdO?(i=function(){return K}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=K)}("object"==typeof window?window:this)},8397:function(t,n,e){var i=e(6277)(),r=e(9282);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(o){o.name=t,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},9282:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},6277:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},9745:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}undefined;var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=undefined,a=undefined,u=function(t,n){y[r]=t,y[r+1]=n,2===(r+=2)&&(a?a(b):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(b)}}function g(){return void 0!==o?function(){o(b)}:w()}function m(){var t=0,n=new d(b),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function _(){var t=new MessageChannel;return t.port1.onmessage=b,function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(b,1)}}var y=new Array(1e3);function b(){for(var t=0;t<r;t+=2)(0,y[t])(y[t+1]),y[t]=undefined,y[t+1]=undefined;r=0}function E(){try{undefined;var t=e(4774);return o=t.runOnLoop||t.runOnContext,g()}catch(n){return w()}}var I=undefined;function A(t,n){var e=arguments,i=this,r=new this.constructor(k);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):G(i,r,t,n),r}function T(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(k);return F(e,t),e}I=v?p():d?m():h?_():f===undefined?E():w();var S=Math.random().toString(36).substring(16);function k(){}var R=void 0,C=1,N=2,D=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function M(t){try{return t.then}catch(n){return D.error=n,D}}function P(t,n,e,i){try{t.call(n,e,i)}catch(r){return r}}function L(t,n,e){u((function(t){var i=!1,r=P(e,n,(function(e){i||(i=!0,n!==e?F(t,e):z(t,e))}),(function(n){i||(i=!0,j(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,j(t,r))}),t)}function V(t,n){n._state===C?z(t,n._result):n._state===N?j(t,n._result):G(n,undefined,(function(n){return F(t,n)}),(function(n){return j(t,n)}))}function U(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===T?V(t,e):i===D?(j(t,D.error),D.error=null):i===undefined?z(t,e):n(i)?L(t,e,i):z(t,e)}function F(n,e){n===e?j(n,O()):t(e)?U(n,e,M(e)):z(n,e)}function B(t){t._onerror&&t._onerror(t._result),q(t)}function z(t,n){t._state===R&&(t._result=n,t._state=C,0!==t._subscribers.length&&u(q,t))}function j(t,n){t._state===R&&(t._state=N,t._result=n,u(B,t))}function G(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+C]=e,r[o+N]=i,0===o&&t._state&&u(q,t)}function q(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=undefined,r=undefined,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(e){return Y.error=e,Y}}function $(t,e,i,r){var o=n(i),a=undefined,u=undefined,c=undefined,s=undefined;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void j(e,x())}else a=r,c=!0;e._state!==R||(o&&c?F(e,a):s?j(e,u):t===C?z(e,a):t===N&&j(e,a))}function W(t,n){try{n((function(n){F(t,n)}),(function(n){j(t,n)}))}catch(e){j(t,e)}}var X=0;function J(){return X++}function Q(t){t[S]=X++,t._state=undefined,t._result=undefined,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(k),this.promise[S]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&z(this.promise,this._result))):j(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(k);return j(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],k!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=undefined;if("undefined"!=typeof e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(r){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===R&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=M(t);if(r===A&&t._state!==R)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(k);U(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===R&&(this._remaining--,t===N?j(i,e):this._result[n]=e),0===this._remaining&&z(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;G(t,undefined,(function(t){return e._settledAt(C,n,t)}),(function(t){return e._settledAt(N,n,t)}))},at.all=nt,at.race=et,at.resolve=T,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,"catch":function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},4204:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},1335:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},2175:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},5876:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},1812:function(t,n,e){t=e.nmd(t),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",v="[object GeneratorFunction]",h="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",b="[object WeakMap]",E="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",k="[object Int32Array]",R="[object Uint8Array]",C="[object Uint8ClampedArray]",N="[object Uint16Array]",D="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),M=/\w*$/,P=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,V={};V[I]=V[A]=V[T]=V[S]=V[k]=V[R]=V[C]=V[N]=V[D]=!0,V[u]=V[c]=V[E]=V[s]=V[f]=V[l]=V[d]=V[h]=V[p]=V[g]=V[m]=V[_]=V[w]=V[b]=!1;var U={};U[u]=U[c]=U[E]=U[s]=U[f]=U[I]=U[A]=U[T]=U[S]=U[k]=U[h]=U[p]=U[g]=U[m]=U[_]=U[w]=U[y]=U[R]=U[C]=U[N]=U[D]=!0,U[l]=U[d]=U[b]=!1;var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},B={"function":!0,object:!0},z=B[typeof n]&&n&&!n.nodeType?n:i,j=B.object&&t&&!t.nodeType?t:i,G=j&&j.exports===z?z:i,q=rt(z&&j&&"object"==typeof e.g&&e.g),H=rt(B[typeof self]&&self),Y=rt(B[typeof window]&&window),K=rt(B[typeof this]&&this),$=q||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(t,n){return t.set(n[0],n[1]),t}function X(t,n){return t.add(n),t}function J(t,n){return tt(In(t),Ae)}function Q(t,n){return!!t.length&&et(t,n,0)>-1}function Z(t,n,e){for(var i=-1,r=t.length;++i<r;)if(e(n,t[i]))return!0;return!1}function tt(t,n){for(var e=-1,i=n.length,r=t.length;++e<i;)t[r+e]=n[e];return t}function nt(t,n,e){for(var r=-1,o=t.length;++r<o;){var a=t[r],u=n(a);if(null!=u&&(c===i?u==u:e(u,c)))var c=u,s=a}return s}function et(t,n,e){if(n!=n)return function(t,n,e){var i=t.length,r=n+(e?0:-1);for(;e?r--:++r<i;){var o=t[r];if(o!=o)return r}return-1}(t,e);for(var i=e-1,r=t.length;++i<r;)if(t[i]===n)return i;return-1}function it(t,n,e,i,r){return r(t,(function(t,r,o){e=i?(i=!1,t):n(e,t,r,o)})),e}function rt(t){return t&&t.Object===Object?t:null}function ot(t){return F[t]}function at(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(e){}return n}function ut(t,n){return t="number"==typeof t||L.test(t)?+t:-1,n=null==n?a:n,t>-1&&t%1==0&&t<n}var ct=Array.prototype,st=Object.prototype,ft=Function.prototype.toString,lt=st.hasOwnProperty,dt=0,vt=ft.call(Object),ht=st.toString,pt=$._,gt=RegExp("^"+ft.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=$.Reflect,_t=$.Symbol,wt=$.Uint8Array,yt=mt?mt.enumerate:i,bt=Object.getPrototypeOf,Et=Object.getOwnPropertySymbols,It=Object.create,At=st.propertyIsEnumerable,Tt=ct.splice,St=$.isFinite,kt=Object.keys,Rt=Math.max,Ct=On($,"Map"),Nt=On($,"Set"),Dt=On($,"WeakMap"),Ot=On(Object,"create"),xt=Ct?ft.call(Ct):"",Mt=Nt?ft.call(Nt):"",Pt=Dt?ft.call(Dt):"",Lt=_t?_t.prototype:i,Vt=Lt?Lt.valueOf:i;function Ut(t){if(ue(t)&&!Zn(t)){if(t instanceof Ft)return t;if(lt.call(t,"__wrapped__"))return function(t){var n=new Ft(t.u,t.l);return n.I=In(t.I),n}(t)}return new Ft(t)}function Ft(t,n){this.u=t,this.I=[],this.l=!!n}function Bt(){}function zt(t,n){return Ot?t[n]!==i:lt.call(t,n)}function jt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function Gt(t){var n=-1,e=t?t.length:0;for(this.T=new jt;++n<e;)this.push(t[n])}function qt(t,n){var e=t.T;if(Ln(n)){var i=e.T;return("string"==typeof n?i.string:i.hash)[n]===o}return e.has(n)}function Ht(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function Yt(t,n){var e=Wt(t,n);return!(e<0)&&(e==t.length-1?t.pop():Tt.call(t,e,1),!0)}function Kt(t,n){var e=Wt(t,n);return e<0?i:t[e][1]}function $t(t,n){return Wt(t,n)>-1}function Wt(t,n){for(var e=t.length;e--;)if(Xn(t[e][0],n))return e;return-1}function Xt(t,n,e){var i=Wt(t,n);i<0?t.push([n,e]):t[i][1]=e}function Jt(t,n,e,r){return t===i||Xn(t,st[e])&&!lt.call(r,e)?n:t}function Qt(t,n,e){(e!==i&&!Xn(t[n],e)||"number"==typeof n&&e===i&&!(n in t))&&(t[n]=e)}function Zt(t,n,e){var r=t[n];lt.call(t,n)&&Xn(r,e)&&(e!==i||n in t)||(t[n]=e)}function tn(t){return"function"==typeof t?t:Te}function nn(t,n,e,r,o,a,c){var l;if(r&&(l=a?r(t,o,a,c):r(t)),l!==i)return l;if(!ae(t))return t;var b=Zn(t);if(b){if(l=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&lt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return In(t)}else{var O=Mn(t),x=O==d||O==v;if(ie(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(O==g||O==u||x&&!a){if(at(t))return a?t:{};if(l=function(t){return"function"!=typeof t.constructor||Vn(t)?{}:en(bt(t))}(x?{}:t),!n)return l=function(t,n){return t&&Sn(n,we(n),t)}(l,t),e?Rn(t,l):l}else{if(!U[O])return a?t:{};l=function(t,n,e){var i=t.constructor;switch(n){case E:return Tn(t);case s:case f:return new i(+t);case I:case A:case T:case S:case k:case R:case C:case N:case D:return function(t,n){var e=n?Tn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,e);case h:return function(t){return Gn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t,i){e[++n]=[i,t]})),e}(t),W,new t.constructor)}(t);case p:case w:return new i(t);case m:return function(t){var n=new t.constructor(t.source,M.exec(t));return n.lastIndex=t.lastIndex,n}(t);case _:return Gn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}(o=t),X,new o.constructor);case y:return r=t,Vt?Object(Vt.call(r)):{}}var r;var o}(t,O,n)}}c||(c=new Ht);var P=c.get(t);return P||(c.set(t,l),(b?un:ln)(t,(function(i,o){Zt(l,o,nn(i,n,e,r,o,t,c))})),e&&!b?Rn(t,l):l)}function en(t){return ae(t)?It(t):{}}function rn(t,n,e){if("function"!=typeof t)throw new TypeError(r);return setTimeout((function(){t.apply(i,e)}),n)}var on,an,un=(on=ln,function(t,n){if(null==t)return t;if(!te(t))return on(t,n);for(var e=t.length,i=an?e:-1,r=Object(t);(an?i--:++i<e)&&!1!==n(r[i],i,r););return t});function cn(t,n){var e=[];return un(t,(function(t,i,r){n(t,i,r)&&e.push(t)})),e}function sn(t,n,e,i){i||(i=[]);for(var r=-1,o=t.length;++r<o;){var a=t[r];n>0&&ne(a)&&(e||Zn(a)||Qn(a))?n>1?sn(a,n-1,e,i):tt(i,a):e||(i[i.length]=a)}return i}var fn=function(t){return function(n,e,i){for(var r=-1,o=Object(n),a=i(n),u=a.length;u--;){var c=a[t?u:++r];if(!1===e(o[c],c,o))break}return n}}();function ln(t,n){return t&&fn(t,n,we)}function dn(t,n){return cn(n,(function(n){return re(t[n])}))}function vn(t,n,e,r,o){return t===n||(null==t||null==n||!ae(t)&&!ue(n)?t!=t&&n!=n:function(t,n,e,r,o,a){var d=Zn(t),v=Zn(n),h=c,_=c;d||(h=(h=ht.call(t))==u?g:h);v||(_=(_=ht.call(n))==u?g:_);var y=h==g&&!at(t),b=_==g&&!at(n),E=h==_;a||(a=[]);var I=zn(a,(function(n){return n[0]===t}));if(I&&I[1])return I[1]==n;if(a.push([t,n]),E&&!y){var A=d||fe(t)?function(t,n,e,r,o,a){var u=-1,c=2&o,s=1&o,f=t.length,l=n.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++u<f;){var v,h=t[u],p=n[u];if(v!==i){if(v)continue;d=!1;break}if(s){if(!An(n,(function(t){return h===t||e(h,t,r,o,a)}))){d=!1;break}}else if(h!==p&&!e(h,p,r,o,a)){d=!1;break}}return d}(t,n,e,r,o,a):function(t,n,e,i,r,o,a){switch(e){case s:case f:return+t==+n;case l:return t.name==n.name&&t.message==n.message;case p:return t!=+t?n!=+n:t==+n;case m:case w:return t==n+""}return!1}(t,n,h);return a.pop(),A}if(!(2&o)){var T=y&&lt.call(t,"__wrapped__"),S=b&&lt.call(n,"__wrapped__");if(T||S){A=e(T?t.value():t,S?n.value():n,r,o,a);return a.pop(),A}}if(!E)return!1;A=function(t,n,e,r,o,a){var u=2&o,c=we(t),s=c.length,f=we(n).length;if(s!=f&&!u)return!1;var l=s;for(;l--;){var d=c[l];if(!(u?d in n:lt.call(n,d)))return!1}var v=!0,h=u;for(;++l<s;){var p,g=t[d=c[l]],m=n[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){v=!1;break}h||(h="constructor"==d)}if(v&&!h){var _=t.constructor,w=n.constructor;_==w||!("constructor"in t)||!("constructor"in n)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(v=!1)}return v}(t,n,e,r,o,a);return a.pop(),A}(t,n,vn,e,r,o))}function hn(t){var n=typeof t;return"function"==n?t:null==t?Te:("object"==n?mn:bn)(t)}function pn(t){t=null==t?t:Object(t);var n=[];for(var e in t)n.push(e);return n}function gn(t,n){var e=-1,i=te(t)?Array(t.length):[];return un(t,(function(t,r,o){i[++e]=n(t,r,o)})),i}function mn(t){var n=we(t);return function(e){var r=n.length;if(null==e)return!r;for(e=Object(e);r--;){var o=n[r];if(!(o in e)||!vn(t[o],e[o],i,3))return!1}return!0}}function _n(t,n,e,r,o){if(t!==n){var a=Zn(n)||fe(n)?i:ye(n);un(a||n,(function(u,c){if(a&&(u=n[c=u]),ae(u))o||(o=new Ht),function(t,n,e,r,o,a,u){var c=t[e],s=n[e],f=u.get(s);if(f)return void Qt(t,e,f);var l=a?a(c,s,e+"",t,n,u):i,d=l===i;d&&(l=s,Zn(s)||fe(s)?Zn(c)?l=c:ne(c)?l=In(c):(d=!1,l=nn(s,!a)):function(t){if(!ue(t)||ht.call(t)!=g||at(t))return!1;var n=bt(t);if(null===n)return!0;var e=n.constructor;return"function"==typeof e&&e instanceof e&&ft.call(e)==vt}(s)||Qn(s)?Qn(c)?l=Sn(v=c,ye(v)):!ae(c)||r&&re(c)?(d=!1,l=nn(s,!a)):l=c:d=!1);var v;u.set(s,l),d&&o(l,s,r,a,u);u["delete"](s),Qt(t,e,l)}(t,n,c,e,_n,r,o);else{var s=r?r(t[c],u,c+"",t,n,o):i;s===i&&(s=u),Qt(t,c,s)}}))}}function wn(t,n){return t=Object(t),Gn(n,(function(n,e){return e in t&&(n[e]=t[e]),n}),{})}function yn(t,n){var e={};return function(t,n){null==t||fn(t,n,ye)}(t,(function(t,i){n(t,i)&&(e[i]=t)})),e}function bn(t){return function(n){return null==n?i:n[t]}}function En(t,n,e){var i=-1,r=t.length;n<0&&(n=-n>r?0:r+n),(e=e>r?r:e)<0&&(e+=r),r=n>e?0:e-n>>>0,n>>>=0;for(var o=Array(r);++i<r;)o[i]=t[i+n];return o}function In(t){return En(t,0,t.length)}function An(t,n){var e;return un(t,(function(t,i,r){return!(e=n(t,i,r))})),!!e}function Tn(t){var n=new t.constructor(t.byteLength);return new wt(n).set(new wt(t)),n}yt&&!At.call({valueOf:1},"valueOf")&&(pn=function(t){return function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(yt(t))});var Sn=kn;function kn(t,n,e,i){e||(e={});for(var r=-1,o=n.length;++r<o;){var a=n[r];Zt(e,a,i?i(e[a],t[a],a,e,t):t[a])}return e}function Rn(t,n){return Sn(t,xn(t),n)}function Cn(t){return Wn((function(n,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,n=Object(n);++r<o;){var u=e[r];u&&t(n,u,r,a)}return n}))}function Nn(t,n,e,i){if("function"!=typeof t)throw new TypeError(r);var o=1&n,a=function(t){return function(){var n=arguments,e=en(t.prototype),i=t.apply(e,n);return ae(i)?i:e}}(t);return function u(){for(var n=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==$&&this instanceof u?a:t;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++n];return l.apply(o?e:this,f)}}var Dn=bn("length");function On(t,n){var e=t[n];return function(t){if(null==t)return!1;if(re(t))return gt.test(ft.call(t));return ue(t)&&(at(t)?gt:P).test(t)}(e)?e:i}var xn=Et||function(){return[]};function Mn(t){return ht.call(t)}function Pn(t){var n=t?t.length:i;return oe(n)&&(Zn(t)||se(t)||Qn(t))?function(t,n){for(var e=-1,i=Array(t);++e<t;)i[e]=n(e);return i}(n,String):null}function Ln(t){var n=typeof t;return"number"==n||"boolean"==n||"string"==n&&"__proto__"!=t||null==t}function Vn(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||st)}(Ct&&Mn(new Ct)!=h||Nt&&Mn(new Nt)!=_||Dt&&Mn(new Dt)!=b)&&(Mn=function(t){var n=ht.call(t),e=n==g?t.constructor:null,i="function"==typeof e?ft.call(e):"";if(i)switch(i){case xt:return h;case Mt:return _;case Pt:return b}return n});var Un=Wn((function(t,n){return Zn(t)||(t=null==t?[]:[Object(t)]),n=sn(n,1),J(t)}));function Fn(t){return t?t[0]:i}function Bn(t){var n=Ut(t);return n.l=!0,n}function zn(t,n){return function(t,n,e,i){var r;return e(t,(function(t,e,o){if(n(t,e,o))return r=i?e:t,!1})),r}(t,hn(n),un)}function jn(t,n){return un(t,tn(n))}function Gn(t,n,e){return it(t,hn(n),e,arguments.length<3,un)}function qn(t,n){var e;if("function"!=typeof n)throw new TypeError(r);return t=de(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=i),e}}var Hn=Wn((function(t,n,e){return Nn(t,33,n,e)})),Yn=Wn((function(t,n){return rn(t,1,n)})),Kn=Wn((function(t,n,e){return rn(t,ve(n)||0,e)}));var $n=Wn((function(t,n){return Nn(t,32,i,n)}));function Wn(t,n){if("function"!=typeof t)throw new TypeError(r);return n=Rt(n===i?t.length-1:de(n),0),function(){for(var e=arguments,i=-1,r=Rt(e.length-n,0),o=Array(r);++i<r;)o[i]=e[n+i];var a=Array(n+1);for(i=-1;++i<n;)a[i]=e[i];return a[n]=o,t.apply(this,a)}}function Xn(t,n){return t===n||t!=t&&n!=n}function Jn(t,n){return t>n}function Qn(t){return ne(t)&&lt.call(t,"callee")&&(!At.call(t,"callee")||ht.call(t)==u)}var Zn=Array.isArray;function te(t){return null!=t&&oe(Dn(t))&&!re(t)}function ne(t){return ue(t)&&te(t)}var ee,ie=(ee=!1,function(){return ee});function re(t){var n=ae(t)?ht.call(t):"";return n==d||n==v}function oe(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function ae(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function ue(t){return!!t&&"object"==typeof t}function ce(t){return"number"==typeof t||ue(t)&&ht.call(t)==p}function se(t){return"string"==typeof t||!Zn(t)&&ue(t)&&ht.call(t)==w}function fe(t){return ue(t)&&oe(t.length)&&!!V[ht.call(t)]}function le(t,n){return t<n}var de=Number,ve=Number;function he(t){return"string"==typeof t?t:null==t?"":t+""}var pe=Cn((function(t,n){Sn(n,we(n),t)})),ge=Cn((function(t,n){Sn(n,ye(n),t)})),me=Cn((function(t,n,e,i){kn(n,ye(n),t,i)}));var _e=Wn((function(t){return t.push(i,Jt),me.apply(i,t)}));function we(t){var n=Vn(t);if(!n&&!te(t))return function(t){return kt(Object(t))}(t);var e=Pn(t),i=!!e,r=e||[],o=r.length;for(var a in t)!lt.call(t,a)||i&&("length"==a||ut(a,o))||n&&"constructor"==a||r.push(a);return r}function ye(t){for(var n=-1,e=Vn(t),i=pn(t),r=i.length,o=Pn(t),a=!!o,u=o||[],c=u.length;++n<r;){var s=i[n];a&&("length"==s||ut(s,c))||"constructor"==s&&(e||!lt.call(t,s))||u.push(s)}return u}var be=Cn((function(t,n,e){_n(t,n,e)})),Ee=Wn((function(t,n){return null==t?{}:(n=gn(sn(n,1),String),wn(t,function(t,n,e,i){var r,o=-1,a=Q,u=!0,c=t.length,s=[],f=n.length;if(!c)return s;e&&(n=gn(n,(r=e,function(t){return r(t)}))),i?(a=Z,u=!1):n.length>=200&&(a=qt,u=!1,n=new Gt(n));t:for(;++o<c;){var l=t[o],d=e?e(l):l;if(u&&d==d){for(var v=f;v--;)if(n[v]===d)continue t;s.push(l)}else a(n,d,i)||s.push(l)}return s}(ye(t),n)))}));var Ie=Wn((function(t,n){return null==t?{}:wn(t,sn(n,1))}));function Ae(t){return t?function(t,n){return gn(n,(function(n){return t[n]}))}(t,we(t)):[]}function Te(t){return t}var Se,ke=hn;function Re(t,n,e){var i=we(n),r=dn(n,i);null!=e||ae(n)&&(r.length||!i.length)||(e=n,n=t,t=this,r=dn(n,we(n)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(t);return un(r,(function(e){var i=n[e];t[e]=i,a&&(t.prototype[e]=function(){var n=this.l;if(o||n){var e=t(this.u),r=e.I=In(this.I);return r.push({func:i,args:arguments,thisArg:t}),e.l=n,e}return i.apply(t,tt([this.value()],arguments))})})),t}Ft.prototype=en(Ut.prototype),Ft.prototype.constructor=Ft,Bt.prototype=Ot?Ot(null):st,jt.prototype.clear=function(){this.T={hash:new Bt,map:Ct?new Ct:[],string:new Bt}},jt.prototype["delete"]=function(t){var n=this.T;return Ln(t)?function(t,n){return zt(t,n)&&delete t[n]}("string"==typeof t?n.string:n.hash,t):Ct?n.map["delete"](t):Yt(n.map,t)},jt.prototype.get=function(t){var n=this.T;return Ln(t)?function(t,n){if(Ot){var e=t[n];return e===o?i:e}return lt.call(t,n)?t[n]:i}("string"==typeof t?n.string:n.hash,t):Ct?n.map.get(t):Kt(n.map,t)},jt.prototype.has=function(t){var n=this.T;return Ln(t)?zt("string"==typeof t?n.string:n.hash,t):Ct?n.map.has(t):$t(n.map,t)},jt.prototype.set=function(t,n){var e=this.T;return Ln(t)?function(t,n,e){t[n]=Ot&&e===i?o:e}("string"==typeof t?e.string:e.hash,t,n):Ct?e.map.set(t,n):Xt(e.map,t,n),this},Gt.prototype.push=function(t){var n=this.T;if(Ln(t)){var e=n.T;("string"==typeof t?e.string:e.hash)[t]=o}else n.set(t,o)},Ht.prototype.clear=function(){this.T={array:[],map:null}},Ht.prototype["delete"]=function(t){var n=this.T,e=n.array;return e?Yt(e,t):n.map["delete"](t)},Ht.prototype.get=function(t){var n=this.T,e=n.array;return e?Kt(e,t):n.map.get(t)},Ht.prototype.has=function(t){var n=this.T,e=n.array;return e?$t(e,t):n.map.has(t)},Ht.prototype.set=function(t,n){var e=this.T,i=e.array;i&&(i.length<199?Xt(i,t,n):(e.array=null,e.map=new jt(i)));var r=e.map;return r&&r.set(t,n),this},Ut.assign=pe,Ut.assignIn=ge,Ut.before=qn,Ut.bind=Hn,Ut.chain=Bn,Ut.compact=function(t){return cn(t,Boolean)},Ut.concat=Un,Ut.create=function(t,n){var e=en(t);return n?pe(e,n):e},Ut.defaults=_e,Ut.defer=Yn,Ut.delay=Kn,Ut.filter=function(t,n){return cn(t,hn(n))},Ut.flatten=function(t){return(t?t.length:0)?sn(t,1):[]},Ut.flattenDeep=function(t){return(t?t.length:0)?sn(t,Infinity):[]},Ut.iteratee=ke,Ut.keys=we,Ut.map=function(t,n){return gn(t,hn(n))},Ut.mapValues=function(t,n){var e={};return n=hn(n),ln(t,(function(t,i,r){e[i]=n(t,i,r)})),e},Ut.matches=function(t){return mn(pe({},t))},Ut.merge=be,Ut.mixin=Re,Ut.negate=function(t){if("function"!=typeof t)throw new TypeError(r);return function(){return!t.apply(this,arguments)}},Ut.omit=Ee,Ut.omitBy=function(t,n){return n=hn(n),yn(t,(function(t,e){return!n(t,e)}))},Ut.once=function(t){return qn(2,t)},Ut.partial=$n,Ut.pick=Ie,Ut.pickBy=function(t,n){return null==t?{}:yn(t,hn(n))},Ut.slice=function(t,n,e){var r=t?t.length:0;return n=null==n?0:+n,e=e===i?r:+e,r?En(t,n,e):[]},Ut.sortBy=function(t,n){var e=0;return n=hn(n),gn(gn(t,(function(t,i,r){return{value:t,index:e++,criteria:n(t,i,r)}})).sort((function(t,n){return function(t,n){if(t!==n){var e=null===t,r=t===i,o=t==t,a=null===n,u=n===i,c=n==n;if(t>n&&!a||!o||e&&!u&&c||r&&c)return 1;if(t<n&&!e||!c||a&&!r&&o||u&&o)return-1}return 0}(t.criteria,n.criteria)||t.index-n.index})),bn("value"))},Ut.tap=function(t,n){return n(t),t},Ut.thru=function(t,n){return n(t)},Ut.toArray=function(t){return te(t)?t.length?In(t):[]:Ae(t)},Ut.values=Ae,Ut.extend=ge,Re(Ut,Ut),Ut.clone=function(t){return ae(t)?Zn(t)?In(t):Sn(t,we(t)):t},Ut.cloneDeep=function(t){return nn(t,!0,!0)},Ut.escape=function(t){return(t=he(t))&&x.test(t)?t.replace(O,ot):t},Ut.every=function(t,n,e){return function(t,n){var e=!0;return un(t,(function(t,i,r){return e=!!n(t,i,r)})),e}(t,hn(n=e?i:n))},Ut.find=zn,Ut.findIndex=function(t,n){return t&&t.length?function(t,n,e){for(var i=t.length,r=e?i:-1;e?r--:++r<i;)if(n(t[r],r,t))return r;return-1}(t,hn(n)):-1},Ut.forEach=jn,Ut.forOwn=function(t,n){return t&&ln(t,tn(n))},Ut.has=function(t,n){return null!=t&&lt.call(t,n)},Ut.head=Fn,Ut.identity=Te,Ut.includes=function(t,n,e,i){t=te(t)?t:Ae(t),e=e&&!i?de(e):0;var r=t.length;return e<0&&(e=Rt(r+e,0)),se(t)?e<=r&&t.indexOf(n,e)>-1:!!r&&et(t,n,e)>-1},Ut.indexOf=function(t,n,e){for(var i=t?t.length:0,r=((e="number"==typeof e?e<0?Rt(i+e,0):e:0)||0)-1,o=n==n;++r<i;){var a=t[r];if(o?a===n:a!=a)return r}return-1},Ut.isArguments=Qn,Ut.isArray=Zn,Ut.isBoolean=function(t){return!0===t||!1===t||ue(t)&&ht.call(t)==s},Ut.isDate=function(t){return ue(t)&&ht.call(t)==f},Ut.isEmpty=function(t){if(te(t)&&(Zn(t)||se(t)||re(t.splice)||Qn(t)))return!t.length;for(var n in t)if(lt.call(t,n))return!1;return!0},Ut.isEqual=function(t,n){return vn(t,n)},Ut.isFinite=function(t){return"number"==typeof t&&St(t)},Ut.isFunction=re,Ut.isNaN=function(t){return ce(t)&&t!=+t},Ut.isNull=function(t){return null===t},Ut.isNumber=ce,Ut.isObject=ae,Ut.isRegExp=function(t){return ae(t)&&ht.call(t)==m},Ut.isString=se,Ut.isUndefined=function(t){return t===i},Ut.last=function(t){var n=t?t.length:0;return n?t[n-1]:i},Ut.max=function(t){return t&&t.length?nt(t,Te,Jn):i},Ut.min=function(t){return t&&t.length?nt(t,Te,le):i},Ut.noConflict=function(){return $._===this&&($._=pt),this},Ut.noop=function(){},Ut.reduce=Gn,Ut.result=function(t,n,e){var r=null==t?i:t[n];return r===i&&(r=e),re(r)?r.call(t):r},Ut.size=function(t){return null==t?0:(t=te(t)?t:we(t)).length},Ut.some=function(t,n,e){return An(t,hn(n=e?i:n))},Ut.uniqueId=function(t){var n=++dt;return he(t)+n},Ut.each=jn,Ut.first=Fn,Re(Ut,(Se={},ln(Ut,(function(t,n){lt.call(Ut.prototype,n)||(Se[n]=t)})),Se),{chain:!1}),Ut.VERSION="4.6.1",un(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(t){var n=(/^(?:replace|split)$/.test(t)?String.prototype:ct)[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(t);Ut.prototype[t]=function(){var t=arguments;return i&&!this.l?n.apply(this.value(),t):this[e]((function(e){return n.apply(e,t)}))}})),Ut.prototype.toJSON=Ut.prototype.valueOf=Ut.prototype.value=function(){return t=this.u,Gn(this.I,(function(t,n){return n.func.apply(n.thisArg,tt([t],n.args))}),t);var t},(Y||H||{})._=Ut,z&&j&&(G&&((j.exports=Ut)._=Ut),z._=Ut)}.call(this)},4816:function(t,n,e){t.exports=e(1812)._.noConflict()},984:function(t,n,e){var i=e(5876).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},7276:function(t,n){n.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},8136:function(t,n,e){var i=e(4816),r=e(9932).get("stores/audience_data"),o=e(8120),a=e(4141),u=e(967),c=e(5893);function s(t){var n=["type","selector","attributes","value"],e=i.extend({},t);return e.changeSet=i.map(t.changeSet,(function(t){return i.pick(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=t.decisionTicket?t.decisionTicket.audienceIds:[],e=i.map(n,(function(t){return{id:t,name:r.get(t).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(t,{audiences:e})},s=c.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(s)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return i.map(n,s)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},953:function(t,n,e){var i=e(4816),r=e(8668),o=e(967),a=e(5893),u=e(3008),c=e(7179);function s(t,n,e,r){var o=t.getLayerState(r),a=n.get(r),c=e.get();if(!o||!a)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(a.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(t,n,e,r,o,a,s){var f=[],l=t.getLayerStates();s.onlySingleExperiments&&(l=i.filter(l,(function(t){var e=n.get(t.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var d=e.getActiveViewIds(),v=i.map(l,(function(t){var e,r=!!t.decision.variationId,a=t.decisionActivationId&&t.decisionActivationId===o.getActivationId(),u=c.getExperimentAndVariation(),s=u?u.variationId:null,f=r&&t.decision.variationId===s,l=(null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[],v=i.every(l,(function(t){return!i.includes(d,t)}));return i.extend(t,{isActive:r&&a&&!v||f,visitorRedirected:f})})),h=a?i.filter(v,a):v;return i.each(h,(function(t){var e=function(t,n,e,r){var o,a,u=t.layerId,c=n.get(u)||{},s=i.map(c.experiments,(function(t){return i.pick(t,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(o=i.find(c.experiments,{id:t.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&t.decision.variationId&&(a=i.find(o.variations,{id:t.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(t.decisionTicket.audienceIds,(function(t){return i.pick(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,r,s.includeOfferConsistency);e&&f.push(e)})),f}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,r,u,c,s,f,l){var d={},v={},h={},p={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:v,variations:h,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(t){o.defineProperty(d,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"campaign"),o.defineProperty(n,"experiments",(function(){return i.map(t.experiments,(function(t){return v[t.id]}))}),"campaign"),n}),"campaignMap","byId"),i.each(t.experiments,(function(t){o.defineProperty(v,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"experiment"),o.defineProperty(n,"variations",(function(){return i.map(t.variations,(function(t){return h[t.id]}))}),"experiment"),n}),"experimentMap","byId"),i.each(t.variations,(function(t){o.defineProperty(h,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"actions",(function(){return i.map(t.actions,(function(t){return i.extend({},t,{changes:i.map(t.changes,g)})}))}),"variation"),n}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],n.visitor=["stores/visitor",function(t){return i.cloneDeep(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,e,o,a,l,d){return{getCampaignStates:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!1});return i.each(u,(function(t){o[t.id]=t})),o},getExperimentStates:function(r){var o=f(e,n,a,t,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),u=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(t,n){var e=n.allExperiments[0];return t[e.id]=i.extend({},i.pick(n,u),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!0});return i.each(u,(function(t){var n=t.id;o[n]||(o[n]=[]),o[n].push(t)})),o},getPageStates:function(t){var n=a.getAll(),e=i.reduce(n,(function(t,n){var e=o.get(n.id);return t[n.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(n,["isActive","metadata"])),t[n.id].isActive=!!t[n.id].isActive,t}),{});return t?i.pickBy(e,t):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var t=e.getLayerStates(),r={};return i.each(t,(function(t){var e=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(r[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:t.decision.experimentId});if(o&&t.decision.variationId)var a=i.find(o.variations,{id:t.decision.variationId}),u=i.findIndex(o.variations,{id:t.decision.variationId});a&&(r[t.decision.experimentId]={id:t.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var t={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(n){i.each(n,(function(n){t[n.experiment.id]=!0}))})),i.keys(t)},getRedirectInfo:function(){var t=c.getExperimentAndVariation();return t&&(t.referrer=c.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,t.shouldCleanString),c=i.mapValues(a.names,(function(n,e){return r.combineAndTruncateIdAndName(n,a.idStrings[e],t.maxLength)})),f={experiment:c.experiment,variation:c.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],n.utils=e(7044).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(6732)},3139:function(t,n,e){var i=e(7936),r=e(5343),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},5622:function(t,n,e){var i=e(4816),r=e(7936),o=e(953),a=e(9932),u=a.get("stores/plugins"),c=e(9590),s=e(8738),f=e(349),l=[e(9495),e(1525),e(4689)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!i.isArray(t)&&i.isObject(t))u=i.isUndefined(t.version)?1:t.version,e=t.type,a=[t];else if(i.isArray(t))u=0,e=t[0],a=t.slice(1);else{if(!i.isString(t))return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(s){r.error(s)}return!0},n.get=function(t){if("state"===t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?i.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}else r.warn('Module "'+t+'" not found.')}},967:function(t,n,e){var i=e(1335),r=e(9590),o=e(349),a=e(7936);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},9495:function(t,n,e){var i=e(4816),r=e(1525);function o(t){var n,e={};if(t)if(a(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=i.extend({},t))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return i.isUndefined(n)||(e.revenue=n),e}function a(t){return i.isNumber(t)||i.isString(t)&&Number(t)==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),r.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),r.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){r.disable({scope:t})},n.log=function(t){i.isUndefined(t)&&(t=!0),r.log({level:t?"INFO":"OFF"})},n.optOut=function(t){i.isUndefined(t)&&(t=!0),r.optOut({isOptOut:t})},n.setCookieDomain=function(t){r.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){r.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,r.user({attributes:e})},n.setUserId=function(t){r.user({userId:t})},n.setGA4UserId=function(t){r.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){r.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){r.event({eventName:t,tags:o(n)})}},5893:function(t,n,e){var i=e(4816),r=e(9932),o=e(6836),a=e(967),u=r.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return c(i.cloneDeep(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return a.defineProperty(e,"campaign",(function(){return function(t){var e=i.cloneDeep(t);return e.changes&&(e.changes=i.map(e.changes,n.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId)),t.variations&&i.each(t.variations,(function(t){t.actions&&i.each(t.actions,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=u.getChange(t);return n?o.safeReference(n):t};var c=function(t,n){var e=i.omit(t,i.keys(n));return i.each(n,(function(n,i){e[n]=t[i]})),e}},7044:function(t,n,e){var i=e(212).Promise,r=e(6932).t,o=e(7940).poll,a=e(2763).b,u=e(4516).A;n.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},9901:function(t){t.exports={DEFAULT_INTERVAL:20}},6932:function(t,n,e){var i=e(4816),r=(e(9590),e(9932)),o=r.get("stores/directive"),a=e(8416),u=(e(6556),e(8738),e(349),e(7276).generate),c=e(7940),s=e(5343),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(t){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(t){var n=c.poll(i.partial(h,t));l[t].cancelObservation=function(){n(),delete l[t]}};var t,n=function(){this.disconnect(),i.each(i.keys(l),h),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=a.getDocumentElement();return t=new MutationObserver(n),function(n){var o=l[n];t.observe(r,e),o.cancelObservation=function(){delete l[n],i.isEmpty(l)&&t.disconnect()}}}(),d(t)};function v(t){var n=l[t];n&&n.cancelObservation&&n.cancelObservation()}function h(t){if(l[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(e){}else if(Date.now()-t.startTime>n)return!0;return!1}(l[t]))return 0===l[t].matchedCount&&i.isFunction(l[t].options.onTimeout)&&l[t].options.onTimeout(),void v(t);var n=a.querySelectorAll(l[t].selector);n.length&&(i.each(n,(function(n){n.S&&n.S[t]||l[t].callbackQueue.push(n)})),function(t){for(;l[t]&&l[t].callbackQueue.length;){var n=l[t].callbackQueue.shift();if(p(n,t),l[t].matchedCount=l[t].matchedCount+1,l[t].callback(n),l[t]&&l[t].options.once)return void v(t)}}(t))}}function p(t,n){t.S||(t.S={}),t.S[n]=!0}n.t=function(t,n,e){if(!function(t){try{a.querySelector(t)}catch(n){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(n))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},d(r),s.setTimeout(i.bind(h,null,r),0),i.partial(v,r)}},7940:function(t,n,e){var i=e(4816),r=(e(9590),e(9932)),o=(e(8738),e(349),e(7276).generate),a=e(5343),u=e(9901).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(t){c[t]&&i.each(c[t].callbacks,(function(t){t.call(null)}))}function f(t,n){c[n]&&c[n].callbacks[t]&&(delete c[n].callbacks[t],i.some(c[n].callbacks)||(clearInterval(c[n].id),delete c[n]))}n.poll=function(t,n){i.isNumber(n)||(n=u),c[n]||(c[n]={callbacks:{},id:a.setInterval(i.partial(s,n),n)});var e=o();return c[n].callbacks[e]=t,i.partial(f,e,n)},n.cancelAll=function(){i.each(c,(function(t,n){clearInterval(t.id),delete c[n]}))}},2763:function(t,n,e){var i=e(212).Promise,r=e(6932).t;n.b=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},4516:function(t,n,e){var i=e(212).Promise,r=e(7940).poll;n.A=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},1525:function(t,n,e){var i=e(4816),r=e(9590),o=e(5622),a=e(953),u=e(4094),c=e(8738),s=e(5086),f=e(8136),l=e(9621),d=e(8064).U,v=e(8701),h=e(7357),p=e(371),g=e(6611),m=e(8120),_=e(349),w=e(9505),y=e(5508),b=e(7936),E=e(2121),I=e(1659),A=e(4927),T=e(1683),S=e(9932),k=S.get("stores/dimension_data"),R=(S.get("stores/view"),S.get("stores/view_data")),C=S.get("stores/visitor_id"),N=S.get("stores/layer_data"),D=S.get("stores/directive"),O=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=g.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?b.log("API / Tracking click event:",t):b.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=y.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback),i=y.createSingle(n.layerId,n.experimentId,n.variationId);return function(){y.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),b.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=A.create(t.eventData.id,t.eventData.apiName),e=A.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?b.log("API / Tracking pageview event:",t):b.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=g.create(t.eventId,t.eventName,"custom")),A.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?b.log("API / Tracking custom event:",t.eventName,t.tags):b.log("API / Not tracking custom event:",t.eventName)}}(t)}C.getBucketingId()?n():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){_.dispatch(r.SET_CLIENT_NAME,t.clientName),_.dispatch(r.SET_CLIENT_VERSION,t.clientVersion),t.forceVariationIds&&_.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t.forceVariationIds})},n.priorRedirectString=function(t){I.load(t.value)},n.microsnippetError=function(t){var n=t.errorData.metadata&&t.errorData.metadata.err||{};n.name=t.errorData.code;var e={engine:t.engine,msVersion:t.errorData.msVersion,requestId:t.errorData.requestId,projectId:t.errorData.projectId,snippetKey:t.errorData.snippetKey,args:t.errorData.args};p.handleError(n,e)},n.rum=function(t){_.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=i.map(t.states,(function(t,n){return{id:n,isActive:t}}));A.registerViews(n)},n.page=function(t){var n=R.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?A.activateViaAPI(n,t.tags):(A.deactivate(n),b.log("API / Deactivated Page",A.description(n)))};C.getBucketingId()?i():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){A.setGlobalTags(t.tags)},n.user=function(t){t.visitorId&&(C.getBucketingId()?(b.log("API / Setting visitor Id:",t.visitorId),T.setId({randomId:t.visitorId})):(b.log("API / Setting visitor Id for activation:",t.visitorId),_.dispatch(r.SET_VISITOR_ID_VIA_API,t.visitorId))),i.each(["IP","location","queryParams","url"],(function(n){t[n]&&(b.log("API / Setting",n,":",t[n]),x(n,t[n],!1))})),b.log("API / Setting visitor custom attributes:",t.attributes),i.each(t.attributes,(function(t,n){var e,i,r=n,o=k.getById(n)||k.getByApiName(n);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:t};e&&(a.name=e),x(r,a,!0)}))},n.ga4User=function(t){t.ga4UserId?(b.log("API / Setting ga4 user id in the global store:",t.ga4UserId),_.dispatch(r.SET_GA4_USER_ID,t)):b.error('API / Argument "ga4UserId" is missing')};var x=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){_.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};C.getBucketingId()?o():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(b.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),b.log("API / Setting cookie age to",n,"days."),_.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=i.extend({isEnabled:!0},t),b.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),_.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){b.log("API / Setting cookie domain to",t.cookieDomain),_.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);b.log("API / Disabling tracking"),_.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else b.log("API / Disabling everything"),_.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;i.isUndefined(n)&&(n="INFO"),i.isUndefined(e)&&(e=""),b.setLogMatcher(e),b.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if(!i.isFunction(t.handler))throw new Error("A handler function must be supplied");(t=i.omit(t,"type")).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(e){throw new O(e)}},m.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");m.off(t.token)},n.load=function(t){t.data=i.extend({},t.data),u.normalizeClientData(t.data),_.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");_.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},t.settings,{id:t.id}))},n.bucketVisitor=function(t){if(!t.variationId&&i.isUndefined(t.variationIndex)||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,r=t.campaignId;if(r){if(!(n=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(n=N.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=i.find(n.experiments,{id:t.experimentId})))throw new Error("Could not find experiment "+t.experimentId+" in layer "+r);var o=t.variationId;if(i.isUndefined(t.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+t.experimentId)}else if(!(o=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId);T.updateVariationIdMap(r,t.experimentId,o),C.getBucketingId()&&T.persistVariationIdMap(),T.updateContextualMabMap(r,t.experimentId,{variationId:o}),C.getBucketingId()&&T.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!i.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+w.stringify(t.canonicalOrigins));i.each(t.canonicalOrigins,(function(t){if(!i.isString(t))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),_.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){b.log("API / cross origin tracking is DISABLED"),_.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){D.shouldActivate(),b.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},4689:function(){},1327:function(t,n,e){var i=e(4816),r=e(8064).U,o=n.ActivationCodeError=r("ActivationCodeError"),a=(n.ProjectJSError=r("ProjectJSError"),e(7234)),u=e(9590),c=e(5086),s=e(8136),f=e(4036),l=e(4248),d=e(4094),v=e(8701),h=e(947),p=e(9932),g=e(7357),m=e(8416),_=e(8738),w=e(8120),y=e(4141),b=e(1284),E=e(349),I=e(1194),A=e(5508),T=e(871).mM,S=e(7936),k=e(3294),R=(e(2899),e(2121)),C=e(9801),N=e(212).Promise,D=e(2896),O=e(1659),x=(e(3406),e(9612)),M=e(4927),P=e(1683),L=e(5343),V=(p=e(9932)).get("stores/session"),U=p.get("stores/audience_data"),F=p.get("stores/action_data"),B=p.get("stores/cleanup"),z=p.get("stores/directive"),j=p.get("stores/global"),G=p.get("stores/group_data"),q=p.get("stores/layer_data"),H=p.get("stores/layer"),Y=p.get("stores/pending_events"),K=p.get("stores/plugins"),$=p.get("stores/rum"),W=p.get("stores/visitor"),X=p.get("stores/view_data"),J=p.get("stores/view"),Q=p.get("stores/visitor_id"),Z=p.get("stores/visitor_bucketing"),tt=p.get("stores/xdomain"),nt=e(5622),et=e(371),it=e(4892),rt=n;function ot(t){et.handleError(t.data.error,t.data.metadata)}function at(t,n){E.dispatch(u.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function ut(t,n,e){t=t||[];var r=j.getGlobalHoldbackThreshold(),o=Q.getBucketingId();if(!o)throw new Error("bucketingId not set");var a,u={bucketingId:o,visitorProfile:W.getVisitorProfile(),audiences:t,globalHoldback:r,preferredVariationMap:a,layer:n};return n&&e&&h.isPageIdRelevant(n)?i.map(e,(function(t){return h.createTicket(i.extend({},u,{pageId:t}))})):[h.createTicket(u)]}function ct(t,e,r,o){try{var a=function(t){return{bucketingId:Q.getBucketingId(),preferredLayerId:Z.getPreferredLayerMap()[t.id]}}(o),c=h.decideGroup(o,a);if(c.reason)return S.debug("Not activating Group",I.description(o),"; reason:",c.reason),$.getSampleRum()&&E.dispatch(u.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),N.resolve();var s=q.get(c.layerId);if(!s)return S.debug("Visitor was bucketed into a Campaign ("+c.layerId+") which is not in this snippet"),N.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(S.debug("Not activating Group",I.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),N.resolve()):($.getSampleRum()&&E.dispatch(u.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),n.decideAndExecuteLayerASAP(t,e,f,s))}catch(l){return S.error("Error getting decision for Group",I.description(o),"; ",l),N.reject(l)}}function st(t,n){var e={};return i.each(t,(function(t){i.isArray(t)?i.extend(e,st(t,n)):i.isObject(t)&&n[t.type]&&(e[t.type]=!0)})),e}function ft(t){var n=[];return i.each(t,(function(t){n.push(t.name,t)})),n}function lt(t){var n=B.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();E.dispatch(u.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){d.normalizeClientData(t),w.on({filter:{type:"error"},handler:ot}),E.dispatch(u.DATA_LOADED,{data:t}),S.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(t){var n=!0;return!nt.push(t,n)}))),g.setOptOut(z.shouldOptOut()),!z.isDisabled()&&!z.shouldOptOut()){it.queueBeacons(),m.isReady()?E.dispatch(u.SET_DOMCONTENTLOADED):m.addReadyHandler((function(){E.dispatch(u.SET_DOMCONTENTLOADED)})),i.each(t||[],(function(t){try{t(R)}catch(n){l.emitInternalError(n)}})),i.each(j.getPlugins()||[],(function(t){try{b.apply(t,[R])}catch(n){l.emitError(n)}})),O.load();var e=w.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(P.persistVisitorProfile),H.observe(P.persistLayerStates),V.observe(P.persistSessionState),Y.observe(k.persistPendingEvents),w.off(e)}});w.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),w.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=k.getPendingEvents();if(r&&(E.dispatch(u.LOAD_PENDING_EVENTS,{events:r}),k.retryPendingEvents(r)),w.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),s.emitInitializedEvent(),!z.shouldActivate())return N.resolve();return function(){!1;var t=null;i.isNumber(t)&&0===q.getCount()?(S.log("Activating after delay of",t,"ms because no Experiments are running"),E.dispatch(u.SET_RUM_DATA,{data:{activateDfd:!0}}),L.setTimeout(s.emitActivateEvent,t)):s.emitActivateEvent()}(),N.all([])}S.log("Controller / Is disabled")},n.activate=function(){try{var t=[];S.log("Activated client"),lt(_.Lifecycle.preActivate);var n=v.now();E.dispatch(u.ACTIVATE,{activationId:String(n),activationTimestamp:n});var e=X.getAll();M.registerViews(e),P.setId(P.getOrGenerateId()),t.push(c.trackPostRedirectDecisionEvent()),E.dispatch(u.MERGE_VARIATION_ID_MAP,{variationIdMap:P.getVariationIdMap()}),E.dispatch(u.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:P.getContextualMabMap()}),E.dispatch(u.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:P.getPreferredLayerMap()}),lt(_.Lifecycle.postVisitorProfileLoad),t.push((p=K.getAllPlugins(_.PluginTypes.visitorProfileProviders),g=W.getVisitorProfile(),P.populateEagerVisitorData(p,g)).then((function(){S.log("Populated visitor profile")})));var r=ut(),o=h.decideGlobal(r);S.log("Made global decision",r,"->",o),E.dispatch(u.RECORD_GLOBAL_DECISION,o);var a=c.trackClientActivation();a?S.log("Tracked activation event",a):S.log("Not tracking activation event");var f=rt.setUpViewActivation(e),d=[];return i.each(f,(function(t){d=d.concat(M.activateMultiple([t]))})),$.getSampleRum()&&E.dispatch(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,{viewsInitiallyActivatedCount:d.length}),lt(_.Lifecycle.postViewsActivated),lt(_.Lifecycle.postActivate),s.emitActivatedEvent(),N.all(t).then((function(){w.emit({type:y.TYPES.LIFECYCLE,name:"activateDeferredDone"}),S.log("All immediate effects of activation resolved")}),l.emitError)}catch(m){return l.emitError(m),N.reject(m)}var p,g},rt.setUpViewActivation=function(t){var n=[];return i.each(t,(function(t){i.isBoolean(J.getViewState(t.id).isActive)&&M.isActivationTypeImmediate(t.activationType)?S.debug("Skipping page: already evaluated, presumably at the edge",M.description(t)):M.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===_.ViewActivationTypes.callback?(S.debug("Setting up conditional activation for Page",M.description(t)),rt.activateViewOnCallback(t)):t.activationType===_.ViewActivationTypes.polling?(S.debug("Setting up polling activation for Page",M.description(t)),C.pollFor(i.partial(b.apply,t.activationCode),null,i.partial(x.isTimedOut,v.now())).then((function(){M.activateMultiple([t])}))["catch"]((function(n){S.warn("Failed to activate view ",t,n)}))):t.activationType!==_.ViewActivationTypes.manual&&l.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},rt.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return J.isViewActive(t.id)}});try{b.apply(t.activationCode,[function(n){var e=i.extend({},n,{pageName:t.apiName,type:"page"});nt.push(e)},n])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+M.description(t));l.emitError(e,{originalError:r,userError:!0})}},n.onViewsActivated=function(t){var e,r=t.data.views,o=i.map(r,"id");try{if(!Q.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(t){var e=q.getAllByPageIds(t),r=z.getForceVariationIds(),o=z.getForceAudienceIds(),a=!i.isEmpty(r);a&&S.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=G.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});S.log("Deciding Campaigns/Experiments for Page(s)",t);var c=i.map(u.groups,I.description).join(", ");S.log("Groups:",c);var s=i.map(u.individual,A.description).join(", ");S.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(u.groups,i.partial(ct,r,o,t))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,t));return n.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return N.all(d).then((function(n){var e=i.filter(n,(function(t){return!!t}));return S.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",i.map(e,A.description).join(", ")),e}))}(o)["catch"](l.emitError);return e=N.all(i.map(r,(function(t){var n=function(){M.parseViewTags(t);var n=c.trackViewActivation(t);n?S.log("Tracked activation for Page",M.description(t),n):S.log("Not Tracking activation for Page",M.description(t))};return m.isReady()?N.resolve(n()):C.pollFor(m.isReady,1e3).then(n)}))),N.all([a,e])}catch(u){l.emitError(u)}},n.onPageDeactivated=function(t){var n=t.data.page,e=F.getAllActionIdsByPageId(n.id);i.each(e,(function(t){var e=F.getActionState(t);e&&(i.each(e,(function(t,e){if(t.cancel)try{t.cancel(),S.debug("Controller / Canceled change",e,"observation due to deactivation of page:",n)}catch(i){S.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(n.undoOnDeactivation&&t.undo)try{t.undo(),S.debug("Controller / Undid change",e,"due to deactivation of page:",n)}catch(r){S.error("Controller / Error undoing change upon deactivation of page.",r)}})),E.dispatch(u.REMOVE_ACTION_STATE,{actionId:t}),S.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:nt.push};t.get=nt.get;var n=window.optimizely;i.isArray(n)&&i.each(n,(function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return i.each(t,(function(t,n){P.checkKeyForVisitorId(n)&&T.setItem(n,t)})),t},n.initializeXDomainStorage=function(){var t=e(8340),r=!!P.getCurrentId(),o=!!r&&P.hasSomeData();r?o?S.log("xd / Existing visitor; has data on this origin"):S.log("xd / Existing visitor; new to this origin"):S.log("xd / New visitor");var a=j.getAccountId(),c="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),f="/client_storage/a"+a+".html";t.subscribe((function(t,n){P.checkKeyForVisitorId(t)&&T.setItem(t,n)}));var l=t.fetchAll().then((function(n){if(!Q.getVisitorIdLocator()){var e=tt.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(S.log("Syncing cross-origin visitor randomId:",i),P.maybePersistVisitorId({randomId:i}))}}return P.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(P.loadForeignData(),r&&!o){var n=!i.isEmpty(t);S.debug("xd / Loaded foreign data? ",n),at(n)}S.log("Loaded visitor data from foreign origins"),s.emitOriginsSyncedEvent()}),(function(t){throw r&&!o&&(S.debug("xd / Failed to load foreign data:",t),at(!1,t)),t}));return N.all([t.load(c,f)["catch"]((function(t){throw S.debug("xd / Failed to load iframe:",t),r&&!o&&at(!1,t),t})),l["catch"]((function(t){S.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),S.debug("xd / Enqueuing sync to happen after visitorId set."),E.dispatch(u.ADD_CLEANUP_FN,{lifecycle:_.Lifecycle.postVisitorProfileLoad,cleanupFn:s.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,r,o){return new N((function(l,d){try{!function(t,n,e,r,o){if(n.length||e.length)return void o(ut([],void 0,r));var a=A.relatedAudienceIds(t),c=i.reduce(a,(function(t,n){var e=U.get(n);return!e||t.push(e),t}),[]),s=K.getAllPlugins(_.PluginTypes.audienceMatchers);if($.getSampleRum()){var l={};if(i.each(c,(function(t){i.extend(l,st(t.conditions,s))})),!i.isEmpty(l)){var d=i.keys(l);E.dispatch(u.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:t.id})}}var v=function(t){S.debug("Audience list for extracting types",t);try{var n=new Set(i(t).map("conditions").flattenDeep().filter((function(t){return"string"!=typeof t})).map("type").value());return n.has("time_and_day")&&n.add("currentTimestamp"),S.debug("Extracted unique types from audiences",n),n}catch(e){return S.error("An error occurred while extracting types from audiences:",e),new Set}}(c),h=K.getAllPlugins(_.PluginTypes.visitorProfileProviders),p=W.getVisitorProfile();P.populateLazyVisitorData(h,p,v),function(t,n,e,r){var o=i.reduce(t,(function(t,e){return i.extend(t,f.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),a=i.reduce(o,(function(t,n){if(i.isUndefined(P.getAttribute(n))){var e=P.getPendingAttributeValue(n);i.isUndefined(e)||t.push(e)}return t}),[]);if(0===a.length)return r();var u=[].concat(t),c=D.firstToResolve(i.map(a,(function(t){return N.resolve(t).then((function(){var t=W.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(f.isInAudience(t,e,n))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));N.race([c,new N((function(t,n){L.setTimeout(n,e)}))]).then((function(){S.log("Activating Campaign after pending Audiences resolved",t),r()}),(function(){S.log("Activating Campaign after timeout on Audiences",t),r()}))}(c,s,A.getActivationTimeout(t),(function(){var n=ut(c,t,r);i.map(n,(function(n){!function(t,n,e){var r=i.map(t.audienceIds,i.bind(U.get,U)),o=i.filter(n,(function(n){return!i.includes(t.audienceIds,n.id)}));S.log("When deciding Campaign",A.description(e),"visitor is in audiences:",ft(r),"and not in audiences:",ft(o))}(n,c,t)})),o(n)}))}(o,t,e,r,(function(f){i.each(f,(function(f){var l=f.pageId?[f.pageId]:r;S.debug("Deciding layer: ",o,"with decisionTicket: ",f,"and actionViewIds: ",l),function(t,e,r,o,f){var l=A.description(t);S.log("Activating Campaign",l,"on Page(s)",o),r.length&&(S.log("Applying force audienceIds:",r,"to Campaign",l),(f=i.cloneDeep(f)).audienceIds=r);var d=n.decideLayer(t,f,e),v=!(!e.length&&!r.length),p=n.getActionsForDecision(t,d,v),g=function(t,n){return i.filter(t,(function(t){return i.isUndefined(t.pageId)||i.includes(n,t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,r){var o=A.description(n);S.log("Preparing actions",t,"for Campaign",o,"on Page(s)",r),i.forEach(t,a.prepareAction)}(g,t,0,o),i.forEach(o,(function(){c.trackDecisionEvent(d,f)})),s.emitLayerDecided({layer:t,decisionTicket:f,decision:d}),d.error)throw d.error;if($.getSampleRum()){E.dispatch(u.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return i.each(t,(function(t){i.each(t.changeSet,(function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);E.dispatch(u.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:t.id}),i.isEmpty(t.integrationSettings)||E.dispatch(u.RECORD_INTEGRATION_USAGE,{integrations:A.getIntegrationTypes(t),layerId:t.id})}if(!h.isInCohort(d))return void S.log("Not activating Campaign: "+A.description(t)+"; not in the cohort because:",d.reason);p.maybeExecute&&function(t,n,e,r){var o=A.description(n);S.log("Executing actions",t,"for Campaign",o,"on Page(s)",r),N.all(i.map(t,(function(t){return a.executePreparedAction(t).then(i.partial(s.emitActionAppliedEvent,t))}))).then((function(){S.log("All page actions for",e,"applied:",t),s.emitActionsForDecisionAppliedEvent(e,t)}))["catch"]((function(t){S.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,d,o)}(o,t,e,l,f)})),l(o)}))}catch(v){S.error("Error getting decision for Campaign: "+A.description(o),v),d(v)}}))},n.decideLayer=function(t,n,e){var i;var r=A.description(t);i=e.length?h.getDummyLayerDecision(t,e):h.decideLayer(t,n),S.log("Recording decision for Campaign",r,n,"->",i),A.recordLayerDecision(t.id,n,i),!1;return i},n.getActionsForDecision=function(t,n,e){var i=A.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(F.getLayerActions(n.layerId)||[],F.getExperimentActions(n.experimentId)||[],F.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&j.isGlobalHoldback())return S.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return S.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return S.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,S.log("Got Actions for Campaign:",i,o.actions),o}},8213:function(t,n,e){var i=e(212).Promise,r=e(8701),o=e(9932).get("stores/plugins"),a=e(8738),u=e(7936);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},9887:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},4760:function(t,n,e){var i=e(4816),r=e(9887).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i.isEmpty(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},2262:function(t,n,e){var i=e(4204);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},7234:function(t,n,e){var i=e(4816),r=e(9590),o=e(4248),a=e(9621),u=e(8064).U,c=e(8701),s=e(9932),f=e(349),l=e(7936),d=e(212).Promise,v=e(9787),h=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),_=e(8213);e(9612).initialize();var w=u("ActionError");function y(t,n,e){if(p.getActionState(n.id)){var o=p.getChangeApplier(t.id,n.id);if(i.isUndefined(o)){var a={changeId:t.id,actionId:n.id,changeApplier:_.create(t,n,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",t)}else l.warn("Action / Attempted to prepare change for inactive action: ",n)}function b(t,n,e,r){if(!i.includes(r,n)){if(!t[String(n)]){var u=g.getChange(n);if(!u){var s="Change with id "+n+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}t[String(n)]=new d((function(s){var f=i.map(u.dependencies||[],(function(i){return b(t,i,e,r.concat([n]))}));if(u.src){var h="change_"+u.src,m=a.makeAsyncRequest(h,(function(){return v.addScriptAsync("https://cdn.optimizely.com/public/148927072/data"+u.src,(function(){a.resolveRequest(h)}))})).then((function(){var t=g.getChange(u.id);t||o.emitError(new w("Failed to load async change from src: "+u.src)),y(t,e,c.now())}));f.push(m)}d.all(f).then((function(){var t=c.now(),i=p.getChangeApplier(n,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(n){n?l.log(n):l.debug("Action / Applied change for the first time in "+(c.now()-t)+"ms:",u),s()}))):(l.debug("Action / Not applying change ",n," - No changeApplier found."),void s())}))["catch"]((function(t){l.error("Action / Failed to apply change:",u,t),s()}))}))}return t[String(n)]}l.error("Change with id "+n+" has circular dependencies: "+r.concat(n))}n.prepareAction=function(t){l.debug("Action / Preparing:",t),f.dispatch(r.ACTION_EXECUTED,{actionId:t.id,sessionId:m.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:c.now(),activationId:h.getActivationId()});var n=c.now();i.forEach(t.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,t,n)}))},n.executePreparedAction=function(t){l.debug("Action / Executing:",t);var n={},e=i.map(t.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return b(n,r,t,[])}));return d.all(e).then((function(){l.debug("changes for action id="+t.id+" applied")}))}},9612:function(t,n,e){var i=e(9887),r=e(9932).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},5086:function(t,n,e){var i=e(4816),r=e(9590),o=e(4248),a=e(1623),u=e(8701),c=e(6637),s=e(9932),f=e(8416),l=e(8738),d=e(6518),v=(e(8120),e(4141),e(6787)),h=e(349),p=e(5508),g=e(7936),m=(e(2899),e(212).Promise),_=e(7179),w=e(1659),y=(e(3406),e(1346)),b=e(7276),E=s.get("stores/client_metadata"),I=s.get("stores/global"),A=s.get("stores/session"),T=s.get("stores/view"),S=s.get("stores/plugins"),k=s.get("stores/layer"),R=s.get("stores/layer_data"),C=s.get("stores/observed_redirect"),N=s.get("stores/pending_redirect"),D=s.get("stores/visitor"),O=s.get("stores/directive"),x=s.get("stores/event_data"),M=s.get("stores/visitor_id");function P(t,n){return i.extend({},t,{isLayerHoldback:n,isGlobalHoldback:!1,clientName:i.isNull(t.clientName)?c.NAME:t.clientName,integrationStringVersion:i.isNull(t.integrationStringVersion)?1:t.integrationStringVersion,anonymizeIP:i.isNull(I.getAnonymizeIP())?void 0:I.getAnonymizeIP(),activationId:I.getActivationId(),decisionTicketAudienceIds:[],sessionId:A.getSessionId(),activeViewStates:[],userFeatures:U(D.getVisitorProfile()),layerStates:k.getLayerStatesForAnalytics()})}function L(t){var n=_.getReferrer()||f.getReferrer();return{eventId:b.generate(),timestamp:u.now(),revision:I.getRevision(),clientName:E.getClientName(),clientVersion:E.getClientVersion(),projectId:I.getProjectId(),accountId:I.getAccountId(),activationId:I.getActivationId(),sessionId:A.getSessionId(),isGlobalHoldback:I.isGlobalHoldback(),namespace:I.getNamespace(),referrer:n,visitorId:M.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:U(t.visitorProfile)}}function V(t){var n,e;return t.pageId?(n=t.pageId,(e=T.getViewState(n))&&e.isActive?e.metadata:{}):{}}function U(t){var n=S.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(n,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(n,e){try{var o=e.provides,a=t[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(t,n){var e=i.isObject(t)?t:{value:t};return i.extend({},{type:o,name:n},e)})):u.push({type:o,value:a});var c=i(u).map((function(t){return i.pick(i.extend({},r,t),i.keys(r))})).filter((function(t){return!!t.value})).value();n=n.concat(c)}}catch(s){g.warn("Error evaluating userFeature against visitorProfile:",s)}return n}),[])}function F(t,n,e){var r=function(t,n){var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[t]&&(!n||!i[n]))try{e.push({name:r,hookFn:s.evaluate(i[t])})}catch(o){g.error(o)}})),e}(t,e);g.debug("Found "+r.length+" analytics integrations defining a "+t+" hook"),g.debug("Calling each with data: ",n),i.each(r,(function(t){try{g.debug("Calling plugin: "+t.name),t.hookFn(n),g.debug("Called plugin: "+t.name)}catch(e){g.error(e)}}))}function B(t,n,e){var r=function(t,n){0;var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(n,r[t])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(t,n);g.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),g.debug("Calling each with data: ",e),i.each(r,(function(t){try{g.debug("Calling plugin: "+t.name),t.hookFn(e),g.debug("Called plugin: "+t.name)}catch(n){g.error(n)}}))}n.trackClientActivation=function(){if(O.shouldSendTrackingData()){var t,n=(t=L({activeViewStates:[],visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),i.extend(t,{eventTags:{}}));return F("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,e,r){n=n||{},r=r||{},e||(e=x.getByApiName(t));var u=function(t,n,e,r){var o=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),a=r&&r.pageId?V(r):T.getActiveViewTags(),u=i.extend({},a,n),c=r&&r.category?r.category:d.OTHER;return i.extend(o,{eventEntityId:r&&r.id,eventApiName:t,eventCategory:c,eventTags:u,eventProperties:e})}(t,n,r,e),c={name:t,type:v.CUSTOM,category:u.eventCategory,tags:i.omit(u.eventTags,"revenue")};if(i.isUndefined(n.revenue)||(c.revenue=n.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:t,apiName:e?e.apiName:void 0,type:v.CUSTOM,tags:i.omit(u.eventTags,"revenue"),category:u.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(c),F("onCustomEvent",u),u},n.trackDecisionEvent=function(t,n,e){e||(e=R.get(t.layerId));var o=b.generate();h.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:o});var a=function(t,n,e,r){var o=null,a=null,c=null;if(n.experimentId){var s=i.find(r.experiments,{id:n.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,n.variationId)){var l=i.find(s.variations,{id:n.variationId});l&&(a=l.name||null)}}var d=_.getReferrer()||f.getReferrer();return{sessionId:A.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:M.getRandomId(),decisionId:t,activationId:I.getActivationId(),namespace:I.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:r.name,layerPolicy:r.policy,accountId:I.getAccountId(),projectId:I.getProjectId(),revision:String(I.getRevision()),clientName:E.getClientName(),clientVersion:E.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)}}(o,t,n,e),c=N.isExpectingRedirect(),s=N.getLayerId(),l=p.description(e);if(c&&s===e.id&&(w.persist(a,"COOKIE"),g.log("Relaying decision for redirect Campaign",l)),O.shouldSendTrackingData()){var d=P(a,t.isLayerHoldback);if(c&&s===e.id){var v=y.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=v,B(v,[y.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),g.log("Called trackLayerDecision for redirect Campaign",l,d)}else{v=y.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=v,B(v,[y.NonRedirectPolicies.TRACK_IMMEDIATELY],d),g.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else g.log("Analytics / Not tracking decision for Campaign",p.description(e))},n.trackPostRedirectDecisionEvent=function(){if(!O.shouldSendTrackingData()||C.hasTracked())return m.resolve();var t=C.get();if(!t)return m.resolve();var n=P(t,!1),e=y.TrackLayerDecisionTimingFlags.postRedirectPolicy;return n.timing=e,B(e,[y.PostRedirectPolicies.TRACK_IMMEDIATELY],n),B(y.TrackLayerDecisionTimingFlags.postRedirectPolicy,[y.PostRedirectPolicies.TRACK_AFTER_SYNC],n),h.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA),m.resolve()},n.trackClickEvent=function(t){var n=function(t){var n=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,r=t.apiName,o=t.category||d.OTHER,a=t.id,u=V(t);return i.extend(n,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:t.pageId,selector:e})}(t),e={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(o.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(e),F("onClickEvent",n),n},n.trackViewActivation=function(t,n){if(n||(n=T.getViewState(t.id)),n.isActive){var e=function(t,n){var e=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()});return i.extend(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(o.emitAnalyticsEvent({name:t.name||e.pageApiName,apiName:e.pageApiName,type:v.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:v.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),h.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:e}),F("onPageActivated",e),e}else g.debug("Inactive view passed to `trackViewActivation`")}},1659:function(t,n,e){var i=e(4816),r=e(9590),o=e(7690),a=e(4248),u=e(9932),c=e(8738),s=e(349),f=e(7936),l=e(1346),d=u.get("stores/plugins"),v=".",h=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return i.map(t,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(t){return i.map(t.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}}return e},valueFromValueString:function(t,n){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}return e},isNullable:!0}],p={},g={};i.forEach(h,(function(t){p[t.name]=t,g[t.relayName]=t})),n.persist=function(t,n){n===l.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=i.reduce(t,(function(t,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(n,e){n=o.valueToValueString?o.valueToValueString(n,e):String(n),i.isNull(n)||(n=(o.encodeValueString||encodeURIComponent)(n),t.push(encodeURIComponent(o.relayName+v+e)+"="+n))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),t.push(o.relayName+"="+e)),t):(n.push(r),t)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",n);try{o.set(c.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(t):f.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=o.get(c.COOKIES.REDIRECT,!1);if(t)return f.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={},e=t.split("&");return i.forEach(e,(function(t){var e=t.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(h,(function(t){return t.isMulti&&0===r.indexOf(t.relayName+v)})))){var c=e[1];try{if(u.isMulti){n[u.name]=n[u.name]||{};var s=r.substring(u.relayName.length+v.length);c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c,s),n[u.name][s]=c}else c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c),n[u.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",t,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",t,r)}else f.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(i.forEach(h,(function(t){(i.isNull(n[t.name])||i.isUndefined(n[t.name]))&&(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,n),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;f.error("Relay / Observed redirect data with missing fields:",e)}}}},4248:function(t,n,e){var i=e(8120);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},4036:function(t,n,e){var i=e(4816),r=e(5175),o=e(6094),a=e(7936),u=e(1683);function c(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var u,f=function(t,n){return function(e){var r=e.type,u=n[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var s=c(u.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(t,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",t);var v=u.match(t,e);if(!i.isUndefined(v))return!!v}}(t,e);a.groupCollapsed("Checking audience",n.name,n.id,n),a.debug("Visitor Profile:",t);try{var l=r.evaluate(n.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",s(n),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",s(n)),l},n.requiredAudienceFieldsForConditions=function f(t,n){var e={};return i.each(t,(function(t){if(i.isArray(t))i.extend(e,f(t,n));else if(i.isObject(t)){var r=n[t.type];if(r){var o=c(r.fieldsNeeded,t);i.each(o,(function(t){e[u.serializeFieldKey(t)]=t}))}}})),e}},8676:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},1215:function(t,n,e){var i=e(4816),r=e(8676),o=e(6094).getFieldValue,a=e(984);function u(t,n,e,o,a){this[r.FIELDS.NAME]=t,this[r.FIELDS.TYPE]=n,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function c(t,n,e,o){this.eventBase=t,this[r.FIELDS.TIME]=n,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}n.x=u,u.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(r.FIELDS.NAME,this[r.FIELDS.NAME])),n.push(t(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&n.push(t(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&n.push(t(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return n.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));o=o.sort();for(var a=0;a<o.length;a++)n.push(t(o[a],e[o[a]]));return n.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(t){this.hash_=t},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(t){if(this.hash()!==t.hash()||this[r.FIELDS.NAME]!==t[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==t[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==t[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==t[r.FIELDS.REVENUE])return!1;var n=this[r.FIELDS.OPTIONS]||{},e=t[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(n),(function(t){return n.hasOwnProperty(t)})),a=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(!e.hasOwnProperty(c)||n[c]!==e[c])return!1}return!0},u.prototype.getValueOrDefault=function(t,n){var e=o(this,t);return i.isUndefined(e)?n:e},u.prototype.setFieldValue=function(t,n){t!==r.FIELDS.NAME&&t!==r.FIELDS.TYPE&&t!==r.FIELDS.CATEGORY&&t!==r.FIELDS.REVENUE&&t!==r.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.j=c,c.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,t);return i.isUndefined(a)?this.eventBase.getValueOrDefault(t,n):a},c.prototype.setFieldValue=function(t,n){t===r.FIELDS.TIME||t===r.FIELDS.SESSION_ID||t===r.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var t,n,e=function(t){return i.isString(t)?'"'+t+'"':t},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){t=s[r],n=o.getValueOrDefault([r]),i.isUndefined(n)||a.push(t+": "+e(n))}));var u=[];if(t=s[r.FIELDS.OPTIONS],n=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(n)||(i.each(n,(function(t,n){u.push(n+": "+String(e(t)))})),a.push(t+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),n=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(n)&&(n=e(new Date(n).toString())),!i.isUndefined(n)){a.push("timestamp: "+n)}return"{\n\t"+a.join(",\n\t")+"\n}"},c.prototype.toObject=function(t){var n,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(t){n=s[t],e=a.getValueOrDefault([t],t===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[n]=e)}));var u=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(t&&t.revenueAsTag&&o[c]&&(o[u]=o[u]||{},o[u][c]=o[c],delete o[c]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(t&&t.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},1623:function(t,n,e){var i=e(2755);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},3841:function(t,n,e){var i=e(1215).j,r=e(8701),o=e(8676),a=e(1215).x;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},2755:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(6518),u=e(349),c=e(7936),s=e(1683),f=n,l=e(1215).j,d=e(8676),v=e(1215).x,h=e(3841),p=e(9932),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(t){u.dispatch(r.SET_VISITOR_EVENTS,t)}function y(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function b(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function E(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function k(){var t=I().concat(T()),n=!1;return t.length>1e3&&(t=t.slice(-1e3),n=!0),w(t),b([]),n}n.initialize=function(t,n){if(!m.getInitialized()){f.k(t,n);var e=I();e.length>0&&E(e[e.length-1]);var i=T();i.length>0&&E(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=f.R(t);E(n),b(T().concat(n)),h.reindexIfNecessary(S(),I(),T()),f.C(T())},n.getEvents=function(){return T().length>0&&(k()&&h.sessionize(I()),f.N(I()),f.C(T())),I()},n.getEventCount=function(){return T().length+I().length},f.k=function(t,n){f.D(t,n)&&(f.N(I()),f.C(T())),h.sessionize(I())},f.D=function(t,n){if(0===t.length&&0===n.length)return w([]),b([]),!1;var e=!1,i=t[0]||n[0];return _.EVENTBASE in i?(w(f.O(t)),b(f.O(n))):(e=!0,w(f.M(t)),b(f.M(n))),T().length>0&&(k(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.M=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=f.P(i);n[e]=new l(r,i[d.FIELDS.TIME])}return n},f._migrateEventBasesAndUpdateStore=function(){var t=!1,n=f.L();return h.applyMigrations(n)&&(t=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),b(f._updateBaseMapAndMaybeDedupe(T()))),t},f.V=function(){return o.now()},f.R=function(t){var n,e=t.name,i=t.type||"default",r=t.category||a.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var u=new v(e,i,r,o,n);u=f.F(u);var c=f.V(),s=new l(u,c,-1);return h.updateSessionId(S(),s),h.updateSessionIndex(S(),s),s},f._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=f.F(t[n].eventBase);return t},f.N=function(t){var n=f.B(t);s.persistBehaviorEvents(n)},f.C=function(t){var n=f.B(t);s.persistBehaviorEventQueue(n)},f.q=function(){var t;m.getCleared()||(w([]),b([]),f.N(I()),f.C(T()),y({}),E(null),t=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},f.F=function(t){var n=t.hash(),e=A(),r=e[n];if(i.isUndefined(r))return e[n]=[t],y(e),t;for(var o=0;o<r.length;o++)if(t.equals(r[o]))return r[o];return r.push(t),y(e),t},f.L=function(){var t=[],n=A();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},f.B=function(t){for(var n=function(t){var n={};n[d.FIELDS.NAME]=t.getValueOrDefault([d.FIELDS.NAME]),n[d.FIELDS.TYPE]=t.getValueOrDefault([d.FIELDS.TYPE]);var e=t.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(n[d.FIELDS.CATEGORY]=e);var r=t.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(n[d.FIELDS.REVENUE]=r);var o=t.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(n[d.FIELDS.OPTIONS]=o),n},e=_,r=[],o="_idx_",a=0;a<t.length;a++){var u,c,s=t[a],f=s.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=s[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=a,u[e.TIMESTAMPS].push(c)}else(u={})[e.EVENTBASE]=n(s),u[e.HASH]=f.hash(),u[e.TIMEBASE]=s[d.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=a,u[e.TIMESTAMPS]=[c],r.push(u),f._idx_=r.length-1}for(a=0;a<t.length;a++)delete t[a].eventBase._idx_;return r},f.P=function(t,n){var e=new v(t[d.FIELDS.NAME],t[d.FIELDS.TYPE],t[d.FIELDS.CATEGORY],t[d.FIELDS.OPTIONS],t[d.FIELDS.REVENUE]);return i.isUndefined(n)||e.setHash(n),e},f.O=function(t){for(var n=_,e=[],i=0;i<t.length;i++)for(var r=t[i],o=f.P(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],d=new l(o,a+s[n.DELTA]);e[s[n.INDEX]]=d}return e},n.deserialize=function(t){return f.O(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(h.sessionSortPredicate),h.sessionize(n),n}},9590:function(t,n,e){var i=e(4204);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},8738:function(t,n,e){var i=e(4816),r=e(4204);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=r({blockTime:null}),n.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=r({XMLHttpRequest:null}),n.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab"},n.AllStorageKeys=i.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},6518:function(t){t.exports={OTHER:"other"}},4141:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},6787:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},1346:function(t,n,e){var i=e(4204);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},6618:function(t,n,e){var i=e(984),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},2032:function(t,n,e){var i=e(4816),r=e(9590),o=e(6618),a=e(5175),u=e(4719).E,c=e(349),s=e(7936),f=e(468);n.isValidExperiment=function(t,n){var e,r=i.partial(i.includes,t);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,a,l){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var d;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)d=t.variations[0].id;else{var v=a;d=o.chooseWeightedCandidate(e+v,t.id,t.weightDistributions)}else if(d=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),l&&l[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var h=l[t.id];if(!i.find(t.variations,{id:h}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",h,"not found on experiment:",t.id,". Visitor not bucketed."),null;h!==d&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),d=h)}var p=f.processCmabExperiment(t,d);p&&(d=p);var g=i.find(t.variations,{id:d});if(g)return s.debug("Decision / Selected variation:",g),g;throw new u('Unable to find selected variation: "'+d+'".')},n.getExperimentById=function(t,n){var e=i.find(t.experiments,{id:n});if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!i.find(t.actions,(function(t){return t.pageId===n&&!i.isEmpty(t.changes)}))}},4719:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.E=e},947:function(t,n,e){var i=e(4816),r=e(9590),o=e(4248),a=e(4036),u=e(6618),c=e(2032),s=e(4719).E,f=e(9932),l=e(8738),d=e(349),v=e(1194),h=e(5508),p=e(7936),g=e(3008),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(t){var n=m.getPlugin(l.PluginTypes.deciders,t);if(i.isEmpty(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=y(t.policy);return i.isFunction(n.includePageIdInDecisionTicket)?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,r,o=i.pick(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(n=t.visitorProfile,e=t.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(t,e){return a.isInAudience(n,e,r)&&t.push(e.id),t}),[])),activationId:_.getActivationId()}),o},n.decideGlobal=function(t){return{isGlobalHoldback:u.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){p.debug("Decision / Deciding layer for group: ",v.description(t));var e,o,a=n.preferredLayerId,c=!!a;try{(e=u.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(t)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(t.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},n.decideLayer=function(t,n){var e,r;p.debug("Deciding: ",t,n);var a,f,l=y(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(n.bucketingId,t)};if(i.isEmpty(t.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var v=l.decideLayer(t,n);e=v.experiment,r=v.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(t,n.audienceIds,n.bucketingId),r=c.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(h){a=h,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=h.message:d.error=h}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",h.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",n,"in Campaign",h.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=w.get(t.layerId);return!(g.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},9932:function(t,n,e){var i=e(4816),r=e(7521),o=e(349),a=e(8616),u=r.create(),c={action_data:e(6541),async_request:e(9289),audience_data:e(9819),change_data:e(7525),cleanup:e(5518),client_metadata:e(2405),cookie_options:e(8176),event_data:e(8622),event_emitter:e(6841),dimension_data:e(325),directive:e(5973),global:e(5394),history:e(34),integration_settings:e(8726),layer:e(3974),layer_data:e(6346),log:e(9985),observed_redirect:e(3712),pending_events:e(3312),performance:e(1546),plugins:e(8692),provider_status:e(9147),pending_redirect:e(2856),rum:e(4182),sandbox:e(4544),session:e(9149),tracker_optimizely:e(1440),ua_data:e(7460),view:e(8892),view_data:e(1969),visitor:e(4264),visitor_attribute_entity:e(2676),visitor_events:e(310),visitor_events_manager:e(4685),visitor_id:e(275),visitor_bucketing:e(9092),xdomain:e(3666)};c.group_data=e(2275),o.registerStores(c),i.forOwn(c,(function(t,n){u.register("stores/"+n,o.getStore(n))})),u.register("core/plugins/matchers/key_value",a),t.exports=u},7357:function(t,n,e){var i=e(4816),r=e(9590),o=e(4248),a=e(7690),u=e(8064).U,c=e(8738),s=e(349),f=e(7936),l=n.JSONParseError=u("JSONParseError"),d=e(7266),v=e(9505),h=e(5343),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",b="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";n.populateDirectiveData=function(){var t,n,e,u,T,S,k,R;!function(){var t="OFF",n=d.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(t)}(),function(){var t=h.getUserAgent()||"";if(!i.isString(t))return void f.warn("Directive / userAgent not a string");t=t.toLowerCase();var n=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(n){if(i.includes(t,n))return f.warn("Directive / Matches bot:",n),!0};i.some(n,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:t}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:h.isMutationObserverAPISupported()}),function(){var t=a.get(c.COOKIES.OPT_OUT),n=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var o="true"===n;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),h.alert(o?e:i)}else t&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[p,g];n.push(m);for(var e=0;e<n.length;e++)if("true"===d.getQueryParamValue(n[e])){f.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:t})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(n=d.getQueryParamValue(b))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!n}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=h.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(T="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),S=a.get(c.COOKIES.TOKEN)||null,k=d.getQueryParamValue(I)||S,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:k}),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(w);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=v.parse(t).forceAudienceIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+t),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Audience IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(y);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=v.parse(t).forceVariationIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+t),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Variation IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(R=d.getQueryParamValue(A))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(f.warn("Directive / Opting out"),a.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:t})}},8701:function(t,n){n.now=function(){return+new Date}},6637:function(t,n){n.VERSION="0.214.0",n.NAME="js"},8416:function(t,n,e){var i=e(9932).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},871:function(t,n,e){var i,r,o="optimizely_data",a=e(8064).U,u=e(7409),c=e(5343),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.mM=i},6556:function(t,n){n.create=function(t){return new MutationObserver(t)},n.observe=function(t,n,e){t.observe(n,e)}},2107:function(t,n,e){var i=e(212).Promise,r=e(5343);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(n){return i.resolve({usage:null,quota:null})}}},2899:function(t,n,e){var i=e(9590),r=e(8064).U,o=e(8701),a=e(349),u=e(5343),c=e(9932).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},5343:function(t,n,e){var i=e(4816),r=e(7936);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(n){r.warn("Deferred function threw error:",n)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(n){r.warn("Polling function threw error:",n)}}),n)}},6611:function(t,n,e){var i=e(4816);n.create=function(t,n,e,r){return i.extend({category:"other"},r,{id:t,apiName:n,eventType:e})}},8120:function(t,n,e){var i=e(4816),r=e(7276),o=e(9590),a=e(4248),u=e(9932),c=e(349),s=e(7936),f=u.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){var r=f.getHandlers(t,n);i.each(r,(function(i){try{i.handler.call({$di:u},t)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",t,r),a.emitError(r,null,n)):s.warn("Suppressed error in handler for event:",t,r)}}))}},6732:function(t,n,e){var i=e(8120);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},1284:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(8397),di=__webpack_require__(9932),Logger=__webpack_require__(7936),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=n||[],EXEC_WITH_JQUERY&&(n=n.concat(di.get("env/jquery")));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},349:function(t,n,e){var i=e(9093);t.exports=i.create()},1194:function(t,n,e){var i=e(4816);n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return i.map(t.weightDistributions,"entityId")}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},5508:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(9932),u=e(349),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return i.each(t.experiments,(function(t){i.each(i.flattenDeep(t.audienceIds),(function(t){i.includes(e,t)||(n[t]=!0)}))})),i.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i){return void 0===i&&(i=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return i.keys(i.reduce(i.keys(t.integrationSettings),(function(t,n){return i.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},9352:function(t,n,e){var i=e(4816);n.y=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),r=t.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},5175:function(t,n,e){var i=e(4816),r=e(9505),o=e(7936),a="or",u="not";var c={};function s(t,n){var e;if(i.isArray(t)){var u,s;t[0]in c?(u=t[0],s=t.slice(1)):(u=a,s=t),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(s));try{e=c[u](s,n),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=n(t),o.debug("Condition / Evaluated:",r.stringify(t),":",e),e}c["and"]=function(t,n){for(var e,r,o=0;o<t.length;o++){if(!1===(e=s(t[o],n)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[a]=function(t,n){for(var e,r=!1,o=0;o<t.length;o++){if(!0===(e=s(t[o],n)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[u]=function(t,n){if(1!==t.length)return!1;var e=s(t[0],n);return i.isUndefined(e)?void 0:!e},t.exports={evaluate:s}},2826:function(t,n,e){var i=e(4816),r=e(5251);function o(t){if((t=(t||"").toLowerCase())in c)return t;var n=i.keys(c);return i.find(n,(function(n){var e=c[n];return i.includes(e,t)}))||"unknown"}function a(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new r(t),e=n.getBrowser(),i=n.getOS(),c=n.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:a(l,c.type,d),isMobile:d}}};var u=function(t,n,e){if(i.includes(["mobile","tablet"],t)||i.includes(["opera mini"],n))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},7521:function(t,n,e){var i=e(4816);function r(){this.H={}}r.prototype.register=function(t,n){if(1!==arguments.length){if(this.H[t])throw new Error("Module already registered for: "+t);this.H[t]=n}else{var e=this;i.each(t,(function(t,n){e.register(n,t)}))}},r.prototype.get=function(t){return this.H[t]},r.prototype.getModuleKeys=function(){var t=this.H;return i.keys(t)},r.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),r=t[n-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.H={}},t.exports={create:function(){return new r}}},4323:function(t,n,e){var i=e(4816);function r(t,n,e){this.Y=t,this.K=n,this.$=0,this.W=!1,this.X={},i.extend(this,e),this.J={},this.initialize&&this.initialize()}r.prototype.Z=function(t,n){var e=this.X[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.tt=function(){return i.cloneDeep(this.J)},r.prototype.on=function(t,n){this.X[t]=i.bind(n,this)},r.prototype.observe=function(t){return this.K.nt(this.Y,t)},r.prototype.emitChange=function(){this.W=!0,this.$++},r.prototype.hasChanges=function(){return this.W},r.prototype.resetChange=function(){this.W=!1},r.prototype.getStateId=function(){return this.$},r.prototype.et=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},9093:function(t,n,e){var i=e(4816),r=e(4323);function o(t){t=t||{},this.it={},this.rt={},this.ot=0,this.ut=[],this.ct=[]}function a(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}o.prototype.registerStores=function(t){i.forOwn(t,i.bind((function(t,n){this.it[n]=new r(n,this,t)}),this))},o.prototype.getStore=function(t){return this.it[t]},o.prototype.dispatch=function(t,n){this.dispatchId++,i.each(this.ut,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.it,(function(e){e.Z(t,n)})),i.each(this.ct,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.it,i.bind((function(t,n){t.hasChanges()&&this.rt[n]&&(t.resetChange(),i.each(this.rt[n],(function(n){n(t)})))}),this))},o.prototype.reset=function(){this.rt={},i.forOwn(this.it,(function(t,n){t.et()}))},o.prototype.getState=function(){var t={};return i.forOwn(this.it,(function(n,e){t[e]=n.tt()})),t},o.prototype.onPreAction=function(t){var n=this.ut;return n.push(t),a(n,t)},o.prototype.onPostAction=function(t){var n=this.ct;return n.push(t),a(n,t)},o.prototype.nt=function(t,n){return this.rt[t]||(this.rt[t]=[]),this.rt[t].push(n),a(this.rt[t],n)},t.exports={create:function(t){return new o(t)}}},9505:function(t,n,e){var i=e(4816);function r(t){var n,e,r=[Array.prototype],o=[];i.each(r,(function(t){i.isUndefined(t.toJSON)||(o.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(a){e=a}finally{i.each(o,(function(t,n){r[n].toJSON=t}))}if(e)throw e;return n}n.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},n.parse=JSON.parse},7049:function(t,n,e){var i=e(4816);n.hasMatch=function(t,n,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(t)&&null!==t;switch(n||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===t;case"substring":return r&&String(e).indexOf(t)>-1;case"regex":try{return!(!o||!r)&&new RegExp(t).test(String(e))}catch(f){}return!1;case"range":var a=t.split(":"),u=parseFloat(a[0]),c=parseFloat(a[1]),s=parseFloat(e);return s>=u&&s<=c;default:return!1}}},212:function(t,n,e){t.exports=e(9745)},7409:function(t,n,e){var i=e(4816),r=e(7936);function o(t,n){this.st=t,this.ft=n}o.prototype.dt=function(t){return[this.ft,t].join("$$")},o.prototype.vt=function(t){return t.replace(this.ft+"$$","")},o.prototype.setItem=function(t,n){try{this.st.setItem(this.dt(t),n)}catch(e){r.warn("Failed to save",t,"to localStorage:",e)}},o.prototype.removeItem=function(t){this.st.removeItem(this.dt(t))},o.prototype.getItem=function(t){var n=null;try{n=this.st.getItem(this.dt(t))}catch(e){}return n},o.prototype.keys=function(){var t=i.keys(this.st);return i.map(i.filter(t,i.bind((function(t){return i.includes(t,this.ft)}),this)),i.bind(this.vt,this))},o.prototype.allKeys=function(){return i.keys(this.st)},o.prototype.allValues=function(){return i.values(this.st)},t.exports={create:function(t,n){return new o(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},3294:function(t,n,e){var i=e(4816),r=e(4248),o=e(8738),a=e(9505),u=e(871).mM,c=e(7936),s=e(9895),f=e(9932).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;n.persistPendingEvents=function(){try{var t=f.getEventsString();u.setItem(l,t)}catch(n){c.warn("PendingEvents / Unable to set localStorage key, error was: ",n),r.emitInternalError(n)}},n.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(t){return null}},n.retryPendingEvents=function(t){i.forOwn(t,(function(t,n){s.retryableRequest(t.data,n,t.retryCount)})),i.isEmpty(t)||c.log("Retried pending events: ",t)}},2121:function(t,n,e){var i=e(4816),r=e(9590),o=e(9932),a=e(8738),u=e(8120),c=e(349);n.registerApiModule=function(t,n){i.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&i.each(t.dependencies,(function(t,e){n.registerDependency(e,t)}));var e,r,a="vendor."+t.vendor;e=i.isString(t.provider)?o.get(t.provider)(t.vendor):i.isFunction(t.provider)?t.provider(t.vendor):i.cloneDeep(t.provider),n.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(t.matcher)?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)},n.registerWidget=function(t){return i.isArray(t)&&(t=o.evaluate(t)),{showToken:u.on({filter:{type:"showWidget",name:t.widgetId},handler:t.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:t.widgetId},handler:t.hideFn})}},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},8668:function(t,n,e){var i=e(4816),r=e(9932),o=":",a="holdback",u="treatment",c="",s=e(7936),f=e(3008);function l(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,o){var a={layer:t.name||c,experiment:n.name||c,variation:e.name||c};o&&(a=i.mapValues(a,l));var u,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(a.experiment===c&&s)if(u=n.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(t,n){return i.isEmpty(n)?"everyone_else":i.reduce(n,(function(n,e){var i=t.get(e);return i?n+l(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(f,n.audienceIds)}return{names:a,idStrings:{layer:"("+l(t.id)+")",experiment:"("+l(n.id)+")",variation:"("+l(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=c),t===c)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,r,c,s,l){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,r,u,c,s){if(f.isSingleExperimentPolicy(t.policy)&&u)return;var l=!f.isSingleExperimentPolicy(t.policy)&&u,d=n.formatNamesAndIdsForAnalytics(t,e,r,s),v=[d.names.experiment,d.names.variation],h=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(t.policy)||(v.unshift(d.names.layer),h.unshift(d.idStrings.layer));var p=i.reduce(h,(function(t,n){return t+n.length}),0),g=v.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=a.length),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=c-m,w=v.length,y=[],b=v.length-1;b>=0;b--){var E=v[b],I=Math.min(E.length,Math.floor(_/w));_-=I,w--,y.unshift(E.substring(0,I))}var A=i.map(y,(function(t,n){return t+h[n]}));return l&&A.push(a),A.join(o)}(t,e,r,c,s,l):function(t,e,r,c,s,l){var d=c?a:u,v=3*o.length,h=n.formatNamesAndIdsForAnalytics(t,e,r,l),p=h.names,g=h.idStrings,m=i.reduce(g,(function(t,n){return t+n.length}),0);if(m+v+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=s-m-v-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(t,n){y[n]=t.substring(0,w[n])}));var b=[];return f.isSingleExperimentPolicy(t.policy)||b.push(y.layer+g.layer),(b=b.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(t,e,r,c,s,l)}},5719:function(t,n,e){var i=e(4816);t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var e=n[1].split("#"),r=e[0],a=e[1],u=r.split("&"),c=[];return i.each(u,(function(t){0!==t.indexOf(o)&&c.push(t)})),n[1]="",c.length>0&&(n[1]="?"+c.join("&")),a&&(n[1]+="#"+a),n.join("")}return t}(t);var e=n.value;switch(n.match){case"exact":return(t=c(t))===c(e);case"regex":try{return Boolean(t.match(e))}catch(r){}return!1;case"simple":return(t=u(t))===(e=u(e));case"substring":return t=c(t,!0),e=c(e,!0),-1!==t.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(t){return c(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function c(t,n){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);n||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},8616:function(t,n,e){var i=e(4816),r=e(6094).getFieldValue,o=e(7049);t.exports=function(t,n){var e=r(t,n.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,n.value,n.match)):o.hasMatch(n.value,n.match,e)}},7347:function(t,n,e){var i=e(9621),r=e(9787),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.location}))};function a(){r.addScriptAsync("//cdn3.optimizely.com/js/geo4.js")}},6541:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836),a=e(7936);t.exports={initialize:function(){this.J={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.ht),this.on(r.ACTION_EXECUTED,this._t),this.on(r.SET_CHANGE_APPLIER,this.wt),this.on(r.REMOVE_ACTION_STATE,this.yt)},ht:function(t){var n=this;i.isEmpty(t.data.layers)||(i.each(t.data.layers,(function(t){var e;if(t.changes){var r="layerId:"+t.id;e={id:r,layerId:t.id,changeSet:t.changes,type:"layer"},o.deepFreeze(e),n.J.actions[r]=e}i.each(t.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:t.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),n.J.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,c=r.id+":"+a.id+":"+u;e={id:c,layerId:t.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),n.J.actions[c]=e}))}))}))})),this.emitChange())},_t:function(t){var n=t.actionId;i.isUndefined(n)||this.J.actionState[n]||(this.J.actionState[n]={})},wt:function(t){var n=t.actionId,e=t.changeId;this.J.actionState[n]?this.J.actionState[n][e]=t.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},yt:function(t){delete this.J.actionState[t.actionId]},get:function(t){return o.safeReference(this.J.actions[t])},getActionState:function(t){return o.safeReference(this.J.actionState[t])},getByChangeId:function(t){return i.find(this.J.actions,{changeSet:[{id:t}]})},getAllActionIdsByPageId:function(t){return i.map(i.filter(this.J.actions,{pageId:t}),"id")},getChangeApplier:function(t,n){var e=this.J.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return o.safeReference(i.filter(this.J.actions,{experimentId:t,variationId:n}))},getLayerActions:function(t){return o.safeReference(i.filter(this.J.actions,{id:"layerId:"+t}))},getExperimentActions:function(t){return o.safeReference(i.filter(this.J.actions,{id:"experimentId:"+t}))},getAll:function(){return o.safeReference(i.values(this.J.actions))}}},9289:function(t,n,e){var i=e(9590);t.exports={initialize:function(){this.J={},this.on(i.REGISTER_ASYNC_DEFERRED,this.bt),this.on(i.RESOLVE_DEFERRED,this.Et),this.on(i.REJECT_DEFERRED,this.It)},getRequest:function(t){return this.J[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},bt:function(t){this.J[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},It:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},9819:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);function a(t,n){return n||(n={}),t?(i.each(t,(function(t){if(!i.isString(t)){if(i.isObject(t)){var e=t.type,r=t.name||"_";n[e]||(n[e]={}),n[e][r]=!0}i.isArray(t)&&a(t,n)}})),n):n}t.exports={initialize:function(){this.J={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.audiences)||(i.each(t.data.audiences,i.bind((function(t){o.deepFreeze(t),i.merge(this.J.featuresNeeded,a(t.conditions)),this.J.audiences[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J.audiences))},getFeaturesNeeded:function(t){return o.safeReference(this.J.featuresNeeded[t]||{})},getAudiencesMap:function(){return o.safeReference(this.J.audiences)},get:function(t){return o.safeReference(this.J.audiences[t])},getAudienceName:function(t){return i.find(i.values(this.J.audiences),{id:t}).name||"Aud "+t}}},7525:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={},this.on(r.ADD_CHANGE,this.At),this.on(r.DATA_LOADED,this.ht)},getChange:function(t){return this.J[t]},ht:function(t){i.isEmpty(t.data.changes)||i.each(t.data.changes,i.bind(this.At,this))},At:function(t){o.deepFreeze(t),this.J[t.id]=t,this.emitChange()}}},5518:function(t,n,e){var i=e(4816),r=e(9590),o=e(8738);t.exports={initialize:function(){this.J={},i.each(o.Lifecycle,i.bind((function(t){this.J[t]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.Tt),this.on(r.CLEAR_CLEANUP_FN,this.St)},getCleanupFns:function(t){return i.cloneDeep(this.J[t])},Tt:function(t){this.J[t.lifecycle].push(t.cleanupFn),this.emitChange()},St:function(t){var n=this.J[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.J[t.lifecycle]=[],this.emitChange()}}},2405:function(t,n,e){var i=e(9590),r=e(6637);t.exports={initialize:function(){this.J={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.kt),this.on(i.SET_CLIENT_VERSION,this.Rt)},getClientName:function(){return this.J.name},getClientVersion:function(){return this.J.version},kt:function(t){t&&(this.J.name=t),this.emitChange()},Rt:function(t){t&&(this.J.version=t),this.emitChange()}}},8176:function(t,n,e){var i=e(9590);t.exports={initialize:function(){this.J={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Ct),this.on(i.SET_COOKIE_AGE,this.Nt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Dt)},getCurrentDomain:function(){return this.J.currentDomain},getDefaultAgeInSeconds:function(){return this.J.defaultAgeSeconds},getAutoRefresh:function(){return this.J.autoRefresh},Ct:function(t){this.J.currentDomain=t,this.emitChange()},Nt:function(t){this.J.defaultAgeSeconds=t,this.emitChange()},Dt:function(t){this.J.autoRefresh=t,this.emitChange()}}},325:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.dimensions)||(i.each(t.data.dimensions,i.bind((function(t){o.deepFreeze(t),this.J[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getById:function(t){return o.safeReference(this.J[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.J),{apiName:t}))}}},5973:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Ot)},getAll:function(){return i.cloneDeep(this.J)},conflictInObservingChanges:function(){return!this.J.mutationObserverAPISupported},isDisabled:function(){return this.J.disabled},isEditor:function(){return this.J.isEditor},clientHasAlreadyInitialized:function(){return this.J.alreadyInitialized},getForceAudienceIds:function(){return this.J.forceAudienceIds},getForceVariationIds:function(){return this.J.forceVariationIds},getPreviewLayerIds:function(){return this.J.previewLayerIds},getProjectToken:function(){return this.J.projectToken},getForceTracking:function(){return this.J.forceTracking},shouldActivate:function(){return!this.J.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.J.isPreview},shouldBootstrapDataForEditor:function(){return this.J.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.J.isPreview||this.J.isLegacyPreview||!this.getProjectToken()||this.J.isEditor)},shouldBailForDesktopApp:function(){return!this.J.isEditor&&this.J.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.J.isSlave&&!this.J.isEditor&&this.J.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.J.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.J.shouldOptOut},shouldSendTrackingData:function(){return!this.J.trackingDisabled&&(!!this.J.forceTracking||!this.J.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.J.isSlave},isRunningInDesktopApp:function(){return this.J.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.J.isRunningInV2Editor},Ot:function(t){i.extend(this.J,t),this.emitChange()}}},8622:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ht)},getAll:function(){return o.safeReference(i.values(this.J))},getEventsMap:function(){return o.safeReference(this.J)},get:function(t){return o.safeReference(this.J[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.J),{apiName:t}))},getByPageId:function(t){return o.safeReference(i.filter(this.J,{pageId:t}))},ht:function(t){i.isEmpty(t.data.events)||(i.each(t.data.events,i.bind((function(t){t.pageId||(t.pageId=t.viewId),o.deepFreeze(t),this.J[t.id]=t}),this)),this.emitChange())}}},6841:function(t,n,e){var i=e(4816),r=e(9590);function o(t){var n=[];return t&&i.isObject(t)?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.J={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.xt),this.on(r.REMOVE_EMITTER_HANDLER,this.Mt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],r=[];return i.each(e,i.bind((function(t){var n=o(t),e=this.J.handlers[n];e&&(r=r.concat(e))}),this)),n&&(r=i.filter(r,(function(t){return!t.publicOnly}))),r},xt:function(t){var n=o(t.filter);this.J.handlers[n]||(this.J.handlers[n]=[]),this.J.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},Mt:function(t){var n=!1,e=t.token;i.forOwn(this.J.handlers,i.bind((function(t,r){var o=i.filter(t,(function(t){return t.token!==e}));o.length!==t.length&&(n=!0,this.J.handlers[r]=o)}),this)),n&&this.emitChange()}}},5394:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null},this.on(r.DATA_LOADED,this.Pt),this.on(r.ACTIVATE,this.Lt),this.on(r.RECORD_GLOBAL_DECISION,this.Vt),this.on(r.SET_DOMCONTENTLOADED,this.Ut),this.on(r.SET_GA4_USER_ID,this.Ft)},getRevision:function(){return this.J.revision},getGlobalHoldbackThreshold:function(){return this.J.holdback},getProjectId:function(){return this.J.projectId},getSnippetId:function(){return this.J.snippetId},getAccountId:function(){return this.J.accountId},getNamespace:function(){return this.J.namespace},getActivationId:function(){return this.J.activationId},getActivationTimestamp:function(){return this.J.activationTimestamp},getAnonymizeIP:function(){return this.J.anonymizeIP},isGlobalHoldback:function(){return!!this.J.isGlobalHoldback},getListTargetingKeys:function(){return this.J.listTargetingKeys.slice()},getDCPServiceId:function(){return this.J.dcpServiceId},getDCPKeyfieldLocators:function(){return this.J.dcpKeyfieldLocators},getRecommenderServices:function(){return this.J.recommenderServices},getProjectJS:function(){return this.J.projectJS},getPlugins:function(){return this.J.plugins},getExperimental:function(){return o.safeReference(this.J.experimental)},getGA4UserId:function(){return this.J.ga4UserId},domContentLoadedHasFired:function(){return this.J.domContentLoaded},Lt:function(t){this.J.activationId=t.activationId,this.J.activationTimestamp=t.activationTimestamp,this.J.isGlobalHoldback=null},Vt:function(t){var n=t.isGlobalHoldback;if(null!==this.J.isGlobalHoldback&&this.J.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.J.isGlobalHoldback=n,this.emitChange()},Ft:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.J.ga4UserId=n,this.emitChange()},Pt:function(t){var n=i.pick(t.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId"]);if(0!==i.keys(n).length){i.extend(this.J,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},n),this.emitChange()}},Ut:function(){this.J.domContentLoaded=!0,this.emitChange()}}},2275:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.groups)||(i.each(t.data.groups,i.bind((function(t){o.deepFreeze(t),this.J[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getGroupsMap:function(){return o.safeReference(this.J)},get:function(t){return o.safeReference(this.J[t])}}},34:function(t,n,e){var i=e(4816),r=e(9590),o=e(5343);t.exports={initialize:function(){this.J={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Bt),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.zt)},getOriginalPushState:function(){return this.J.originalPushState},getOriginalReplaceState:function(){return this.J.originalReplaceState},Bt:function(){this.J.originalPushState||(this.J.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},zt:function(){this.J.originalReplaceState||(this.J.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},8726:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ht),this.on(r.SET_INTEGRATION_SETTINGS,this.jt)},ht:function(t){i.isEmpty(t.data.integrationSettings)||(i.each(t.data.integrationSettings,i.bind((function(t){this.J[t.id]=t}),this)),this.emitChange())},jt:function(t){var n=this.J[t.id];n?i.extend(n,t):this.J[t.id]=t},getAll:function(){return i.cloneDeep(i.values(this.J))},get:function(t){return i.cloneDeep(this.J[t])},getReference:function(t){return this.J[t]}}},3974:function(t,n,e){var i=e(4816),r=e(9590),o=e(7936),a="*";t.exports={initialize:function(){this.J={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Gt),this.on(r.RECORD_LAYER_DECISION,this.qt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Ht)},getLayerState:function(t,n){if(this.J[t]){var e=this.J[t];if(i.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return n?i.cloneDeep(i.find(e,{pageId:n})):i.cloneDeep(e["*"])}},getLayerStates:function(t){var n=[];for(var e in this.J)i.forEach(this.J[e],(function(e){(i.isUndefined(t)||e.namespace===t)&&n.push(i.cloneDeep(e))}));return n},getLayerStatesForAnalytics:function(){var t=[];for(var n in this.J)i.forEach(this.J[n],(function(n){t.push(i.pick(n,["layerId","decision","decisionEventId"]))}));return t},Gt:function(t){t.merge||(this.J={}),i.each(t.layerStates,i.bind((function(t){var n=t.layerId;t.pageId||(t.pageId=t.viewId);var e=t.pageId||a,r=this.J[n];if(i.isUndefined(r))this.J[n]={},this.J[n][e]=t;else{var o=r[e];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(this.J[n][e]=t)}}),this)),this.emitChange()},qt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.J[t.layerId]||{};t.pageId?(delete e["*"],e[t.pageId]=n):(e={})["*"]=n,this.J[t.layerId]=e,this.emitChange()},Ht:function(t){var n=t.layerId,e=t.pageId||a;this.J[n]?this.J[n][e]?(this.J[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},6346:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836),a=e(3008);t.exports={initialize:function(){this.J={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.ht)},ht:function(t){if(!i.isEmpty(t.data.layers)){var n=this;i.each(t.data.layers,(function(t){i.each(t.experiments,(function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||a.isSingleExperimentPolicy(t.policy)?a.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,i.each(e.variations,(function(t){i.each(t.actions,(function(t){t.pageId||(t.pageId=t.viewId)})),n.J.variations[t.id]=t})),n.J.experiments[e.id]=e})),o.deepFreeze(t),n.J.layers[t.id]=t})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.J.layers))},getCampaignsMap:function(){return o.safeReference(this.J.layers)},getExperimentsMap:function(){return o.safeReference(this.J.experiments)},getVariationsMap:function(){return o.safeReference(this.J.variations)},getCount:function(){return i.keys(this.J.layers).length},getAllByPageIds:function(t){return o.safeReference(i.filter(this.J.layers,(function(n){return i.some(t,i.partial(i.includes,n.pageIds))})))},get:function(t){return o.safeReference(this.J.layers[t])},getLayerByExperimentId:function(t){var n=i.find(this.J.layers,(function(n){return i.find(n.experiments,{id:t})}));return o.safeReference(n)},getExperimentByVariationId:function(t){var n;return i.some(this.J.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:t})&&(n=e),n})),n})),o.safeReference(n)}}},9985:function(t,n,e){var i=e(9590);t.exports={initialize:function(){this.J={logs:[]},this.on(i.LOG,this.Yt)},getLogs:function(){return this.J.logs},Yt:function(t){this.J.logs.push(t),this.emitChange()},tt:function(){return this.J.logs.slice()}}},3712:function(t,n,e){var i=e(9590),r=e(6836);t.exports={initialize:function(){this.J={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Kt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.$t)},get:function(){return r.safeReference(this.J.data)},hasTracked:function(){return this.J.hasTracked},Kt:function(t){r.deepFreeze(t),this.J.data=t,this.J.hasTracked=!1,this.emitChange()},$t:function(){this.J.hasTracked=!0}}},3312:function(t,n,e){var i=e(4816),r=e(9590),o=e(9505);t.exports={initialize:function(){this.J={},this.on(r.SET_PENDING_EVENT,this.Wt),this.on(r.REMOVE_PENDING_EVENT,this.Xt),this.on(r.LOAD_PENDING_EVENTS,this.Jt)},getEvents:function(){return this.J},getEventsString:function(){return o.stringify(this.J)},Wt:function(t){i.keys(this.J).length>=1e3&&this.Qt();var n=t.id,e=t.retryCount;this.J[n]&&this.J[n].retryCount===e||(this.J[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Xt:function(t){delete this.J[t.id],this.emitChange()},Jt:function(t){this.J=t.events,this.Qt(),this.emitChange()},Qt:function(){for(var t=i.sortBy(this.J,"timeStamp"),n=0;n<=t.length-1e3;n++)delete this.J[t[n].id];this.emitChange()}}},2856:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Kt)},isExpectingRedirect:function(){return i.isString(this.J.layerId)},getLayerId:function(){return this.J.layerId},Kt:function(t){this.isExpectingRedirect()||(this.J.layerId=t.layerId,this.emitChange())}}},1546:function(t,n,e){var i=e(4816),r=e(9590),o=e(8738);t.exports={initialize:function(){this.J={},this.J[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Zt)},Zt:function(t){i.isUndefined(this.J[o.PerformanceData.performance_marks][t.name])&&(this.J[o.PerformanceData.performance_marks][t.name]=[]),this.J[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i.mapValues(this.J[o.PerformanceData.performance_marks],(function(t){return i.map(t,(function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){return i.reduce(t,i.bind((function(t,n){var e=this.J[o.PerformanceData.performance_marks][n];return e&&(t[n]=Math.round(i.reduce(e,(function(t,n){return t+n.duration}),0))),t}),this),{})}}},8692:function(t,n,e){var i=e(4816),r=e(9590),o=e(8738),a=e(7936);t.exports={initialize:function(){this.J=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.tn)},tn:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.J[n])throw new Error("Invalid plugin type specified: "+n);this.J[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.J;if(this.J[t])return this.J[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},9147:function(t,n,e){var i=e(4816),r=e(9590),o=e(6094);t.exports={initialize:function(){this.J={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.nn)},getPendingAttributeValue:function(t){return t=i.isArray(t)?t.concat("pending"):[t,"pending"],o.getFieldValue(this.J,t)},nn:function(t){o.setFieldValue(this.J,t.key,{pending:t.pending}),this.emitChange()}}},4182:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.en),this.on(r.RECORD_API_USAGE,this.rn),this.on(r.INITIALIZE_CHANGE_METRICS,this.an),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.un),this.on(r.RECORD_AUDIENCE_USAGE,this.cn),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.sn),this.on(r.RECORD_CHANGE_OVERHEATED,this.fn),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.ln),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.dn),this.on(r.RECORD_INTEGRATION_USAGE,this.vn),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.hn),this.on(r.RECORD_LAYER_POLICY_USAGE,this.pn),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.gn),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.mn),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this._n),this.on(r.RECORD_VISITOR_ID_ERROR,this.wn),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this.yn)},en:function(t){i.merge(this.J,t),this.emitChange()},rn:function(t){this.J.apis[t.methodName]||(this.J.apis[t.methodName]=0),this.J.apis[t.methodName]++,this.emitChange()},an:function(){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0)},sn:function(t){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.J.data.extras.changeMacrotaskRate&&(this.J.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},fn:function(){i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0),this.J.data.extras.numOverheatedChanges++,this.emitChange()},dn:function(t){this.J.DOMObservation[t.counterName]||(this.J.DOMObservation[t.counterName]=0),this.J.DOMObservation[t.counterName]++,this.emitChange()},bn:function(t,n,e){i.isUndefined(this.J.featuresNeeded[t])&&(this.J.featuresNeeded[t]={});var r=this.J.featuresNeeded[t];i.each(n,(function(t){r[t]||(r[t]={}),r[t][e]||(r[t][e]=!0)}))},vn:function(t){this.bn("integrations",t.integrations,t.layerId)},ln:function(t){this.bn("changeTypes",t.changeTypes,t.layerId)},un:function(t){this.bn("activationTypes",[t.activationType],t.entityId),this.emitChange()},gn:function(t){this.bn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},hn:function(t){this.bn("layerFeatures",[t.feature],t.entityId),this.emitChange()},pn:function(t){this.bn("policy",[t.policy],t.layerId),this.emitChange()},cn:function(t){this.bn("audiences",t.audienceTypes,t.layerId),this.emitChange()},mn:function(t){this.J.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},_n:function(t){this.bn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},wn:function(t){this.J.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},yn:function(t){this.bn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.J.inRumSample},getRumId:function(){return this.J.id},getRumHost:function(){return this.J.RumHost},getApiData:function(){return this.J.apis},getDOMObservationData:function(){return this.J.DOMObservation},getRumData:function(){return i.cloneDeep(this.J.data)},getScriptSrc:function(){return this.J.src},getFeaturesNeededData:function(){var t=this.J.featuresNeeded,n={};return i.forOwn(t,(function(t,e){var r=i.keys(t);i.isEmpty(r)||(n[e]={}),i.forEach(r,(function(r){n[e][r]=i.keys(t[r]).length}))})),n}}},4544:function(t,n,e){var i=e(9590);t.exports={initialize:function(){this.J={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.En)},En:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.J.natives=t.sandboxedFunctions,this.J.initialized=!0,this.emitChange()},getAll:function(){return this.J.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.J.natives[t]||null},isInitialized:function(){return this.J.initialized}}},9149:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(7276);t.exports={initialize:function(){this.J={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.In),this.on(r.LOAD_SESSION_STATE,this.An)},getState:function(){return i.cloneDeep(this.J)},getSessionId:function(){return this.J.sessionId},An:function(t){this.J.sessionId=t.sessionId,this.J.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},In:function(){var t=o.now(),n=this.J.lastSessionTimestamp;(!this.J.sessionId||t-n>18e5)&&(this.J.sessionId=a.generate()),this.J.lastSessionTimestamp=t,this.emitChange()}}},1440:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.Tn(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Sn),this.on(r.REGISTER_PREVIOUS_BATCH,this.kn),this.on(r.REGISTER_TRACKER_VISITOR,this.Rn),this.on(r.REGISTER_TRACKER_EVENT,this.Cn),this.on(r.REGISTER_TRACKER_DECISION,this.Nn),this.on(r.RESET_TRACKER_EVENTS,this.Dn),this.on(r.RESET_TRACKER_STORE,this.Tn),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.On),this.on(r.SET_TRACKER_POLLING,this.xn),this.on(r.SET_TRACKER_BATCHING,this.Mn),this.on(r.SET_TRACKER_SEND_EVENTS,this.Pn),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ln),this.on(r.SET_TRACKER_DIRTY,this.Vn),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Un)},getPersistableState:function(){return this.J.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.J.data,decisions:this.J.decisions,decisionEvents:this.J.decisionEvents,previousBatches:this.J.previousBatches}:{}:null},Ln:function(t){i.isEmpty(this.J.data)||i.isEmpty(t.data)||(this.Sn(),this.J.previousBatches.push(this.getEventBatch())),this.J.data=t.data||{},this.J.decisions=t.decisions||[],this.J.decisionEvents=t.decisionEvents||[],i.isEmpty(this.J.previousBatches)||i.isEmpty(t.previousBatches)?this.J.previousBatches=t.previousBatches||[]:this.J.previousBatches=this.J.previousBatches.concat(t.previousBatches),this.emitChange()},Vn:function(t){this.J.isDirty=t,this.emitChange()},Cn:function(t){var n=this.Fn();(i.isEmpty(n.snapshots)||!i.isEmpty(this.J.decisionEvents))&&this.Bn(),this.zn().events.push(t.event),this.J.decisions=t.decisions,this.Vn(!0)},Nn:function(t){this.J.decisionEvents.push(t.decisionEvent),this.J.decisions=t.decisions,this.Vn(!0)},Rn:function(t){i.isEmpty(this.J.data)?this.J.data=t.data:this.Sn(),this.J.data.visitors.push(t.visitor),this.J.decisions=t.decisions,this.J.decisionEvents=[],this.Vn(!0)},kn:function(t){this.J.previousBatches.push(t),this.Vn(!0)},Tn:function(){this.J={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Dn:function(){var t=this.Fn();this.J.data.visitors=[t],t.snapshots=[],this.Vn(!0)},On:function(){this.J.previousBatches=[],this.Vn(!0)},xn:function(t){this.J.polling=t,this.emitChange()},Mn:function(t){this.J.shouldBatch=t,this.emitChange()},Pn:function(t){this.J.canSend=t,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.J.data)},getPreviousBatches:function(){return i.cloneDeep(this.J.previousBatches)},jn:function(){return this.J.decisionEvents.slice()},Gn:function(){this.J.decisionEvents=[]},qn:function(){return this.J.decisions.slice()},isPolling:function(){return this.J.polling},shouldBatch:function(){return this.J.shouldBatch},zn:function(){return i.last(this.Fn().snapshots)},Fn:function(){return i.last(this.J.data.visitors)},Bn:function(){var t=this.jn();this.Fn().snapshots.push({decisions:this.qn(),events:t}),this.Gn(),this.Vn(!0)},Sn:function(){this.J.decisionEvents.length>0&&this.Bn()},hasEventsToSend:function(){if(!i.isEmpty(this.J.decisionEvents))return!0;if(!i.isEmpty(this.J.data)&&i.some(this.J.data.visitors||[],(function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.J.previousBatches)},canSend:function(){return this.J.canSend},Un:function(t){var n=this.Fn();n&&(n.attributes=t.attributes)}}},7460:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={},this.on(r.SET_UA_DATA,this.ht)},ht:function(t){i.isEmpty(this.J)&&(this.J=t.data)},get:function(){return i.cloneDeep(this.J)}}},8892:function(t,n,e){var i=e(4816),r=e(9590),o=e(7936),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.J=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.Hn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Yn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.$n),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Wn),this.on(r.SET_GLOBAL_TAGS,this.Xn),this.on(r.RESET_VIEW_STATES,this.Jn),this.on(r.SET_VIEW_BATCHING,this.Mn)},getAll:function(){var t={};for(var n in this.J.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){return i.reduce(this.J.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(e),t}),this),[])},shouldBatch:function(){return this.J.shouldBatch},getViewState:function(t){var n=i.cloneDeep(this.J.viewStates[t]),e=this.J.globalTags;return n.metadata=i.extend({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates(),n=i.map(t,(function(t){return t.metadata})),e=[{}].concat(n);return i.extend.apply(i,e)},getActivationEventId:function(t){return this.J.viewStates[t]?this.J.viewStates[t].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.J.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(this.getViewState(e)),t}),this),[])},isViewActive:function(t){var n=this.J.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i.cloneDeep(this.J.globalTags)},Jn:function(){this.J.viewStates={},this.emitChange()},Hn:function(t){i.each(t.views,i.bind((function(t){var n=t.id;this.J.viewStates[n]||(this.J.viewStates[n]={id:n,isActive:i.isBoolean(t.isActive)?t.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}})}),this)),this.emitChange()},Yn:function(t){var n=t.view.id;if(!this.J.viewStates[n])throw new Error("No view exists with id "+n);this.J.viewStates[n].isActive=t.isActive,t.isActive?this.J.viewStates[n].activatedTimestamp=t.timestamp:(this.J.viewStates[n].parsedMetadata={},this.J.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.J.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.J.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;if(!this.J.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.J.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Wn:function(t){var n=t.pageId;this.J.viewStates[n]&&(this.J.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Xn:function(t){i.extend(this.J.globalTags,t),this.emitChange()},Mn:function(t){this.J.shouldBatch=t,this.emitChange()}}},1969:function(t,n,e){var i=e(4816),r=e(9590),o=e(6836);t.exports={initialize:function(){this.J={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.ht)},getAll:function(){return o.safeReference(i.values(this.J.views))},getPagesMap:function(){return o.safeReference(this.J.views)},get:function(t){return o.safeReference(this.J.views[t])},getByApiName:function(t){return o.safeReference(this.J.apiNamesToViews[t])},apiNameToId:function(t){var n=this.J.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.J.views[t];if(n)return n.apiName},getNumberOfPages:function(){return i.keys(this.J.views).length},getAllViewsForActivationType:function(t){return i.filter(this.J.views,{activationType:t})},ht:function(t){i.isEmpty(t.data.views)||(i.each(t.data.views,i.bind((function(t){o.deepFreeze(t),this.J.views[t.id]=t,this.J.apiNamesToViews[t.apiName]=t}),this)),this.emitChange())}}},4264:function(t,n,e){var i=e(4816),r=e(9590),o=e(6094);t.exports={initialize:function(){this.J={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.te)},getVisitorProfile:function(){return this.J.profile},getVisitorProfileMetadata:function(){return this.J.metadata},getAttribute:function(t){var n=this.J.profile;return i.cloneDeep(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i.cloneDeep(this.J.metadata[t])},getVisitorIdFromAPI:function(){return this.J.visitorId},te:function(t){this.J.profile=t.profile,this.J.metadata=t.metadata,this.emitChange()},Zn:function(t){i.each(t.attributes,i.bind((function(t){var n=t.key;o.setFieldValue(this.J.profile,n,t.value),t.metadata&&i.forOwn(t.metadata,i.bind((function(t,e){o.setFieldValue(this.J.metadata,n.concat(e),t)}),this))}),this)),this.emitChange()},Qn:function(t){this.J.visitorId=t,this.emitChange()}}},2676:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){return i.filter(this.J,(function(t){return!!t.rule_json}))},getVisitorAttribute:function(t){var n=i.values(this.J);if(t.datasourceId&&(n=i.filter(n,{dcp_datasource_id:String(t.datasourceId)})),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.J[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var r=i.filter(n,{name:t.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(t){i.isEmpty(t.data.visitorAttributes)||(i.each(t.data.visitorAttributes,i.bind((function(t){this.J[t.id]=t}),this)),this.emitChange())}}},9092:function(t,n,e){var i=e(4816),r=e(9590),o=e(9505);t.exports={initialize:function(){this.J={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ee),this.on(r.MERGE_VARIATION_ID_MAP,this.re),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.oe),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.ae),this.on(r.UPDATE_CONTEXTUAL_MAB_MAP,this.ue),this.on(r.MERGE_CONTEXTUAL_MAB_MAP,this.ce)},getContextualMabMap:function(){return i.cloneDeep(this.J.contextualMabMap)},getContextualMabMapString:function(){return o.stringify(this.J.contextualMabMap)},ue:function(t){var n=this.J.contextualMabMap[t.layerId]||{};i.isEqual(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.J.contextualMabMap[t.layerId]=n,this.emitChange())},ce:function(t){var n=this.J.contextualMabMap;i.forEach(t.contextualMabMap,(function(t,e){n[e]||(n[e]={}),i.forEach(t,(function(t,i){n[e][i]||(n[e][i]=t)}))})),this.J.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return i.cloneDeep(this.J.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.J.variationIdMap)},ee:function(t){var n=this.J.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.J.variationIdMap[t.layerId]=n,this.emitChange())},re:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;i.each(n||{},(function(t,n){e[n]?i.assign(e[n],t):e[n]=t})),this.J.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.J.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.J.preferredLayerMap)},getPreferredLayerId:function(t){return this.J.preferredLayerMap[t]},oe:function(t){this.J.preferredLayerMap[t.groupId]!==t.layerId&&(this.J.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ae:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;i.assign(e,n),this.J.preferredLayerMap=e,this.emitChange()}}},310:function(t,n,e){e(4816);var i=e(9590);e(1215).j;t.exports={initialize:function(){this.J={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.ht),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.se),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.fe)},getEvents:function(){return this.J.events},getForeignEvents:function(){return this.J.foreignEvents},getForeignEventQueues:function(){return this.J.foreignEventQueues},ht:function(t){this.J.events=t,this.emitChange()},se:function(t){this.J.foreignEvents[t.key]=t.value},fe:function(t){this.J.foreignEventQueues[t.key]=t.value}}},4685:function(t,n,e){var i=e(9590);t.exports={initialize:function(){this.J={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.le)},getBaseMap:function(){return this.J.baseMap},getEventQueue:function(){return this.J.eventQueue},getLastEvent:function(){return this.J.lastEvent},getCleared:function(){return this.J.cleared},getInitialized:function(){return this.J.initialized},le:function(t){this.J[t.key]=t.value}}},275:function(t,n,e){var i=e(4816),r=e(9590);t.exports={initialize:function(){this.J={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.ht),this.on(r.DATA_LOADED,this.de)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.J.randomId},getVisitorIdLocator:function(){return this.J.visitorIdLocator},ht:function(t){i.extend(this.J,t),this.emitChange()},de:function(t){i.isEmpty(t.data.visitorIdLocator)||(this.J.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},3666:function(t,n,e){var i=e(4816),r=e(7936),o=e(9590);t.exports={initialize:function(){this.J={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.ve),this.on(o.XDOMAIN_ADD_FRAME,this.he),this.on(o.XDOMAIN_SET_MESSAGE,this.pe),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.ge),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.me),this.on(o.XDOMAIN_SET_DISABLED,this._e)},getMessages:function(){return i.cloneDeep(this.J.messages)},getOffset:function(){return 0===this.J.messages.length?0:this.J.messages[0].data.id},getNextMessageId:function(){return this.J.messages.length+this.getOffset()},getMessageById:function(t){return this.J.messages[t-this.getOffset()]},getSubscribers:function(){return this.J.subscribers},getFrames:function(){return this.J.frames},getNextFrameId:function(){return this.J.frames.length},getDefaultFrame:function(){return this.J.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.J.canonicalOrigins)},isDisabled:function(){return this.J.disabled},ve:function(t){this.J.defaultFrame=t},he:function(t){this.J.frames.push(t)},pe:function(t){for(this.J.messages[t.messageId-this.getOffset()]=t.message;this.J.messages.length>1e3;){var n=this.J.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},ge:function(t){this.J.subscribers.push(t.subscriber)},me:function(t){this.J.canonicalOrigins=t.canonicalOrigins},_e:function(t){this.J.disabled=t.disabled}}},2524:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},8872:function(t,n,e){var i=e(8064).U;n.Error=i("TagError")},6530:function(t,n,e){var i=e(8738).PluginTypes,r=e(9932).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(2524),n.Error=e(8872).Error},9621:function(t,n,e){var i=e(9590),r=e(349),o=e(212).Promise,a=e(9932).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},7266:function(t,n,e){var i=e(3485),r=e(5343);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},7690:function(t,n,e){var i=e(4816),r=e(8064).U,o=e(8701),a=e(8416),u=e(5343),c=e(9590),s=e(9932),f=e(349),l=s.get("stores/cookie_options"),d=n.SetError=r("CookieSetError"),v=n.MismatchError=r("CookieMismatchError");n.getAll=function(t){var e,r,o,u,c;i.isUndefined(t)&&(t=!0),e=a.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===s[c=n.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);t&&(f=n.safeDecodeURIComponent(f)),s[c]=f}return s},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var r,o,a=t.hostname.split("."),u=[],s=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(h,r)){o={domain:e?"."+r:r};try{n.set(p,Math.random().toString(),o),n.remove(p,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),a.setCookie(t+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),s){var w=r.encodeValue,y=n.get(t,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+t+'"');throw new v('Expected "'+e+'" for "'+t+'", got "'+y+'"')}}},n.remove=function(t,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)n.set(t,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},8064:function(t,n,e){var i=e(8397),r=i("InternalError");n.G=r,n.U=function(t){return i(t,r)}},4255:function(t,n,e){var i=e(4816),r=e(212).Promise;t.exports=function(){var t,n,e=new r((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,i.toArray(arguments)),e},e.reject=function(){return n.apply(null,i.toArray(arguments)),e},e}},6836:function(t,n,e){var i=e(4816);n.deepFreeze=function(t){},n.safeReference=function(t){return i.cloneDeep(t)}},6094:function(t,n,e){var i=e(4816);n.getFieldValue=function(t,n){i.isArray(n)||(n=[n]);for(var e=t,r=0;r<n.length;r++){var o=n[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},n.setFieldValue=function(t,n,e){if(!i.isArray(n)||i.isEmpty(n))throw new Error("Attempted to set an invalid key path: "+n);for(var r=t,o=0;o<n.length-1;o++){var a=n[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[n[n.length-1]]=e}},7936:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(8738),u=e(349),c=e(9505);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.we=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(t){var n=this.ye(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},s.prototype.setLogMatcher=function(t){i.isString(t)?this.logMatcher=t:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(t){return this.we()&&this.logLevel>=t},s.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var r=i.some(n,(function(t){if(!i.isString(t))try{t=c.stringify(t)}catch(n){}return i.isString(t)&&i.includes(t,e)}));return r&&"GROUPSTART"===t&&this.logGroup++,r},s.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};u.dispatch(r.LOG,e)},s.prototype.flush=function(){var t=e(9932).get("stores/log");this.logGroup=0;var n=t.getLogs();i.each(n,i.bind((function(t){this.be(t.logLevel,t.logMessage,!0)}),this))},s.prototype.be=function(t,n,e){var r,o=t;if(console)switch(t){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.we()&&!this.shouldLog(o)||(i.isArray(n)&&i.isString(n[0])&&(n=this.Ee(n)),this.storeLog(t,n)),r&&this.shouldLog(o)&&this.matchesLogMessage(t,n)&&r.apply(console,n)}catch(u){console&&(console.error?console.error(u):console.log(u))}},s.prototype.debug=function(){this.be(a.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this.be(a.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var t=this.Ee([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(a.LogLevel.INFO,t)},s.prototype.warn=function(){this.be(a.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.be(a.LogLevel.ERROR,[this.Ie(),t]),this.be(a.LogLevel.INFO,[t.stack])):this.be(a.LogLevel.ERROR,n)},s.prototype.groupCollapsed=function(){this.be("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this.be("GROUPEND",[].slice.call(arguments))},s.prototype.Ee=function(t){var n=this.Ie().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},s.prototype.Ie=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.ye=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),!i.isUndefined(a.LogLevel[t]))?a.LogLevel[t]:null},t.exports=new s},3253:function(t,n,e){var i;i=e(2175),t.exports=i},3008:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},9801:function(t,n,e){var i=e(4816),r=e(212).Promise,o=e(5343);n.pollFor=function(t,n,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),n=n||50,new r((function(e,i){!function r(){var a;if(!u()){try{var c=t();if(c)return e(c)}catch(s){a=s}return o.setTimeout(r,n)}i(a||new Error("Poll timed out"))}()}))}},2896:function(t,n,e){var i=e(4816),r=e(212).Promise;n.firstToResolve=function(t){return new r((function(n){i.each(t,(function(t){r.resolve(t).then(n,(function(){}))}))}))}},3485:function(t,n,e){var i=e(4816),r=e(5343);n.getQueryParams=function(){var t=r.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],i=0;i<n.length;i++){var o="",a="",u=n[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return i.map(t,(function(t,n){return n+"="+t})).join("&")}},8810:function(t,n,e){var i=e(4816),r=e(7936),o=e(5343);function a(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(t){t()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=a},7179:function(t,n,e){var i=e(4816),r=e(9932).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&i.isString(t.variationId)?i.pick(t,["experimentId","variationId"]):null}},3768:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(9932),u=e(8416),c=e(8738),s=e(349),f=e(7936),l=a.get("stores/sandbox"),d=e(5343);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i.mapValues(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(d){f.warn("Unable to create a sandbox: ",d)}}},9787:function(t,n,e){var i=e(8416),r=e(7936),o=e(9895);n.addScriptAsync=function(t,n){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=t,n&&(o.onload=n),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(c){r.debug("DocumentEnv.write failed for "+t+": "+c.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},3406:function(t,n,e){var i=e(212).Promise,r=e(5343);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},6349:function(t,n,e){var i=e(4816),r=e(2826),o=e(5343),a=e(9590),u=e(9932),c=e(349),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i.isEmpty(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},140:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},8340:function(t,n,e){var i=e(4816),r=e(212).Promise,o=e(9590),a=e(9932),u=e(349),c=e(4248),s=e(8064).U,f=e(8701),l=e(8416),d=e(9505),v=e(9801),h=e(1683),p=e(5343),g=e(7936),m=a.get("stores/xdomain"),_=n.Error=s("XDomainStorageError");function w(t){var n;if(i.find(m.getFrames(),{origin:t.origin})){try{n=d.parse(t.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new _("Xdomain Error: "+n.response));else if("SYNC"===n.type)i.each(m.getSubscribers(),(function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),i.isNumber(n.id)){var r=m.getNextMessageId();n.id>=r?c.emitInternalError(new _("Message ID is greater than expected maximum ID ("+n.id+">"+r+")")):n.id<0?c.emitInternalError(new _("Message ID is < 0: "+n.id)):c.emitInternalError(new _("No stored message found for message ID: "+n.id))}else c.emitInternalError(new _("Message ID is not a number: "+n.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function y(t,n){return n||(n=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},t,{id:m.getNextMessageId()}),resolver:e};n?m.isDisabled()||b(r,n):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function b(t,n){var e=t.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:i.extend({},t,{startTime:f.now()})}),n.target.postMessage(d.stringify(e),n.origin)}n.setItem=function(t,n,e){return y({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return y({type:"GET",key:t},n)},n.fetchAll=function(t){return y({type:"GETALL"},t)},n.deleteData=function(t,n){return y({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new r((function(e){var i=l.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,r={},o=i.keys(t);return i.each(n,(function(t){r[t]=[],i.each(o,(function(n){var o=h.getUserIdFromKey(n,t);!e&&o&&(e=o),o&&!i.includes(r[t],o)&&r[t].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},n.load=function(t,e){p.addEventListener("message",w);return v.pollFor((function(){return!!l.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||i.each(m.getMessages(),(function(n){n.startTime||b(n,t)}))}))}},9895:function(t,n,e){var i=e(4816),r=e(9590),o=e(8701),a=e(349),u=e(9505),c=e(7936),s=e(212).Promise,f=e(3768);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i.isObject(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i.isObject(t.headers)&&i.forEach(t.headers,(function(t,n){o.setRequestHeader(n,t)})),o.send(t.data)}))},n.retryableRequest=function(t,e,u,f){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:t,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",t," It will be retried ",f-u," times.")),t}))},n.sendBeacon=n.request},4927:function(t,n,e){var i=e(4816),r=e(9590),o=e(8136),a=e(5175),u=e(8701),c=e(9932),s=e(8738),f=e(6787),l=e(349),d=e(7936),v=e(6530),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),_=c.get("stores/view_data");function w(t,n){i.forEach(t,(function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))}n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){var t=m.getActiveViewStates();i.each(t,(function(t){var e=_.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?i.reduce(t.tags,(function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(r){e=r,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,r):d.error(r)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(n){t[n.provides]=c.evaluate(n.getter)})),t},n.registerViews=function(t){l.dispatch(r.REGISTER_VIEWS,{views:t})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=_.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var a=[];return i.each(t,(function(t){var u=m.getViewState(t.id),c=n.createViewTicket();if(u.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,c)||n.deactivate(t)}catch(v){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),v)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,c))return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(v){return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),v)}if(a.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var f=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:t.id})}w(h.getByPageId(t.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},n.deactivate=function(t){m.getViewState(t.id).isActive?(n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t}),w(h.getByPageId(t.id),!1)):d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i.isEmpty(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},1683:function(t,n,e){var i=e(4816),r=e(349),o=e(9590),a=e(1623),u=e(2755),c=e(7690),s=e(8701),f=e(9932),l=e(8738),d=e(9505),v=e(6094),h=e(871).mM,p=e(7936),g=e(212).Promise,m=e(3485),_=e(8738).VisitorStorageKeys,w=e(5343),y=f.get("stores/cookie_options"),b=f.get("stores/global"),E=f.get("stores/layer"),I=f.get("stores/plugins"),A=f.get("stores/rum"),T=f.get("stores/session"),S=f.get("stores/visitor_id"),k=f.get("stores/visitor_bucketing"),R=f.get("stores/visitor"),C=f.get("stores/provider_status");function N(t,n){var e=function(t,e){var i;n.attributionType&&(i=s.now()),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(n.getter){var a=n.provides;if(i.isArray(a)||(a=[a]),!i.includes(["queryParams","url"],a[0]))if(!(n.isSticky&&!i.isUndefined(v.getFieldValue(t,a)))){var u;try{var c=f.evaluate(n.getter);i.isFunction(c)&&(c=c((function(){return v.getFieldValue(t,a)}),(function(t){e(a,t)}))),i.isUndefined(c)||(n.isAsync?(u=c.then((function(t){e(a,t)}),(function(t){p.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),r.dispatch(o.SET_VISITOR_ATTRIBUTE_PENDING,{key:a,pending:u})):e(a,c))}catch(l){p.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+l.message)}return u}}}function D(t){var n=M(t),e=h.getItem(n);return i.isString(e)&&(e=V(e)),e}function O(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function x(t,n,e){try{var i=M(t);e||(n=d.stringify(n));try{h.setItem(i,n)}catch(r){throw p.warn("Visitor / Unable to set localStorage key, error was:",r),new Error("Unable to set localStorage")}}catch(r){p.warn("Unable to persist visitor data:",r.message)}}function M(t){var e=S.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function P(t,e){if(!S.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(L(t)){var a=n.getStorageKeyFromKey(t);if(i.includes(_,a)){var c=M(a);if(!(t.indexOf(c)<=0)&&(e=V(e)))if(a===_.EVENT_QUEUE)r.dispatch(o.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:u.deserialize(e)});else if(a===_.EVENTS)r.dispatch(o.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:u.deserialize(e)});else if(a===_.LAYER_STATES)r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.map(e,O),merge:!0});else if(a===_.VARIATION_MAP)r.dispatch(o.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(a===_.CONTEXTUAL_MAB)r.dispatch(o.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(a===_.VISITOR_PROFILE){var s=e;i.each(["custom"],(function(t){var n=I.getPlugin(l.PluginTypes.visitorProfileProviders,t);if(n){if(s.profile&&s.metadata){var e=function(t,n,e){var r=R.getAttribute(n),o=R.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(i.isEmpty(r))return{data:a,metadata:u};var c={};return i.forOwn(a,(function(t,n){var r,a;o&&o[n]&&(r=o[n].lastModified),u&&u[n]&&(a=u[n].lastModified),(e===l.AttributionTypes.FIRST_TOUCH&&r>=a||e===l.AttributionTypes.LAST_TOUCH&&a>=r||i.isUndefined(r)&&a)&&(c.data=c.data||{},c.data[n]=t,a&&(c.metadata=c.metadata||{},c.metadata[n]=c.metadata[n]||{},c.metadata[n].lastModified=a))})),c}(s,t,n.attributionType);if(!i.isEmpty(e)){var a=[];i.forOwn(e.data,(function(n,i){var r=e.metadata[i],o={key:[t,i],value:n,metadata:r};a.push(o)})),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:a})}}}else p.debug("Attribute type",t,"not used by any audiences")}))}}}}function L(t){return t.split("$$")[0].indexOf("://")>0}function V(t){try{return d.parse(t)}catch(n){return p.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+s.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=S.getVisitorIdLocator();return R.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case l.VisitorIdLocatorType.COOKIE:n=c.get(e);break;case l.VisitorIdLocatorType.JS_VARIABLE:n=w.getGlobalByPath(e);break;case l.VisitorIdLocatorType.LOCALSTORAGE:try{n=w.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case l.VisitorIdLocatorType.QUERY:n=m.getQueryParamValue(e)}try{if(!n)throw p.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if(!i.isString(n)&&!i.isNumber(n))throw p.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(a=n)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a),new Error("Customer provided visitor id is not a string or number")}catch(s){throw A.getSampleRum()&&r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!0}),s}var a;A.getSampleRum()&&(r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!1}),r.dispatch(o.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):c.get(l.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return h.keys().length>0},n.setId=function(t){var e,u,s=S.getBucketingId();r.dispatch(o.SET_VISITOR_ID,t),S.getBucketingId()!==s&&(!function(){!function(t,n){0;a.initializeStore(t,n)}(D(_.EVENTS)||[],D(_.EVENT_QUEUE)||[]);var t=(e=_.LAYER_STATES,u=S.getBucketingId(),c=[],s=new RegExp(u+"\\$\\$([^$]+?)\\$\\$"+e),i.each(h.keys(),(function(t){var n=t.match(s);if(n){var e={namespace:n[1],userId:u,item:V(h.getItem(t))};c.push(e)}})),c);var e,u,c,s;i.forEach(t,(function(t){t.item=i.map(t.item,O)})),d=t,v=[],i.each(d,(function(t){i.each(t.item,(function(n){n.namespace=t.namespace,v.push(n)}))})),g=v,r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.filter(g,(function(t){return!!t.decision}))}),p=D(_.SESSION_STATE)||{},p=i.extend({lastSessionTimestamp:0,sessionId:null},p),r.dispatch(o.LOAD_SESSION_STATE,p),function(t){var n,e,a=I.getAllPlugins(l.PluginTypes.visitorProfileProviders),u=i.filter(a,(function(t){return i.isFunction(t.restorer)}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=i.reduce(n,(function(t,n,e){var r=n,o=i.find(u,{provides:e});return o&&(r=o.restorer(n)),t[e]=r,t}),{}),r.dispatch(o.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(D(_.VISITOR_PROFILE)||{});var f=D(_.TRACKER_OPTIMIZELY);f&&(m=f,r.dispatch(o.SET_TRACKER_PERSISTABLE_STATE,m));var d,v;var p;var g;var m;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData());try{S.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(f){if(p.error("Visitor / Unable to persist visitorId, disabling tracking"),r.dispatch(o.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=f,null!=(u=c.MismatchError)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](e):e instanceof u)throw p.error("Visitor / Cookie not set to correct value:",f),new Error("Cookie mismatch error while persisting visitorId");throw f}n.refreshSession()},n.getVariationIdMap=function(){return D(_.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){r.dispatch(o.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=k.getVariationIdMapString();x(_.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return D(_.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){r.dispatch(o.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=k.getContextualMabMapString();x(_.CONTEXTUAL_MAB,t,!0)},n.getPreferredLayerMap=function(){return D(_.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){r.dispatch(o.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){x(_.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){r.dispatch(o.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var r=i.filter(t,(function(t){return!t.isLazy}));return n.populateVisitorData(r,e)},n.populateLazyVisitorData=function(t,e,r){p.debug("Populating lazy visitor. List of all providers",t);var o=i.filter(t,(function(t){return t.isLazy&&r.has(t.provides)}));return p.debug("Filtered list of providers that are lazy and present in audiences",o),n.populateVisitorData(o,e)},n.populateVisitorData=function(t,n){n=n||{};var e=i.partial(N,n),r=i(t).filter({isAsync:!0}).map(e).filter().value();return i.forEach(i.filter(t,(function(t){return!t.isAsync})),e),r.length>0?g.all(r):g.resolve()},n.persistBehaviorEvents=function(t){x(_.EVENTS,t)},n.persistBehaviorEventQueue=function(t){x(_.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=D(_.EVENTS)||[],n=D(_.EVENT_QUEUE)||[];return u.deserialize(t).length+u.deserialize(n).length},n.persistLayerStates=function(){var t=E.getLayerStates(n.getNamespace());t=i.map(t,(function(t){return i.omit(t,"namespace")})),x(_.LAYER_STATES,t)},n.persistSessionState=function(){x(_.SESSION_STATE,T.getState())},n.persistVisitorProfile=function(){x(_.VISITOR_PROFILE,function(){var t=R.getVisitorProfile(),n=R.getVisitorProfileMetadata(),e=I.getAllPlugins(l.PluginTypes.visitorProfileProviders);if(e){var r=i.reduce(e,(function(t,n){return n.provides&&(t[n.provides]=n),t}),{});t=i.omitBy(t,(function(t,n){var e=r[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}())},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=k.getPreferredLayerMapString(),x(_.LAYER_MAP,t,!0),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var r;return i.includes(t,e)&&i.includes(t,"_")&&i.includes(t,"$$")&&i.includes(t.slice(t.indexOf("$$")),n.getNamespace())&&(r=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),r},n.maybePersistVisitorId=function(t){t.randomId&&(y.getAutoRefresh()||n.getCurrentId()!==t.randomId?(c.set(l.COOKIES.VISITOR_ID,t.randomId),p.log("Persisting visitorId:",t.randomId)):p.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return R.getAttribute(t)},n.getPendingAttributeValue=function(t){return C.getPendingAttributeValue(t)},n.isForeignKey=L,n.checkKeyForVisitorId=function(t){var e=S.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],r=n.getStorageKeyFromKey(t);if(i.includes(l.StorageKeys,r))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var r=e.indexOf("_");n=e.substring(r+1)}else n=e;return i.includes(i.values(l.AllStorageKeys),n)?n:null},n.deleteOldLocalData=function(){var t=h.keys();i.each(t,(function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||h.removeItem(t)}))},n.deleteOldForeignData=function(){var t=h.keys();i.each(t,(function(t){n.isForeignKey(t)&&h.removeItem(t)}))},n.loadForeignData=function(){i.each(h.keys(),(function(t){var n=h.getItem(t);n&&P(t,n)}))},n.getNamespace=function(){return b.getNamespace()},n.serializeFieldKey=function(t){return i.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=c.getAll();i.forEach(i.keys(t),(function(t){0===t.indexOf(l.COOKIES.SESSION_STATE+"$$")&&c.remove(t)}))}},4094:function(t,n,e){var i=e(4816),r=e(8738);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=i.map(t.listTargetingCookies,(function(t){return{type:r.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},4979:function(t,n,e){e(9932).register("env/jquery",e(6031))},6031:function(t,n,e){var i,r=e(5343);try{i=$}catch(a){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},371:function(t,n,e){e(4816),e(8064).G,e(8701);var i=e(9932),r=(e(8416),e(7936));e(5343),e(9895),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},5954:function(t,n,e){var i=e(4816),r=e(9590),o=e(4248),a=e(9887),u=e(8064).U,c=e(4760),s=e(4255),f=e(9932).get("stores/directive"),l=e(8416),d=e(2262),v=e(349),h=e(7936),p=e(8810),g=e(9612),m=e(7044).create(),_=1e3,w=10,y=u("ChangeOverheatError");function b(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}}b.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},b.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},b.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},b.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return h.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,t,n)(),this.applyDeferred.resolve()},b.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),c.setData(t,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=t.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=t.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=t.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=t.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:l.parentElement(t);e.setAttribute(n,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(t),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(t){t.setAttribute(n,"")}))}),this))},b.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},t.exports=function(t){t.registerChangeApplier(d.changeType.APPEND,b)}},8366:function(t,n,e){var i=e(4816),r=e(2262);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[r.selectorChangeType.HIDE]||t.attributes[r.selectorChangeType.REMOVE]){var n=i.extend({css:{}},i.cloneDeep(t));return t.attributes[r.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[r.selectorChangeType.HIDE]),t.attributes[r.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[r.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(i.isEmpty(n.css))return n.attributes.style;var e="",r=n.attributes.style||"";return i.each(n.css,(function(t,n){new RegExp(n+"\\s?:").test(r)||(e+=n+":"+t+";")})),i.isUndefined(n.attributes.style)?(t||"")+e:e+r}},1958:function(t,n,e){var i=e(4816),r=(e(212).Promise,e(9590)),o=e(4248),a=e(9887),u=e(8064).U,c=e(4760),s=e(4255),f=e(9932).get("stores/directive"),l=e(8416),d=e(2262),v=e(349),h=e(7936),p=e(6556),g=e(8810),m=e(9612),_=e(5343),w=e(8366),y=e(7044).create(),b={attributes:!0,childList:!0,subtree:!0,characterData:!0},E=1e3,I=10,A=u("ChangeOverheatError");function T(t,n){if(this.change=i.cloneDeep(t),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(E);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){h.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new A("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:E,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=s();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return h.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&y.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=y.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return h.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,t,n);e();var r=i.bind((function(){var n=i.bind((function(){this.cancelled||p.observe(o,t,b)}),this);return _.setTimeout(n)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(t,n){var e={};i.forOwn(this.change.attributes,(function(r,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(t.className)||(e[d.selectorChangeType.CLASS]=t.className,t.className=r);break;case d.selectorChangeType.HREF:i.isUndefined(t.href)||(e[d.selectorChangeType.HREF]=t.href,t.href=r);break;case d.selectorChangeType.HTML:i.isUndefined(t.innerHTML)||(e[d.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=r,i.each(l.childrenOf(t),(function(t){t.setAttribute(n,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(t.src)||(e[d.selectorChangeType.SRC]=t.src,t.src=r);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(t.textContent)||(e[d.selectorChangeType.TEXT]=t.textContent,t.textContent=r);break;default:throw new Error("Unrecognized attribute: "+o)}}));var r=w.createStylesFromChange(t.style.cssText,this.change);i.isString(r)&&(e[d.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=r),t.setAttribute(n,""),c.setData(t,this.change.id,this.identifier,e)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(t){try{t()}catch(n){}}))},t.exports=function(t){t.registerChangeApplier(d.changeType.ATTRIBUTE,T)}},433:function(t,n,e){var i=e(4816),r=e(4255),o=e(2262),a=e(1284);function u(t,n){if(!i.isFunction(t.value))throw new Error("Custom code must be a function");this.change=t}u.prototype.apply=function(){var t=r();try{a.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},t.exports=function(t){t.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},5736:function(t,n,e){var i=e(2032),r=e(4719).E,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},7788:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(4816),o=e(4248),a=e(8064).U,u=e(8416),c=e(3253),s=n.Error=a("ClickDelegateError");function f(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(t){r.forEach(this.events,r.bind((function(n){try{var e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector;(function(t,n,e){var a=t.target,u=0;for(;a;){var f;try{f=c(a,n)}catch(d){var l={typeofElementValue:void 0===a?"undefined":i(a),nodeName:r.result(a,["nodeName"],null),nodeType:r.result(a,["nodeType"],null),targetName:r.result(t,["target","nodeName"],null),targetType:r.result(t,["target","nodeType"],null),numParentsTraversed:u,selector:n,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;a=a.parentElement,u++}return!1})(t,e,n)&&this.handler(n)}catch(a){o.emitError(new s("Unable to handle click for selector"+e+":"+a.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(t){this.events.push(t)},f.prototype.removeEvent=function(t){this.events=r.filter(this.events,(function(n){return n.apiName!==t.apiName}))},t.exports=f},7312:function(t,n,e){var i=e(5086),r=e(7788),o=e(7936),a=e(4927);function u(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){a.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+u(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+u(t)+"):",t)}})}},5983:function(t,n,e){var i=e(4816),r=e(521),o=e(1882),a=e(38);function u(t,n){var e=o.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],t)}function c(t,n){return i.map(t,(function(t){return i.isFunction(t.toObject)?t.toObject(n):t}))}function s(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),i.each(t.filters,(function(t){i.isUndefined(t.modifier)||e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function f(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(n))return c(r.getEvents(t),e);if(i.isNumber(n)){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return c(r.getEvents(t).slice(-n),e)}var a=s(n,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return c(u(r.getEvents(t),n),e)}function l(t,n){if(!(n=i.cloneDeep(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(n,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(t),n)}function d(t,n){var e=o.buildFromSpecV0_2(n),u=r.getEvents(t),s=c(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(s=i.flatten(s)),n.reduce&&(s=s[0]),s}t.exports=["stores/visitor_events",function(t){return{getEvents:i.partial(f,t),getByFrequency:i.partial(l,t),query:i.partial(d,t)}}]},7383:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(5983))}},9871:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1780)),t.registerAudienceMatcher("behavior",e(8572))}},8572:function(t,n,e){var i=e(4816),r=e(9505),o=e(1882),a=e(38);t.exports={fieldsNeeded:["events"],match:function(t,n){var e,u=r.parse(n.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(n){return a.isSatisfied(n,t.events)}))}}},1780:function(t,n,e){var i=e(521);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},8949:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8876))}},8876:function(t,n,e){var i=e(4816),r=e(6713),o=e(521),a=e(9505),u=e(1882);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),c=i.filter(i.map(n.getCustomBehavioralAttributes(e),(function(t){try{return{id:t.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(t.rule_json))}}catch(n){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},3299:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(658)),t.registerAudienceMatcher("first_session",e(3025))}},3025:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},658:function(t,n,e){var i=e(8676),r=e(521),o=e(6094).getFieldValue,a=e(3841).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},6713:function(t,n,e){var i=e(7936),r={FIELDS:e(8676).FIELDS},o=e(1882),a=e(38);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(h){i.error("Behavior / Rule for",l.id,"failed with",h.message||"")}}return u}},521:function(t,n,e){var i=e(4816),r=e(2755),o=e(9932).get("stores/visitor_events");n.getEvents=function(){var t=r.getEvents(),n=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([t,n,e]);return a.slice(a.length-1e3)}},1882:function(t,n,e){var i=n,r=e(4816),o={FIELDS:e(8676).FIELDS,FIELDS_V0_2:e(8676).FIELDS_V0_2},a=e(9505),u=e(7936),c=e(38);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return r.isString(n)&&(n=[n]),n=n||c.DEFAULT_FIELD,[c.generateAlias(t,n)]},i.groupField=function(t){return r.isString(t)&&(t=[t]),[(t=t||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(t){return t=(t||"").toString().trim(),s[t]||t}function l(t,n,e){var a={where:n};if(t.count&&(a.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(t.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return t=f(t),r.isString(n)&&(n=[n]),"exists"===t?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:f(t),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return r.isArray(t)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return r.isString(n)&&(n=[n]),{op:t,args:[{field:n=n||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(t)?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),t)||(e=[o.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(t));var n=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(t.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,t.action.value)),t.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)c.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var s=i.rangeTimeComparison([t.time.start,t.time.stop]);s&&c.push(s)}else u.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:c},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&r.each(t.filters,(function(r){var a,u,s=i.getFieldKeyPathForSource(r.name,t.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(t));return[l(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(r.isUndefined(t))throw new Error("rule is undefined");if(!r.isObject(t))throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(r.isArray(t.filter)?r.each(t.filter,(function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],o=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+a.stringify(t.reduce.aggregator)+" to unsorted items"),r.isArray(t.sort)?r.each(t.sort,(function(t,u){var c=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);c&&n.push("sort["+u+"]: "+c),t.field&&"frequency"===t.field[0]?e.push(t):o.push(t);var s=function(t){var n="direction "+(a.stringify(t)||String(t));if(!r.includes(["ascending","descending"],t))return n+' is not "ascending" or "descending"'}(t.direction);s&&n.push("sort["+u+"]: "+s)})):n.push("sort: not an array"),e.length&&o.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(t.pick.field);u&&n.push("pick: "+u)}if(t.reduce){var c=t.reduce.aggregator,s="aggregator "+(a.stringify(c)||String(c)),f=t.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||n.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(t.pick||n.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&n.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||n.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:r.map(t.filter||[],(function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return r.extend(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(t.sort&&(r.each(t.sort,(function(t){r.includes(["ascending","descending"],t.direction)&&(r.includes(["time","age"],t.field[0])&&o.push(t),"frequency"===t.field[0]&&e.push(t))})),o.length&&!e.length&&(n.orderBy=r.filter(r.map(o,(function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0}))))),t.pick&&t.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&r.includes(["avg","max","min","sum"],t.reduce.aggregator))return r.extend(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:u}]}],select:[{field:[c.generateAlias(t.reduce.aggregator,u)]}]});n=e.length?r.extend(n,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(n,{select:[{field:u}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var s=t.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(n,{offset:s,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[o.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(a.stringify(t)||String(t));if(!r.isArray(t)||!r.every(t,r.isString))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return n===i.FieldPurpose.FILTER&&(u.push("age"),c=["frequency"]),n===i.FieldPurpose.SORT&&(u=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,t[0])?e+" is not supported here":r.includes(u,t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(a.stringify(t)||String(t)),i="value "+(a.stringify(n)||String(n));if(!r.isString(t)&&!r.isUndefined(t))return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(n))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(n)&&2===n.length&&r.isNumber(n[0])&&r.isNumber(n[1])&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(n)||r.isArray(n)&&2===n.length&&r.isString(n[0])&&r.isString(n[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(n))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},38:function(t,n,e){var i=e(4816),r=e(8738),o=e(7936),a=i.bind(o.log,o),u=e(8701),c=e(6094).getFieldValue,s=e(9505),f=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!i.isArray(n))return e;var r=c(t,n);return void 0===r&&(r=e),r},l=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=i.map(t,l);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},"in":function(t){var n=i.map(t[1]||[],l);return i.includes(n,l(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=i.map(t,(function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return i.isString(t[1])?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return i.every(t,(function(t){return t}))},or:function(t){return i.some(t,(function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var d={now:function(){return u.now()}},v=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in n.booleanOperators?n.booleanOperators[r]:r in n.arithmeticOperators?n.arithmeticOperators[r]:null;if(a){var u=i.partial(v,t),c=e.args||[];return a(i.map(c,(function(t){return u(t)})),t)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],r={};function a(t,u){if(i.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&o.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(u&&t.op in n.aggregateOperators){var c=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,s=n.generateAlias(t.op,c);return s in r||(e.push({op:t.op,args:t.args}),r[s]=!0),{field:[s]}}for(var f=[],l=t.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:t.op,args:f}}var u={};t.hasOwnProperty(n.clause.WHERE)&&(u[n.clause.WHERE]=a(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(u[n.clause.HAVING]=a(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(u[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var c=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],s=0;s<c.length;s++)t.hasOwnProperty(c[s])&&(u[c[s]]=t[c[s]]);return t.hasOwnProperty(n.clause.FROM)&&(u[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),u};var h=function(t,e){e=e||0;var r=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var o=t[n.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in n.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var u=t[n.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var c=t[n.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(r=r.concat(h(t[n.clause.FROM],e+1))),r},p=function(t,e){var r,u,c,l=e;if(t.hasOwnProperty(n.clause.FROM)&&(o.debug("Evaluating FROM clause:",t[n.clause.FROM]),l=p(t[n.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),l=i.filter(l,(function(e){return v(e,t[n.clause.WHERE])})),o.debug("Results after WHERE:",l),t.hasOwnProperty(n.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var d=function(t,n){var e={};if(void 0===t||!i.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var r=i.map(t,(function(t){return t.field})),o=0;o<n.length;o++){for(var a=n[o],u=[],c={},l=0;l<r.length;l++){var d=r[l],v=f(a,d),h=d.join(".");c[h]=v,u.push(encodeURIComponent(h)+"="+encodeURIComponent(s.stringify(v)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(a)}return e}(t[n.clause.GROUP_BY],l);l=function(t,n){var e=[];return i.each(t,(function(t,r){var o=i.extend({},t.fieldValues),a=n[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=t[n.clause.AGGREGATE],u=d,c={},i.each(u,(function(t,e){c[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in n.aggregateOperators){var s=(a.args&&a.args[0]||{}).field||n.DEFAULT_FIELD,f=n.generateAlias(u,s),l=n.aggregateOperators[u]([s],t.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),c)),o.debug("Results after AGGREGATE:",l)}t.hasOwnProperty(n.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),l=i.filter(l,(function(e){return v(e,t[n.clause.HAVING])})),o.debug("Results after HAVING:",l)),t.hasOwnProperty(n.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),l=function(t,n){return i.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(n,a,0),c=f(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(a("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var h,g=0;return t.hasOwnProperty(n.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),g=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),h=g+Number(t[n.clause.LIMIT])),(g>0||!i.isUndefined(h))&&(l=l.slice(g,h),o.debug("Results after OFFSET/LIMIT:",l)),t.hasOwnProperty(n.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),l=function(t,n){return i.map(n,(function(n){return i.map(t,(function(t){return v(n,t)}))}))}(t[n.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};n.execute=function(t,e){t=n.rewrite(t),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",t,s.stringify(t)),o.debug("Events:",e);var i=h(t);if(i.length>0)throw new Error("Rule "+s.stringify(t)+" has violations: "+i.join("\n"));var a=p(t,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(t)),!1}}},58:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(4199)),t.registerVisitorProfileProvider(e(377)),t.registerVisitorProfileProvider(e(3172)),t.registerAudienceMatcher("browser_version",e(1826))}},1826:function(t,n,e){var i=e(9352).y;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},377:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},3172:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},4199:function(t,n,e){var i=e(6349);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},9075:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6162)),t.registerAudienceMatcher("campaign",e(9862))}},9862:function(t,n,e){var i=e(7049);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},6162:function(t,n,e){var i=e(7266);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},2981:function(t,n,e){var i=e(4816),r=e(9505),o=e(9895),a=e(7936),u=e(1683),c=e(6377);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=i.map(t.variations,"id"),r=c.getVisitorCmabAttributesForExperiment(t),o=c.getDcpCustomerIds(),a=c.getDcpServiceId();return{instances:[{visitorId:u.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:r,dcpCustomerIds:o,dcpServiceId:a}]}},n.parseApiResponse=function(t){var n=null;try{n=r.parse(t)}catch(e){return a.error("CMAB API / Error parsing response:",e),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(a.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&i.find(n.variations,{id:t})?(a.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(a.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return a.error("CMAB API / API call failed with status:",t.status,t.statusText),null;a.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){a.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var i=n.createPayload(t,e),o=n.getCmabPredictionUrlForExperiment(t.id),u=new XMLHttpRequest;return u.open("POST",o,!1),u.send(r.stringify(i)),n.handleCmabApiResponse(u,t)}catch(c){return a.error("CMAB API / SYNC / API call encountered an error:",c),null}},n.makeAsyncApiCall=function(t,e){a.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),r=n.getCmabPredictionUrlForExperiment(t.id);return o.request({url:r,contentType:"application/json",method:"POST",data:i})}},468:function(t,n,e){var i=e(7936),r=e(6377),o=e(2981),a=e(242);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var u=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,u))return u.variationId;a.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}catch(f){return i.error("CMAB API / SYNC / API call failed with error:",f),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(u){return(c=o.handleCmabApiResponse(u,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdate30MinTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},242:function(t,n,e){e(2899),e(7936);n.startCmabApiCallPerformanceTimer=function(t){0},n.endCmabApiCallPerformanceTimer=function(t){0}},6377:function(t,n,e){var i=e(4816),r=e(984),o=e(9505),a=e(9932),u=e(7276),c=e(1683),s=e(7936),f=e(8738),l=e(8654),d=a.get("stores/visitor"),v=a.get("stores/plugins"),h=a.get("stores/global");n.generateCmabUUID=function(){return u.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===f.AllocationPolicyEnum.CMAB:(s.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return s.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var r=e.variationId;return i.find(t.variations,{id:r})?e.isTimeout?(s.debug("CMAB / Timeout flag is set:",e.cmabUUID),!0):n.hasAttributesChanged(t,e)?(s.debug("CMAB / Timeout User attributes have changed"),!0):n.has30MinOr24HrTimeoutOccurred(e)?(s.debug("CMAB / Timeout for 30 minutes or 24 hours:",e.cmabUUID),!0):(s.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(s.debug("CMAB / Timeout Variation ID:",r,"not found in experiment:",t.id),!0)},n.has30MinOr24HrTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return s.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime(),i=new Date(t.st30MinTimeout).getTime(),r=new Date(t.st24HrTimeout).getTime();return e-i>18e5||e-r>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","st30MinTimeout","st24HrTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return s.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),r=t.id;s.debug("CMAB / Visitor is bucketed into experiment id:",r+" from layer id:",e);var o=c.getContextualMabMap();if(o&&o[e]){var a=o[e];s.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",a),s.debug("CMAB / Excluding the currently bucketed experiment id: ",r," from all CMAB experiments found for the current layer id: ",e);var u=i.omit(a,r);u=i.omitBy(u,(function(t){return t.isTimeout})),s.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",u),i.forEach(u,(function(t,n){t.isTimeout=!0,c.updateContextualMabMap(e,n,t)})),c.persistContextualMabMap()}else s.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=c.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=c.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.has30MinOr24HrTimeoutOccurred(o)||(o.st30MinTimeout=(new Date).toISOString(),c.updateContextualMabMap(t,e,o),c.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=c.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return s.debug("CMAB / No CMAB store found for experiment:",t.id),null;s.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return s.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){s.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),a=n.getVisitorAttributesHash(t),u={variationId:e,visitorId:c.getCurrentId(),cmabUUID:i,st30MinTimeout:r,st24HrTimeout:r,userAttributeHash:a,isTimeout:!1};c.updateContextualMabMap(o,t.id,u),c.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=o.stringify(t)}catch(e){s.error("CMAB / Failed to stringify value for attributes:",t,e)}return n},n.getVisitorCmabAttributesForExperiment=function(t){var e,r=[],o=v.getAllPlugins(f.PluginTypes.audienceMatchers);if(!(null==t||null==(e=t.experimentMetadata)?void 0:e.cmabAttributes))return r;var a=t.experimentMetadata.cmabAttributes,u=a.customAttributes,c=a.standardAttributes;return i.forEach(u,(function(t){var e,i=(null==(e=d.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),r.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),i.forEach(c,(function(t){var e,i,a=(null==(e=o[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,u=d.getAttribute(a)||"";u=n.getStringifiedValue(u),r.push({id:t.id,type:t.type,value:u})})),s.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",r),r},n.generateAttributesHash=function(t){return r.hashToHex(r.toByteString(o.stringify(t)),r.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(s.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=h.getDCPKeyfieldLocators(),n=c.getCurrentId();return l.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return h.getDCPServiceId()}},3719:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(572)),t.registerAudienceMatcher("cookies",e(2648))}},2648:function(t,n,e){var i=e(7049);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,a=t.cookies[e];return i.hasMatch(r,o,a)}}},572:function(t,n,e){var i=e(4816),r=e(7690),o=e(9932).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=r.getAll(),n=o.getFeaturesNeeded("cookies");return i.reduce(t,(function(t,e,r){return i.has(n,r)&&(t[r]=e),t}),{})}]}},3685:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3510));var n=e(7178);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},7178:function(t,n,e){var i=e(4816),r=e(7049);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),i.isObject(e)&&(e=e.value),r.hasMatch(n.value,n.match,e)}},3510:function(t,n,e){var i=e(4816),r=e(8738),o=e(7936),a=e(9932).get("stores/dimension_data");t.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(t){return i.reduce(t,(function(t,n,e){var r=e,u=a.getByApiName(e),c=a.getById(e);return i.isObject(n)?(!n.id&&u&&(c=u,r=u.id,i.extend(n,{id:c.segmentId||c.id})),!n.name&&c&&c.apiName&&(n.name=c.apiName),n.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),t[r]=n,t):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),t)}),{})},shouldTrack:!0}},8654:function(t,n,e){var i=e(4816),r=e(7266),o=e(7690),a=e(7936),u=e(5343),c="cookie",s="js_variable",f="query_param",l="uid";n.getCurrentAliases=function(t,n){var e={};return i.each(t,(function(t){if(!t.is_optimizely){var d=t.dcp_datasource_id,v=t.type,h=t.name||"";if(d){var p=null;switch(v){case c:p=o.get(h);break;case s:try{p=u.getGlobal(h)}catch(g){a.warn("Failed getting global DCP keyfieldLocator:",h)}break;case f:p=r.getQueryParamValue(h);break;case l:p=n}(i.isNumber(p)||i.isString(p))&&(e[d]=p)}else a.error("DCP / No DCP datasource id specified")}})),e}},5307:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(5981)),t.registerVisitorProfileProvider(e(7684)),t.registerAudienceMatcher("device",e(3386))}},3386:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},7684:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},5981:function(t,n,e){var i=e(6349);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},6475:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(4387)),t.registerAudienceMatcher("device_type",e(5682))}},5682:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},4387:function(t,n,e){var i=e(6349);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},3460:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7615)),t.registerAudienceMatcher("location",e(3590))}},3590:function(t,n){n.fieldsNeeded=["location"],n.match=function(t,n){if(!t.hasOwnProperty("location"))return!1;var e=t.location,i=n.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),a=(i[2]||"").trim(),u=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();switch(o="EN"===o?"ENG":o,i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:if(e.city===a&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===u)return!0;break;case 5:if(e.dma===c)return!0}return!1}},7615:function(t,n,e){var i=e(7347);t.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},6224:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1914)),t.registerAudienceMatcher("referrer",e(6440))}},6440:function(t,n,e){var i=e(5719);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},1914:function(t,n,e){var i=e(8416),r=e(7179);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},8128:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7018)),t.registerAudienceMatcher("source_type",e(3053))}},3053:function(t,n,e){var i=e(7049);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},7018:function(t,n,e){var i=e(7266),r=e(8416),o=e(7179),a=e(140),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},7244:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8545)),t.registerVisitorProfileProvider(e(7857)),t.registerAudienceMatcher("time_and_day",e(8548))}},8548:function(t,n,e){var i=e(1214);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},8545:function(t,n,e){var i=e(8701);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},7857:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},1214:function(t,n,e){var i=e(4816);function r(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var e=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),o=r(e.start_time),a=r(e.end_time),u=60*n.getHours()+n.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return u>=o&&u<=a&&i.includes(e.days,c)}},8835:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9490))}},9490:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},2225:function(t,n,e){var i=e(4816),r=e(4248),o=e(7276),a=e(9590),u=e(8064).U,c=e(9505),s=e(7936),f=e(1346),l=e(1683),d=e(5343),v=e(9895),h=e(9932),p=(e(8416),e(8120)),g=e(4141),m=e(349),_=h.get("stores/global"),w=h.get("stores/tracker_optimizely"),y=e(468),b=n.Error=u("OptimizelyTrackerError"),E="client_activation",I="campaign_activated",A="view_activated",T={revenue:{validate:M,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:M,sanitize:Math.floor,excludeFeature:!0},value:{validate:M,sanitize:i.identity}},S="AUTO",k=[function(){return function(t){L(function(t){return i.extend({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:A},D(t.eventTags))}(t),t.userFeatures,W(t.layerStates))}}],R=[function(){return function(t){!function(t){var n=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var r={session_id:U(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},o=W(t.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),$()}(t),L(function(t){return{entity_id:null,type:E,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,W(t.layerStates))}}],C=[function(){return function(t){var n;L((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:O(n.eventProperties)},D(n.eventTags))),t.userFeatures,W(t.layerStates))}}],N=[function(){return function(t){var n;L((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},D(n.eventTags))),t.userFeatures,W(t.layerStates))}}];function D(t){var n=function(t,n,e){try{x(n),t[e]=n}catch(i){r.emitError(new b("Bad value for eventTags["+e+"]: "+i.message))}return t},e=i.keys(T),o=i.omit(t,e),a=i.pick(t,e),u=i.reduce(o,n,{}),c=i.reduce(a,(function(t,e,i){var o=T[i];o.excludeFeature||n(u,e,i);try{o.validate(e),t[i]=o.sanitize(e),u[i]=t[i]}catch(a){r.emitError(new b("Bad value for eventMetrics["+i+"]: "+a.message))}return t}),{});return c.tags=u,c}function O(t){if(i.keys(t).length<=15)return t;var n={},e={},r=0;for(var o in t)r<15?n[o]=t[o]:e[o]=t[o],r++;return s.log("Custom event has more than 15 properties. The following properties were not pushed",e),n}function x(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=c.stringify(t)}catch(e){}throw new Error('Feature value is complex: "'+n)}}function M(t){if(null==t)throw new Error("Metric value is null");if(!i.isNumber(t))throw new Error("Metric value is not numeric")}function P(t){return i.reduce(t,(function(t,n){try{x(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(e){s.warn("Error evaluating user feature",n,e)}return t}),[])}function L(t,n,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),V(n),$()}function V(t){var n=P(t);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function U(t){return S}function F(){if(w.canSend()){var t=w.hasEventsToSend(),n=w.hasPreviousBatchesToSend();t||n?(n&&(i.each(w.getPreviousBatches(),B),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),B(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function B(t){s.debug("Sending ticket:",t);var n=o.generate();v.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:z(t)},n)}function z(t){return i.extend({},i.pick(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(t.visitors,j)})}function j(t){return{visitor_id:t.visitor_id,session_id:S,attributes:i.map(t.attributes,G),snapshots:i.map(t.snapshots,q)}}function G(t){return K(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function q(t){var n=t.events;return n=function(t){var n=i.reduce(t,(function(t,n){var e;if(t[e=n.type===A&&i.isEmpty(n.tags)&&i.isEmpty(i.pick(n,i.keys(T)))?n.type:n.uuid]){var r=t[e].timestamp;n.timestamp>r&&(r=n.timestamp),t[e]=i.extend({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:r})}else t[e]=n;return t}),{});return i.values(n)}(n),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(t.decisions,H),events:i.map(n,Y)}}function H(t){var n=K(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?K(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function Y(t){return t.key===I&&(t.type=I,delete t.key),K(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function K(t,n){return i.reduce(t,(function(t,e,i){return i in n&&(t[n[i]||i]=e),t}),{})}function $(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function t(){F(),w.isPolling()&&d.setTimeout(t,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else F()}function W(t){return i.map(t,(function(t){var n=y.getCmabUUIDAndUpdate30MinTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function X(){var t=w.getPersistableState();if(t)try{s.debug("Persisting pending batch:",t),l.persistTrackerOptimizelyData(t),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(n){s.debug("Failed to persist pending batch:",n)}}var J={trackLayerDecision:function(t){t.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=P(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:U(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:I}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),$()}(t):function(t){var n={entity_id:t.layerId,type:I,uuid:t.decisionId,timestamp:t.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:W(t.layerStates)}),V(t.userFeatures),$()}(t)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:k,onClientActivation:R,onClickEvent:N,onCustomEvent:C};t.exports=function(t){t.registerAnalyticsTracker("optimizely",J),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||F()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var n=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe(X),p.off(n)}})}},6247:function(t,n,e){var i=e(1284),r={match:function(t,n){return i.apply(n.value)}};t.exports=function(t){t.registerViewMatcher("custom_code",r)}},2418:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(4485)),t.registerViewMatcher("url",e(4576))}},4576:function(t,n,e){var i=e(5719);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},4485:function(t,n,e){var i=e(7266);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},3154:function(t,n,e){var i=e(4816),r=e(9932),o=e(8120),a=e(4141),u=e(5343),c=r.get("stores/directive"),s="optimizelyPreview",f=function(t){u.getGlobal(s).push(t)};n.initialize=function(t){c.isSlave()&&function(t){var n=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},n.setupPreviewGlobal=function(){u.getGlobal(s)||u.setGlobal(s,[])},n.pushToPreviewGlobal=function(t){f(t)}},4892:function(t,n,e){var i=e(4816),r=e(7276),o=e(9621),a=e(1623),u=e(8701),c=e(8416),s=e(349),f=e(871).mM,l=e(7936),d=e(2107),v=e(212).Promise,h=e(1683),p=e(5343),g=e(9895),m=e(9590),_=e(8738),w=e(9932),y=w.get("stores/async_request"),b=w.get("stores/client_metadata"),E=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=(w.get("stores/xdomain"),w.get("stores/view_data")),S=(e(5622),"https://rum.optimizely.com/rum"),k="1.0";function R(t){return i.isEmpty(t)?v.resolve():(n=function(){return g.request({url:S,method:"POST",data:t,withCredentials:!0}).then((function(t){return o.resolveRequest("RUM_FIRST_BEACON",t),t}))["catch"]((function(t){throw l.error("POST to client-rum failed:",t),o.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(n):o.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function C(){try{return!c.querySelector("body")}catch(t){return null}}function N(){var t=p.getGlobal("performance"),n=t?t.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=I.getFeaturesNeededData(),u=c.parseUri(I.getScriptSrc()),s=I.getRumData()||{},l=s.extras||{};i.assign(l,{apiCalls:r,DOMObservationData:o,paintTimings:O(),activeExperimentIds:null,numPages:T.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:D(),experimental:E.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var v=p.getGlobal("Prototype");v&&!i.isUndefined(v.Version)&&(l.prototypeJS=v.Version);var g={id:I.getRumId(),v:k,project:E.getSnippetId()||E.getProjectId(),navigationTimings:n,userTimings:e,xd:!1,apis:i.keys(r),extras:l,sampleRate:s.sampleRate};(function(){var t=f.keys(),n=i.filter(i.map(t,(function(t){var n=h.getStorageKeyFromKey(t);return n?{key:t,isForeign:h.isForeignKey(t),category:n,size:t.length+f.getItem(t).length}:null}))),e=i.reduce(n,(function(t,n){var e=n.key,i=h.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),r=i.chain(n).filter({isForeign:!0}).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(n,(function(t){var n=t.isForeign?"foreign":"local";o[n]+=t.size,a[n][t.category]||(a[n][t.category]=0),a[n][t.category]+=t.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(t){return i.assign(u,{storageEstimate:t})}))})().then((function(t){R(i.assign(g,{lsMetrics:t}))}))}function D(){var t=p.getGlobal("navigator");if(t&&t.connection)return i.pick(t.connection,["downlink","rtt","effectiveType"])}function O(){var t=p.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(i.isEmpty(n))return;return i.reduce(n,(function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(e){return}}n.initialize=function(){var t,n=r.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=c.getCurrentScript();if(t)return t.src}();s.dispatch(m.SET_RUM_DATA,{id:n,RumHost:S,inRumSample:t,src:e,data:{id:n,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},n.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var t=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(t||0)}})}))}catch(t){return}}(),c.isLoaded()?p.setTimeout(N,10):p.addEventListener("load",N),new v((function(t,n){p.setTimeout((function(){(function(){!function(){var t={id:I.getRumId(),v:k,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:b.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=h.getPersistedBehaviorEventCount(),e=a.getEventCount();t.numBehaviorEvents=e;var r=e-n;i.extend(t.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(t,function(){var t=p.getGlobal("performance");if(!t)return;var n,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=t.getEntriesByName(e);r.length>0&&(n=r[0])}if(!n){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=i.find(a,(function(t){return o.test(t.name)}))}if(n)return i.mapValues(_.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:t})}();var t=I.getRumData(),n=A.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,R(t=i.pickBy(t,(function(t){return!i.isUndefined(t)})))})().then(t,n)}),10)}))["catch"]((function(t){l.warn("RUM / Error sending data:",t)}))):v.resolve()}},4774:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(n!==undefined)return n.exports;var e=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var __webpack_exports__={};!function(){try{!function(){var t=function(t){var n=[__webpack_require__(8835)];n.push(__webpack_require__(9871)),n.push(__webpack_require__(8949)),n.push(__webpack_require__(3299)),n.push(__webpack_require__(7383)),n.push(__webpack_require__(58)),n.push(__webpack_require__(9075)),n.push(__webpack_require__(3719)),n.push(__webpack_require__(3685)),n.push(__webpack_require__(5307)),n.push(__webpack_require__(6475)),n.push(__webpack_require__(3460)),n.push(__webpack_require__(6224)),n.push(__webpack_require__(8128)),n.push(__webpack_require__(7244)),n.push(__webpack_require__(2225)),n.push(__webpack_require__(2418)),n.push(__webpack_require__(6247)),n.push(__webpack_require__(7312)),n.push(__webpack_require__(5954)),n.push(__webpack_require__(1958)),n.push(__webpack_require__(433)),n.push(__webpack_require__(5736)),f.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(4892).initialize();var n=__webpack_require__(2899);n.time("gtagReady");var e=__webpack_require__(7936),i=__webpack_require__(9932);__webpack_require__(4979);var r=i.get("stores/directive");if(!__webpack_require__(9895).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(3139),u=__webpack_require__(7357),c=__webpack_require__(9787),s={"accountId": "148927072", "namespace": "17796810052", "revision": "16533", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": false}, "projectId": "17796810052", "layers": [{"changes": null, "id": "24581950040", "name": null, "commitId": "24619860144", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "24540640201", "integrationSettings": null, "variations": [{"id": "24557840223", "name": null, "actions": [{"viewId": "24546530108", "changes": [{"id": "EB44D1B3-BE3B-4BBD-856F-4D0460BBC6F0", "type": "custom_code", "value": function($){console.log("AI Insider VAR START - 6/15/23"); 
window.$(document).ready(function(){ 
	console.log("AI Insider READY - 6/15/23");
  var temp=window.location.href;

  
  if (window.$('#inlineRegistration_Email').length > 0) {
	window.$('#inlineRegSubmit').attr('value', 'Subscribe Now');
	} else {
	window.$('#marketing_offer .leftSide h1').text("You're subscribed to TechTarget's AI Insider Newsletter.");
  window.$('#marketing_offer .leftSide h2').html("Download your FREE guide, <i>'What is generative AI? Everything you need to know'</i>.");
  window.$('#inlineRegSubmit').attr('value', 'Download Now');
  window.$('#main a[href="#main"').text('Download Now!');
    
	} 
  
  if (temp.includes('vgnextfmt=confirmation')) {
  	window.$('.section.cascading-fulfillment-section .download-now h2').text("You're subscribed to TechTarget's AI Insider Newsletter");
    window.$('.download-now-info a').text('Download Now');
    window.$('.section.cascading-fulfillment-section .download-now p').text("As a thank you for signing-up you've gained access to our free guide to Generative AI, which should have automatically opened in a new window. If it was blocked by a pop-up blocker you can click below to download it now.");
  }
});
}, "dependencies": []}, {"id": "E7ABFBAB-E38B-47F6-BD25-ABA59495BB49", "type": "append", "selector": "head", "value": "<style>.detailsRight {display:none !important;float:none !important;}\n.detailsLeft {width:100% !important;float:none !important;}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24581950040"}}], "policy": "single_experiment", "viewIds": ["24546530108"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "27503190256", "name": null, "commitId": "29009950124", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "20324229137"], "audienceName": null, "changes": null, "id": "27426760441", "integrationSettings": null, "variations": [{"id": "27495280314", "name": null, "actions": []}, {"id": "27426710354", "name": null, "actions": [{"viewId": "27459220497", "changes": [{"id": "19836984a9e9452bad27a477753244de", "type": "custom_code", "value": function($){var eventExpName = "ABMPillarSplash_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
        type: "event",
        eventName: eventExpName + customEventName
    });
}

jQuery(function ($) {
    window.$(document).ready(function () {
        console.log("ABM Pillar Splash Doc READY - Variation 1 11/31/23 1");
        pushTrackingEvent("varStart");

        // Creates page2Resource and resourceMetadata objects
        const page2Resource = {
            urls: [{
                url: "https://www.techtarget.com/searchcustomerexperience/definition/demand-generation",
                ids: [{
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id10",
                    displayType: "Tall"
                }, {
                    id: "id13",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/definition/account-mapping",
                ids: [{
                    id: "id9",
                    displayType: "Tall"
                }, {
                    id: "id11",
                    displayType: "Tall"
                }, {
                    id: "id10",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/definition/account-based-selling",
                ids: [{
                    id: "id14",
                    displayType: "Tall"
                }, {
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id2",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/Ways-to-successfully-align-your-sales-and-marketing-teams",
                ids: [{
                    id: "id2",
                    displayType: "Tall"
                }, {
                    id: "id11",
                    displayType: "Tall"
                }, {
                    id: "id5",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/feature/What-is-account-based-marketing-The-ultimate-ABM-guide",
                ids: [{
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id12",
                    displayType: "Tall"
                }, {
                    id: "id7",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/ABM-vs-demand-generation-How-are-they-different",
                ids: [{
                    id: "id8",
                    displayType: "Tall"
                }, {
                    id: "id4",
                    displayType: "Tall"
                }, {
                    id: "id14",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/7-ABM-challenges-and-how-to-solve-them",
                ids: [{
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id2",
                    displayType: "Tall"
                }, {
                    id: "id5",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/7-account-based-marketing-tactics-for-your-business",
                ids: [{
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id2",
                    displayType: "Tall"
                }, {
                    id: "id5",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/12-essential-ABM-metrics-and-KPIs-to-measure-success",
                ids: [{
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id12",
                    displayType: "Tall"
                }, {
                    id: "id7",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/Account-based-marketing-vs-lead-generation-explained",
                ids: [{
                    id: "id14",
                    displayType: "Tall"
                }, {
                    id: "id8",
                    displayType: "Tall"
                }, {
                    id: "id15",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/definition/account-based-experience-ABX",
                ids: [{
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id10",
                    displayType: "Tall"
                }, {
                    id: "id13",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/Top-demand-generation-strategies-for-quality-leads",
                ids: [{
                    id: "id14",
                    displayType: "Tall"
                }, {
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id4",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/Top-benefits-of-account-based-marketing",
                ids: [{
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id2",
                    displayType: "Tall"
                }, {
                    id: "id7",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/feature/A-guide-to-account-based-engagement",
                ids: [{
                    id: "id5",
                    displayType: "Tall"
                }, {
                    id: "id15",
                    displayType: "Tall"
                }, {
                    id: "id2",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/tip/How-to-effectively-personalize-your-ABM-strategy",
                ids: [{
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id13",
                    displayType: "Tall"
                }, {
                    id: "id4",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/feature/How-account-based-marketing-can-improve-personalization",
                ids: [{
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id13",
                    displayType: "Tall"
                }, {
                    id: "id4",
                    displayType: "Tall"
                },],
            }, {
                url: "https://www.techtarget.com/searchcustomerexperience/definition/buyer-personas-customer-personas",
                ids: [{
                    id: "id3",
                    displayType: "Tall"
                }, {
                    id: "id1",
                    displayType: "Tall"
                }, {
                    id: "id12",
                    displayType: "Tall"
                },],
            }, /* {  
        //Remove after testing!
           url: window.location.href,
           ids: [
               { id: "id3", displayType: "Tall" },
               { id: "id1", displayType: "Tall" },
               { id: "id12", displayType: "Tall" },
            ],
        }, */
            ],
        };

        const resourceMetadata = {
            id1: {
                id: "id1",
                title: "A Practical Guide to Implementing Account-Based Marketing",
                summary: "At its core, this account-based movement is all about focusing marketing directly on driving significant revenue. This e-book reviews the key areas of successful ABM implementation, from assessing ABM readiness to measuring progress.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-A Practical Guide to Implementing Account-Based Marketing.png",
                imgOrien: "landscape",
                type: "E-Book",
                btnText: "Download the TechTarget E-Book",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/a-practical-guide-to-implementing-account-based-marketing/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id2: {
                id: "id2",
                title: "7 Essential Metrics for Account-Based Marketing",
                summary: "ABM maturation can take years, so it's important teams have the right KPIs in place to measure both short and long-term progress. In this e-book, you'll explore 7 metrics that are key to evaluating program effectiveness.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-7 Essential Metrics for Account-Based Marketing.png",
                imgOrien: "portrait",
                type: "E-Book",
                btnText: "Download the TechTarget E-Book",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/7-essential-metrics-for-account-based-marketing/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id3: {
                id: "id3",
                title: "Using Intent Data for Effective Persona Development in ABM",
                summary: "The members of a buying team within a target account are constantly changing, so to keep pace ABM teams should be regularly updating buyer personas.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Using Intent Data for Effective Persona Development in ABM.png",
                imgOrien: "landscape",
                type: "E-Book",
                btnText: "Download the TechTarget E-Book",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/using-intent-data-for-effective-persona-development-in-abm/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id4: {
                id: "id4",
                title: "A Short End-to-End Guide to ABM Engagement",
                summary: "ABM can be an incredibly effective strategy to drive more revenue from a target account list. Unfortunately, many teams still aren’t achieving the success they hope for. This e-book will help you identify, assess and solve issues that stand in your way.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-A Short End-to-End Guide to ABM Engagement.png",
                imgOrien: "portrait",
                type: "E-Book",
                btnText: "Download the TechTarget E-Book",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/a-short-end-to-end-guide-to-abm-engagement/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id5: {
                id: "id5",
                title: "Building an ABM Program That Actually Works",
                summary: "This e-book details the six key components of a practical ABM strategy and how the right data, processes and partners can help you fuel measurable results for your business.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Building an ABM Program That Actually Works.png",
                imgOrien: "landscape",
                type: "E-Book",
                btnText: "Download the TechTarget E-Book",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/building-an-abm-program-that-actually-works/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id6: {
                id: "id6",
                title: "The 2 Core Foundational Requirements for ABM Impact",
                summary: "In this blog, you'll explore two key elements to ABM success: high-quality data and cross-team collaboration.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-The 2 Core Foundational Elements for ABM.jpg",
                imgOrien: "landscape",
                type: "Blog",
                btnText: "Read the TechTarget Blog",
                btnUrl: "https://www.techtarget.com/the-2-core-foundational-requirements-for-abm-impact/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id7: {
                id: "id7",
                title: "Getting to Next-Level ABM with Intent Data",
                summary: "In this Q&A, TechTarget CMO, John Steinert discusses how B2B companies are using intent data to drive ABM program performance.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Getting to Next-Level ABM with Intent Data.jpg",
                imgOrien: "landscape",
                type: "Blog",
                btnText: "Read the TechTarget Blog",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/getting-to-next-level-abm-with-intent-data/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id8: {
                id: "id8",
                title: "3 Things Your ABM Efforts Must Get Right",
                summary: "No matter an organization’s size, budget, staff, program deployment or otherwise, there are fundamentals to ABM that every program should get right. This blog explores three key areas where ABM programs often see break points and how to avoid them.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-3 Things Your ABM Records Must Get Right.jpg",
                imgOrien: "landscape",
                type: "Blog",
                btnText: "Read the TechTarget Blog",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/3-things-your-abm-efforts-must-get-right/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id9: {
                id: "id9",
                title: "A Short Guide to ABM Engagement for Sales",
                summary: "In this blog, you'll explore common challenges sellers face in ABM and how to avoid them in your own ABM program.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-A Short Guide to ABM Engagement - Part 1 - Sales.jpg",
                imgOrien: "landscape",
                type: "Blog",
                btnText: "Read the TechTarget Blog",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/a-short-guide-to-abm-engagement-part-1-sales/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id10: {
                id: "id10",
                title: "Anonymous Still Means Anonymous – Sales Needs More",
                summary: "This blog examines why sellers need better insights at the account and individual level, particularly when it comes to driving more revenue from target accounts as a part of an ABM program.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Anonymous Still Means Anonymous - Sales Needs More.jpg",
                imgOrien: "landscape",
                type: "Blog",
                btnText: "Read the TechTarget Blog",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/anonymous-still-means-anonymous-sales-needs-more/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id11: {
                id: "id11",
                title: "Using High Value Offers For ABM Opportunity Creation",
                summary: "For an ABM program to truly be successful it must create account engagement that results in more sales opportunities. In this webinar, you'll learn how high-value offers create and capture more revenue opportunity and how your team can deliver them.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Using High-Value Offers for ABM Opportunity Creation.jpg",
                imgOrien: "landscape",
                type: "Webinar",
                btnText: "Watch the BrightTalk Webinar",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/using-high-value-offers-for-abm-opportunity-creation/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id12: {
                id: "id12",
                title: "Sustaining ABM Success: Balancing Scale and Customization",
                summary: "This webinar breaks down how to scale and personalize your ongoing webinar-based ABM efforts, from expanding the variety of your webinar formats to introducing virtual events and more.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Sustaining ABM Success - Balancing Scale and Customization.jpg",
                imgOrien: "landscape",
                type: "Webinar",
                btnText: "Watch the BrightTalk Webinar",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/sustaining-abm-success-balancing-scale-and-customization/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id13: {
                id: "id13",
                title: "Embracing Your Customer’s Uniqueness to Win in ABM and ABX",
                summary: "In this webinar, you'll explore how to achieve a new level of customer centricity that will attract more new buyers and bind existing customers to you in new and more powerful ways for your ABM program.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Embracing Your Customers Uniqueness to Win in ABM and ABX.jpg",
                imgOrien: "landscape",
                type: "Webinar",
                btnText: "Watch the BrightTalk Webinar",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/embracing-your-customers-uniqueness-to-win-in-abm-and-abx/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id14: {
                id: "id14",
                title: "Demand Evolution: From Leads with Problems to Teams with Projects",
                summary: "Hear from Michael Brown, head of Reltio’s Global Revenue Development organization to learn why this world-class Master Data Management company needed to make the move past MQLs to buying groups and opportunities, how they accomplished it organizationally and systematically, and what their outcomes are to date.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Demand Evolution - From Leads with Problems to Teams with Projects.jpg",
                imgOrien: "landscape",
                type: "Webinar",
                btnText: "Watch the BrightTalk Webinar",
                site: "BrightTalk",
                btnUrl: "https://www.brighttalk.com/webcast/43/593028?utm_source=editorial&utm_campaign=ABM-pillar",
            },
            id15: {
                id: "id15",
                title: "Solving for Engagement: A Key to ABM Success",
                summary: "Even though ABM has become the go-to concept for many B2B organizations, the success of their programs has been mixed. This webinar explores why your ABM might not be working and how a webinar-focused strategy can help fill the gap.",
                imgURL: "https://cdn.ttgtmedia.com/rms/abtesting/img/abmPillar/abmPillar-Solving for Engagement - A Key to ABM Success.jpg",
                imgOrien: "landscape",
                type: "Webinar",
                btnText: "Watch the BrightTalk Webinar",
                site: "TechTarget",
                btnUrl: "https://www.techtarget.com/resources/solving-for-engagement-a-key-to-abm-success/?utm_source=editorial&utm_campaign=ABM-pillar",
            },
        };

        console.log(`Both objects created successfully`);

        // This determines where to place the splashes
        function getzone() {
            var zone;
            TT(['context'], function (ctx) {
                zone = ctx.zone.trim();
            });
            return zone;
        }
        function getcollection() {
            var collection;
            TT(['context'], function (ctx) {
                collection = ctx.collection.trim();
            });
            return collection;
        }

        function getTargetIndices(zone) {
            if (zone === "DEFINITION") {
                return [1, 8, 15];
            } else if (zone === "FEATURE") {
                return [3, 11, 14];
            } else if (zone === "PILLAR") {
                return [5, 11, 14];
            } else {
                // TIPS
                return [3, 8, 11];
            }
        }

        var zone = getzone();
        var collection = getcollection();
        var targetIndices = getTargetIndices(zone);

        targetIndices.forEach((index, i) => {
            const snippetDiv = $(`<div class="custom-div-${i + 1} ${zone.trim()} ${collection.replace(/ +/g, "")}"></div>`);

            const snippetContent = $('<div></div>').appendTo(snippetDiv);

            $('<div class="o-type o-type-top"></div><a target="_blank" class="o-image-link" id="o-linkUrl-' + (i + 1) + '"><img id="o-imgUrl-' + (i + 1) + '" class="o-imgUrl" src=""></a>')//.attr('id', `o-linkUrl-${i + 1}`)
                .appendTo(snippetContent);

            snippetContent.append($(`<div class="o-rightContainer"><div class="o-type o-type-right" id="o-type-` + (i + 1) + `"></div><div id="o-title-${i + 1}"><a target="blank" class="o-title-link"></a></div><div id="o-summary-${i + 1}"></div><a id="o-btnText-${i + 1}"></a></div>`));

            $('#content-body p').eq(index).after(snippetDiv);

        }
        );

        function updatePageContent() {
            const currentUrl = window.location.href;

            for (const urlObject of page2Resource.urls) {
                if (currentUrl.includes(urlObject.url)) {
                    let idIndex = 0;

                    for (const idObject of urlObject.ids) {
                        const id = idObject.id;
                        const metadata = resourceMetadata[id];
                        if (metadata) {
                            const snippetIndex = idIndex % 3 + 1; // +1 to align with HTML element numbering
                            $(`#o-linkUrl-${snippetIndex}`).attr('href', metadata.btnUrl);
                            $(`#o-imgUrl-${snippetIndex}`).attr('src', metadata.imgURL);
                            $(`#o-title-${snippetIndex} .o-title-link`).attr('href', metadata.btnUrl).text(metadata.title);
                            $(`#o-summary-${snippetIndex}`).html(metadata.summary);
                            $(`#o-btnText-${snippetIndex}`).text(metadata.btnText).attr('href', metadata.btnUrl);
                            $(`#o-type-${snippetIndex}`).html(`Recommended ${metadata.type}`);

                            // Ensure all relevant classes are set correctly for each div
                            const div = $(`.custom-div-${snippetIndex}`);
                            div.addClass('o-abm-pillar-splash'); // Ensures base styling is applied
                            div.removeClass('optlyShort optlyLong optlyLandscape optlyPortrait'); // Clear previous specific styling

                            // Add specific classes based on displayType and imgOrien
                            if (idObject.displayType === "Short") {
                                div.addClass('optlyShort');
                            } else {
                                div.addClass('optlyLong');
                            }

                            if (metadata.imgOrien === "landscape") {
                                div.addClass('optlyLandscape');
                            } else {
                                div.addClass('optlyPortrait');
                            }

                            idIndex++;
                        }
                    }
                    break;
                }
            }
        }


        // Adds the classes for CSS
        function addSharedClasses() {
            $('[id^="o-"]').each(function () {
                if (this.id.startsWith("o-summary")) {
                    $(this).addClass("o-summary");
                } else if (this.id.startsWith("o-imgUrl")) {
                    $(this).addClass("o-imgUrl");
                } else if (this.id.startsWith("o-title")) {
                    $(this).addClass("o-title");
                } else if (this.id.startsWith("o-btnText")) {
                    $(this).addClass("o-btnText");
                } else if (this.id.startsWith("o-type")) {
                    $(this).addClass("o-type");
                }
            });
        }

        // Selects all splashes within "extra-info" or "pillar-cluster-splash" and moves it to the next section
        function moveSplashDivs() {
            var snippetsToMove = $('.extra-info .o-abm-pillar-splash, section#pillar-cluster-splash .o-abm-pillar-splash');

            snippetsToMove.each(function () {
                var currentSnippet = $(this);
                var currentSection = currentSnippet.closest('section');
                if (currentSection.length > 0) {
                    currentSnippet.insertAfter(currentSection);
                }
            });
        }

        //appends UTM parameters for download buttons and Removes second question mark
        function appendUTMParameters() {
            const classesToMatch = ['download-button', 'cluster-download', 'o-btnText'];

            classesToMatch.forEach(className => {
                $(`a.${className}`).each(function () {
                    const currentHref = $(this).attr('href');

                    if (currentHref && currentHref.includes('?')) {
                        const firstPart = currentHref.substring(0, currentHref.indexOf('?') + 1);
                        const secondPart = currentHref.substring(currentHref.indexOf('?', currentHref.indexOf('?') + 1) + 1);
                        const modifiedHref = firstPart + secondPart;

                        const finalHref = modifiedHref.replace(/\?/g, '&');

                        $(this).attr('href', finalHref + `&utm_source=editorial-primary-buttons&utm_campaign=ABM-pillar`);
                    } else if (currentHref) {
                        $(this).attr('href', currentHref + `?utm_source=editorial-primary-buttons&utm_campaign=ABM-pillar`);
                    }
                });
            }
            );

        }

        getzone();
        getcollection();
        updatePageContent();
        addSharedClasses();
        moveSplashDivs();
        //appendUTMParameters();
        //cg UTM test
        var downloadUrl = "https://www.techtarget.com/resources/a-practical-guide-to-implementing-account-based-marketing/?offer=Content_OTHR-PillarPage_Whatisaccount-basedmarketingAguidetoABMstrategy&utm_source=editorial-primary-buttons&utm_campaign=ABM-pillar";
        var unobserve1 = window.optimizelyEdge.get("utils").observeSelector(".cluster-download", function (ctaElement) {
            $('.cluster-download').attr('href', downloadUrl);
            unobserve1();
        });
        var unobserve2 = window.optimizelyEdge.get("utils").observeSelector("#pillar-ribbon .download-button a", function (ctaElement) {
            $('#pillar-ribbon .download-button a').attr('href', downloadUrl);
            unobserve2();
        });
        var unobserve3 = window.optimizelyEdge.get("utils").observeSelector("#pillar-download .download-button a", function (ctaElement) {
            $('#pillar-download .download-button a').attr('href', downloadUrl);
            unobserve3();
        });

        console.log(eventExpName + ": ABM Pillar Functions executed successfully.");
        pushTrackingEvent("elementsAdded");

    });

    window.$('.o-btnText').click(function () {
        pushTrackingEvent("splash_btn_clicked");
    });

    window.$('.o-title').click(function () {
        pushTrackingEvent("splash_link_clicked");
    });

});
}, "dependencies": []}, {"id": "9f195ca179954557b2033d10fd1f19e0", "type": "append", "selector": "head", "value": "<style>div.o-abm-pillar-splash { \n\tmargin:25px 0;\n  padding:20px;\n  clear:right;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,.25);\n  display:flex;\n}\n\n\ndiv.o-abm-pillar-splash:before,\ndiv.o-abm-pillar-splash:after { \n\tclear:both;\n}\n.optlyLandscape .o-rightContainer {\n\tmargin-left: 260px;\n  position: relative;\n}\n.optlyPortrait .o-rightContainer {\n\tmargin-left: 170px;\n  position: relative;\n}\ndiv.o-abm-pillar-splash a {\n  display:block;\n  cursor:pointer !important;\n}\n\ndiv.o-abm-pillar-splash .o-image-link {\n\tposition: absolute;\n  display: inline-block !important;\n  margin-right:20px;\n}\ndiv.o-abm-pillar-splash.optlyLong {\n background: #FFFFFF 0% 0% no-repeat padding-box;\n  opacity: 1;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  color: #323232;\n  /*min-height: 210px*/\n}\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-title{\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n}\ndiv.o-abm-pillar-splash .o-summary {\n\tline-height:1.3em;\n  margin-top:10px;\n  margin-bottom:20px;\n}\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-summary {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  position: relative;\n}\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-btnText:hover {\n    color: #ffffff;\n  background-color:#323232\n}\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n#sdef .definition-section div.o-abm-pillar-splash.optlyLandscape img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyLandscape img {\n  width:  240px !important;\n  max-width:  240px !important;\n  border:1px solid #e3e3e3;\n  max-width: 100%;\n    height: auto;\n    width: 32.5%;\n }\n#sdef .definition-section div.o-abm-pillar-splash.optlyPortrait img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyPortrait img {\n  max-height:  180px !important;\n  width: 100%;\n  border:1px solid #e3e3e3;\n }\n\ndiv.o-abm-pillar-splash.optlyLong.optlyLandscape .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n/*o-type conditional display*/\ndiv.o-abm-pillar-splash.optlyLong .o-type-top {\npadding-bottom:10px;\n}\ndiv.o-abm-pillar-splash.optlyShort .o-type-right {\npadding-bottom:10px;\n}\ndiv.o-abm-pillar-splash.optlyShort .o-type-top,\ndiv.o-abm-pillar-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n}\ndiv.o-abm-pillar-splash.optlyShort .o-type-right,\ndiv.o-abm-pillar-splash.optlyLong .o-type-top{\ndisplay:none;\n}\n/*Short Portrait*/\ndiv.o-abm-pillar-splash.optlyShort .o-type-top,\ndiv.o-abm-pillar-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n\n}\ndiv.o-abm-pillar-splash.optlyShort .o-type-right,\ndiv.o-abm-pillar-splash.optlyLong .o-type-top{\ndisplay:none;\n}\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n\tbackground: #E6E6E6 0% 0% no-repeat padding-box;\n  opacity: 1;\n  /*min-height:123px*/\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait .o-summary {\n  display: none\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  height: auto;\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait a.o-btnText {\n  display: none;\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait .o-title:hover {\n    color: #323232;\n}\n\n\ndiv.o-abm-pillar-splash.optlyShort.optlyPortrait .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/*Short Landscape*/\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  background: #f2f2f2;\n  /*min-height:123px;*/\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape p.o-type {\n\n\n  font-size: 12px;\n  font-weight: 700;\n\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape .o-summary {\n\n  display: none\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape a.o-btnText {\n  display: none;\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\ndiv.o-abm-pillar-splash.optlyShort.optlyLandscape .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/* no orientation optlyLong  */\n\ndiv.o-abm-pillar-splash.optlyLong .o-title:hover {\n    color: #323232;\n}\n\ndiv.o-abm-pillar-splash.optlyLong .o-title{\n position: relative;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n  margin: 0;\n}\n\ndiv.o-abm-pillar-splash.optlyLong .o-summary {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n}\n\ndiv.o-abm-pillar-splash.optlyLong .o-btnText:hover {\n    color: #323232;\n}\n\ndiv.o-abm-pillar-splash.optlyLong .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  letter-spacing: -.02em;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyLong .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  color: #666;\n\n\n}\n\n/* no orientation optlyShort  */\n\ndiv.o-abm-pillar-splash.optlyShort {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  clear: both;\n  background: #f2f2f2;\n}\n\ndiv.o-abm-pillar-splash.optlyShort .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\ndiv.o-abm-pillar-splash.optlyShort p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort .o-summary {\n\n  display: none\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort a.o-btnText {\n  display: none;\n}\n\ndiv.o-abm-pillar-splash.optlyShort .o-title:hover {\n    color: #323232;\n}\n\n\n\ndiv.o-abm-pillar-splash.optlyShort .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n     \n}\n\n/*PILLAR MAIN */\ndiv.o-abm-pillar-splash.optlyLong.PILLARMain .o-type{\n  /*margin-top: 2.5% !important;*/\n}\n\ndiv.custom-div-2.PILLAR.PILLARMain.o-abm-pillar-splash.optlyShort.optlyLandscape{\n/*min-height:98px*/\n}\n\n\n/* Media Queries */\n@media screen and (max-width: 1020px) {\n  div.o-abm-pillar-splash.optlyLong,\n  div.o-abm-pillar-splash.optlyLong.optlyLandscape,\n  div.o-abm-pillar-splash.optlyShort,\n  div.o-abm-pillar-splash.optlyShort.optlyLandscape {\n    margin: 20px 10px; \n    clear: both\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  \n  #sdef .definition-section div.o-abm-pillar-splash.optlyPortrait img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyPortrait img {\n  max-height: 100% !important;\n  height: 150px;\n  width: auto;\n  border:1px solid #e3e3e3;\n }\n  \n  #sdef .definition-section div.o-abm-pillar-splash.optlyLandscape img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyLandscape img {\n  border:1px solid #e3e3e3;\n  max-width: 100% !important;\n    height: auto;\n    width: 32.5% !important;\n }\n#sdef .definition-section div.o-abm-pillar-splash.optlyPortrait img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyPortrait img {\n  max-height:  200px !important;\n  border:1px solid #e3e3e3;\n }\n  \n  .optlyLandscape .o-rightContainer {\n    width: 63%;\n    margin-left: 250px;\n    display: block;\n    height: 100%;\n    max-height: min-content;\n    /* flex-direction: column; */\n    float: right;\n}\n \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 20%;\n\n}\n  \n  div.o-abm-pillar-splash.optlyLong.optlyLandscape .o-summary,\n  div.o-abm-pillar-splash.optlyLong .o-summary {\n    font-size: calc(0.8vw + .7px);\n}\n  div.o-abm-pillar-splash.optlyLong .o-btnText,\n  div.o-abm-pillar-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    font-size: calc(0.8vw + 4.1px);\n}\n}\n\n@media screen and (max-width: 960px) {\n   \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 130px;\n\n}\n  \n div.o-abm-pillar-splash.optlyLong.optlyLandscape .o-summary,\n  div.o-abm-pillar-splash.optlyLong .o-summary {\n    font-size: calc(0.8vw + 4.8px);\n}\n  div.o-abm-pillar-splash.optlyLong .o-btnText,\n  div.o-abm-pillar-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    font-size: calc(0.8vw + 5.8px);\n}\n\n}\n\n@media screen and (max-width: 480px) {\n#sdef .definition-section div.o-abm-pillar-splash.optlyLandscape img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyLandscape img,\n  #sdef .definition-section div.o-abm-pillar-splash.optlyPortrait img,\n.eoc_v2 .content-center div.o-abm-pillar-splash.optlyPortrait img {\ndisplay:none\n      \n}\n  .optlyPortrait .o-rightContainer, \n  .optlyLandscape .o-rightContainer {\n    width: 100%;\n    float:none;\n    margin:0;\n}\n  \ndiv.o-abm-pillar-splash.optlyLong {\n\n  min-height: auto; \n  }\n   div.o-abm-pillar-splash.optlyLong .o-btnText,\n  div.o-abm-pillar-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    font-size: calc(0.8vw + 7.8px);\n}\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "a7985064a41746328f219a877ce17699", "selector": ".custom-div-1 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0543f65abbfd43deb833e1d994d32a42", "selector": ".custom-div-2 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "fc23e6ec2b1c40d18536f650daf0a7c4", "selector": ".custom-div-3 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "37279cd57d53477ca9d46552ae314129", "selector": ".o-btnText"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "8c80ad92347a473bad31721b9523d40d", "selector": ".o-title"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "b27bc587ee234c89bd7d1c28e6105a44", "selector": "#pillar-download a, .pillar-ribbon-download-tracking, .cluster-download"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "14587ba61b9c4cda9c0083439330097a", "selector": "#pillar-download a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "71f93886a9194574a53054f625667e89", "selector": ".pillar-ribbon-download-tracking"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "7a5e9b0d168f401c8d5372ead43818bd", "selector": ".cluster-download"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "f257ddb2c52c4c12aae37728eeafd72f", "selector": ".o-abm-pillar-splash a"}, {"css": {}, "dependencies": [], "attributes": {"html": "Download TechTarget\u2019s ABM guide", "style": "text-align:center"}, "type": "attribute", "id": "a1f83812588d46d0969c8ec86e68e99a", "selector": ".cluster-download > p"}, {"css": {}, "dependencies": [], "attributes": {"html": "Download the full guide"}, "type": "attribute", "id": "3a8bcd7215174052b38439aed4fe0996", "selector": ".pillar-ribbon-download-tracking > span:first-of-type"}]}]}], "weightDistributions": [{"entityId": "27426710354", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "27503190256"}}], "policy": "single_experiment", "viewIds": ["27459220497"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "30361890155", "name": null, "commitId": "4829008714530816", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "20324229137"], "audienceName": null, "changes": null, "id": "30340650402", "integrationSettings": null, "variations": [{"id": "30344210696", "name": null, "actions": [{"viewId": "30356300218", "changes": [{"id": "46f3e401fb544f7e87c631622d874faf", "type": "custom_code", "value": function($){console.log("TOC - Control Start");
$(document).ready(function() {  
 	
 	// Initialize variables
  var eventExpName = "toc_taf_";
  var promoCode = "abt_toc_eoc_ctrl";
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  pushTrackingEvent('variationStart');
  
  // functions
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
 // Track Content Body Clicks EXCLUDING share icons
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      // console.log('Content body link click, tracked successfully');

      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      // console.log('Social/share link click detected, tracking skipped');
    }
});
  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height();

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}]}]}, {"id": "30341980406", "name": null, "actions": [{"viewId": "30356300218", "changes": [{"id": "96322a76767645ccb3814b62ad16aeda", "type": "custom_code", "value": function($){console.log("TOC_TaF - Variation Start");
$(document).ready(function() {  
  
 	// Initialize variables
  var eventExpName = "toc_taf_";
  var promoCode = "abt_toc_eoc_var";
  var hasIntroParagraph = false;
  var enteredViewport = false;
  var pillarNavHTML = '<div class="optly-toc pillar-nav"><section id="optly-toc"> <div class="optly-toc-navbar pillar-navbar"> <i class="icon pillar"></i> <div class="toc">Table of Contents</div></div> </section></div>';
  var splashInViewportTopHalf;
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  if ($('#content-body').children().first().is('p')) {
  	hasIntroParagraph = true;
  }
  pushTrackingEvent('variationStart');
  
  // append HTML
	$('#content-body').prepend(pillarNavHTML);
  $('#rail-share-bar').appendTo('.optly-toc.pillar-nav');
  
  // Experiment functions
  pillarLogic();
  $('#optly-toc a').addClass('optly-toc-anchor');
  positionTOC();
  elementInViewport('.optly-toc.pillar-nav');
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });

  

  // elements added
  pushTrackingEvent('elementsAdded');

function pillarLogic(hasIntroParagraph) {
				// Nav
				var numChapters = 0; // Number of "chapters"
				var chapterTitle; // Individual chapter titles to be used in the anchor nav
				var chapterElementHTML = ''; // Markup for each individual chapter to be inserted in the anchor nav
				var name; // Name that we're using for targeting
				var chapterList = []; // List of the chapter titles
				var chapterActivePosition; // This is the position we are using to determine when a nav item is active
				var chapterSlideToPosition; // This is the position we are using to determine where a nav item will slide to on click
				var chapterActivePositions = []; // List of chapter offsets for active nav
				var chapterSlideToPositions = []; // List of chapter offsets for nav to slide to
				var scrolled = false; // Has the user scrolled yet
				var loaded = false; // Has the page finished loading
  		
  			// Scroll
				function scrollToAnchor(aid){
          var scrollHere = chapterSlideToPositions[aid];
          $(window).animate({scrollTop: scrollHere},500, function() {
        // Animation complete, trigger a scroll event manually
        $(window).trigger('scroll');
    });
					}

				// Populate chapter list and write it to our navigation
				$('#content-body .main-article-chapter').each(function(i, obj) {
					numChapters++;
					chapterTitle = $(this).attr('data-menu-title');
					chapterList.push(chapterTitle);
					chapterActivePosition = $(this).offset().top - 210; //CG was 210
					chapterActivePositions.push(chapterActivePosition);
					chapterSlideToPosition = $(this).offset().top - 195; //CG was 195
					chapterSlideToPositions.push(chapterSlideToPosition);
					name = i;
					$(this).attr('name', name);

					console.log(chapterSlideToPosition);

					chapterElementHTML += "<li><a name='" + i + "'>" + chapterTitle + "</span></a></li>";
          
				}).promise().done(function(){
          // Check if the first child element of parentElement is an <h2>
          if (!hasIntroParagraph) {
              var anchorMenu = "<ul>" + chapterElementHTML + "</ul>";
          } else {
              var anchorMenu = "<ul><li class='active'><a class='introduction' name='introduction'>Introduction</a></li>" + chapterElementHTML + "</ul>";
        	}
          $(anchorMenu).appendTo($('#main-content .pillar-navbar'));
          if (!hasIntroParagraph) {
          	$('.introduction.optly-toc-anchor').remove();
            $('#optly-toc ul li:first-child').addClass('active');
          }
				});

				// This indented section is for the new quirky anchor menu with scroll
				var viewportHeight = window.innerHeight;
				var originalMenuHeight; // Get the height of the menu
				var availableHeightForMenu = viewportHeight - 240; // This value "240" needs to match CSS value

				function adjustAnchorMenu() {
					if(originalMenuHeight > availableHeightForMenu) {
						$('.pillar-navbar ul').addClass('fixed-height'); // This class is how we will know to do special "scroll menu" things
					}
				}
  
  var scrollMenuRelativeHeightDifferences;
				var scrollMenuQuirksExplore; // Offset for "Explore" aka top of menu
				var scrollMenuQuirksOriginalOffset; // Get starting offset of menu items
				var scrollMenuQuirksOriginalOffsets = []; // Array that stores offset of menu items
				var scrollMenuQuirksRelativeDifference; // Get offset from previous menu items
				var scrollMenuQuirksRelativeDifferences = []; // Array with offsets from previous menu items
				var scrollMenuQuirksRelativeOffset; // Get offset from top of menu
				var scrollMenuQuirksRelativeOffsets = []; // Array with offsets from top of menu
				var visibleMenuBegin;
				var visibleMenuEnd;
				var visibleMenuItem;
				var scrollThisAmount;
				var currentChapter;
				var menuItemIsHidden;

				function menuPopulated() {
					var myInterval1 = setInterval(function() {
						if ($('.pillar-navbar ul').length > 0) {
							originalMenuHeight = $('.pillar-navbar ul').height();
							scrollMenuQuirksExplore = $(".pillar-navbar").offset().top;

							$('.pillar-navbar ul li').each(function() {
								scrollMenuQuirksOriginalOffset = $(this).offset().top;
								scrollMenuQuirksOriginalOffsets.push(scrollMenuQuirksOriginalOffset);
							}).promise().done(function(){
							for(var i=1; i < numChapters; i++){
								scrollMenuQuirksRelativeDifference = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[i-1];
								scrollMenuQuirksRelativeDifferences.push(scrollMenuQuirksRelativeDifference);
								scrollMenuQuirksRelativeOffset = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[0];
								scrollMenuQuirksRelativeOffsets.push(scrollMenuQuirksRelativeOffset);
								if(scrollMenuQuirksRelativeOffset > availableHeightForMenu){
									$('.pillar-navbar ul li:nth-of-type(' + i + ')').nextAll().addClass('menuItemIsHidden');
								}
							}
						})

						adjustAnchorMenu();
						clearInterval(myInterval1);
					}}, 50);
				}

				menuPopulated();

				// Introduction should always just scroll to the top (0)
				$(".pillar-navbar ul li a.introduction").click (function() {
					$(window).animate({scrollTop: 0},'500');
					$('.actions-bar').css({'position':'','top':'','left':''});
				})

				// Get starting position which is pre-loaded, expect it to be temporarily wrong if there are images before the clicked chapter
				var startingAnchor;
				var startingPositions = function(){
					$(".pillar-navbar ul li a").click(function() {
						startingAnchor = $(this).attr('name');
						if (loaded == false) {
							scrollToAnchor(startingAnchor);
						}
					});
				}

				startingPositions();

				// Once page has finished loading (e.g. images), update chapter positions
				$(window).on("load", function() {
					setTimeout(function() {
						// clear existing chapterActivePositions
						chapterActivePositions = [];
						chapterSlideToPositions = [];
            var i;

						// depending on whether the user has already started scrolling, the offsets are off by 100px
						$('#content-body .main-article-chapter').each(function(i, obj) {
							
							chapterActivePosition = $(this).offset().top - 250; //CG was 150, added 50
							chapterSlideToPosition = $(this).offset().top - 130;//CG was 130, added 50
							chapterSlideToPositions.push(chapterSlideToPosition);
							chapterActivePositions.push(chapterActivePosition);

							console.log(chapterSlideToPosition);

						}).promise().done(function(){
							if(startingAnchor){
							// Update offset if the user has ALREADY clicked an anchor link
								scrollToAnchor(startingAnchor);
							}
						});

						$(".pillar-navbar ul li a").click(function() {
							var whichAnchor = $(this).attr('name');
							scrollToAnchor(whichAnchor);
						});

						$(".pillar-navbar ul li a.introduction").click (function() {
							$(window).animate({scrollTop: 0},'500');
						});
					}, 3000);
				});

				var preContentBodyTriggerPoint = $('.pillar-nav').offset().top;

				$(window).scroll(function() {
					scrolled = true;
					var scroll = $(window).scrollTop();
					var menuScroll = $('.fixed-height').scrollTop();
					var downloadScroll;
					var contentBodyTriggerPoint = $('#content-body').scrollTop() + $('#content-body').height();
					
					// First and last chapters
						if(scroll <= chapterActivePositions[0]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:first-of-type').addClass('active');
						} else if(scroll >= chapterActivePositions[numChapters - 1]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:last-of-type').addClass('active');
						}
          // Active chapter
					for(var i=0; i < numChapters; i++){
            //console.log('ACTIVE POSITIONS: '+scroll+' >= '+chapterActivePositions[i]+' scroll <='+chapterActivePositions[i+1]);
						if(scroll >= chapterActivePositions[i] && scroll <= chapterActivePositions[i+1]){
							$('.pillar-navbar li').removeClass('active');
							if ($('.introduction').length > 0) {
                $('.pillar-navbar li:nth-of-type('+ (i+2) + ')').addClass('active');
              }else {$('.pillar-navbar li:nth-of-type('+ (i+1) + ')').addClass('active');}
						}
					}
				});
		}  

    //check if in viewport after added and on scroll
    function elementInViewport(element) {
      var elem = $(element);
      var elemTop = elem.offset().top;
      var bottom_of_element = elemTop + $(elem).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ( ((bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element))) {
        enteredViewport = true; // the element is visible, do something
        pushTrackingEvent('enteredViewport');
      } else {
        // do nothing
      }
      if (enteredViewport && (elemTop < (bottom_of_screen-($(window).innerHeight()/2))) || (bottom_of_element < (bottom_of_screen-($(window).innerHeight()/2)))) {
        splashInViewportTopHalf = true;
      } else {
        splashInViewportTopHalf = false;
      }
    }

	function positionTOC() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#content-body").offset().top - 150; // -150 should match opposite of position sticky top
        var s = $(".optly-toc.pillar-nav");
        if(st > ot) {
            s.css({
                position: "sticky",
                top: "150px",
                transition: "0.2s top"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "absolute", //relative
                    top: "0px"
                });
            }
        }
    };
    $(window).scroll(move);
    move();
  }
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
 // Track Content Body Clicks EXCLUDING share icons & append promoCode
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      // console.log('Content body link click, tracked successfully');

     
      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      // console.log('Social/share link click detected, tracking skipped');
    }
});

  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop(); //$(window)
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height(); //$(document)

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}, {"id": "85b6c9d11e674e1f9d65a13c5f797e69", "type": "append", "selector": "head", "value": "<style>@media only screen and (min-width: 1445px) {\n  .pillar-cluster #optly-toc .icon.pillar, .pillar-bridge  #optly-toc  .icon.pillar {display:none;}\n  #main-content {\nleft:110px ;\n}\n.eoc_v2 .breadcrumbs {\npadding-left:110px;\n}\n.optly-toc.pillar-nav ul{ \n  height:100%;\n  min-height:100px;\n  max-height: calc(100vh - 360px) !important;\n  overflow-y:auto;\n}\n.optly-toc.pillar-nav ul li {position:relative}\n.optly-toc.pillar-nav.fixed.bottom,.optly-toc.pillar-nav.bottom {\n\tposition:sticky;\n  top:initial !important;\n  scroll-margin-top: 300px;\n}\n\n.eoc_v2 .main-content .content-center .optly-toc p a, .main-content .content-center .section.definition-section .optly-toc li a{text-decoration:none;padding:0;}\n.pillar-nav {\n\tfloat:left;\n  font-size:14px;\n  /*top:32px;\n  position:sticky;*/\n  margin-left:-271px;\n  width: 200px;\n  background:#fff;\n  padding:15px;\n  /*border: 1px solid #f3f3f3;*/\n  clear: left;\n}\n#rail-share-bar {border-top: 1px solid #e3e3e3;padding-top:5px;height:25px;color:#666;padding-left:11px;}\n.pillar-nav a{\n\tcolor:teal;\n  cursor:pointer;\n}\n.toc {\n\tfont-size: 14px;\n  font-weight:700;\n  padding: 0px 0 10px 0;\n  color:#323232;\n}\n\n.pillar-nav ul li{\n\tborder-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-nav a:hover{\n\tcolor:#323232;\n}\n.pillar-navbar {position:relative;}\n.pillar-navbar ul li {\n    border-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-navbar ul li.active:before {\n    color: teal;\n    content: \"\\2219\";\n    font-size: 60px;\n    position: absolute;\n    top: -17px;\n    left: 5px;\n}\n\n.pillar-navbar ul li.active a {\n  color: #323232;\n  font-weight:700;\n}\n\n.eoc_v2 .main-content .content-left .share-bar-desktop {\n\tmargin-left:initial;\n}\n.eoc_v2 .share-bar-desktop {width:auto;margin:initial;position:relative;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop {background:none !important;display:inline-block;padding:0;border-top:none;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a {color:#666;min-height:25px;padding: 0 3px !important;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a:hover  {color:teal !important;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.socialMedia-twitter {top:0px;position:relative;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a .x_logo {font-size:14px;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop [data-icon]:before {vertical-align:middle;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.contentTools-print a, \n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.contentTools-email a {\n\tcolor:#666;\n}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a {\n  font-size: 25px;\n  }  \n}\n@media only screen and (max-width: 1444px) { \n  .optly-toc.pillar-nav {\n  display:none;\n  }\n  \n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "d6a26c083c93423a85ac89cfd70e4bec", "selector": "#optly-toc ul li a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0bb9624564f340d49eba2d0c03a28019", "selector": ".share-bar-item-desktop a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "f30e463d63cd4abd8e5599fbba771256", "selector": "#content-body a:not(.optly-toc-anchor)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "b83fad2761844b0a9dc5443cbe58485b", "selector": "#main-content a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "4a47904929864f6993327a9a00546fa7", "selector": "#page-header"}]}]}], "weightDistributions": [{"entityId": "30344210696", "endOfRange": 5000}, {"entityId": "30341980406", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30361890155"}}], "policy": "single_experiment", "viewIds": ["30356300218"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "30433850573", "name": null, "commitId": "4706070778609664", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "20324229137"], "audienceName": null, "changes": null, "id": "30464120111", "integrationSettings": null, "variations": [{"id": "30436110477", "name": null, "actions": [{"viewId": "30418870483", "changes": [{"id": "9750791dcc81447b9e0d9ebff154f7ce", "type": "custom_code", "value": function($){console.log("TOC - Control Start");
$(document).ready(function() {  
  
	
 	// Initialize variables
  var eventExpName = "toc_";
  var promoCode = "abt_toc_def_ctrl";
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  pushTrackingEvent('variationStart');
  
  // functions
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
   // Track Content Body Clicks EXCLUDING share icons & add promo code
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      console.log('Content body link click, tracked successfully');

     
      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      console.log('Social/share link click detected, tracking skipped');
    }
});

  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height();

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}]}]}, {"id": "30465020342", "name": null, "actions": [{"viewId": "30418870483", "changes": [{"id": "36b49e553eb34e33bcfab3aae6e0ddf3", "type": "custom_code", "value": function($){console.log("TOC - Variation Start");
$(document).ready(function() {  
  
	
 	// Initialize variables
  var eventExpName = "toc_";
  var promoCode = "abt_toc_def_var";
  var hasIntroParagraph = false;
  var enteredViewport = false;
  var pillarNavHTML = '<div class="optly-toc pillar-nav"><section id="optly-toc"> <div class="optly-toc-navbar pillar-navbar"> <i class="icon pillar"></i> <div class="toc">Table of Contents</div></div> </section></div>';
  var splashInViewportTopHalf;
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  if ($('#content-body').children().first().is('p')) {
  	hasIntroParagraph = true;
  }
  pushTrackingEvent('variationStart');
  
  // append HTML
	$('#content-body').prepend(pillarNavHTML);
  $('#rail-share-bar').appendTo('.optly-toc.pillar-nav');
  
  // functions
  pillarLogic();
  $('#optly-toc a').addClass('optly-toc-anchor');
  positionTOC();
  elementInViewport('.optly-toc.pillar-nav');
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });

  

  // elements added
  pushTrackingEvent('elementsAdded');

function pillarLogic(hasIntroParagraph) {
				// Nav
				var numChapters = 0; // Number of "chapters"
				var chapterTitle; // Individual chapter titles to be used in the anchor nav
				var chapterElementHTML = ''; // Markup for each individual chapter to be inserted in the anchor nav
				var name; // Name that we're using for targeting
				var chapterList = []; // List of the chapter titles
				var chapterActivePosition; // This is the position we are using to determine when a nav item is active
				var chapterSlideToPosition; // This is the position we are using to determine where a nav item will slide to on click
				var chapterActivePositions = []; // List of chapter offsets for active nav
				var chapterSlideToPositions = []; // List of chapter offsets for nav to slide to
				var scrolled = false; // Has the user scrolled yet
				var loaded = false; // Has the page finished loading
  		
  			// Scroll
				function scrollToAnchor(aid){
          var scrollHere = chapterSlideToPositions[aid];
          $(window).animate({scrollTop: scrollHere},500, function() {
        // Animation complete, trigger a scroll event manually
        $(window).trigger('scroll');
    });
					}

				// Populate chapter list and write it to our navigation
				$('#content-body .main-article-chapter').each(function(i, obj) {
					numChapters++;
					chapterTitle = $(this).attr('data-menu-title');
					chapterList.push(chapterTitle);
					chapterActivePosition = $(this).offset().top - 210; //CG was 210
					chapterActivePositions.push(chapterActivePosition);
					chapterSlideToPosition = $(this).offset().top - 195; //CG was 195
					chapterSlideToPositions.push(chapterSlideToPosition);
					name = i;
					$(this).attr('name', name);

					console.log(chapterSlideToPosition);

					chapterElementHTML += "<li><a name='" + i + "'>" + chapterTitle + "</span></a></li>";
          
				}).promise().done(function(){
          // Check if the first child element of parentElement is an <h2>
          if (!hasIntroParagraph) {
              var anchorMenu = "<ul>" + chapterElementHTML + "</ul>";
          } else {
              var anchorMenu = "<ul><li class='active'><a class='introduction' name='introduction'>Introduction</a></li>" + chapterElementHTML + "</ul>";
        	}
          $(anchorMenu).appendTo($('#main-content .pillar-navbar'));
          if (!hasIntroParagraph) {
          	$('.introduction.optly-toc-anchor').remove();
            $('#optly-toc ul li:first-child').addClass('active');
          }
				});

				// This indented section is for the new quirky anchor menu with scroll
				var viewportHeight = window.innerHeight;
				var originalMenuHeight; // Get the height of the menu
				var availableHeightForMenu = viewportHeight - 240; // This value "240" needs to match CSS value

				function adjustAnchorMenu() {
					if(originalMenuHeight > availableHeightForMenu) {
						$('.pillar-navbar ul').addClass('fixed-height'); // This class is how we will know to do special "scroll menu" things
					}
				}
  
  var scrollMenuRelativeHeightDifferences;
				var scrollMenuQuirksExplore; // Offset for "Explore" aka top of menu
				var scrollMenuQuirksOriginalOffset; // Get starting offset of menu items
				var scrollMenuQuirksOriginalOffsets = []; // Array that stores offset of menu items
				var scrollMenuQuirksRelativeDifference; // Get offset from previous menu items
				var scrollMenuQuirksRelativeDifferences = []; // Array with offsets from previous menu items
				var scrollMenuQuirksRelativeOffset; // Get offset from top of menu
				var scrollMenuQuirksRelativeOffsets = []; // Array with offsets from top of menu
				var visibleMenuBegin;
				var visibleMenuEnd;
				var visibleMenuItem;
				var scrollThisAmount;
				var currentChapter;
				var menuItemIsHidden;

				function menuPopulated() {
					var myInterval1 = setInterval(function() {
						if ($('.pillar-navbar ul').length > 0) {
							originalMenuHeight = $('.pillar-navbar ul').height();
							scrollMenuQuirksExplore = $(".pillar-navbar").offset().top;

							$('.pillar-navbar ul li').each(function() {
								scrollMenuQuirksOriginalOffset = $(this).offset().top;
								scrollMenuQuirksOriginalOffsets.push(scrollMenuQuirksOriginalOffset);
							}).promise().done(function(){
							for(var i=1; i < numChapters; i++){
								scrollMenuQuirksRelativeDifference = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[i-1];
								scrollMenuQuirksRelativeDifferences.push(scrollMenuQuirksRelativeDifference);
								scrollMenuQuirksRelativeOffset = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[0];
								scrollMenuQuirksRelativeOffsets.push(scrollMenuQuirksRelativeOffset);
								if(scrollMenuQuirksRelativeOffset > availableHeightForMenu){
									$('.pillar-navbar ul li:nth-of-type(' + i + ')').nextAll().addClass('menuItemIsHidden');
								}
							}
						})

						adjustAnchorMenu();
						clearInterval(myInterval1);
					}}, 50);
				}

				menuPopulated();

				// Introduction should always just scroll to the top (0)
				$(".pillar-navbar ul li a.introduction").click (function() {
					$(window).animate({scrollTop: 0},'500');
					$('.actions-bar').css({'position':'','top':'','left':''});
				})

				// Get starting position which is pre-loaded, expect it to be temporarily wrong if there are images before the clicked chapter
				var startingAnchor;
				var startingPositions = function(){
					$(".pillar-navbar ul li a").click(function() {
						startingAnchor = $(this).attr('name');
						if (loaded == false) {
							scrollToAnchor(startingAnchor);
						}
					});
				}

				startingPositions();

				// Once page has finished loading (e.g. images), update chapter positions
				$(window).on("load", function() {
					setTimeout(function() {
						// clear existing chapterActivePositions
						chapterActivePositions = [];
						chapterSlideToPositions = [];
            var i;

						// depending on whether the user has already started scrolling, the offsets are off by 100px
						$('#content-body .main-article-chapter').each(function(i, obj) {
							
							chapterActivePosition = $(this).offset().top - 250; //CG was 150, added 50
							chapterSlideToPosition = $(this).offset().top - 130;//CG was 130, added 50
							chapterSlideToPositions.push(chapterSlideToPosition);
							chapterActivePositions.push(chapterActivePosition);

							console.log(chapterSlideToPosition);

						}).promise().done(function(){
							if(startingAnchor){
							// Update offset if the user has ALREADY clicked an anchor link
								scrollToAnchor(startingAnchor);
							}
						});

						$(".pillar-navbar ul li a").click(function() {
							var whichAnchor = $(this).attr('name');
							scrollToAnchor(whichAnchor);
						});

						$(".pillar-navbar ul li a.introduction").click (function() {
							$(window).animate({scrollTop: 0},'500');
						});
					}, 3000);
				});

				var preContentBodyTriggerPoint = $('.pillar-nav').offset().top;

				$(window).scroll(function() {
					scrolled = true;
					var scroll = $(window).scrollTop();
					var menuScroll = $('.fixed-height').scrollTop();
					var downloadScroll;
					var contentBodyTriggerPoint = $('#content-body').scrollTop() + $('#content-body').height();
					
					// First and last chapters
						if(scroll <= chapterActivePositions[0]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:first-of-type').addClass('active');
						} else if(scroll >= chapterActivePositions[numChapters - 1]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:last-of-type').addClass('active');
						}
          // Active chapter
					for(var i=0; i < numChapters; i++){
            //console.log('ACTIVE POSITIONS: '+scroll+' >= '+chapterActivePositions[i]+' scroll <='+chapterActivePositions[i+1]);
						if(scroll >= chapterActivePositions[i] && scroll <= chapterActivePositions[i+1]){
							$('.pillar-navbar li').removeClass('active');
							if ($('.introduction').length > 0) {
                $('.pillar-navbar li:nth-of-type('+ (i+2) + ')').addClass('active');
              }else {$('.pillar-navbar li:nth-of-type('+ (i+1) + ')').addClass('active');}
						}
					}
				});
		}  

    //check if in viewport after added and on scroll
    function elementInViewport(element) {
      var elem = $(element);
      var elemTop = elem.offset().top;
      var bottom_of_element = elemTop + $(elem).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ( ((bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element))) {
        enteredViewport = true; // the element is visible, do something
        pushTrackingEvent('enteredViewport');
      } else {
        // do nothing
      }
      if (enteredViewport && (elemTop < (bottom_of_screen-($(window).innerHeight()/2))) || (bottom_of_element < (bottom_of_screen-($(window).innerHeight()/2)))) {
        splashInViewportTopHalf = true;
      } else {
        splashInViewportTopHalf = false;
      }
    }

	function positionTOC() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#content-body").offset().top - 150; // -150 should match opposite of position sticky top
        var s = $(".optly-toc.pillar-nav");
        if(st > ot) {
            s.css({
                position: "sticky",
                top: "150px",
                transition: "0.2s top"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "absolute", //relative
                    top: "0px"
                });
            }
        }
    };
    $(window).scroll(move);
    move();
  }
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
   // Track Content Body Clicks EXCLUDING share icons & add promo code
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      console.log('Content body link click, tracked successfully');

     
      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      console.log('Social/share link click detected, tracking skipped');
    }
});

  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop(); //$(window)
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height(); //$(document)

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}, {"id": "aa361cff60024ebfb265fb8155ffee83", "type": "append", "selector": "head", "value": "<style>@media only screen and (min-width: 1445px) {\n  .pillar-cluster #optly-toc .icon.pillar, .pillar-bridge  #optly-toc  .icon.pillar {display:none;}\n  #main-content {\nleft:110px ;\n}\n#sdef .breadcrumbs {\npadding-left:110px;\n}\n.optly-toc.pillar-nav ul{ \n  height:100%;\n  min-height:100px;\n  max-height: calc(100vh - 360px) !important;\n  overflow-y:auto;\n}\n.optly-toc.pillar-nav ul li {position:relative}\n.optly-toc.pillar-nav.fixed.bottom,.optly-toc.pillar-nav.bottom {\n\tposition:sticky;\n  top:initial !important;\n  scroll-margin-top: 300px;\n}\n\n #sdef .main-content .content-center .optly-toc p a, #sdef .main-content .content-center .section.definition-section .optly-toc li a{text-decoration:none;padding:0;}\n.pillar-nav {\n\tfloat:left;\n  font-size:14px;\n  /*top:32px;\n  position:sticky;*/\n  margin-left:-271px;\n  width: 200px;\n  background:#fff;\n  padding:15px;\n  /*border: 1px solid #f3f3f3;*/\n  clear: left;\n}\n#rail-share-bar {border-top: 1px solid #e3e3e3;padding-top:5px;height:25px;color:#666;padding-left:11px;}\n.pillar-nav a{\n\tcolor:teal;\n  cursor:pointer;\n}\n.toc {\n\tfont-size: 14px;\n  font-weight:700;\n  padding: 0px 0 10px 0;\n  color:#323232;\n}\n\n.pillar-nav ul li{\n\tborder-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-nav a:hover{\n\tcolor:#323232;\n}\n.pillar-navbar {position:relative;}\n.pillar-navbar ul li {\n    border-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-navbar ul li.active:before {\n    color: teal;\n    content: \"\\2219\";\n    font-size: 60px;\n    position: absolute;\n    top: -17px;\n    left: 5px;\n}\n\n.pillar-navbar ul li.active a {\n  color: #323232;\n  font-weight:700;\n}\n\n#sdef .main-content .content-left .share-bar-desktop {\n\tmargin-left:initial;\n}\n#sdef .share-bar-desktop {width:auto;margin:initial;position:relative;}\n#sdef .share-bar-desktop .share-bar-item-desktop {background:none !important;display:inline-block;padding:0;border-top:none;}\n#sdef .share-bar-desktop .share-bar-item-desktop a {color:#666;min-height:25px;padding: 0 3px !important;}\n#sdef .share-bar-desktop .share-bar-item-desktop a:hover  {color:teal !important;}\n#sdef .share-bar-desktop .share-bar-item-desktop.socialMedia-twitter {top:0px;position:relative;}\n#sdef .share-bar-desktop .share-bar-item-desktop a .x_logo {font-size:14px;}\n#sdef .share-bar-desktop .share-bar-item-desktop [data-icon]:before {vertical-align:middle;}\n#sdef .share-bar-desktop .share-bar-item-desktop.contentTools-print a, \n#sdef .share-bar-desktop .share-bar-item-desktop.contentTools-email a {\n\tcolor:#666;\n}\n  #sdef .share-bar-desktop .share-bar-item-desktop a {\n  font-size: 25px;\n  }  \n}\n@media only screen and (max-width: 1444px) { \n  .optly-toc.pillar-nav {\n  display:none;\n  }\n  \n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0f25df58175f4d77a73e53bfd7600631", "selector": "#optly-toc ul li a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ee85f8836b1b40aea66d1ff91239af44", "selector": ".share-bar-item-desktop a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "d9fd93a2d65149c98126cb8708be39aa", "selector": "#content-body a:not(.optly-toc-anchor)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "78473d8f70c04c2aa9ff2052af388d5d", "selector": "#main-content a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "2644b83fdaf84d90a868e56dbd9275ff", "selector": "#page-header"}]}]}], "weightDistributions": [{"entityId": "30436110477", "endOfRange": 5000}, {"entityId": "30465020342", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30433850573"}}], "policy": "single_experiment", "viewIds": ["30418870483"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "5115359821299712", "name": null, "commitId": "6675114104717312", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "17892952386"], "audienceName": null, "changes": null, "id": "6355692034981888", "integrationSettings": null, "variations": [{"id": "6193571833839616", "name": null, "actions": [{"viewId": "6009746243715072", "changes": [{"id": "aea8c9a739264678aec9f5b15046c6ae", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w2_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 1 Ready - 11/4/24 1");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        contentBodyTopLevelPs   = $('#content-body > p').length,
        targetLocationP         = Math.floor(contentBodyTopLevelPs / 2);
    
    function moveDigDeeper() {
        // $('#DigDeeperSplash').appendTo($('#content-body > p').eq(targetLocationP));
        // $('#DigDeeperSplash').css('background','#fff');
        $('#DigDeeperSplash').insertAfter('#content-body');
    }

    moveDigDeeper();

    function DDIsInViewport() {
        // console.log('Content Recommendations Wave 1: DDIsInViewport firing');
        var elem = $('#DigDeeperSplash').first();
        // console.log("Content Recommendations total paragraphes in content body is: " + contentBodyTopLevelPs);
        // console.log("Content Recommendations DDLocationParagraph target location is: " + targetLocationP);
        // console.log('Content Recommendations Wave 1: DDIsInViewport elem ' + elem);
        var elemTop = elem.offset().top;
        // console.log('Content Recommendations Wave 1: DDIsInViewport elemTop ' + elemTop);
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 1: DDIsInViewport');
            DDHasBeenSeen = true;
            pushTrackingEvent("dig_deeper_in_view");
            return;
        } else {
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}, {"id": "5533734129106944", "name": null, "actions": [{"viewId": "6009746243715072", "changes": [{"id": "c289a8448c89449cb9844351e3415e73", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w2_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 2 Ready - 11/27/24 3");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        contentBodyTopLevelPs   = $('#content-body > p').length,
        prompt                  = "Please analyze the attached document to identify the primary objectives a reader may have for engaging with its content. Based on these objectives, could you suggest specific topics or further readings that would complement or expand upon the information presented? Aim to provide a detailed rationale for each recommended topic, ensuring that it directly aligns with the reader's potential needs and interests as inferred from the document.",
        content_summary         = '',
        recommendations;

    let ddClone = $('#DigDeeperSplash').clone();

    ddClone.attr('id', 'newDigDeeperSplash');
    ddClone.insertAfter('#content-body');

    function moveDigDeeper() {
        // $('#DigDeeperSplash').insertAfter('#content-body');
        $('#DigDeeperSplash').hide();
    }
    moveDigDeeper();

    function replaceDigDeeperContent() {
        var numDDItems = $('#newDigDeeperSplash .dig-deeper-list li').length;
        console.log('Content Recommendations Wave 2: numDDItems ' + numDDItems);

        $('#newDigDeeperSplash .dig-deeper-list li').each(function(){
            var containerId = $(this).find('a').attr('id');
            console.log('Content Recommendations Wave 2: ddItem id is  ' + containerId);
        })
    }

    replaceDigDeeperContent();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 2: DDIsInViewport');
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 2: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 2: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });

    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }

    function processPrompt(promptText) {
        console.log('Content Recommendations Wave 2: start processPrompt(promptText)');
        const endpoint = 'https://genai.techtarget.com/litellm/invoke';  // Updated endpoint
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "vertex_ai/claude-3-haiku@20240307",
                "prompt": promptText,
                "userID": "optimizely",
                "source": "abtest-genai-contentRecommend",
                "persist_prompt": true,
                "persist_response": false,
                "temperature": 0.5,
                //"top_p": 0.95,  // Optional, configure as needed
                // "rank_score":"max_similarity_score",
                "max_output_tokens": 4096  // Adjust max tokens for response
            })
        };
        return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
            .then(response => {
                console.log("Content Recommendations Wave 2: logFetchError response. endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
                if (!response.ok) {
                    // pushTrackingEvent("responseErrorShown");
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                promptComplete = true; // Set flag true indicating the request is complete.
                // console.log("Content Recommendations Wave 2: Summary Fetch Response:", response);
                return response.json();
            }).then(data => {
                console.log("Content Recommendations Wave 2: Summary Object:", data); // Log the full response object here
                var stringifyData = JSON.stringify(data);
                return data; // Proceed with the rest of the logic
            })
            .catch(error => {
                console.error('Content Recommendations Wave 2: Error:', error);
                // pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }
    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }

    var libraryContent = {};
    var maxCards = 3;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    // var pastDate = new Date(today.setDate(today.getDate() - 540)).toISOString().split('T')[0]; // Subtract 180 days and format
    var pastDate = new Date(today.setDate(today.getDate() - 1080)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        // console.log("Content Recommendations Wave 2: getRecommendations: todayDate " + todayDate + " and pastDate is " + pastDate); // Log the full response object here
        inputThis = [];
        inputThis.push(content);

        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            "documents_to_return": maxCards,
            //"input_document_type": "web_url", // Request for just URLs
            //"input_documents": [userInput + summary],  // Original request
            //"input_documents": contentUrls, // Request for just URLs
            //"input_documents": [userInput + " " + summary + "\nReference URLs: " + contentUrls], // Request with all 3 included
            "input_documents": inputThis,
            "input_filter": {
                "content_format": ["Web"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
                // "content_type": ["eGuide", "Video", "BlogPost", "Webcast"] //Adjust for content type
            },
            "metadata": [
                // "content_key",
                // "content_summary",
                // "content_format",
                "content_title",
                "content_author",
                "content_web_url",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            "llm": "claude-3-haiku@20240307",
            "persist_prompt": true,
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                // pushTrackingEvent("responseErrorShown");
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Content Recommendations Wave 2: Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                // pushTrackingEvent("emptyRecommendations");
                // showPagePromptErrors("1");
                console.log("Content Recommendations Wave 2: No recommendations found.");
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                recommendations = data["input_document 0"].Documents;
                // console.log("Content Recommendations Wave 2: Recommendation Data:", data);
                // console.log("Content Recommendations Wave 2: Recommendations:", recommendations);

                var recommendationsToDisplay = [];
                    $.each(recommendations, function(index, item) {
                    recommendationsToDisplay.push({
                        "title": item.content_title,
                        "urlPath": item.content_web_url
                    });
                });


                var stringifyData = JSON.stringify(recommendationsToDisplay);

                $('<section class="appendedContent getRecommendations">2. getRecommendations data' + stringifyData + '</section>').insertAfter('#content-body');
                
    
                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 2: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data
                    return libraryContent;
                });
            }

        }).catch(error => {
            console.log("Content Recommendations Wave 2: logFetchError response. caught error... endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            // showPagePromptErrors("1");
            return null;
        });
    }

    content_summary = getContent();
    // getRecommendations(content_summary);

    // console.error('Content Recommendations Wave 2: content_summary: ', content_summary);

    var pagePrompt = "[CONTENT]: \n" + getContent() + "\n\n" + prompt;
    // processPrompt(pagePrompt).then(result => {
    //     if (result instanceof Error) {
    //         console.error('Content Recommendations Wave 2: An error occurred:', result.message);
    //         // pushTrackingEvent("responseErrorShown");
    //     } else {
    //         var response = result.choices[0].message.content;
    //         // console.log('Content Recommendations Wave 2: processPrompt response ' + response);
    //         $('<section class="appendedContent processPromptResponse">1. processPrompt response' + response + '</section>').insertAfter('#content-body');

    //         content_summary = response;
    //     }
    // });


});
}, "dependencies": []}]}]}, {"id": "4771324015411200", "name": null, "actions": [{"viewId": "6009746243715072", "changes": [{"id": "A6601365-1EFE-4E3A-9F74-CAC712E297E4", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w2_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 3 Ready - 11/22/24 6");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        contentBodyTopLevelPs   = $('#content-body > p').length,
        prompt                  = "Please analyze the attached document to identify the primary objectives a reader may have for engaging with its content. Based on these objectives, could you suggest specific topics or further readings that would complement or expand upon the information presented? Aim to provide a detailed rationale for each recommended topic, ensuring that it directly aligns with the reader's potential needs and interests as inferred from the document.",
        content_summary         = '',
        recommendations;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 2: DDIsInViewport');
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 2: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 2: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });

    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }

    function processPrompt(promptText) {
        console.log('Content Recommendations Wave 2: start processPrompt(promptText)');
        const endpoint = 'https://genai.techtarget.com/litellm/invoke';  // Updated endpoint
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "vertex_ai/claude-3-haiku@20240307",
                "prompt": promptText,
                "userID": "optimizely",
                "source": "abtest-genai-contentRecommend",
                "persist_prompt": true,
                "persist_response": false,
                "temperature": 0.5,
                //"top_p": 0.95,  // Optional, configure as needed
                // "rank_score":"max_similarity_score",
                "max_output_tokens": 4096  // Adjust max tokens for response
            })
        };
        return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
            .then(response => {
                console.log("Content Recommendations Wave 2: logFetchError response. endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
                if (!response.ok) {
                    // pushTrackingEvent("responseErrorShown");
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                promptComplete = true; // Set flag true indicating the request is complete.
                // console.log("Content Recommendations Wave 2: Summary Fetch Response:", response);
                return response.json();
            }).then(data => {
                console.log("Content Recommendations Wave 2: Summary Object:", data); // Log the full response object here
                var stringifyData = JSON.stringify(data);
                return data; // Proceed with the rest of the logic
            })
            .catch(error => {
                console.error('Content Recommendations Wave 2: Error:', error);
                // pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }
    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }

    var libraryContent = {};
    var maxCards = 3;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    var pastDate = new Date(today.setDate(today.getDate() - 540)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        // console.log("Content Recommendations Wave 2: getRecommendations: todayDate " + todayDate + " and pastDate is " + pastDate); // Log the full response object here
        inputThis = [];
        inputThis.push(content);

        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            //"input_document_type": "web_url", // Request for just URLs
            "documents_to_return": maxCards,
            //"input_documents": [userInput + summary],  // Original request
            //"input_documents": contentUrls, // Request for just URLs
            // "input_documents": [userInput + " " + summary + "\nReference URLs: " + contentUrls], // Request with all 3 included
            "input_documents": inputThis,
            "input_filter": {
                "content_format": ["pdf","Video"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                // "content_format": ["text"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
                // "content_type": ["eGuide", "Video", "BlogPost", "Webcast"] //Adjust for content type
            },
            "metadata": [
                "content_key",
                "content_title",
                "content_summary",
                "content_format",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            "llm": "claude-3-haiku@20240307",
            "persist_prompt": true,
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                // pushTrackingEvent("responseErrorShown");
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Content Recommendations Wave 2: Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                // pushTrackingEvent("emptyRecommendations");
                // showPagePromptErrors("1");
                console.log("Content Recommendations Wave 2: No recommendations found.");
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                recommendations = data["input_document 0"].Documents;
                // console.log("Content Recommendations Wave 2: Recommendation Data:", data);
                // console.log("Content Recommendations Wave 2: Recommendations:", recommendations);

                var recommendationsToDisplay = [];
                    $.each(recommendations, function(index, item) {
                    recommendationsToDisplay.push({
                        "title": item.content_title,
                        "urlPath": item.content_web_url
                    });
                });


                var stringifyData = JSON.stringify(recommendationsToDisplay);

                $('<section class="appendedContent getRecommendations">2. getRecommendations data' + stringifyData + '</section>').insertAfter('#content-body');
                
    
                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 2: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data
                    return libraryContent;
                });
            }

        }).catch(error => {
            console.log("Content Recommendations Wave 2: logFetchError response. caught error... endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            // showPagePromptErrors("1");
            return null;
        });
    }

    var pagePrompt = "[CONTENT]: \n" + getContent() + "\n\n" + prompt;
    processPrompt(pagePrompt).then(result => {
        if (result instanceof Error) {
            console.error('Content Recommendations Wave 2: An error occurred:', result.message);
            // pushTrackingEvent("responseErrorShown");
        } else {
            var response = result.choices[0].message.content;
            console.log('Content Recommendations Wave 2: processPrompt response ' + response);
            $('<section class="appendedContent processPromptResponse">1. processPrompt response' + response + '</section>').insertAfter('#content-body');

            content_summary = response;
            console.log('Content Recommendations Wave 2: getRecommendations for content_summary ' + content_summary);
            getRecommendations(content_summary);
                }
    });

});
}, "dependencies": []}, {"id": "92C756A8-B172-4D4D-8575-E2838DB112EA", "type": "append", "selector": "head", "value": "<style>.appendedContent {\n    border: 1px solid #000;\n    padding: 10px;\n}</style>", "dependencies": []}]}]}, {"id": "5993456993042432", "name": null, "actions": [{"viewId": "6009746243715072", "changes": [{"id": "F6A6BBC8-4D6B-46CE-B691-F447BF0A2734", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w2_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 4 Ready - 11/20/24 1");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        contentBodyTopLevelPs   = $('#content-body > p').length,
        targetLocationP         = Math.floor(contentBodyTopLevelPs / 2);
    
    function moveDigDeeper() {
        // $('#DigDeeperSplash').appendTo($('#content-body > p').eq(targetLocationP));
        // $('#DigDeeperSplash').css('background','#fff');
        $('#DigDeeperSplash').insertAfter('#content-body');
    }

    moveDigDeeper();

    function DDIsInViewport() {
        // console.log('Content Recommendations Wave 1: DDIsInViewport firing');
        var elem = $('#DigDeeperSplash').first();
        // console.log("Content Recommendations total paragraphes in content body is: " + contentBodyTopLevelPs);
        // console.log("Content Recommendations DDLocationParagraph target location is: " + targetLocationP);
        // console.log('Content Recommendations Wave 1: DDIsInViewport elem ' + elem);
        var elemTop = elem.offset().top;
        // console.log('Content Recommendations Wave 1: DDIsInViewport elemTop ' + elemTop);
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 1: DDIsInViewport');
            DDHasBeenSeen = true;
            pushTrackingEvent("dig_deeper_in_view");
            return;
        } else {
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5533734129106944", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5115359821299712"}}], "policy": "single_experiment", "viewIds": ["6009746243715072"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "5823979630362624", "name": null, "commitId": "4706455580835840", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204"], "audienceName": null, "changes": null, "id": "5347376303439872", "integrationSettings": null, "variations": [{"id": "4715518112825344", "name": null, "actions": [{"viewId": "5910326256861184", "changes": [{"id": "3dbf79458c58491aa3771eb034e90f65", "type": "custom_code", "value": function($){console.log("(GenAI) Summarize and Chat - Start control");

$(document).ready(function () {
  	var eventExpName      = "genai_chatSum_";         // used for custom event tracking
  	pushTrackingEvent("varStart");  	
  
    function pushTrackingEvent(customEventName) {
          window.optimizelyEdge = window.optimizelyEdge || [];
          window.optimizelyEdge.push({
            type: "event",
            eventName: eventExpName+customEventName
          });
      }
});
}, "dependencies": []}]}]}, {"id": "6473276210282496", "name": null, "actions": [{"viewId": "5910326256861184", "changes": [{"id": "0d4bb0617fc8431193f14d71190156e6", "type": "custom_code", "value": function($){console.log("(GenAI) Summarize and Chat - Start variation");

$(document).ready(function () {
    pushTrackingEvent("varStart");



    //***** configs *****
    var documentsToUse = 10;													// number of retrieved documents for chat to use when answering question
    var maxContextDocuments = 200;										// max number of documents to request from context fetch 
    var systemOptionClickCountAsSubmit = false;      // config that ifc set to true, makes clicks on system suggested responses count towards user submits
    var maxChatHistory = 5; 															// how far back in the conversation the chat history should go when it is included
    var maxCharCount = 400;                          // max number of characters we want to allow the user to submit
    var maxLibraryContent = 2;                       // max number of recommended items that we want to display to a user in the interface
    var maxPageFeatures = 2;                         // max number of pageFeatures to display on default
    var memberUserSubmits = 10;
    var maxUserSubmits = 10;                     // max times a user can submit chat (note: need to determine if we need toset this per session/per page??
    var maxCards = 1;                                // max cards that can be displayed per system message
    var interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
    var ttlUserSubmits = interactionCount || 0;                                 // counter for number of times a user has submitted chat
    var charCountWarning = maxCharCount - 10;        // charCount value at which the charCount shows red to warn the user
    var minRagRelevancy = 0;                        // minimum relevancy score to show content card/add to content library
    var promoCode = "abt-chatSum_beta";          // appended to links/urls for PV. andN2N tracking
    var offerCode = "?Offer=" + promoCode;
    var offer = "abt-chatSum_beta";
    var uid2;
    var embeds;
    var asrc = "abt-chatSum_beta";  											 // ASRC value
    var utm_medium = "web"; 													// UTM medium value
    var utm_source = "techtarget-teal"; 										 // UTM source value
    var utm_campaign = "abt-chatSum_beta"; 							// UTM campaign value
    var eventExpName = "genai_chatSum_";             // used for custom event tracking
    var sessionManagementKey = 'sessionManagement';
    var contextStorageKey = 'contextStorage';
    var sessionTimer = 2 * 60 * 60 * 1000;           // 2 hours in milliseconds
    var sessionData = JSON.parse(localStorage.getItem(sessionManagementKey));
    var interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    var pastDate = new Date(today.setDate(today.getDate() - 540)).toISOString().split('T')[0]; // Subtract 180 days and format
    var surveyLink = "https://techtarget.qualtrics.com/jfe/form/SV_4Spg5kMg0w4S7Ai"; // Can easily change this link later
    var questionPrompt;
    var currentMessageIndex = null;
  	var requestType;
    var aiDisclaimer = "AI responses are based solely on our Articles. For full accuracy, check the original sources.";


    //***** flags *********
    var libraryContentAdded = false;                 // used to track whether the Chat Insights / Recommended Content / Content Library has been inserted into modal
    var pageSummaryDisplayed = false;                // evalauted per page load; used to track whether a summary has been displayed per page
    var systemOptionsDisplayed = false;              // evalauted per page load; used to track whether linked questions have been displayed per page
    //window.firstIntroDisplayed = false;            // cross-page flag to identify if user has seen intro modal so that we don't show on every pageview
    var promptComplete = false;
    var imgbypass = true;
    var summaryComplete = false;
    var chatComplete = false;
    var containsErrorWords = false; 								// Detects error words in response
    var isProcessing = false; 											// Flag to track if chat is processing
    var surveyShown = false; 												// tracks if survey was shown already to prevent doubles
    var displaySurvey = true; 											// Can be set to false to hide the internal beta test survey elements
    var questionLimit = false;


    //***** variables *****
    var charCount = 0;                               // number of characters currently counted in input. We want this to be 0 to start
    var isMem;                                       // if user is site member
    var isMemProtected;                              // if page has inline reg/member protection
    var recommendUrls;
    var parsedResponse;
    var summaryNoCitations;
    var processedSummary;
    var context;
    var currentChatHistory;
    var documentMetadata = [];
    var pageFeatures = [];                           // Array to store all features links in DOM for default display of Content Library
    var pageSystemResponseCounter = 1;               // this counter is used to append to system generated clickable questions and append to the "user" display of those questions after they are clicked to allow a user to click on a past question and anchor to the question; defaults to 1 per pageview.
    //  var remainingUserSubmits = maxUserSubmits;   // for initial load, we want remaining user submits to be the max config
    var remainingCharacters = maxCharCount;	         // for initial load, we want remaining characters to be the max config
    var contentLibraryHistory = [];                  // Array to store all content recommended to the user. Used to grab latest two.
    var systemOptionsSubmitted = [];                 // Array to store system responses submitted by user -> used for context
    var systemOptionsNotClicked = [];                // Object to store system responses not yet clicked by user to display again
    //var maxUserSubmits = sessionStorage.getItem('maxUserSubmits') ? parseInt(sessionStorage.getItem('maxUserSubmits')) : 2; // max times a user can submit chat (note: need to determine if we need toset this per session/per page??
    var remainingUserSubmits = localStorage.getItem('remainingUserSubmits') ? parseInt(localStorage.getItem('remainingUserSubmits')) : maxUserSubmits; // for initial load, we want remaining user submits to be the max config
    var existingInteractions = JSON.parse(sessionStorage.getItem('chatInteractions')) || [];
    var currentPageURL = window.location.href;
    var currentPageSummary = '';
    var newText;
    var contentKeys = [];
    var contentUrls = [];
    var currentChatQuestions = [];
    var recommendUrls = [];
    var chatData;
    var libraryContent = {};
    var citations = [];
    var card;
    var documentsJson;
    var userInputOriginal;
    var currentUrl = getCurrentUrlWithoutQueryString();  // Grabs the URL of the current page without the Query string    
    var currentChatQuestions = [];
    var libraryContent2 = [];
    var errorObject = [{
        "errorCode": "1",
        "errorHtmlChat": '<span class="error">I’m sorry, we’re having technical difficulties. Please try again later.</span>',
        "errorHtmlForm": '<span class="error">I’m sorry, we’re having technical difficulties. Please try again later.</span>'
    }, {
        "errorCode": "2",
        "errorHtmlChat": '<span class="error">You’ve reached our limit of ' + maxUserSubmits + ' questions.<br/><a class="nonMemberRegister" href="https://www.techtarget.com/register?fromURL=' + window.location.href + '&Offer=' + promoCode + '">Become a member</a> or <a class="nonMemberLogin" href="https://www.techtarget.com/login?fromURL=' + window.location.href + '&Offer=' + promoCode + '">login</a> for access to more.</span>',
        "errorHtmlForm": '<span class="error">You’ve reached our limit of ' + maxUserSubmits + ' questions.<br/<a class="nonMemberRegister" href="https://www.techtarget.com/register?fromURL=' + window.location.href + '&Offer=' + promoCode + '">Become a member</a> or <a class="nonMemberLogin" href="https://www.techtarget.com/login?fromURL=' + window.location.href + '&Offer=' + promoCode + '">login</a> for access to more.</span>'
    }, {
        "errorCode": "3",
        "errorHtmlChat": '<span class="error">You’ve reached our limit of ' + maxUserSubmits + ' questions for site members. Get access to more at your next visit.</span>',
        "errorHtmlForm": '<span class="error">You’ve reached our limit of ' + maxUserSubmits + ' questions for site members. Get access to more at your next visit.</span>'
    }, {
        "errorCode": "4",
        "errorHtmlChat": '<span class="error">Sorry, but you’ve asked a question that cannot be answered at this time. Try again with a different question.</span>',
        "errorHtmlForm": '<span class="error">We apologize, but you’ve asked a question that cannot be answered at this time. Try again with a different question.</span>'
    }
    ];
    const openEndedPatterns = [
        /which (is|one|option|choice|of these|of those|is faster|should I choose)/i,
        /what should I (choose|do)/i,
        /can you clarify/i,
        /do you think/i,
        /what is your opinion/i,
        /is (this|that|it|a better option|better|safe)/i,
        /are (they|both able to|both options|these options)/i,
        /would (this|that|these|those) support/i,
        /should (I choose|we)/i
    ];
    var shouldIncludeChatHistory;
    var userInput, chatHistory;
    var relevantDocuments;
    var query;
    var relevantChatHistory;
    var promptJSON;
    var includeChatHistory = false;
    var recommendationCounter = 1;
    var libraryContent = [];

    var promptData = {
        promptQuestion: "You are a highly specialized assistant tasked with responding to user questions using a predefined knowledgebase represented in JSON format. The JSON content has multiple sections labeled \"top_chunk_text\". You must only use the content provided in the \"top_chunk_text\" blocks to formulate your answer. If the user’s question cannot be answered using *any* of the content from all of the \"top_chunk_text\" blocks, respond with the exact text \"promptError\" as your only output. Do not include any other explanation, summary, or commentary in this case. Do not incorporate any external information or assumptions./n/nFor each part of your response that is derived from a specific \"top_chunk_text\" block, include a citation referencing its \"content_key\" in square brackets. Organize responses succinctly, using professional grammar, structured points when necessary, and avoid introductory phrases./n/n### Input:/n1. **User Query**: " + query + "/n2. **JSON Content**:/n/n" + relevantDocuments + "/n/n### Output Format:/n- Directly begin the response if there is a relevant answer./n- Use proper grammar, concise phrasing, and appropriate citations./n- If the question cannot be answered, respond with exactly \"promptError\" as your *only* text output./n/n### Example Response:/nUser Query: 'Why do we use static final in Java for constants instead of const?'/nResponse:/nIn Java, the `const` keyword is unimplemented, so we use `static final` to define constants instead.[citation]/n Final ensures that a variable cannot be modified, while static makes it accessible without creating class instances, ensuring only one copy exists in memory.[citation]/n/n### If No Answer Can Be Found:/nResponse:/npromptError",

        systemOptionPrompt: "\n\n Given the provided page, answer the following question using only the information from the page. Do not include external information or assumptions outside of the content and page provided. Focus on delivering a clear, concise response that addresses the question directly. Structure the answer for easy reading, use lists or short paragraphs if necessary. Ensure the response is brief and can be read in under 30 seconds. Use proper grammar and punctuation that meets the standards of a professional newsroom.",

        initialPrompt: 'Summarize the content of the provided page, using only the information from the provided content. Do not include any external information, assumptions, or interpretations. Focus on identifying and clearly explaining the most prominent topics covered. Structure the response for easy reading by separating topics using newline characters (\\n\\n) to create short paragraphs, and for lists or multiple points, use bullet points starting with -. Ensure the summary is brief, concise, and can be read in under 30 seconds. Use proper grammar and punctuation that meets the standards of a professional newsroom. The response should be formatted in JSON with two fields: "summary" and "systemOptions". The "summary" field should include the summarized content, starting with "In this article..." and using newline characters and markdown-style bullets to denote paragraph breaks and lists. The "systemOptions" field should contain a list of three questions the document answers, defined as an array of strings. Avoid using colons or other punctuation that may cause parsing issues. Below is an example format:{{"summary": "In this article...\\n\\n- Key topic 1\\n\\n- Key topic 2\\n\\nThe article concludes by discussing...", "systemOptions": ["questionText", "questionText", "questionText"]}}. Do not wrap JSON in "```". Be sure there are no spaces before or after.'
    };

    var promptText;
    //console.log("User Question prompt:", promptData.promptQuestion);
    //console.log("System Option/Question prompt:", promptData.systemOptionPrompt); 
    //console.log("Initial Summary prompt:", promptData.initialPrompt); 
    console.log("Prompts:", promptData);
    var promptQuestion = promptData.promptQuestion;
    var systemOptionPrompt = promptData.systemOptionPrompt;
    var initialPrompt = promptData.initialPrompt;



    // get page and member status info needed for functionality; initiate close modal functionality
    checkMemberStatus();
    getMemberProtected();
    savePageMetadata();
    initializeSession();

    // insert chat CTA and chat modal html skeleton
    addPageTrigger('#contributors-block');
    addChatModalToPage('#content-body');
    pushTrackingEvent("addedToPage");
    getPageFeatureContent();
    //addNewThreadLink();
    //addFollowUpToggle();
    //createOverlay();

    //***** element variables (needs to be defined after added to page) *****
    var modal = document.getElementById("chatModal");
    var btn = document.getElementById("submitBtn");
    var chatInput = document.getElementById("chatInput");
    var chatDisplay = document.getElementById("chatDisplay");
    var modalContent = document.getElementById("chat");
    chatInput.setAttribute('title', 'Ask your questions here');



    //***** functions *****
    function addPageTrigger(element) {
        var pageSumHTML = '<div id="o-pageSummary-container"><div class="chat-icon"></div><a class="o-pageSummary-initiate" href="#"><div class="o-pageSummary-title">New! Get instant summaries and insights with our chat.</div><div class="o-pageSummary-summary"><!--<div class="o-pageSummary-gradient"></div>--><div><!--Read a brief summary of this article, and engage with our new TechTarget Research Assistant <span class="beta">(BETA)</span> to help assist you with your IT research.--></div></div><div id="o-pageSummary-button" class="button teal-button">Let&#8217;s start chatting</div></a></div>';
        $(pageSumHTML).insertAfter(element);
        $('#o-pageSummary-container').on('click', function () {
            $('.header.header_v2, .header.header_v2-keep-nav, .header, .top_banner').css('z-index', '1');
            $('#chatModal').removeClass('hide');
            processIntro('system');
            countCharacters('chatInput', 'charCountDisplay', maxCharCount, false);
            $('body').addClass('o-overflowHidden');
            //displayFeedbackLink();
        });
    }
    function addChatModalToPage(element) {
        var chatModal = '<div id="chatModal" class="chatModal hide"><div id="chat" class="modal-content"><div id="modalClose"><a class="modalClose"></a></div><div class="chat-display-header"><div class="chat-icon"></div><div class="chat-title-wrapper"><span class="chat-title">Chat with <strong>TechTarget’s AI Research Assistant</strong> <span class="beta">(BETA)</span></span><a href="https://www.techtarget.com/ai-policy-statement/" class="ai-policy-link" target="_blank">TechTarget\'s AI policy</a><div class="powered-by-small-text">Powered by TechTarget\'s award-winning IT content</div></div></div><div id="chatDisplay" class="chat-display"></div><div id="chatForm" class="chatForm"><div class="gradientWhite"></div><div class="gradientSpacer"></div><div id="chat-form-container" class="chat-form-container"><div id="chat-form-container-inner" class="chat-form-container-inner"><div class="chat-form-textarea-wrapper"><textarea id="chatInput" class="chat-input" rows="3" maxlength="' + maxCharCount + '" required placeholder="Ask a question..."></textarea><div id="chat-status-container"><div id="chat-status-charCount"><span id="charCountDisplay">' + charCount + '</span>/' + maxCharCount + '</div><div id="chat-status-attempts" class="chat-status-attempts"><span id="chat-status-attempt-counter">' + ttlUserSubmits + '</span> of ' + maxUserSubmits + ' Questions</div><button id="submitBtn" disabled></button></div></div><div id="aiDisclaimer" class="ai-disclaimer"><div class="ai-disclaimer-icon"></div>' + aiDisclaimer + '</div></div></div></div><div id="scrollUpButton" class="scroll-up-button"></div></div></div>';


        $(chatModal).insertBefore(element);
        displayFeedbackLink();
        closeModal();
    }
    function addLibraryContent(data, type, max) {
        console.log("addLibraryContent()");

        // Check if the library content section exists
        /*if ($('#chat-content-library').length === 0) {
            var html = '<div id="chat-content-library"><div class="content-library-inner"><div class="title">Further reading:</div><ul class="related-content-list"></ul></div></div>'; $(html).insertAfter('.chat-form-container');
        }*/
        if ($('#chat-content-library').length === 0) {
            var html = '<div id="chat-content-library"><div class="content-library-inner"></div></div>';
            $(html).insertAfter('.chat-form-container');
        }
        if (type === 'rag') {
            if ($("#chat-content-library .content-library-inner .title").length === 0) {
                var html = '<div class="title">Further reading:</div><ul class="related-content-list"></ul>';
                $(html).appendTo('.content-library-inner');
            }
            addItemsToLibrary(data, type, 2);
        }
        // addItemsToLibrary(data, type, max);  //temp comment out for code changes above
        // Push tracking event
        if (type === 'pageFeature') {
            pushTrackingEvent("CLpushFeatures");
        } else if (type === 'rag') {
            pushTrackingEvent("CLpushContentCards");
        }
    }

    function addItemsToLibrary(data, type, max) {
        console.log("addItemsToLibrary(data, type)");
        var max = 2; // Always show the 2 most recent items
        var keys = Object.keys(data);


        // Iterate over the data object keys
        for (var i = 0; i < keys.length; i++) {
            var latestKey = keys[keys.length - 1]; // Get the latest key
            var item = data[keys[i]];
            if (type === 'rag') {
                var url = item.url;
            } else {
                var url = item.href + offerCode;
            }
            var linkText = item.title;
            var title = item.title;


            if ($('#chat-content-library .related-content-list li a[href="' + url + '"]').length === 0) {
                // Add the new item to the top of the list
                $('<li class="related-content-list-item"><a target="_blank" href="' + url + '">' + linkText + '</a></li>').prependTo('#chat-content-library .related-content-list');
            }

            // Remove any excess items to maintain only the two most recent ones
            if ($('#chat-content-library .related-content-list li').length > max) {
                $('#chat-content-library .related-content-list li:last-of-type').remove();
            }
        }
    }

    function closeModal() {
        $('#chatModal').on('click', function (e) {
            console.log(e.target.classList);
            if ((!e.target.closest("#chat")) || e.target.classList.contains("modalClose")) {
                if (!$('#chatModal').hasClass('hide')) {
                    $('.top_banner').css('z-index', '101');
                    $('.header.header_v2, .header.header_v2-keep-nav, .header').css('z-index', '100');
                    $('#chatModal').addClass('hide');
                    $('body').removeClass('o-overflowHidden');
                    pushTrackingEvent("closeModal");
                }
            }
        });
    }
    /*function closeChatModal() {
      // Toggle the modal display
      if (!$('#chatModal').hasClass('hide')) {
        $('#chatModal').addClass('hide');
      }
    }*/
    function loadMarkedLibrary(callback) {
        var script = document.createElement('script');
        script.onload = function () {
            console.log("GenAIChat- Marked library loaded successfully.");
            // console.log(marked); // shows the marked function is available
            window.markedAvailable = true;
            if (callback) callback();
        };
        script.onerror = function () {
            console.error("GenAIChat- Failed to load marked library.");
        };
        script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
        document.head.appendChild(script);
    }

    loadMarkedLibrary(function () {
        // console.log("Marked library loaded successfully.");
        // console.log(marked); // Check if marked is defined
        window.marked = marked; // Explicitly assign to window
        window.markedAvailable = true;
    });

    function setupCustomMarkedRenderer() {
        var renderer = new marked.Renderer();

        /*  // Custom processing for links
          renderer.link = function (href, title, text) {
              return `<div class="chatLinkOuter"><a href="${href}" class="chatLink">${text}</a></div>`;
      };
  
  */


        marked.setOptions({
            renderer: renderer,
            gfm: true,
            breaks: true,
            sanitize: true,
        });
    }
    //Markup function
    function convertTextToHTML(markdownText) {
        let processedText;

        if (window.markedAvailable && marked.parse) {
            processedText = marked.parse(markdownText);
        } else if (window.markedAvailable) {
            console.warn("GenAIChat- Marked.parse is not available, falling back to marked if possible.");
            processedText = marked(markdownText); // Fallback
        } else {
            console.warn("GenAIChat- Marked library is not yet available.");
            processedText = markdownText; // Return the markdown text as is
        }

        // Remove empty <p> tags
        processedText = processedText.replace(/<p>\s*<\/p>/g, '');

        //Close any unclosed <p> tags before certain block elements
        processedText = processedText.replace(/<p>(?!<\/p>)([^<]+?)(?=<div|<ul|<ol|<blockquote|<h\d)/g, function (match, content) {
            return `<p>${content.trim()}</p>`;
        });
        if (processedText.endsWith("<p>")) {
            processedText = processedText.slice(0, -3) + "</p>";
        }

        // Convert numbered lists but skip those inside <a> tags
        processedText = processedText.replace(/(^|\n)(\d+\.\s.*?)(?=\n\d+\.|\n$|\n\n)/g, function (match, p1, p2) {
            if (p2.includes('<a')) return match;
            return `${p1}<ol><li>${p2.trim()}</li></ol>`;
        });

        // Convert bulleted lists (-) outside of <a> tags
        processedText = processedText.replace(/(^|\n)-\s(.*?)(?=\n-|$)/g, function (match, p1, p2) {
            if (p2.includes('<a')) return match;
            return `${p1}<ul><li>${p2.trim()}</li></ul>`;
        });

        // Merge adjacent <ul> and <ol> lists
        processedText = processedText.replace(/<\/ul>\s*<ul>/g, '').replace(/<\/ol>\s*<ol>/g, '');

        // Ensure correct nesting of <ul> inside <ol> and vice versa
        processedText = processedText.replace(/<\/ul>\s*<\/ol>/g, '</ul>').replace(/<\/ol>\s*<\/ul>/g, '</ul>');

        // Correct list item tags and remove redundant <li> elements
        processedText = processedText.replace(/<\/li>\s*<li>/g, '</li><li>');

        // Clean up wrapping <p> tags around lists
        processedText = processedText.replace(/<p>\s*(<ol>|<ul>)/g, '$1').replace(/(<\/ol>|<\/ul>)\s*<\/p>/g, '$1');

        //  Remove any trailing <p></p> at the end of the processedText
        processedText = processedText.replace(/<p><\/p>\s*$/, '');

        return processedText;
    }

    // call setupCustomMarkedRenderer after marked is loaded
    loadMarkedLibrary(function () {
        setupCustomMarkedRenderer();
    });
    // GA4 Tracking 
    function setChatEngagementUserProperty() {
        gtag('set', { 'user_properties': { 'used_chat': true } });
    }

    function trackChatInteraction(eventName) {
        gtag('event', eventName, {
            event_category: 'Chat',
            event_label: 'User engaged with chat',
            value: 1
        });
    }


    function countCharacters(inputFieldId, countDisplayId, maxCharacters, resetFlag) {
        var inputField = document.getElementById(inputFieldId);
        var countDisplay = document.getElementById(countDisplayId);

        inputField.addEventListener('input', function () {
            charCount = inputField.value.length;
            remainingCharacters = maxCharacters - charCount;
            // Utilize this event listener to update button status
            setButtonStatus();
            // Ensure character count does not exceed the limit; check if reset flag and reset count
            if (charCount < maxCharacters) {
                inputField.value = inputField.value.slice(0, maxCharacters);
                countDisplay.textContent = charCount;
                setButtonStatus();
            } else if (resetFlag) {
                charCount = 0;
                countDisplay.textContent = charCount;
                setButtonStatus();
            } else {
                countDisplay.textContent = charCount;
                setButtonStatus();
            }
            //apply warning, max char count states
            if (charCount === maxCharCount) {
                $('#chat-status-charCount').addClass('error');
                $('#chatInput').addClass('error');
            } else if (charCount >= charCountWarning && charCount < maxCharCount) {
                $('#chat-status-charCount').addClass('error');
                $('#chatInput').removeClass('error');
            } else {
                $('#chat-status-charCount').removeClass('error');
                $('#chatInput').removeClass('error');
            }
        });
    }
    // Find all links within .content-body containing "/feature/" and add them to an array
    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }
    function getErrorMessage(errorId) {
        for (var i = 0; i < errorObject.length; i++) {
            if (errorObject[i].errorCode === errorId) {
                return errorObject[i];
            }
        }
    }
    // Helper function to log request and error details
    function logRequestError(endpoint, requestData, error, response = null) {
        console.error("Request to endpoint:", endpoint);
        console.error("Request data:", requestData);
        console.error("Error message:", error.message);
        if (response) {
            console.error("Response status:", response.status);
            console.error("Response details:", response);
        }
    }

    // Wrapper to log fetch errors without modifying original function structures
    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }
    function getMemberProtected() {
        var meteringCheck1, meteringCheck2, hasUid, formAppCode, fastFormAppCode;
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function (ctx, ui, cookie, metering) {

            meteringCheck1 = ctx.isServerSideMetering;
            meteringCheck2 = metering.isMetered(ctx, cookie);
            hasUid = ctx.getUser().uid;
        });
        formAppCode = window.$("#inlineRegistration_AppCode").val();
        fastFormAppCode = window.$('smartforms-techtarget').attr('app-code');
        if (!hasUid) {
            if (meteringCheck1 === "false" && meteringCheck2 === true) {
                console.log("Inline Reg check: METERED");
                // IS METERED
                isMemProtected = true;
                console.log("getMemberProtected: " + isMemProtected);
            } else if (formAppCode === 150 || fastFormAppCode === 151) {
                console.log("Inline Reg check: LEAD-IN");
                // IS LEAD-IN
                isMemProtected = true;
                console.log("getMemberProtected: " + isMemProtected);
            } else {
                console.log("Inline Reg check: NO METERED, NO LEADIN");
                // NO LEAD-IN or METERING
                isMemProtected = false;
                console.log("getMemberProtected: " + isMemProtected);
            }
        } else {
            // HAVE USERID
            console.log("Inline Reg check: HAVE USER ID");
            isMemProtected = false;
            console.log("getMemberProtected: " + isMemProtected);
        }

    }
    function logUserUid() {
        // Assuming TT is available globally and has the 'context' dependency
        TT(['context'], function (ctx) {
            // Retrieve the UID from the context
            uid2 = ctx.getUser().uid;

            // Log the UID to the console
            console.log("User UID2:", uid2);
        });
    }

    //Log the UID
    logUserUid();

    function getMemberStatus() {
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function (ctx, ui, cookie, metering) {
            var memberStatus = !!ctx.getUser().loggedIn ? "SITE_MEMBER" : "NOT_MEMBER";
            if (memberStatus === 'SITE_MEMBER') {
                console.log('memberStatus: MEMBER');
                isMem = true;
                // maxUserSubmits = 5;
            } else if (memberStatus === 'NOT_MEMBER') {
                console.log('memberStatus: NOT_MEMBER');
                isMem = false;
                // maxUserSubmits = 3;
            } else {
                console.log('memberStatus: no value');
            }
        });

    }
    function getPageFeatureContent(pageFeatures) {
        var contentBody = document.getElementById('content-body');
        var links = contentBody.getElementsByTagName('a');
        var linksArray = [],
            tempArray = [],
            uniqueRandomNums = [];

        // get feature link content from page and store in linksArray
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute('href');
            if (href && href.indexOf('/feature/') !== -1) {
                linksArray.push(links[i]);
            }
        }
        // if linksArray length <= maxLibraryContent then use that,
        // else we need an array the size of maxLibraryContent -> use tempArray
        if (linksArray.length <= maxLibraryContent) {
            pageFeatures = linksArray;
            addLibraryContent(pageFeatures, 'pageFeature', maxLibraryContent);
        } else if (tempArray.length < maxLibraryContent) {
            //loop to get random keys, make ajax request for title
            uniqueRandomNums = generateRandomNumbersInRange(0, linksArray.length - 1, maxLibraryContent);
            for (var j = 0; j < maxLibraryContent; j++) {
                var currentItem = linksArray[uniqueRandomNums[j]];
                if (tempArray.indexOf(currentItem) === -1) {
                    var url = currentItem.href;
                    var heading;
                    var title = getPageTitle(url);
                    currentItem.title = title;
                    tempArray.push(currentItem);
                    if (tempArray.length === maxLibraryContent) {
                        pageFeatures = tempArray;
                        addLibraryContent(pageFeatures, 'pageFeature', maxLibraryContent);
                    }
                }
            }
        }
    }

    function generateRandomNumbersInRange(min, max, count) {
        if (max - min + 1 < count) {
            throw new Error("Cannot generate unique numbers. Range is smaller than the count.");
        }

        let numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(i);
        }

        let result = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            result.push(numbers[randomIndex]);
            numbers.splice(randomIndex, 1);
        }

        return result;
    }

    function getPageTitle(url) {
        var result;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'html',
            async: false,
            success: function (data) {
                result = data;
                result = $(result).find("h1.main-article-title").text();
                result = result.replace(/^"(.*)"$/, '$1');
            }
        });
        return result;
    }

    function getUserSubmits(element) {
        var element = element;
        var elem = document.getElementById(element);
        ttlUserSubmits++;
        remainingUserSubmits = maxUserSubmits - ttlUserSubmits;
        elem.textContent = ttlUserSubmits;  // Update the counter display
        if (ttlUserSubmits >= maxUserSubmits) {
            remainingUserSubmits = 0;
            questionLimit = true;
            // Disable input and show error if max submits are reached
            if (isMem) {
                showPagePromptErrors("3");
                pushTrackingEvent("maxQMember");
            } else {
                showPagePromptErrors("2");
                pushTrackingEvent("maxQNonMember");
            }
        }
    }
    function hideLoader() {
        $('#chatDisplay .loader').addClass('hide');
        $('#chatDisplay .processing-message').remove();
        // $('#chatDisplay .processing-message').remove(); // Also remove any lingering processing message
    }
    function processEmbeds(promptText) {
        const endpoint = 'https://genai-content.techtarget.com/recommendations/';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input_summary: promptText,
                filter: "content_format: [text]",
                output_type: "summary"
            })
        };
        console.log(requestOptions);

        return fetch(endpoint, requestOptions)
            .then(response => {
                if (!response.ok) {
                    pushTrackingEvent("responseErrorShown");
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log(response.json());
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
                pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }
    function processIntro(messageType) {
        console.log('start processIntro');
        if (ttlUserSubmits < 1 && !localStorage.getItem('firstIntroDisplayed')) {
            console.log('processIntro: ttlUserSubmits <1 and firsIntroDisplayed=false');
            showChatProcess(messageType, true);
            showSystemResponse("<p>Hi, I'm your Research Assistant, powered by TechTarget content.</p><p>I've prepared a summary of this page along with 3 key questions this article answers.</p><p>Click on any question for details, or ask a new one below.</p>", 'system', 'intro');
            //showChatProcess(messageType, true, "Generating summary");
            pushTrackingEvent("displayed_introMsg");
            //showSystemResponse("<p>I've carefully reviewed the content and am excited to share a concise summary along with some key insights. As we explore this together, please don't hesitate to ask any questions or seek further clarifications.</p><br/><p>Let's dive into what I've discovered!</p>", 'system');
            //firstIntroDisplayed = true;
            localStorage.setItem('firstIntroDisplayed', true);
            setTimeout(() => {
                processPageSummary();
            }, 1000); // 1,000 equals 1 seconds
            pushTrackingEvent("displayed_introMsg");
        } else if (localStorage.getItem('firstIntroDisplayed') && !pageSummaryDisplayed) {
            console.log('processIntro: firsIntroDisplayed=true');
            showChatProcess(messageType, true);
            showSystemResponse("<p>Hi, I'm your Research Assistant, powered by TechTarget content.</p> <p>I've prepared a summary of this page along with 3 key questions this article answers.</p> <p>Click on any question for details, or ask a new one below.</p>", 'system', 'intro');
            setTimeout(() => {
                // showChatProcess(messageType, false);               
                processPageSummary();
            }, 1000); // 1,000 equals 1 seconds 
            pushTrackingEvent("displayed_returnMsg");
        }
        /*else {
          console.log('processIntro: NOT( ttlUserSubmits <1 and firsIntroDisplayed=false)');
        showChatProcess(messageType);
        showSystemResponse("<p>Welcome back! How can I help?</p>",'system');
        scrollToTop('lastMessage');
      }*/
    }
    function processPageSummary() {
        console.log('start processPageSummary');
        // console.log('prompts:', promptObject);
        // determine if page summary was already displayed since page load
        if (!pageSummaryDisplayed) {
            showChatProcess('system', true, "Generating summary");
            processPagePrompt(initialPrompt, 'system', 'summary');

            pageSummaryDisplayed = true;
            setButtonStatus();

            //past prompts
            /*processPagePrompt(\"You are an Editor covering technology and business topics in Enterprise Business.  Provide a brief executive summary of the content. Start the summary off with a statement similar to 'Here is your summary:'. Return the response in html format without <!DOCTYPE> <html> or <body> tags and wrap any blocks of text that aren't in <ul> or <ol> with a <p> tag. <b> tags should not be wrapped with <p> tags or <li> tags.\",'system','summary');*/
            //processPagePrompt('You are an Editor covering technology and business topics in Enterprise Business. Provide a brief executive summary of the content. Start the summary off with a statement similar to "Here is your summary:" followed by the summary. Then identify 3 questions this document answers. The summary and questions should be returned as JSON. Here is a JSON template in which to return the response with no spaces before the square brackets:[{"summary":"summaryText"},{"questions":["questionText","questionText","questionText"]}] Do not wrap JSON in "```". Be sure it is wrapped in square brackets with no spaces before or after.','system','summary');
            //processPagePrompt("You are an Editor covering technology and business topics in Enterprise Business.  Provide a brief executive summary of the content then highlighting 3 questions the document answers in bullet format at the end of the summary.  Start the summary off with a statement similar to 'Here is your summary:'. Return the response in html format without <!DOCTYPE> <html> or <body> tags and wrap any blocks of text that aren't in <ul> or <ol> with a <p> tag. <b> tags should not be wrapped with <p> tags or <li> tags.",'system');

        }
    }
    function processPagePrompt(prompt, messageType, subtype) {
        console.log('start processPagePrompt()');
        var pagePrompt = "[CONTENT]: \n" + getContent() + "\n\n" + prompt;
        promptComplete = false;
      	requestType = subtype;
      	 if (requestType === "systemOption") {
           requestType = "system-question";
         }
        processPrompt(pagePrompt).then(result => {
            if (result instanceof Error) {
                // Handle error
                console.error('An error occurred:', result.message);
                var chatResponse = "ERROR" + result.message;
                showPagePromptErrors("1");
                pushTrackingEvent("responseErrorShown");
                // if (callback) callback();
            } else {
                // Process the result
                //var chatResponse = result.output.content[0].text;
                var chatResponse = result.choices[0].message.content;
                console.log(chatResponse);
                console.log('Is the Prompt Complete:', promptComplete);

                if (subtype === 'summary') {
                    pageSummaryDisplayed = true;
                    var parsedChatResponse = JSON.parse(chatResponse);
                    console.log(parsedChatResponse);
                    var parsedChatResponseSum = convertTextToHTML(parsedChatResponse.summary);
                    //var parsedChatResponseSum = $.parseHTML(parsedChatResponse.summary);
                    currentPageSummary = parsedChatResponse;
                    console.log(parsedChatResponse);
                    //showSystemResponse(parsedChatResponse.summary,'system','summary');
                    //showSystemOptions(parsedChatResponse.systemOptions,'systemOption','systemOption');
                    setTimeout(() => {
                        showSystemResponse(parsedChatResponseSum, 'system', 'summary');
                        showSystemOptions(parsedChatResponse.systemOptions, 'systemOption', 'systemOption');
                        systemOptionsDisplayed = true;
                        // if (callback) callback();
                        // initializeCurrentPageData();
                    }, 2000); // 1,000 equals 1 seconds


                }
                else {
                    setTimeout(() => {
                        showSystemResponse(chatResponse, messageType, 'systemOptionAnswer');
                        scrollToTop('lastMessage');
                        //if (callback) callback();
                    }, 1200); // 1,000 equals 1 seconds
                    //check if all system options are clicked
                    // setTimeout(() => {
                    checkAllSystemOptionsClicked();
                    //}, 7500); // 30 second Delay 
                }
            }
        });

        /*.then(result => {
            if (subtype === 'summary') {
            showSystemOptions();
          }
        }).then(result => {
            if (subtype === 'systemOptions') {
            console.log(result.content);
            if (result) {
              for (var i =0;i < result.content.length;i++){
                        console.log(result.content[i].question);
                    }
                }
          }
        });*/
    }
    function processPrompt(promptText) {
        console.log('start processPrompt(promptText)');
        // old endpoint
        // const endpoint = 'https://us-east4-tt-pr-aiservices-prod.cloudfunctions.net/tt-cf-webservice-prod-vertexai-predict-proxy';
        const endpoint = 'https://litellm.techtarget.com/chat/completions';  // Updated endpoint
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-su86regFuyEx3VrQXWRUjA',
            },
            body: JSON.stringify({
                "model": "vertex_ai/claude-3-haiku@20240307",
                "messages": [{
                    "content": promptText,
                    "role": "user"
                }],
                "metadata": {
                    "trace_name": "optimizely",
                    "trace_user_id": "Research Assistant - Beta",
                    "tags": ["request: " + requestType + "", "model: claude-3-haiku"]

                },

                "temperature": 0.5,
                //"top_p": 0.95,  //  configure as needed
                "max_tokens": 4096  // Adjust max tokens for response
            })
        };

        /*{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: promptText,
                userID: "optimizely",
                source: "abtest-genai-chat-summary",
                model: "claude-3-haiku@20240307",
                parameters: {
                    temperature: 0.3,
                    max_output_tokens: 1000
                }
            })
        };*/
        // console.log('Is the Prompt Complete:', promptComplete);
        return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
            .then(response => {
                if (!response.ok) {
                    showPagePromptErrors("1");
                    pushTrackingEvent("responseErrorShown");
                    throw new Error(`HTTP error! Status: ${response.status}`);


                }
                promptComplete = true; // Set flag true indicating the request is complete.
                console.log("Summary Fetch Response:", response);
                return response.json();
                //return response.output.content.text
            }).then(data => {
                console.log("Summary Object:", data); // Log the full response object here
                return data; // Proceed with the rest of the logic
            })
            .catch(error => {
                console.error('Error:', error);
                pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }

    //Function to process User submission counts
    function processUserCount(text) {
        if (remainingUserSubmits > 0) {
            updateSessionStorage(); // Update sessionStorage with the new values

        } else {
            // Handle the case where no submissions remain
            console.log("No more submissions left");
        }
    }

    // Function to fetch HTML using the native fetch API and extract image URLs
    function fetchAndExtractImageUrls(url) {
        console.log(`Starting the process for URL: ${url}`);

        return fetchHtml(url)
            .then(function (html) {
                console.log('image HTML fetched successfully, now parsing...');
                return extractImageUrls(html, url);
            })
            .then(function (images) {
                console.log('Fetched and extracted image URLs:', images);
                return images.length > 0 ? images : null;
            })
            .catch(function (error) {
                console.error('An error occurred:', error.message);
                pushTrackingEvent("fetchError");
                return null;
            });
    }

    // Updated fetchHtml function using the native fetch API
    function fetchHtml(url) {
        console.log(`Fetching HTML from: ${url}`);
        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text(); // Use text() instead of JSON for HTML content
            })
            .then(function (html) {
                console.log('image HTML fetched successfully.');
                return html;
            })
            .catch(function (error) {
                console.error('Error fetching the image HTML:', error.message);
                pushTrackingEvent("fetchError");
                throw new Error('Failed to fetch HTML');
            });
    }

    // The rest of the code remains unchanged
    function extractImageUrls(html, url) {
        console.log('Parsing HTML for image workaround');
        try {
            if (!url) {
                throw new Error('URL is not defined.');
            }

            var tempDiv = $('<div>').html(html);
            console.log('image HTML parsed.');
            let imgSrc = [];
            if (url.includes('brighttalk.com')) {
                // Extract images for brighttalk.com
                imgSrc = tempDiv.find('section.Section_Section40__iljNL img').map(function (i, el) {
                    return $(el).attr('src');
                }).get();
            } else if (url.includes('bitpipe.com')) {
                // Extract images for bitpipe.com
                imgSrc = tempDiv.find('div.abstractCoverBig img').map(function (i, el) {
                    return $(el).attr('src');
                }).get();
            } else {
                console.warn('Domain not recognized.');
            }

            let extractedImage = imgSrc.length > 0 ? imgSrc[0] : null;

            if (extractedImage) {
                console.log('First image URL found:', extractedImage);
                return validateImageUrl(extractedImage).then(function (isValid) {
                    if (isValid) {
                        return extractedImage;
                    } else {
                        console.warn('Image not found, returning hardcoded URL.');
                        return 'https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg';
                    }
                });
            } else {
                console.log('No images found in the specified section, returning hardcoded URL.');
                return Promise.resolve('https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg');
            }
        } catch (error) {
            console.error('Error during processing:', error.message);
            throw error;
        }
    }

    function validateImageUrl(url) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () {
                resolve(true);
            };
            img.onerror = function () {
                resolve(false);
            };
            img.src = url;
        });
    }
    // Function to process user input
    function processUserInput(text) {
        console.log('start processUserInput()');
        $('<div class="chat-message-container user"><div class="avatar"><i class="icon header_logged_in_icon"></i></div><div class="chat-message user"><span class="text"><bdi>' + text + '</bdi></span></div></div>').appendTo('#chatDisplay');
        scrollToTop('lastMessage');
        showChatProcess('system', true, "Searching TechTarget content"); // processing/loading message
        isProcessing = true;
        ///showOverlay();
        var userInput = chatInput.value;
        if (userInput.trim() === '') return;

        // First, fetch the summary
        fetchSummary(recommendUrls, userInput, getChatHistory(userInput))
            .then(summary => {
                if (summary) {
                    console.log("Fetched Summary:", summary);
                    var chatResponse = summary.choices[0].message.content;
                    summaryNoCitations = removeCitations(chatResponse);
                    var parsedSummary = parseAndReplaceCitations(chatResponse);
                    console.log("parsed summary: ", parsedSummary);
                    processedSummary = convertTextToHTML(parsedSummary);
                    console.log("Processed Summary:", processedSummary);

                    containsErrorWords = /promptError|chat history/i.test(processedSummary);

                    if (!containsErrorWords) {
                        showSystemResponse(processedSummary, 'system', 'systemAnswer');
                        summaryComplete = true;
                        getUserSubmits('chat-status-attempt-counter');
                        //hideOverlay();
                        showChatProcess('system', true, "Searching for related content"); // processing/loading message
                      	setButtonStatus();
                    } else {
                        var errorSummary = handlePromptError(processedSummary);
                        var updatedText = errorSummary.updatedText;
                        showSystemResponse(processedSummary, 'system', 'systemAnswer');
                        summaryComplete = true;
                        pushTrackingEvent("responseErrorShown");
                        isProcessing = true;
                        //getUserSubmits('chat-status-attempt-counter');
                        //showChatProcess('system', true, "Searching for related content"); // processing/loading message
                    }
                }
            })
            .then(processedSummary => {
                // Then, fetch recommendations based on the summary
                return fetchRecommendations(userInput, summaryNoCitations)
                    .then(libraryContent => {
                        if (!libraryContent) {
                            console.log("returned recs:", libraryContent);
                            throw new Error('Failed to fetch or parse recommendations.');
                        }
                        // If summary is complete, show content cards
                        if (chatComplete && !containsErrorWords) {
                            //if (chatComplete) {               
                            addLibraryContent(libraryContent, 'rag', maxCards);
                            showContentCard(libraryContent, contentKeys);
                          	setButtonStatus();
                            var interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
                            interactionCount++;

                            var chatData = {
                                chatQuestion: userInput,
                                chatResponse: processedSummary,
                                contentCards: libraryContent
                            };

                            console.log("Stored Chat Data:", chatData);
                            localStorage.setItem('interactionCount', interactionCount);
                            updateContextStorage(null, chatData);
                            summaryComplete = false;
                        }
                    });
            })
            .catch(error => {
                console.error('Error in user input processing:', error);
                var errorMessage = getErrorMessage("1");
                showSystemResponse(errorMessage.errorHtmlChat, 'system');
                pushTrackingEvent("responseErrorShown");
            });

        chatInput.value = '';
        chatInput.focus();
        remainingCharacters = 0;
        $('#charCountDisplay').text(remainingCharacters);
        //countCharacters('chatInput', 'charCountDisplay', maxCharCount, true);
        $('#chat-status-charCount').removeClass('error');
        setButtonStatus();
      	
    }

    // Function to fetch recommendations based on the userInput & chat response
    function fetchRecommendations(userInput, summary) {
        //chatHistory = chatDisplay.innerText;
        console.log("Summary without citations for recommendation API:", summary);
        console.log("User Input sent to recommendation API:", userInput);
        console.log("URLs returned from context fetch for recommendation API: ", contentUrls);

        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            //"input_document_type": "web_url", // Request for just URLs
            "documents_to_return": maxCards,
            //"input_documents": [userInput + summary],  // Original request
            //"input_documents": contentUrls, // Request for just URLs
            "input_documents": [userInput + " " + summary + "\nReference URLs: " + contentUrls], // Request with all 3 included
            "input_filter": {
                "content_format": ["PDF", "Video"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
                // "content_type": ["eGuide", "Video", "BlogPost", "Webcast"] //Adjust for content type
            },
            "metadata": [
                "content_key",
                "content_title",
                "content_summary",
                "content_format",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            "llm": "claude-3-haiku@20240307",
            "persist_prompt": true,
            "source": "abtest-genai-chat-summary"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                showPagePromptErrors("1");
                pushTrackingEvent("responseErrorShown");
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                pushTrackingEvent("emptyRecommendations");
                // showPagePromptErrors("1");
                console.log("No recommendations found.");
                showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                var recommendations = data["input_document 0"].Documents;
                console.log("Recommendation Data:", data);
                console.log("Recommendations:", recommendations);

                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                    var imageUrl = doc.metadata.content_image_url || getFallbackImageUrl(); // Use fallback image if imageUrl is blank

                    if (contentURL.includes('brighttalk.com') || contentURL.includes('bitpipe.com')) {
                        console.log(`Starting the process for URL: ${contentURL}`);
                        return fetchAndExtractImageUrls(contentURL).then(fetchedImageUrl => {
                            imageUrl = fetchedImageUrl || imageUrl;
                            processRecommendation(doc, imageUrl);
                        });
                    } else {
                        processRecommendation(doc, imageUrl);
                        return Promise.resolve();
                    }
                });

                return Promise.all(fetchPromises).then(() => {
                    console.log("Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data
                    return libraryContent;
                });
            }

        }).catch(error => {
            console.error('Error fetching recommendations:', error);
            showPagePromptErrors("1");
            return null;
        });
    }

    function processRecommendation(doc, imageUrl) {
        var capitalizedSummary = doc.top_chunk_text.charAt(0).toUpperCase() + doc.top_chunk_text.slice(1);
        var newUrl = addQueryStrings(doc.content_web_url, doc.metadata.content_format, doc.metadata.content_type);
        libraryContent[doc.recommendation_id] = {
            title: doc.content_title,
            url: newUrl,
            imageUrl: imageUrl,
            topic: doc.metadata.content_type,
            summary: capitalizedSummary,
            contentType: doc.metadata.content_format,
            relevancyScore: doc.document_score,
            contentKey: doc.metadata.content_key
        }; contentKeys.push(doc.metadata.content_key);
        card = libraryContent;
        console.log('Josh', card);

    }

    // Function to fetch a response for user input
    function fetchSummary(recommendUrls, userInput, chatHistory) {
        chatComplete = false;
        console.log("Processing response to:", userInput);
        const relevantChatHistory = getChatHistory(userInput); // This uses conditional logic to only includes chathistory when the question is too vague
        console.log("Was chat history populated?: ", !!relevantChatHistory);
        console.log("potential chat history (not automatically included): ", currentChatHistory); //use this var for a more targeted chathistory implementation
        // Fetch context (10 documents)
        return fetchContext(userInput).then(contextDocuments => {
            if (!contextDocuments || contextDocuments.length === 0) {
                console.log("No documents returned from fetchContext.");
                showSystemResponse("Sorry, I couldn't find any relevant documents.");
                return null;  // Return null if no documents are found to avoid proceeding
            }

            console.log("Fetched context documents:", contextDocuments);
            //console.log("Paul Context URLs ", contentUrls);   


            // Prepare the metadata to be sent to the API
            documentMetadata = contextDocuments.map(doc => ({
                title: doc.title,
                url: doc.url,
                score: doc.score,
                citationNumber: doc.citation,
                text: doc.text
            }));
            relevantDocuments = JSON.stringify(promptJSON);
            //query = userInputOriginal;
            console.log("context data:", documentMetadata);
            var relevantDocuments = extractDocuments(relevantDocuments);
            //console.log("embeds: ", documentsJson);
            console.log("embeds in chat prompt: ", relevantDocuments);

            // Prepare the prompt text by adding in user's question, chat history, and document metadata

            promptText = "INSTRUCTIONS:/nAnswer the users QUESTION using the text found in the \"top_chunk_text\" sections in \"My Knowledge\"./nKeep your answer ground in the facts of \"My Knowledge\"./nOnly if \"My Knowledge\" does not contain the facts to answer the QUESTION return {promptError:0}/nUse as many of the \"top_chunk_text\" sections that are relevant to the question./nAnswers should include citations at the end of the relevant sentence or paragraph. The citations should be the \"content_key\" related to the \"top_chunk_text\" used enclosed in square brackets and \"ID:\" prefix, e.g., [ID:252486434] or [ID:366596579,366596023]./nRefer to \"My Knowledge\" as my knowledge./nBe sure to use proper grammar, sentence-structure, and punctuation. Include useful literary techniques, like keywords (using markup) or lists, to help the reader. /n/nMy Knowledge:/n" + relevantDocuments + "/n/nQUESTION:/n" + userInput + "/n/n";

            console.log("Paul Chat prompt text: ", promptText);
            embeds = documentsJson;
            //console.log("embeds for recommendations prompt: ", embeds);
            // Now send the request to the /invoke endpoint
            const requestBody = {
                "model": "vertex_ai/claude-3-haiku@20240307",
                "messages": [{
                    "content": promptText,
                    "role": "user"
                }],
                "metadata": {
                    "trace_name": "optimizely",
                    "trace_user_id": "Research Assistant - Beta",
                    "tags": ["request: user-question", "model: claude-3-haiku"]

                },
                "temperature": 0.2,  // Adjust randomness
                //"top_p": 0.95,  // Optional parameter to adjust randomness
                "max_tokens": 4096  // limit the number of response tokens
            };

            return logFetchError(fetch('https://litellm.techtarget.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer sk-su86regFuyEx3VrQXWRUjA',
                },
                body: JSON.stringify(requestBody)
            }),
                'https://litellm.techtarget.com/chat/completions',
                requestBody
            ).then(response => {
                console.log("Summary Response:", response);
                if (!response.ok) {
                    showPagePromptErrors("1");
                    pushTrackingEvent("responseErrorShown");
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                //console.log("Summary Fetch Response:", response);
                return response.json();  // Ensure we return the response JSON
            })
                .then(data => {
                    if (!data || Object.keys(data).length === 0) {
                        pushTrackingEvent("emptySummary");
                        console.log("No summary available.");
                        showSystemResponse("Sorry, I'm not able to answer that question.");
                        return null;  // Return null if no data is available
                    } else {
                        console.log("Summary fetched successfully.");
                        console.log("Chat API Response Object:", data);
                        var chatResponse = data.choices[0].message.content;
                        console.log("Chat API Response Text:", chatResponse);

                        chatComplete = true;  // Mark the chat as complete
                        updateContextStorage(null, chatData);

                        return data;  // Return the data back to processUserInput
                    }
                })
                .catch(error => {
                    console.error('Error fetching summary:', error);
                    showPagePromptErrors("1");
                    pushTrackingEvent("fetchError");
                    return null;  // Return null if there is an error
                });
        });
    }
    // Function to fetch context based on user input
    function fetchContext(userInput) {
        console.log("fetch context started");
        var requestBody = {
            "input_document_type": "document_snippet",
            "input_documents": [userInput],
            "documents_to_return": maxContextDocuments, // Requesting 20 documents 
            "rank_score": "max_similarity_score",
            "input_filter": {
                "content_format": ["Web"], // Adjust filters as needed  ["Web", "PDF", "Video"]
                "content_language": ["en"],
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
            },
            "metadata": [
                "content_key",
                "content_title",
                "content_summary",
                "content_format",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            "llm": "claude-3-haiku@20240307",
            "persist_prompt": true,
            "source": "abtest-genai-chat-summary"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Context Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || Object.keys(data).length === 0) {
                console.log("No context documents available.");
                return [];
            } else {
                //promptJSON = data; // Keep the existing promptJSON assignment
                console.log("Full context object returned.", data);
                console.log("Paul - Full list of docuemnts.", data);

                // Extracting the specified number of documents for context
                const totalDocuments = data['input_document 0'].Documents;
                const selectedDocuments = totalDocuments.slice(0, documentsToUse); // Only return the number specified

                // Clone the original object using Object.assign and modify it to include the reduced documents
                const reducedResponse = Object.assign({}, data, {
                    'input_document 0': Object.assign({}, data['input_document 0'], {
                        Documents: selectedDocuments // Replace with reduced documents
                    })
                });
                promptJSON = reducedResponse;
                console.log("Josh -  list of docuemnts.", promptJSON);
                // Process the selected documents into the required format
                const context = selectedDocuments.map(doc => {
                    contentUrls.push(doc.content_web_url); // Push content URLs to the array
                    // Return the processed document information
                    return {
                        title: doc.metadata.content_title,
                        url: doc.content_web_url,
                        score: doc.document_score,
                        citation: doc.metadata.content_key,
                        text: doc.top_chunk_text
                    };
                });
                pushTrackingEvent("contextDocumentsFetched");
                console.log("Context:", context); // Log the processed context for debugging
                console.log("Paul - List of Documents Used to answer question:", context); // Log the processed context for debugging
                return context; // Return the processed context in the same format
            }
        }).catch(error => {
            console.error('Error fetching context documents:', error);
            pushTrackingEvent("fetchError");
            return [];
        });
    }



    // Removes citations from text for Recommendations API
    function removeCitations(text) {
        // Regex to handle various citation formats, including partial ones and document metadata
        const citationRegex = /(\['citation':(\d+),\s*'content_title':'([^']*)',\s*'content_web_url':(https?:\/\/[^,]+),\s*'document_score':([\d\.]+)\])|\[citation:\d+,\s*\]|\bmetadata=\{vector_score:\s*([\d\.]+),\s*score:\s*([\d\.]+),\s*content_key:\s*(\d+),\s*content_title:\s*([^,]+),\s*content_web_url:\s*(https?:\/\/[^\s]+)\}/g;

        // Replace all matching patterns with blank
        let newText = text.replace(citationRegex, '');

        return newText;
    }


    //Adds Tracking Codes as URL Parameters 
    function addQueryStrings(url, contentFormat, contentType) {
        var urlObj = new URL(url);

        if (contentFormat === "Web") {
            urlObj.searchParams.append("Offer", promoCode);
            if (uid2 !== undefined) {
                urlObj.searchParams.append("uid", uid2);
            }
        }
        if (contentFormat === "PDF") {
            urlObj.searchParams.append("asrc", asrc);
            urlObj.searchParams.append("Offer", promoCode);
            if (uid2 !== undefined) {
                urlObj.searchParams.append("uid", uid2);
            }
        }

        if (url.includes("brighttalk.com") || contentType === "webinar" || contentType === "webcast") {
            urlObj.searchParams.append("utm_medium", utm_medium);
            urlObj.searchParams.append("utm_source", utm_source);
            urlObj.searchParams.append("utm_campaign", utm_campaign);
        }

        return urlObj.toString();
    }

    // Returns the URL without the URL parameters
    function getCurrentUrlWithoutQueryString() {
        var url = new URL(window.location.href);
        return url.origin + url.pathname; // Combines the domain and the path without query string and hash
    }

    function handlePromptError(responseText) {
        // Define the regex to capture and remove the {promptError:X}
        const promptErrorRegex = /\{promptError:(\d+)\}/;

        // Match the regex and store the error value (if any) in a variable
        const errorMatch = responseText.match(promptErrorRegex);
        let promptErrorValue = null;

        if (errorMatch) {
            // The first capturing group contains the numeric value of promptError
            promptErrorValue = errorMatch[1];
            console.log("Captured promptError value:", promptErrorValue);

            // Remove the {promptError:X} from the response text
            responseText = responseText.replace(promptErrorRegex, '').trim();
        }

        console.log("Updated response text:\n", responseText);
        return {
            updatedText: responseText,
            promptErrorValue: promptErrorValue
        };
    }

    function parseAndReplaceCitations(text) {
        console.log("context JSON:", promptJSON);


        const citationRegex = /\[ID:(\d+(?:,\s*(?:ID:)?\d+)*)\]/g;

        const referenceRegex = /^\[ID:(\d+)\]\s*(.*?)\s*(https?:\/\/[^\s]+)?/gm;
        const extraReferenceListRegex = /^\[ID:(\d+)\]\s*\[\d+\]\s*$/gm;

        let citations = {};  // To store the references from the documentMetadata
        let match;

        console.log("Initial Text:\n", text);

        // Extract citations directly from the text and match them to documentMetadata
        console.log("Matching citations from the text to documentMetadata...");
        const citationMatches = text.match(citationRegex);
        if (citationMatches) {
            citationMatches.forEach(citationMatch => {
                // Split the matched IDs if there are multiple (e.g., [ID:366599832, 366545075] or [ID:366571014, 366563776])
                const citationIDs = citationMatch.match(/\d+/g);  // Match all digits (IDs) including formats without the second "ID:"

                citationIDs.forEach(citationID => {
                    // Find the document in documentMetadata based on the citationNumber
                    const doc = documentMetadata.find(doc => doc.citationNumber === citationID);
                    if (doc) {
                        let urlObj = new URL(doc.url);
                        urlObj.searchParams.append("Offer", promoCode);  // Add promo code

                        // Store the matched citation in the citations object
                        citations[citationID] = {
                            title: doc.title || "Unknown Title",
                            url: urlObj.toString()
                        };
                        console.log(`Mapped citation [ID:${citationID}] to document - Title: ${citations[citationID].title}, URL: ${citations[citationID].url}`);
                    } else {
                        console.warn(`No document found in documentMetadata for citation [ID:${citationID}]`);
                    }
                });
            });
        }

        // Remove the references section from the original text
        console.log("Removing reference list from the original text...");
        let textWithoutReferences = text.replace(referenceRegex, '').trim();
        console.log("Text without references:\n", textWithoutReferences);

        // Replace in-text citation IDs with actual hyperlinks
        console.log("Replacing citation IDs in the text with hyperlinks...");
        let newText = textWithoutReferences.replace(citationRegex, (match, citationIDs) => {
            // For multiple citation IDs in a single citation block, we map each ID to its citation
            const ids = citationIDs.split(/,\s*(?:ID:)?/);  // Split by commas and handle optional "ID:" prefix
            const links = ids.map(citationID => {
                if (citations[citationID.trim()]) {
                    const citation = citations[citationID.trim()];
                    return `<span class="citation">[<a href="${citation.url}" target="_blank" title="${citation.title}">REF</a>]</span>`;
                } else {
                    console.warn(`Citation [ID:${citationID.trim()}] not found.`);
                    return `[ID:${citationID.trim()}]`;
                }
            });

            return links.join(', ');  // Join multiple citation links with commas
        });

        // Build a references list based on the extracted citations
        if (Object.keys(citations).length > 0) {
            console.log("Building the references list...");
            newText += '<div class="references">References <span>[REF]</span></div><ul class="citation-list">';
            Object.keys(citations).forEach(citationID => {
                const citation = citations[citationID];
                newText += `<li><a href="${citation.url}" target="_blank">${citation.title}</a></li>`;
            });
            newText += '</ul>';
        }

        console.log("Final parsed text:\n", newText);
        return newText;
    }



    //default fallback for URL
    function createGoogleSearchUrl(title) {
        const baseUrl = "https://www.google.com/search";
        const query = encodeURIComponent(`${title} site:techtarget.com`);
        return `${baseUrl}?q=${query}`;
    }
    //Creates reference Title if none provided
    function createTitleFromUrl(url) {
        try {
            const urlObj = new URL(url);
            const lastPart = urlObj.pathname.split('/').pop();  // Get the part after the last slash
            // Replace hyphens with spaces and capitalize each word
            return lastPart.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        } catch (error) {
            //console.error("Error extracting title from URL:", error);
            return "Relevant TechTarget Content";  // Fallback in case of error
        }
    }

    function scrollToPreviousMessage() {
        var chatDisplay = document.getElementById('chatDisplay');
        var messageContainers = chatDisplay.querySelectorAll('.chat-message-container');

        // Initialize currentMessageIndex if it's the first scroll (start at the last message)
        if (currentMessageIndex === null) {
            currentMessageIndex = messageContainers.length - 1; // Set to the last message on the first click
        }

        // Check if the current index is valid and scroll to the message
        if (currentMessageIndex > 0) {
            currentMessageIndex--; // Move to the previous message
            var previousMessage = messageContainers[currentMessageIndex];
            previousMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (currentMessageIndex === 0) {
            // Scroll to the top of the first message if already at the start
            var firstMessage = messageContainers[0];
            firstMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Bind the click event to the up-arrow button
    $('#scrollUpButton').on('click', function () {
        scrollToPreviousMessage();
    });

    function extractDocuments(responseText) {
        // Find the position of "Documents" with escaped quotes
        const documentsStart = responseText.indexOf('"Documents":'); // Escaped quote in the JSON data

        if (documentsStart === -1) {
            console.log("Documents section not found");
            return null;
        }

        // Extract the portion starting from "Documents"
        const partialResponse = responseText.substring(documentsStart);

        // Find the end of the "Documents" section by locating the closing brace
        const documentsEnd = partialResponse.indexOf('}]') + 2;  // Adjust to include the closing braces

        // Extract the Documents section
        const documentsSection = partialResponse.substring(0, documentsEnd);

        try {

            //documentsJson = JSON.parse("{" + documentsSection + "}");
            documentsJson = documentsSection;
            return documentsJson;
        } catch (error) {
            console.error("Error parsing the extracted Documents section:", error);
            return null;
        }
    }


    function parseChatApiResponse(data) {
        var parsedResponse = {
            query: data.query,
            responseText: data.response,
            citations: []
        };

        // Regular expression to match citation patterns in the response text
        var citationRegex = /\[Citation (\d+): content_title:(.*?), 'content_web_url':(.*?), 'doc_score':(.*?)\]/g;
        var match;
        while ((match = citationRegex.exec(data.response)) !== null) {
            var citationDetail = {
                citationId: match[1],
                contentTitle: match[2],
                contentWebUrl: match[3],
                docScore: parseFloat(match[4])
            };
            parsedResponse.citations.push(citationDetail);

            // Log each citation detail for review
            console.log("Citation Detail:", citationDetail);
        }

        // Replace citations in the response text with formatted HTML links
        parsedResponse.responseText = parsedResponse.responseText.replace(citationRegex, function (match, p1, p2, p3) {
            return `<a href="${p3}" target="_blank">${p2}</a>`;
        });

        // Log the fully parsed response
        console.log("Parsed Chat API Response:", parsedResponse);

        return parsedResponse;
    }

    // Function to process chat response
    function processUserPrompt(text) {

        /////// SOLVE: This needs to be a router between page and vector processing.  How do we tell the difference from the users intention?  Do we always take user input as vector searches?

        //PROMPT: The user is having a conversation.  Here is a summary of what has been discussed.\n [CONVERSATION]\n  The user is now asking ${text}
        //text += processChatHistory();
        //processEmbeds(text) will give us the vector related embeds to use in the prompt for context.  Appending this with the chat history and the user prompt will allow for a response.


        var systemPrompt = "[CONTENT]: \n" + getContent() + "\n\n" + text;


        ///QUESTION: how do we put a loading sign before processing the prompt?

        processPrompt(systemPrompt).then(result => {
            //console.log(result);
            if (result instanceof Error) {
                // Handle error
                console.error('An error occurred:', result.message);
                chatResponse = "ERROR" + result.message;
                showPagePromptErrors("1");
                pushTrackingEvent("responseErrorShown");
            } else {
                // Process the result
                //console.log(result);
                // var chatResponse = result.output.content[0].text;
                var chatResponse = result.choices[0].message.content;
                console.log(chatResponse);
                showSystemResponse(chatResponse, 'system');
                scrollToTop('lastMessage');
            }
        });
    }
    function processVectorPrompt(prompt) {
        var vectorPrompt = prompt;
        processEmbeds(vectorPrompt).then(result => {
            //console.log(result);
            if (result instanceof Error) {
                // Handle error
                console.error('An error occurred:', result.message);
                chatResponse = "ERROR" + result.message;
                showPagePromptErrors("1");
                pushTrackingEvent("responseErrorShown");
            } else {
                // Process the result
                //console.log(result);
                var chatResponse = result.content;
                console.log(chatResponse);
                showSystem(chatResponse, 'vector');
                scrollToTop('lastMessage');
            }
        });
    }
    function pushTrackingEvent(customEventName) {
        window.optimizelyEdge = window.optimizelyEdge || [];
        window.optimizelyEdge.push({
            type: "event",
            eventName: eventExpName + customEventName
        });
    }
    function setButtonStatus() {
        $('.loader').each(function () {
            var loader = $(this);
            // Check if loader is visible and does not have class "hide"
            if (loader.is(':visible') && !loader.hasClass('hide')) {
                $('#submitBtn').prop('disabled', true);
                // Break out of the loop if any loader is visible
                return false;
            } else {
                
              if ((ttlUserSubmits >= maxUserSubmits)) {
                    $('#submitBtn').prop("disabled", true);
                    $('#chatInput').val('').prop("placeholder", "You've reached your maximum chat submissions.").prop("disabled", true);
                    handleUnload();
                    remainingUserSubmits = 0;
                    if ($('#chatForm .errorMessage').length < 1) {
                        if (isMem) {
                            showPagePromptErrors("3");
                            pushTrackingEvent("maxQMember");
                        } else {
                            showPagePromptErrors("2");
                            pushTrackingEvent("maxQNonMember");
                        }
                    }
                } else if ((charCount === 0) && (ttlUserSubmits < maxUserSubmits)) {
                    $('#submitBtn').prop("disabled", true);
                } else if ((charCount < maxCharCount) && (ttlUserSubmits < maxUserSubmits)) {
                    $('#submitBtn').prop("disabled", false);
                }
            }
        });
    }
    // type refers to 'lastMessage' or 'id', if type='id' then supply the element id this function will anchor to
    function scrollToTop(type, id) {
        console.log('start scrollToTop()');
        // Get the chat display container
        var element,
            chatDisplay = document.getElementById('chatDisplay');

        if (type === 'lastMessage') {
            // Get the last chat message element
            element = chatDisplay.querySelector('.chat-message-container:last-child');
        } /*else if (type === 'systemOptionId') {
        element = document.getElementById('question-response-'+id);
      }*/

        // Scroll the chat display to bring message/question into view
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function scrollToTop2(type, id) {
        console.log('start scrollToTop()');
        // Get the chat display container
        var element,
            chatDisplay = document.getElementById('chatDisplay');

        if (type === 'lastMessage') {
            // Get the second-to-last chat message element
            var messageContainers = chatDisplay.querySelectorAll('.chat-message-container');
            if (messageContainers.length > 1) {
                element = messageContainers[messageContainers.length - 2]; // Select the previous message (before the last)
            }
        } /*else if (type === 'systemOptionId') {
        element = document.getElementById('question-response-'+id);
    }*/

        // Scroll the chat display to bring message/question into view
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); // Align to top, taking viewport into account
        }
    }

    function showChatProcess(messageType, showAvatar, message = '') {
        //showOverlay();
        console.log('start showChatProcess(' + messageType + ')');
        if (messageType !== 'systemOption') {
            // Add loader and optional message
            $('<div class="chat-message-container ' + messageType + '"><div class="avatar"><div class="img"></div></div><div class="chat-message"><div class="loader"></div><span class="text"></span><span class="processing-message">' + message + '</span></div></div>').appendTo('#chatDisplay');

            if (!showAvatar) {
                $('.chat-message-container:last-child').addClass('noavatar');
            }

            if (message !== 'Searching for related content') {
                scrollToTop('lastMessage');
            } else {
                scrollToTop2('lastMessage');
            }
        }
    }


    /*    // Function to check the responseError flag and hide the chat instantly
        function hideChatIfError() {
            // Retrieve the responseError flag from sessionStorage
            const responseError = sessionStorage.getItem('responseError');
    
            // If responseError is 'true', hide the chat container
            if (responseError === 'true') {
                console.warn('Chat has been hidden due to a previous error.');
    
                // Modify the chat container to hide it 
                var chatContainer = document.getElementById('o-pageSummary-container');
                if (chatContainer) {
                    chatContainer.style.display = 'none';
                }
            }
        }
    
        // Function to check the responseError flag and hide the chat with a delay
        function hideChatIfErrorWithDelay() {
            setTimeout(() => {
                hideChatIfError(); // Reuse the instant-hiding logic
                // Modify the chat container's CSS to hide it (ensure this is the correct container ID)
                // var chatModal = document.getElementById('chatModal');
                if (chatModal) {
                    chatModal.style.display = 'none';
                }
            }, 25000); // 10,000 milliseconds equals 10 seconds
        } */

    /* // Attach hideChatIfError to window load event
     window.addEventListener('load', hideChatIfError);
 
     // Attach hideChatIfErrorWithDelay to click events within the chat container only
     var chatContainer = document.getElementById('o-pageSummary-container');
     if (chatContainer) {
         chatContainer.addEventListener('click', hideChatIfErrorWithDelay);
     } */


    function showPagePromptErrors(errorId) {
        console.log("showPagePromptErrors() start: " + errorId);

        // Check if this errorId has already been processed
        if ($('#chat-form-container').data('errorId') === errorId) {
            console.log("Error already displayed. Skipping.");
            return;
        }

        var errorMessage = getErrorMessage(errorId);

        if (errorId === "1") {
            showSystemResponse(errorMessage.errorHtmlChat, 'system');
            $('.chat-message-container:last-child').addClass('error');
        }

        $('#submitBtn').prop('disabled', true);
        $('#chatInput').hide();
        $('#chat-status-container').hide();
        $('#chatModal #chatForm .chat-form-textarea-wrapper').addClass('disabled');
        $('<div class="errorMessage"><span class="error">' + errorMessage.errorHtmlForm + '</span></div>').insertBefore('#chatInput');
        $('#aiDisclaimer').hide();

        // Store the errorId in a data attribute to prevent duplicate displays
        $('#chat-form-container').data('errorId', errorId);
    }

    function copyToClipboard(text, copiedHTML) {
        // Create a temporary element to hold the HTML
        const tempElement = document.createElement('div');
        tempElement.innerHTML = copiedHTML;

        // Use the Clipboard API to write the HTML to the clipboard
        navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([tempElement.innerHTML], { type: 'text/html' })
            })
        ]).then(() => {
            // Success: track and notify user
            pushTrackingEvent("responseCopied");

            console.log('Copied to clipboard:', copiedHTML);
        }).catch(err => {
            // Failure: log error
            console.error('Failed to copy:', err);
        });
    }

    function showSystemOptions(chatResponse, messageType) {
        console.log('start showSystemOptions()');
        console.log(chatResponse);
        $('<div class="chat-message-container ' + messageType + '"></div>').appendTo('#chatDisplay');
        for (var i = 0; i < chatResponse.length; i++) {
            console.log(chatResponse[i]);
            //$('<div id="systemOptionId-'+pageSystemResponseCounter+'" class="chat-message"><a class="chat-'+messageType+' text" href="#"></a><a class="btn-systemOption href="#" "></a></div>').appendTo('#chatDisplay .chat-message-container.'+messageType);
            $('<div class="chat-message"><a class="chat-' + messageType + ' text" href="#"></a><a class="btn-systemOption href="#" "></a></div>').appendTo('#chatDisplay .chat-message-container.' + messageType);
            showSystemResponse(chatResponse[i], 'system', 'systemOption');
            pushTrackingEvent("systemOptionShown");
            pageSystemResponseCounter++;
            updateContextStorage(chatResponse[i]);
        }
    }
    //ellipse summary text
    function ellipses() {
        var ellipsisElements = document.querySelectorAll('.o-contentCardSummary');
        for (var i = 0; i < ellipsisElements.length; i++) {
            var element = ellipsisElements[i];
            // Check if the ellipsis addition is necessary
            while (element.scrollHeight > element.offsetHeight) {
                var text = element.innerHTML;
                var lastIndex = text.lastIndexOf(' ');
                // Break the loop if no spaces are found to prevent an infinite loop
                if (lastIndex === -1) break;
                element.innerHTML = text.substring(0, lastIndex) + '...';
            }
        }
    }

    function showChatResponse(chatResponse) {
        console.log("start showChatResponse()");
        hideLoader();
        var processedResponse = convertTextToHTML(chatResponse);
        $('#chatDisplay .chat-message-container.system:last .chat-message .text').text(processedResponse).addClass('fadeIn');
    }
    // Function to generate a random integer between min and max, inclusive
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Function to get a fallback image URL
    function getFallbackImageUrl() {
        const rndInt = randomIntFromInterval(1, 60);
        const formattedNumber = rndInt < 10 ? `0${rndInt}` : `${rndInt}`;
        return `https://media.techtarget.com/devUx/custom-1044/hero${formattedNumber}.jpg`;
    }

    function showContentCard(libraryContent) {
        console.log("start showContentCard()");
        var introAdded = false;

        Object.keys(libraryContent).forEach((key, index) => {
            if (index < maxCards) {
                var card = libraryContent[key];
                console.log("Card:", card);
            } else {
                return; // Respect the maxCards limit
            }

            if (!card) {
                console.error(`Card with key ${key} is undefined in libraryContent`);
                return; // Skip to the next iteration
            }


            if (card.relevancyScore >= minRagRelevancy) {
                // showChatProcess('system', false); // Prepare to show a new system message
                if (!introAdded) {
                    if (card.contentType === 'Video') {
                        card.contentType = card.contentType.toLowerCase();
                    }
                    showSystemResponse("<p>I also found this " + card.contentType + ", which may be helpful:</p>", 'system');
                    displaySurveyLink();
                    //transformIncorrectHtml();
                    //hideloader();
                    //showChatProcess('system', true, "Searching for related content"); // Prepare to show a new system message//

                    //showChatProcess('system', false);
                    /*var introHtml = '<p>The following content may be of help to you:</p>';
                      $('.chat-message-container:last-child .chat-message .text').append(introHtml);*/
                    introAdded = true;
                    //isProcessing = false;
                }
                var contentCardHtml = '<a class="o-contentCard" href="' + card.url + '" target="_blank" title="' + card.title + '"><div class="o-contentCard-left"><img class="o-contentCardImage" src="' + card.imageUrl + '"></div><div class="o-contentCard-right"><div class="o-contentCardContentType">' + card.contentType + '</div><div class="o-contentCardTitle">' + card.title + '</div><div class="o-contentCardAction">READ MORE</div></div></a>';

                // save for when we have a summary
                // var contentCardHtml = '<a class="o-contentCard" href="' + addQueryStrings(card.url, card.contentType, card.topic) + '" target="_blank"><div class="o-contentCard-left"><img class="o-contentCardImage" src="' + card.imageUrl + '"></div><div class="o-contentCard-right"><div class="o-contentCardContentType">' + card.contentType + '</div><div class="o-contentCardTitle">' + card.title + '</div><div class="o-contentCardSummary">' + card.summary + '</div><div class="o-contentCardAction">READ MORE</div></div></a>';
                setButtonStatus();
                setTimeout(function () {
                    // Code to execute after 0.7 seconds
                    $('.chat-message-container:last-child').addClass('contentCard');

                    $('.chat-message-container:last-child .chat-message .text').append(contentCardHtml);
                    pushTrackingEvent("contentCardShown");
                    hideLoader();
                    setButtonStatus();
                    ellipses();
                    //scrollToTop('lastMessage');
                    isProcessing = false;

                    if (!card.addedToLibrary) {
                        // addLibraryContent(card, 'rag');
                        card.addedToLibrary = true; // Mark this card as added
                        console.log(card);
                    }
                }, 700);
            }

        });
    }

    // Check repeatedly until promptComplete is true
    function checkChatComplete(libraryContent, chatData, userInput) {
        if (chatComplete) {

            addLibraryContent(libraryContent, 'rag', maxCards);
            showContentCard(libraryContent);
            chatData = {
                userQuestion: userInput,
                userResponse: processedSummary,
                "Content Cards": libraryContent
            };
            console.log("Stored Chat Data:", chatData);
            // sessionStorage.setItem('chatInteractionData' + interactionCount, JSON.stringify(chatData));
            localStorage.setItem('interactionCount', interactionCount);
            updateContextStorage(null, chatData);
        } else {
            // console.log("waiting for chat");
            setTimeout(checkChatComplete, 50); // Check again after 50ms
        }
    }


    function showSystemResponse(chatResponse, messageType, subtype) {
        console.log('start showSystemResponse');
        var processedResponse;
        var lastMessage = $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message');
        var lastMessageContainer = $('#chatDisplay .chat-message-container.' + messageType + ':last');
        var copyIconHtml = `<div class="copy-icon"><i class="icon-copy"></i></div>`;

        if (subtype === 'systemOption') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + subtype + ':last .chat-message:last .text').html(chatResponse);
        } else if (subtype === 'summary') {
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message:last .text').html(chatResponse);
            lastMessage.append(copyIconHtml);
        } else if (subtype === 'systemAnswer') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            lastMessage.append(copyIconHtml);
            $('.chat-message-container:last-child').addClass('userQuestion');
        } else if (subtype === 'systemOptionAnswer') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            lastMessage.append(copyIconHtml);
            $('.chat-message-container:last-child').addClass('systemOptionAnswer');
        } else if (subtype === 'intro') {
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(chatResponse);
        } else {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            //$('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message:last .text').html(chatResponse);
        }
        //var copyElement = $('.copy-icon');
        //var combinedElements = lastMessage.add(copyElement);

        // Add hover and copy behavior to the copy icon 
        /*lastMessageContainer.hover(
            function () {
                $(this).find('.copy-icon').show();
            },
            function () {
                $(this).find('.copy-icon').hide();
            }
        );*/
        lastMessageContainer.find('.copy-icon').on('click', function (e) {
            const textToCopy = lastMessageContainer.find('.text').text(); // Get the response text
            const html = lastMessageContainer.find('.text').html();
            console.log('HTML to copy: ' + html);

            copyToClipboard(textToCopy, html); // Call the copy function
            $(this).addClass('copied');

        });
        lastMessageContainer.on('mouseleave', function (e) {
            $(this).find('.copy-icon').removeClass('copied');
        });
        hideLoader();
        setButtonStatus();
        currentMessageIndex = null;
    }
    // Function to show user input
    function showUserInput(text) {
        console.log('start showUserInput()');
        $('<div class="chat-message-container user"><div class="avatar"><i class="icon header_logged_in_icon"></i></div><div class="chat-message user"><span class="text"><bdi>' + text + '</bdi></span></div></div>').appendTo('#chatDisplay');
        scrollToTop('lastMessage');
    }
    function systemOptionClicked(target) {
        const systemOptionText = target.textContent.trim();
        pushTrackingEvent("systemOptionClicked");
        //trackChatInteraction("systemOptionClicked");
        //systemOptionsSubmitted.push(systemOptionText);
        showUserInput(systemOptionText);
        showChatProcess('system', true, "Generating answer");
        questionPrompt = ("\n\n Question:" + systemOptionText + "\n\n Page:" + currentUrl + systemOptionPrompt);
        processPagePrompt(questionPrompt, 'system', 'systemOption', function () {
            // Callback when processing is complete
            if (callback && typeof callback === 'function') {
                callback();
            }
        });
        target.parentNode.classList.add('disabled');

        setButtonStatus();
        systemOptionsSubmitted.push(systemOptionText);
        if (systemOptionClickCountAsSubmit) {
            /*remainingCharacters = maxCharCount;
            $('#charCountDisplay').text(remainingCharacters);
            countCharacters('chatInput', 'charCountDisplay', maxCharCount, true);*/
            getUserSubmits('chat-status-attempt-counter');
            /*setButtonStatus();*/
        }
    }
    function systemOptionsNotClickedPush() {
        systemOptionsNotClicked = [];
        // Select the chat message containers
        const messageContainers = document.querySelectorAll('.chat-message-container.systemOption');
        // Iterate over each message container
        messageContainers.forEach(container => {
            // Select all chat message divs within the container
            const chatMessages = container.querySelectorAll('.chat-message');

            // Iterate over each chat message
            chatMessages.forEach(message => {
                // Check if the message does not have a parent with class "disabled"
                if (!message.closest('.disabled')) {
                    // Find the text within the .text div and push it into the array
                    const text = message.querySelector('.text').textContent.trim();
                    systemOptionsNotClicked.push(text);
                }
            });
            console.log(systemOptionsNotClicked);
        });

    }

    // New function to check if all system options have been clicked
    function checkAllSystemOptionsClicked() {
        // If all system options are clicked, display the message
        if (systemOptionsSubmitted.length >= 3 && !questionLimit) {
            setTimeout(() => {
                displayContinueChattingMessage();
            }, 3500); // 30 second Delay
        }
    }

    // Function to display the message after all system options have been clicked
    function displayContinueChattingMessage() {
        var messageHtml = `<div class="chat-message-container system"><div class="avatar"><div class="img"></div></div><div class="chat-message" style="position: relative;"><div class="loader hide"></div><span class="text"><p id="questonsSuggestion">To continue chatting, ask your own questions below.</p>
                                </div>
                            </div>
                         </div>`;

        //showSystemResponse("<p>To continue chatting ask a question below</p>");
        if ($('#questonsSuggestion').length === 0) {
            $('#chatDisplay').append(messageHtml);
            setTimeout(() => {
                scrollToTop('lastMessage'); // Scroll to show the new message
            }, 8000);
        }
    }

    // Function to determine if the question is open-ended and requires chat history
    function isOpenEndedQuestion(question) {
        return openEndedPatterns.some(pattern => pattern.test(question));
    }

    // Function to conditionally populate chatHistory based on the user's input using if statement
    function getChatHistory(userInput) {
        let chatHistory = "";  // Initialize chatHistory as an empty string
        currentChatHistory = $(".chat-message-container").slice(-maxChatHistory).map(function () {
            return $(this).text().trim();
        }).get().join("\n\n");
        // console.log('potential chat history (not included):', currentChatHistory);
        // Check if the question is open-ended
        if ((isOpenEndedQuestion(userInput)) || includeChatHistory) {
            // If true, populate chatHistory with the current chat history
            chatHistory = currentChatHistory;
        }
        return chatHistory;
    }

    // Function to add the "New Thread" link to the top-left of chatDisplay
    function addNewThreadLink() {
        const newThreadHTML = '<a href="#" id="new-thread" alt="Refresh Chat" class="new-thread-btn" title="Start a new chat thread"><i class="fas fa-sync-alt"></i></a>';
        $('#chatDisplay').prepend(newThreadHTML);

        // Handle click on "New Thread" link to clear chat history
        $('#new-thread').on('click', function (event) {
            event.preventDefault();
            // remove chat messages with the specified classes: contentCard, user, or userQuestion
            $('.chat-message-container.user, .chat-message-container.userQuestion, .chat-message-container.contentCard').remove();
            // Remove all chat messages
            localStorage.removeItem('contextStorage'); // Clear stored context
            includeChatHistory = false; // Reset follow-up toggle
            $('#follow-up-toggle').text('Ask follow-up'); // Reset follow-up text
            console.log('Chat history cleared, new thread started');
        });
    }

    // Function to add the "Ask Follow-up" toggle switch directly below the input bar
    function addFollowUpToggle() {
        const followUpHTML = `
        <div class="toggle-container">
            <label class="switch">
                <input type="checkbox" id="follow-up-toggle">
                <span class="slider round"></span>
            </label>
            <label for="follow-up-toggle" class="follow-up-label">Ask follow-up</label>            
        </div>`;

        $('#chatInput').before(followUpHTML);

        // Toggle follow-up mode
        $('#follow-up-toggle').on('change', function () {
            includeChatHistory = this.checked;  // Toggle the state based on checkbox
            pushTrackingEvent("followUpToggleClicked");
            if (includeChatHistory) {
                $('.follow-up-label').text('Follow-up mode ON');
            } else {
                $('.follow-up-label').text('Ask follow-up');
            }
        });
    }

    // Function to return chat history if follow-up is enabled
    function newChatHistory() {
        if (includeChatHistory) {
            currentChatHistory = $(".chat-message-container").slice(-4).map(function () {
                return $(this).text().trim();
            }).get().join("\n\n");
            return currentChatHistory;
        }
        return "";  // Return empty string if follow-up is not toggled on
    }

    // funtion to update session storage with submission counts
    function updateSessionStorage() {
        sessionStorage.setItem('maxUserSubmits', maxUserSubmits);
        localStorage.setItem('remainingUserSubmits', remainingUserSubmits);
    }
    // funtion to check Member Status and incerease submissions
    function checkMemberStatus() {
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function (ctx, ui, cookie, metering) {
            getMemberStatus();
            if ((isMem === true) && !sessionStorage.getItem('memberFirstLoginHandled')) {
                maxUserSubmits = memberUserSubmits; // Increase max submissions for members
                remainingUserSubmits = maxUserSubmits - interactionCount; // Reset remaining submissions
                updateSessionStorage();
                sessionStorage.setItem('memberFirstLoginHandled', 'true'); // Ensure this logic runs only once per session
                pushTrackingEvent("maxQReturnFromReg");
            }
        });
    }
    // Function to extract and save page metadata
    function savePageMetadata() {
        TT(['context'], function (ctx) {
            var pageData = {
                pageURL: window.location.href,
                title: document.title,
                date: new Date().toISOString(),  // Current date-time for when the chat is initiated
                topicName: ctx.topicName || 'Not provided',  // Using ctx to access topicName from dataLayer
                contentAge: ctx.contentAge || 'Not provided',
                publicationDate: ctx.pubDate || 'Not provided',
                collection: ctx.collection || 'Not provided'
            };

            // Convert the object to a string for sessionStorage
            sessionStorage.setItem('pageMetadata', JSON.stringify(pageData));
            // console.log('Page metadata saved:', pageData);
        });
    }

    // Function to update contextStorage in localStorage with new system options and page summary
    function updateContextStorage(systemOption, chatData) {
        // Retrieve existing contextStorage from localStorage
        var contextStorage = JSON.parse(localStorage.getItem('contextStorage')) || { pageviews: [] };

        // Check if the current page is already recorded
        var currentPageView = contextStorage.pageviews.find(page => page.pageURL === window.location.href);

        // If the current page is not recorded yet, create a new page view
        if (!currentPageView) {
            currentPageView = {
                pageURL: window.location.href,
                pageSummary: currentPageSummary,
                chatQuestions: [],
                userInteractions: []
            };
            contextStorage.pageviews.push(currentPageView);
        }

        // Add the new system option to the chat questions if systemOption is not null
        /* if (systemOption) {
             currentPageView.chatQuestions.push(systemOption);
         

        // Add the interaction data if provided
        if (systemOption) {
            currentPageView.chatQuestions.push(systemOption);
        }
} */
        if (chatData) {
            currentPageView.userInteractions.push(chatData);
        }

        // Save the updated contextStorage back to localStorage
        localStorage.setItem('contextStorage', JSON.stringify(contextStorage));
    }

    //clear localStorage when browser window closes
    function initializeSession() {
        let sessionData = JSON.parse(localStorage.getItem(sessionManagementKey));
        if (!sessionData) {
            sessionData = {
                activeSession: true,
                timestamp: Date.now()
            };
            localStorage.setItem(sessionManagementKey, JSON.stringify(sessionData));
        } else {
            // Check if the session should be cleared based on the time and activity
            if (Date.now() - sessionData.timestamp > sessionTimer) {
                localStorage.removeItem(contextStorageKey);
                localStorage.removeItem('remainingUserSubmits');
                //  console.log('Context storage cleared due to timeout.');
            }
            if (!sessionData.activeSession) {
                localStorage.removeItem(contextStorageKey);
                //   console.log('Context storage cleared due to session end');
            }
            // Regardless of past state, reset the session data as active
            sessionData.activeSession = true;
            sessionData.timestamp = Date.now();
            localStorage.setItem(sessionManagementKey, JSON.stringify(sessionData));
        }
    }

    function handleUnload() {
        let sessionData = JSON.parse(localStorage.getItem(sessionManagementKey));
        if (sessionData) {

            sessionData.activeSession = false;
            sessionData.timestamp = Date.now();
            localStorage.setItem(sessionManagementKey, JSON.stringify(sessionData));
        }
    }

    // Initialize session management on page load
    window.addEventListener('load', initializeSession);

    // Update session status on unload (tab or browser close)
    window.addEventListener('beforeunload', handleUnload);

    // Check repeatedly until promptComplete is true
    function checkPromptComplete() {
        if (promptComplete) {
            setTimeout(() => {
                showSystemOptions(systemOptionsNotClicked, 'systemOption');
                displaySurveyLink();
            }, 2000); // 1,000 equals 1 seconds
        } else {
            setTimeout(checkPromptComplete, 50); // Check again after 50ms
        }
    }

    // Handle Generic Errors
    window.onerror = function (message, source, lineno, colno, error) {
        // REMOVE  in prod - ignores if the error is a script error at line 0
        if (message === "Script error." && lineno === 0) {
            console.log("Ignored a cross-origin script error.");
            return true;
        }

        if (error) {
            var errorId = error.code || "default";
            var errorMessageObject = getErrorMessage(errorId);
            if (errorMessageObject) {
                showSystemResponse(errorMessageObject.errorHtmlChat, 'error'); // display error in chat
            } else {
                // Fallback if no error message is defined for this error code
                showSystemResponse("An unexpected error occurred. Please try again.", 'error');
            }
        }
        return false;
    };

    // Function to display the feedback link after 20 seconds
    function displayFeedbackLink() {
        if (!displaySurvey) return; // Don't display if the survey is disabled

        {
            // Check if the feedback link already exists
            if ($('#feedbackLink').length === 0) {
                // If it doesn't exist, create and prepend the link
                var feedbackLink = $('<a id="feedbackLink" href="' + surveyLink + '" target="_blank" style="display:none;">Tell us what you think. Take this quick survey after your chat experience.</a>');

                $('#chat-form-container-inner').append(feedbackLink);
                setTimeout(function () {
                    $('#feedbackLink').fadeIn(); // Show the link after 20 seconds
                }, 20000); // 20000 milliseconds = 20 seconds
            }
        }
    }


    // Function to handle displaying survey link after system option interaction
    function displaySurveyLink() {
        if (!displaySurvey || surveyShown) return; // Exit if survey is disabled

        // Check if survey link message already exists
        if ($('#surveyLink').length === 0) {
            /*var surveyMessageHtml = `<div class="chat-message-container system">
                                     <div class="avatar"><div class="img"></div></div>
                                     <div class="chat-message" style="position: relative;">
                                         <div class="loader hide"></div>
                                         <span class="text">
                                             We value your feedback. <a id="surveyLink" href="${surveyLink}" target="_blank">Take our survey</a> or use the link below.
                                         </span>
                                     </div>
                                 </div>`;*/
            var surveyContentCardHtml = `<div class="chat-message-container system contentCard survey">
                                     <div class="avatar"><div class="img"></div></div>
                                     <div class="chat-message" style="position: relative;">
                                         <div class="loader hide"></div><a class="o-contentCard" href="${surveyLink}" target="_blank"><div class="o-contentCard-left"><img class="o-contentCardImage" src="https://cdn.ttgtmedia.com/images/abtesting/surveyImage1.png"></div><div class="o-contentCard-right"><div class="o-contentCardTitle">Share Your Thoughts!</div><div class="o-contentCardSummary">Take a quick survey and let us know what you think of our new chat feature.</div><div class="o-contentCardAction">TAKE THE SURVEY</div></div></a></div>
                                 </div>`;

            // Function to check if isProcessing is false before appending the survey message
            function checkIsProcessing() {
                if (!isProcessing) {
                    // Append the survey message to the chat display
                    $('#chatDisplay').append(surveyContentCardHtml);

                    // Scroll to the bottom to show the new message
                    // $('#chatDisplay').scrollTop($('#chatDisplay')[0].scrollHeight);

                    surveyShown = true; // Mark the survey as shown
                } else {
                    // Keep checking every 500ms until isProcessing is false
                    setTimeout(checkIsProcessing, 500);
                }
            }

            // Initial call to checkIsProcessing
            setTimeout(checkIsProcessing, 500); // Optional initial delay of 500ms
        }
    }


    //Add the feedback link
    $(document).ready(function () {
        displayFeedbackLink();
    });
    // Handle submit
    btn.onclick = function () {
        event.preventDefault();
        var userInput = chatInput.value.trim();
        if (userInput) {
            processUserInput(userInput);
            processUserCount(userInput);
            updateSessionStorage();
            pushTrackingEvent("userSubmit");
            trackChatInteraction("userSubmit");
            //showChatProcess('system',true);
            //processUserPrompt(userInput);
            /*chatInput.value = '';
            chatInput.focus();
            remainingCharacters = maxCharCount;
              $('#charCountDisplay').text(remainingCharacters);
            countCharacters('chatInput', 'charCountDisplay', maxCharCount, true);
            getUserSubmits('chat-status-attempt-counter');
            setButtonStatus();*/
        }
    };



    // Handle question clicks
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'A' && target.getAttribute('class') === 'chat-systemOption text') {
            event.preventDefault(); // Prevent the default link behavior (navigation)

            // Disable click functionality while processing user input
            if (isProcessing) {
                return; // Exit if the system is processing an input
            }

            if ($('.chat-message-container.systemOption')) {
                $('.chat-message-container.systemOption').hide();
                systemOptionClicked(event.target);
                systemOptionsNotClickedPush();
                $('.chat-message-container.systemOption').remove();
                //  setTimeout(() => {
                //   showSystemOptions(systemOptionsNotClicked, 'systemOption');              	
                checkPromptComplete(); //testing

                // console.log('Delayed code executed!');
                //   }, 5500); // Delay in milliseconds 
            }
        }
    });

});
/*function openChatModal() {
  // Toggle the modal display
  if ($('#chatModal').hasClass('hide')) {
    $('#chatModal').removeClass('hide');
  }
}*/
//Old function for requesting questions separately.
/*function processSystemResponses() {
  console.log('start processSystemResponses');
  // determine if page questions were already displayed since page load
  if (!systemOptionsDisplayed) {
    //showChatProcess('systemOption');
    processPagePrompt('You are an IT professional looking for questions this document answer.  Identify 3 questions this document answers and respond in json format.  The JSON should be without spaces and all on one line.  Only provide the questions, nothing more. Here is a template, [{"question": "question text"},{"question": "question text"}]','systemClick','systemOptions');
    }
}*/
// Function that anchors user to question once clicked higher up using id and "disabled class".
/*if (target.tagName === 'A' && target.parentNode.classList.value ==='chat-message disabled') {
  var systemOptionId = target.parentNode.getAttribute('id');
  systemOptionId = systemOptionId.replace("systemOptionId-","");
  console.log('systemOptionId: '+systemOptionId);
  scrollToTop('systemOptionId',systemOptionId);
}*/

// Function to check total text length in chatDisplay
/*function processChatHistory() {
  var chatHistory = chatDisplay.innerText;
  if (chatHistory.length >= 100) {
    //summarize chat with LLM
    //chatHistory = processPrompt(chatHistory);
    return " (100 characters)";
  } else {
    //consolidate chat text to reduce hidden characters

  }
  return "";
}*/
/*function addTimestamp() {
    $('<div class="timestamp system">' + chatDate() + '</div>').appendTo('#chatDisplay');
  }*/
/*function typeWriter(text, element, i, speed) {
 if (i < text.length) {
   $(element).append(text.charAt(i));
   setTimeout(function() {
     typeWriter(text, element, i + 1, speed);
   }, speed);
 }
}

function chatDate() {
 var currentdate = new Date();
 var datetime = (currentdate.getMonth() + 1) + "." +
   currentdate.getDate() + "." +
   currentdate.getFullYear() + " " +
   currentdate.getHours() + ":" +
   currentdate.getMinutes() + ":" +
   currentdate.getSeconds();
 return datetime;
}*/
}, "dependencies": []}, {"id": "f3588fd201ed42c482695d06c8552fc4", "type": "append", "selector": "head", "value": "<style>#chatModal .expandInputCheckbox {\n    display: none;\n   }\n   \n   #chatModal #aiDisclaimer {\n     display: flex;\n     font: normal normal normal 11px/14px Arial;\n       letter-spacing: 0px;\n       color: #666666;\n     margin-top: 10px;\n     margin-bottom:24px;\n     align-items: left; \n     justify-content: left; \n     text-align: left;\n   }\n   \n   #chatModal  .ai-disclaimer-icon {\n     background: url(https://cdn.ttgtmedia.com/images/abtesting/icon-ai.svg) no-repeat;\n    border: none;\n    display: inline-block;\n    width: 18px;\n    height: 22px;\n    background-size: cover;\n    margin-right: 10px;\n    position: relative;\n    top: -2px;\n   }\n   \n   \n   #chatModal #aiDisclaimer a {\n     color: #0066cc; \n     text-decoration: none;\n     font-weight: bold;\n   }\n   \n   #chatModal #aiDisclaimer a:hover {\n     text-decoration: underline;\n   }\n   \n   #chatModal #chatForm .chat-form-container {\n     background: #F2F2F2;\n     padding: 20px;\n     position:relative;\n     height:172px;\n   }\n   \n   #chatModal #chatForm .chat-form-textarea-wrapper {\n     border: 1px solid #808080;\n     background:white;\n     height:95px;\n     position:relative;\n   }\n#chatModal #chatForm .chat-form-textarea-wrapper.disabled {\n\tborder: none;\n     background:none;\n     height:auto;\n}\n   #chatModal #chatForm .chat-form-textarea-wrapper:focus-within {\n     border: 1px solid #008080;\n   }\n   \n   #chatModal .chat-input {\n     resize: none;\n     border:none;\n     font-size: 14px;\n     box-sizing: border-box;\n     font: normal normal normal 15px/22px Arial;\n       letter-spacing: 0px;\n       width: 100%;\n     margin:15px 15px 15px 0;\n     padding: 0 15px 0 15px;\n     color: #323232;\n     border-radius: 0;\n     min-height: 43px;\n     max-height:43px;\n   }\n   #chatModal .chat-input:focus-visible {\n     outline:none;\n   }\n   #chatModal .chat-input::placeholder {\n     color: #808080;\n   }\n   \n   #chatModal .scroll-up-button {\n    background-image: url('tbd.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    cursor: pointer;\n  }\n  \n  \n  \n  #chatModal .toggle-container {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n        margin-bottom: 1px;\n  }\n  \n  #chatModal  .switch {\n      position: relative;\n      display: inline-block;\n      width: 34px;\n      height: 20px;\n  \n  }\n  \n  #chatModal .switch input {\n      opacity: 0;\n      width: 0;\n      height: 0;\n  }\n  \n  #chatModal .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      transition: .4s;\n      border-radius: 34px;\n  }\n  \n  #chatModal .slider.round {\n      border-radius: 34px;\n  }\n  \n  #chatModal .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 14px;\n      width: 14px;\n      left: 4px;\n      bottom: 3px;\n      background-color: white;\n      transition: .4s;\n      border-radius: 50%;\n  }\n  \n  #chatModal  input:checked + .slider {\n      background-color: #4CAF50;\n  }\n  \n  #chatModal input:checked + .slider:before {\n      transform: translateX(14px);\n  }\n  \n  \n  #chatModal #chatForm #expandInputCheckbox{\n   margin-bottom: 1px; \n  }\n  \n  #chatModal .overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      z-index: 9999;\n      display: none;\n  }\n   \n   /* Plane Animation */\n   @keyframes flyAcross {\n       0%, 100% {\n           transform: translateX(-50%) rotate(75deg); \n           opacity: 1;\n       }\n       99.99% {\n           transform: translateX(1000%) rotate(75deg); \n           opacity: 0;\n       }\n   }\n   \n   .airplane-icon {\n       position: absolute;\n       top: 40%;\n       left: 20%; \n         color: #008080;\n         text-shadow: 10px 10px 10px black;\n         \n       transform: translateX(-50%) rotate(75deg); \n       font-size: 48px; \n       animation: flyAcross 3.67s linear infinite; \n   }\n   \n   #chatModal .new-thread-btn {\n    color: #999; \n    position: fixed; \n     top: 180px; \n     left: 40px; \n     transition: all 0.5s;\n     cursor: pointer;\n   }\n   \n   #chatModal .follow-up-link {\n   display: block; \n   margin-bottom: 10px;\n   font-size: 14px; \n   color: #008080 !important;\n   }\n   \n   #chatModal .follow-up-link:hover {\n   color: #323232 !important;\n    font-size:15px\n   }\n   \n   #chatModal .new-thread-btn:hover {\n   color: #008080; \n   }\n   \n   #chatModal #feedbackLink {\n       display: block;\n    font-size: 12px;\n    color: #008080;\n    text-decoration: underline;\n    text-align: center;\n    bottom: 15px;\n    position: absolute;\n    width: 100%;\n    left: -0px;\n}\n   \n   #chatModal #feedbackLink:hover {\n       color: #323232;\n   }\n   /*\n   .scrollupbutton {\n     background-color: red\n   }\n   \n   .scroll-up-button {\n       position: fixed;\n       bottom: 60px;\n       right: 20px;\n       width: 40px;\n       height: 40px;\n       background-color: #999;\n       border-radius: 50%;\n       cursor: pointer;\n       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n       display: flex;\n       align-items: center;\n       justify-content: center;\n       z-index: 100;\n       background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\\'white\\'><path d=\"M12 2L22 12H17V22H7V12H2L12 2Z\" /></svg>'); \n       background-position: center;\n       background-repeat: no-repeat;\n       background-size: 24px 24px; \n     transition: all 0.5s;\n   }\n   \n   .scroll-up-button:hover {\n       background-color: teal;\n     transition: all 0.5s;\n   }\n   \n   .arrow-up-icon {\n       font-size: 20px;\n     color: white;\n       transform: rotate(-90deg);\n   }\n   \n   */\n   \n   /* hide followup slider */\n   #chatModal #follow-up-toggle,\n   .slider,\n   .switch,\n   .follow-up-label {\n       display: none; \n         width: 0px\n   }\n   \n   #chatModal .references {font-weight:600;}\n   #chatModal .references span {font-weight:400;font-size: 12px;}\n   #chatModal .citation {font-size:12px;}\n   #chatModal .citation a {margin:0 2px;}\n   #chatModal #surveyLink {text-decoration:underline}\n   #chatModal #surveyLink:hover {color:#323232;}\n   #chatModal .powered-by-small-text {\n       font-size: 10px;\n       font-weight: 400;\n       color: #666666;\n       margin-top: 3px;\n       display: block;\n   }\n   \n   #chatModal .processing-message {\n       margin-left: 15px;\n       font-size: 14px;\n   }\n   \n   #chatModal .system .chat-message .copy-icon {\n       /*display:none;*/\n         position: absolute;\n       z-index: 10;\n         cursor: pointer;\n         right: -25px; \n         bottom: 5px;\n     height:19px;\n     width:16px;\n     transition: all 0.5s;\n   }\n   #chatModal .system .chat-message .copy-icon .icon-copy{\n     display:block;\n     background: url(https://cdn.ttgtmedia.com/images/abtesting/icon-copy-cccccc.svg) no-repeat;\n     height:18px;\n     width:16px;\n     transition: all 0.5s;\n   }\n   #chatModal .system .chat-message .copy-icon .icon-copy::after {\n       /*content:'Copy';*/\n     position:relative; \n     padding-left:21px;\n     top:-1px;\n     font-size:11px;\n     color:teal;\n     font-style:normal;\n   }\n   \n   #chatModal .system .chat-message .copy-icon.copied .icon-copy::after {\n       content: 'Copied!'; /* Content after click */\n   }\n   #chatModal .system .chat-message:hover .copy-icon:hover .icon-copy::after {\n       color:#323232;\n   }\n   #chatModal .system .chat-message:hover .copy-icon:hover .icon-copy {\n       background: url(https://cdn.ttgtmedia.com/images/abtesting/icon-copy.svg) no-repeat;\n   }\n   \n   #chatModal .chat-title-wrapper {\n       display: flex;\n       flex-direction: column;\n       align-items: flex-start;\n       width: 100%;\n       position: relative;\n   }\n   \n   #chatModal .chat-title {\n       font-size: 15px;\n   }\n   \n   #chatModal .ai-policy-link {\n       font-size: 12px;\n       text-decoration: underline;\n       color: #008080;\n       margin-top: 5px;\n   }\n   \n   #chatModal .ai-policy-link:hover {\n       color: #323232;\n   }\n   \n   #chatModal .powered-by-small-text {\n       position: absolute;\n       right: 0;\n       font-size: 10px;\n       color: #666666;\n   }\n   \n   #chatModal.chatModal.hide {\n      /*visibility: hidden;*/ transition: all .2s;\n     display: none;\n   }\n   #chatModal.chatModal { /*visibility: visible;*/ display: block;\n     position: fixed;\n     z-index: 9999999999;\n     left: 0;\n     top: 0;\n     width: 100%;\n     height: 100%;\n     overflow: hidden;\n     background-color: rgb(0, 0, 0, 0.4);\n     transition: all .2s;\n   }\n   #chatModal.chatModal .loader.hide {\n     display: none;\n     transition: all .2s;\n   }\n   #chatModal .modalClose {\n     height: 40px;\n     width: 40px;\n   position: relative;\n     right: 0;\n   }\n   \n   #chatModal.chatModal #modalClose a.modalClose {\n     display: block;\n     height: 30px;\n     width: 30px;\n     position: absolute;\n     right: 0px;\n     top: -40px;\n     background-image: url(https://cdn.ttgtmedia.com/images/abtesting/icon-close-cccccc.png);\n     background-size:cover;\n   }\n   #chatModal.chatModal #modalClose a.modalClose:hover {\n     cursor: pointer;\n     background-image: url(https://cdn.ttgtmedia.com/images/abtesting/icon-close-ffffff.png);\n     \n   }\n   #chatModal .modal-content {\n     position: relative;\n     background-color: #fff;\n     padding: 40px;\n     height: calc(100% - 200px);\n     min-height:500px;\n     min-width: 400px;\n     max-width: 950px;\n     margin: 0 auto;\n     top: 75px;\n     position: relative;\n     display:flex;\n     flex-direction:column;\n   }\n   #chatModal .chat-display { /*margin-left:60px; \n     height: calc(100% - 250px);*/\n     overflow-y: scroll;\n     overflow-x: hidden;\n     position: relative;\n     margin: 0 10px 0 10px;\n     padding: 35px 50px 20px 50px;\n     flex:1 1 0%;\n     \n   }\n   #chatModal .chat-display-header {\n     /*margin-bottom: 35px;*/\n     display: flex; /*background: url(https://www.techtarget.com/rms/ux/responsive/img/border_diagonal.png) repeat-x 0 bottom; padding-bottom: 28px;*/ padding-bottom: 15px;\n     border-bottom: 1px solid #666666;\n   }\n   #chatModal .chat-display-header::after {\n       background:transparent;\n     top:95px;\n     content: '';\n     z-index:1;\n     position:absolute;\t\n     height:10px;\n     background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1));\n     width:calc(100% - 80px);\n   }\n   #chat > div.chat-icon {\n     height: 40px;\n     width: 40px;\n     background: #008080;\n     margin-right: 20px;\n     background: url(https://cdn.ttgtmedia.com/ux/apps/optimizely/experiments/2024-ai-chat/TTGT_AI_Wht_Icon_24x24.svg) no-repeat 6px;\n     background-size: 25px 30px;\n     background-color: #008080;\n     position: relative;\n   }\n   #o-pageSummary-container .chat-icon, #chatModal .chat-display-header .chat-icon {\n     height: 40px;\n     width: 40px;\n     background: #008080;\n     margin-right: 20px;\n     background: url(https://cdn.ttgtmedia.com/ux/apps/optimizely/experiments/2024-ai-chat/TTGT_AI_Wht_Icon_24x24.svg) no-repeat 6px;\n     background-size: 25px 30px;\n     background-color: #008080;\n     position: relative;\n   } /* #chatModal .chat-display-header .chat-icon {display:none;} */ \n   \n   #o-pageSummary-container {\n     margin-left: 40px;\n   }\n   #o-pageSummary-container .chat-icon {\n     position: absolute;\n     left: -40px;\n     top: 0;\n   }\n   #chatModal .chat-display-header .chat-title {\n     display: inline-block;\n     font-size: 15px;\n     margin: auto 0;\n   }\n   #o-pageSummary-container .beta, #chatModal .beta {\n     font-size: 8px;\n     position: relative;\n     top: 3px;\n   }\n   #chatModal .chat-title .beta {\n     font-size: 9px;\n     font-weight: 400;\n     top: -5px;\n   }\n   #o-pageSummary-container .beta {\n     top: -7px\n   }\n   #chatModal .chatForm {\n     color: #323232;\n     position: relative;\n     width: calc(100% - 100px);\n     margin: 0 50px;\n     /*bottom: 0px;\n     left: 0;*/\n   }\n   \n   #chatModal .user .chat-message, #chatModal .systemOption .chat-message {\n     text-align: left;\n     border: 1px solid #CCCCCC;\n     position: relative;\n     /*margin-left:20%;*/\n   }\n   #chatModal .system .chat-message {\n     text-align: left;\n     background: #F1F1F1;\n     position: relative;\n     max-width: 470px;\n     margin-left: 20px;\n   }\n   #chatModal .system.chat-message-container:not(.noavatar) .chat-message::before {\n     background-color: #f2f2f2;\n     content: \"\\00a0\";\n     display: block;\n     height: 11px;\n     position: absolute;\n     top: 11px;\n     transform: rotate(29deg) skew(-35deg);\n     -moz-transform: rotate(29deg) skew(-35deg);\n     -ms-transform: rotate(29deg) skew(-35deg);\n     -o-transform: rotate(29deg) skew(-35deg);\n     -webkit-transform: rotate(29deg) skew(-35deg);\n     width: 13px;\n     left: -8px;\n     z-index: 2;\n   }\n   #chatModal .system.error.chat-message-container:not(.noavatar) .chat-message::before {\n     background-color: #f1f1f1;\n     border: 1px solid #B10000;\n     content: \"\\00a0\";\n     display: block;\n     height: 11px;\n     position: absolute;\n     top: 11px;\n     transform: rotate(29deg) skew(-35deg);\n     -moz-transform: rotate(29deg) skew(-35deg);\n     -ms-transform: rotate(29deg) skew(-35deg);\n     -o-transform: rotate(29deg) skew(-35deg);\n     -webkit-transform: rotate(29deg) skew(-35deg);\n     width: 15px;\n     left: -8px;\n     z-index: 2;\n     border-right-width: 0px;\n     border-top-width: 0px;\n   }\n   #chatModal .systemOption .chat-message {\n     max-width: 500px;\n     margin-left: auto;\n     position: relative;\n     margin-bottom: 5px;\n     background: none;\n     border: 1px solid #008080;\n     padding: 0;\n   }\n   #chatModal .systemOption .chat-message .chat-systemOption {\n     padding: 15px 20px;\n   }\n   .chat-message-container.error .chat-message {\n     border: 1px solid #B10000;\n   }\n   .chat-message-container.systemOption .chat-message {\n     margin-top: 5px;\n   }\n   #chatModal .chat-message-container.systemOption .text {\n     margin-right: 40px;\n   }\n   #chatModal .chat-message-container.systemOption {\n     position: relative;\n     /*top: -10px;*/\n     display: block;\n     margin-right: 53px;\n     margin-top: 15px;\n   }\n   #chatModal .chat-message-container.systemOption .btn-systemOption {\n     height: 20px;\n     width: 21px;\n     background-color: #008080;\n     top: 0;\n     right: 20px;\n     bottom: 0;\n     margin: auto 0;\n     position: absolute;\n     -webkit-mask-image: url(https://cdn.ttgtmedia.com/rms/ux/icon_send.svg);\n     mask-image: url(https://cdn.ttgtmedia.com/rms/ux/icon_send.svg); /*transition: all .2s;*/\n   }\n\n   \n   #chatModal .gradientWhite {\n       position: absolute;\n       background-color: transparent;\n       background-image: url(https://cdn.ttgtmedia.com/images/abtesting/gradient_whiteToTransparent_1x30.png);\n       height: 30px;\n       z-index: 1;\n       width: 100%;\n       /* left: 10px; */\n       /* width: calc(100% - 20px); */\n       top: -30px;\n     /*background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));\n     background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));\n       box-shadow: 10px 10px 10px rgba(0,0,0, 0.5);*/\n   }\n   #chatModal .gradientSpacer {height: 20px;}\n   \n   #chatDisplay ol {\n       list-style-type: number;\n         /*padding-left: 0;*/\n   }\n   \n   #chatDisplay .citation-list ol{\n   list-style-type: number;\n     margin-left: 0px\n   }\n   \n   #chatDisplay ul {\n       list-style-type: disc;\n         padding-left: 0\n   }\n   \n   #chatDisplay li {\n     line-height:24px\n   }\n   \n   #chatModal #chatForm #chat-form-container:focus-within {\n     background: #E5F2F2;\n   }\n   #chatModal #chatForm .chat-form-container-inner {\n     max-width: 525px;\n     margin: 0 auto;\n   }\n   #chatModal #chatForm .errorMessage {\n     text-align: center;\n     color: #323232;\n     margin: 10px 0;\n   }\n   #chatModal #chatForm .errorMessage a {\n     color: #008080;\n     text-decoration: underline\n   }\n   #chatModal #chatForm .errorMessage a:hover {\n     color: #008080;\n     text-decoration: none;\n   }\n   #chatModal .chat-message-container.systemOption .chat-message.disabled .btn-systemOption {\n     background-color: #ffffff;\n   }\n   #chatModal .chat-message-container.systemOption .chat-message:hover {\n     color: #323232;\n     border-color: #323232;\n     cursor: pointer;\n   }\n   #chatModal .chat-message-container.systemOption .chat-message:hover > .btn-systemOption {\n     background-color: #323232;\n   }\n   #chatModal .chat-message-container.systemOption .chat-message.disabled {\n     border-color: #e3e3e3;\n     color: #e3e3e3;\n     background: #fff; /*transition: all .2s;*/\n   }\n   #chatModal .chat-message-container.systemOption .chat-message.disabled:hover {\n     border-color: #999;\n     color: #999;\n     background: #fff; /*transition: all .2s;*/\n   } /*** char arrow **/ /*#chatModal .system .chat-message:before { position: absolute; width: 0; height: 0; content: ''; border-style: solid; left: -7px; top:20px; background: #e1f0f0; transform: rotate(45deg); } #chatModal .system .chat-message:before { border-color: #e1f0f0; border-width: 14px 14px 0 0;  } */ \n\n\t#chatModal .user .chat-message {\n     margin-left: 20%;\n     margin-right: 55px;\n   }\n   #chatModal .chat-message {\n     width: auto;\n     max-width: 100%;\n     margin-left: 10px;\n     border-radius: 3px;\n     display: flex; /*transition: all .2s;*/ padding: 15px 20px;\n     color: #323232;\n     flex-wrap: wrap;\n   }\n   #chatModal .chat-message-container {\n     display: flex;\n     margin-bottom: 5px;\n   }\n   #chatModal .chat-message-container.systemOption {\n     display: block;\n     margin-bottom: 5px;\n   }\n   #chatModal .chat-message-container.user {\n     justify-content: flex-start;\n     direction: rtl;\n     margin-left: 53px;\n     margin-top:15px;\n     margin-bottom:15px;\n   } /*#chatModal .user-msg { text-align: left;  background: #efefef; border-radius: 7px; padding: 10px 20px;direction: rtl; align-items: flex-end; justify-content:flex-end; max-width:60%;}*/ \n   #chatModal .user-msg::after {\n     margin-left: 5px;\n     \n     color: #999;\n   }\n   #chatModal .user.chat-message-container:not(.noavatar) .chat-message::before {\n     background-color: white;\n     content: \"\\00a0\";\n     display: block;\n     height: 10px;\n     position: absolute;\n     top: 11px;\n     transform: rotate(29deg) skew(-35deg);\n     -moz-transform: rotate(29deg) skew(-35deg);\n     -ms-transform: rotate(29deg) skew(-35deg);\n     -o-transform: rotate(29deg) skew(-35deg);\n     -webkit-transform: rotate(29deg) skew(-35deg);\n     width: 12px;\n     right: -7px;\n     border-top: 1px solid #ccc;\n     border-right: 1px solid #ccc;\n   }\n   #chatModal .system.error.chat-message-container .chat-message::before {\n     border: 1px solid #B10000;\n   }\n   \n   #chatModal .chat-message-subhead {\n     font-weight: bold;\n     margin-bottom: 10px;\n   }\n   #chatModal a.chatLink, #chatModal a.systemOption {\n     color: #008080;\n     display: block;\n     padding: 7px 10px;\n   }\n   #chatModal .text ul .chatLinkOuter {\n     margin: 0 0 5px 0;\n     background: rgba(255, 255, 255, 1);\n     border-radius: 3px;\n   }\n   #chatModal .chat-message .text {\n     display: block;\n     line-height: 1.45em;\n     width: inherit;\n     max-width: inherit;\n     font-size: 15px/22px;\n   }\n   #chatModal .chat-message .text a {\n     transition: none;\n     color: teal;\n   }\n   #chatModal .chat-message .text > b {\n     margin-bottom: 5px;\n     display: block;\n   } /*#chatModal .chat-message .text ul li b,#chatModal .chat-message .text ul li b{ font-weight:normal;}*/ \n   #chatModal .chat-message .text ul, #chatModal .chat-message .text ol {\n     list-style-position: outside;\n     margin-left: 20px;\n   }\n   #chatModal .chat-message .text ul ul, \n   #chatModal .chat-message .text ol ol{\n       margin-bottom:0;\n   }\n   #chatModal .chat-message .text ul li:last-of-type,\n   #chatModal .chat-message .text ul li:last-of-type{\n     /*margin-bottom: 1.3em;*/\n     padding-bottom: 5px;\n   }\n   #chatModal .chatLinkOuter:hover {\n     background: rgba(255, 255, 255, 1);\n   }\n   #chatModal .chatLinkOuter:hover .chatLink {\n     background: rgba(255, 255, 255, 1);\n     color: #323232;\n     transition: all 0.2s\n   }\n   #chatModal .chat-message p {\n     color: #323232;\n     font-size: 15px;\n     line-height: 1.46em;\n     margin: 0 0 10px 0;\n   }\n   #chatModal .chat-message p:last-child {\n     margin: 0;\n   } /**** timestamp ****/ #chatModal .timestamp {\n     font-size: 10px;\n     color: #999;\n     margin: 3px 20px 15px 0;\n   }\n   #chatModal .timestamp.user {\n     text-align: right;\n     margin-right: 45px;\n   }\n   #chatModal .timestamp.system {\n     text-align: left;\n     margin-left: 45px;\n   } /**** avatars ****/ #chatModal .avatar {\n     display: inline-block;\n     content: \"\";\n     width: 37px;\n     height: 37px;\n     border-radius: 37px;\n   }\n   #chatModal .chat-message-container.noavatar {\n     margin-top: -10px;\n   }\n   #chatModal .noavatar .avatar {\n     visibility: hidden;\n   }\n   #chatModal .system .avatar {\n     border-color: #008080;\n   }\n   #chatModal .user .avatar {\n     margin-left: 10px;\n     right: 50px;\n     position: absolute;\n     background: #fff;\n     border: 1px solid #323232;\n   }\n   #chatModal .user .avatar .icon.header_logged_in_icon {\n     color: #999;\n     font-size: 20px;\n     position: relative;\n     top: 8px;\n     right: 9px;\n   }\n   #chatModal .system .avatar {\n     position: relative;\n     background: url(/favicon.ico) no-repeat;\n     border: 1px solid #008080;\n   }\n   #chatModal .system .avatar .img {\n     position: relative;\n     top: 0px;\n     left: 0px;\n     height: 33px;\n     width: 33px;\n     margin: 2px;\n     border: none !important;\n     background: url(/favicon.ico) no-repeat;\n     background-size: contain;\n   } /**** loader ****/ #chatModal .loader {\n     margin: auto;\n     display: block;\n   }\n   #chatModal .loader, #chatModal .loader:before, #chatModal .loader:after {\n     width: 5px; /* update this to control the size */ aspect-ratio: .5;\n     display: grid;\n     background: radial-gradient(#666 68%, #0000 72%) center/100% 50% no-repeat;\n     animation: load 1.2s infinite linear calc(var(--_s, 0)*.4s);\n     transform: translate(calc(var(--_s, 0)*150%));\n   }\n   #chatModal .loader:before, #chatModal .loader:after {\n     content: \"\";\n     grid-area: 1/1;\n   }\n   #chatModal .loader:before {\n     --_s: -1\n   }\n   #chatModal .loader:after {\n     --_s: 1\n   }\n   #chatModal .hide {\n     visibility: hidden\n   }\n   @keyframes load {\n     20% {\n       background-position: top\n     }\n     40% {\n       background-position: bottom\n     }\n     60% {\n       background-position: center\n     }\n   }\n   #chatModal #chat-status-container {\n    width: 100%;\n    font-size: 11px;\n    margin-bottom: 15px;\n    position: relative;\n    color:#808080;\n    display:contents;\n    line-height:18px;\n  }\n  #chatModal .chat-status-attempts {\n    right: 45px;\n    bottom:9px;\n    position:\tabsolute;\n    padding-right:15px;\n    border-right:1px solid #e3e3e3;\n    line-height:18px;\n    align-content: end;\n  }\n  #chatModal #chat-status-charCount {\n    margin-left: 15px;\n    bottom:9px;\n    position:\tabsolute;\n  }\n  #chatModal #chat-status-container .error, #chatModal #chatInput.error {\n    color: #D62700;\n  }\n  #chatModal #submitBtn {\n    height: 18px;\n    width: 19px;\n    background-color: #008080;\n    bottom:10px;\n    right: 15px;\n    position: absolute; \n    -webkit-mask-image: url(https://cdn.ttgtmedia.com/rms/ux/icon_send.svg);\n    mask-image: url(https://cdn.ttgtmedia.com/rms/ux/icon_send.svg); \n    /*border-radius: 3px; color:#fff; font-weight:bold; padding:10px 40px; text-align:center; height: 40px;  transition: background .2s;*/\n    /*background: url(https://cdn.ttgtmedia.com/rms/ux/icon_send.svg) 20px 23px no-repeat;*/ \n  }\n  #chatModal #chatInput:disabled {\n    background-color: rgba(204, 204, 204, 1);\n  }\n  #chatModal #submitBtn:disabled {\n    background-color: #ccc;\n  }\n  #chatModal #chat-content-library {\n     margin-top: 30px;\n     position: relative;\n     flex-direction: column;\n     color: #808080;\n   }\n   #chatModal #chat-content-library .content-library-inner {\n     max-width: 525px;\n     position: relative;\n     display: flex;\n     flex-direction: row;\n     justify-content: center;\n     align-items: center;\n     vertical-align: top;\n     margin: 0 auto;\n     align-items: flex-start;\n   }\n   #chatModal #chat-content-library .title {\n     text-transform: uppercase;\n     font-size: 11px;\n     color: #666;\n     width: 135px;\n     padding-left: 15px;\n     white-space: nowrap;\n   }\n   #chatModal #chat-content-library ul {\n     display: flex;\n     flex-direction: column;\n     position: relative;\n     top: -3px;\n     padding-left: 10px;\n     padding-right: 15px;\n     width: calc(100% - 125px);\n   }\n   #chatModal #chat-content-library ul li {\n     margin-bottom: 5px;\n     overflow: hidden;\n     white-space: nowrap;\n     text-overflow: ellipsis;\n   }\n   #chatModal #chat-content-library a {\n     color: #808080 !important;\n     text-decoration: underline;\n     font-size: 14px;\n   }\n   #chatModal #chat-content-library a:hover {\n     color: #008080 !important;\n     text-decoration: none;\n   } /** Page summary **/ #o-pageSummary-container {\n     background: #f2f2f2;\n     padding: 17px 20px;\n     position: relative;\n   }\n   #o-pageSummary-container a {\n     display: block;\n   }\n   #o-pageSummary-container a:hover {\n     cursor: pointer !important;\n   }\n   .o-pageSummary-title {\n     font-weight: 600;\n     margin-bottom: 15px;\n     position: relative;\n     z-index: 5\n   }\n   .o-pageSummary-summary {\n     line-height: 1.5em;\n     position: relative;\n     color: #666;\n     margin-bottom: 10px;\n   }\n   #o-pageSummary-button {\n     padding: 0 15px;\n     width: 180px;\n     height: auto;\n     font-weight: bold;\n     position: relative;\n     z-index: 3;\n     font-size: 15px;\n     line-height: 40px;\n     height: 40px;\n     text-wrap: nowrap;\n   }\n   #chatModal .chat-message-container.system.summary {\n     margin-top: -10px;\n     position: relative;\n   }\n   #chatModal .o-contentCard {\n     display: flex;\n     border: 1px solid #008080;\n     border-radius: 3px;\n     background: #fff;\n     height: 90px;\n     max-width: inherit;\n     width: inherit;\n     overflow: hidden;\n     /*margin-bottom: 8px;*/\n   }\n   #chatModal .o-contentCard .o-contentCard-right {\n     margin: 10px;\n     width: calc(100% - 110px);\n   }\n   #chatModal .o-contentCard .o-contentCardTitle {\n     color: #323232;\n     font-size: 15px;\n     font-weight: 600;\n     margin-bottom: 5px;\n     overflow: hidden;\n     white-space: nowrap;\n     text-overflow: ellipsis;\n   }\n   #chatModal .o-contentCard .o-contentCardTitle:hover, #chatModal .o-contentCard .o-contentCardAction:hover {\n     color: #323232;\n   }\n   #chatModal .o-contentCard .o-contentCardSummary {\n     color: #323232;\n     font-size: 12px;\n     width: 100%; /* Example width */ /*height: 40px;*/ /* Desired height */ /*overflow: hidden; display: flex; flex-direction: column; text-overflow: ellipsis;*/ overflow: hidden;\n     text-overflow: ellipsis;\n     line-height: 1.4em; /* Set line height */ max-height: 3em; /* Set the maximum height to accommodate 3 lines of text */ margin-bottom: 5px;\n   }\n   #chatModal .o-contentCard:hover .o-contentCardTitle {\n     color: #008080;\n   }\n   #chatModal .o-contentCard .o-contentCardContentType {\n     text-transform: uppercase;\n     color: #666;\n     font-size: 10px;\n     font-weight: bold;\n   }\n   #chatModal .o-contentCard .o-contentCardAction {\n     text-transform: uppercase;\n     color: #008080;\n     font-size: 12px;\n     margin-bottom: 5px;\n   }\n   #chatModal .o-contentCard:hover .o-contentCardAction {\n     color: #323232;\n   }\n   \n   .eoc_v2 .content-center #chatModal .o-contentCard img.o-contentCardImage,\n   .content-center #chatModal .o-contentCard img.o-contentCardImage {\n     height: 90px;\n     width: 90px;\n     max-width:90px;\n     max-height:90px;\n     object-fit: cover;\n     object-position: left top;\n   }\n   .o-overflowHidden {\n     overflow: hidden;\n   }\n   #chatModal .poweredBy {\n     font-weight: 400;\n     color: #666666;\n     font-size: 10px;\n     border-radius: 2px;\n     text-align: center;\n     height: 24px;\n     line-height: 24px;\n     position: absolute;\n     width: 100px;\n     right: 25px;\n   }\n   #chatModal .poweredBy:hover {\n     color: #008080;\n   } \n   /*.o-pageSummary-gradient { position:absolute; bottom:-20px; z-index:2; right:0;  left:0; height:100px; background: url(data:image/svg+xml;base64,alotofcodehere); background: -moz-linear-gradient(top, rgba(242,242,242,0) 0%, rgba(242,242,242,1) 70%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,0)), color-stop(70%,rgba(242,242,242,1))); background: -webkit-linear-gradient(top, rgba(242,242,242,0) 0%,rgba(242,242,242,1) 70%); background: -o-linear-gradient(top, rgba(242,242,242,0) 0%,rgba(242,242,242,1) 70%); background: -ms-linear-gradient(top, rgba(242,242,242,0) 0%,rgba(242,242,242,1) 70%); background: linear-gradient(to bottom, rgba(242,242,242,0) 0%,rgba(242,242,242,1) 90%);}*/ /**** typewriter ****/ /*#chatModal span { //opacity: 0; animation-name: typewriter; animation-fill-mode: forwards; animation-duration: 0s; animation-delay: calc(var(--animation-order) * var(75ms));}*/ \n      \n      #chatModal @keyframes fadeIn {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n      #chatModal @keyframes fadeOut {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n       }\n        #chatModal @keyframes typewriter {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "97967382c0124b2c92b3672cf2d6be6b", "selector": "#o-pageSummary-button"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "6b45213d69d64a568871b8502ce19166", "selector": "#chatModal .systemOption a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "932e17f02ba64822b74b6af4b4ffd27b", "selector": "#chatModal .related-content-list a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "2cf2a763e33c48b285e09bfe66cd1a40", "selector": "#chatModal #submitBtn"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "77e936a3e34c4864aecc35bf5b3ade42", "selector": "#chatModal .o-contentCard"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "90fe951117ac498588f7e81bdd28ad1a", "selector": "#chatModal .error a.nonMemberRegister"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3e1e502600994f7e95078444a2c093b0", "selector": "#chatModal .error a.nonMemberLogin"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "c4382fdf82fd47ea83f5d404d4d21fce", "selector": "#content-body a"}]}]}], "weightDistributions": [{"entityId": "6473276210282496", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5823979630362624"}}], "policy": "single_experiment", "viewIds": ["5910326256861184"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "6366341456723968", "name": null, "commitId": "5173419793186816", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204"], "audienceName": null, "changes": null, "id": "5912085448622080", "integrationSettings": null, "variations": [{"id": "6714000335962112", "name": null, "actions": [{"viewId": "5656666713096192", "changes": [{"id": "652CA7E6-C3C3-4783-B0D8-24DF60317E88", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 1 Control Ready - 10/17/24 1");
    var $               = window.$,
        DDHasBeenSeen   = false;

    function DDIsInViewport() {
        // console.log('Content Recommendations Wave 1: DDIsInViewport firing');
        var elem = $('#DigDeeperSplash').first();
        // console.log('Content Recommendations Wave 1: DDIsInViewport elem ' + elem);
        var elemTop = elem.offset().top;
        // console.log('Content Recommendations Wave 1: DDIsInViewport elemTop ' + elemTop);
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 1: DDIsInViewport');
            DDHasBeenSeen = true;
            pushTrackingEvent("dig_deeper_in_view");
            return;
        } else {
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}, {"id": "5768884192542720", "name": null, "actions": [{"viewId": "5656666713096192", "changes": [{"id": "14B4C489-1FCF-4A63-AC1D-77DCC3F7B51B", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 1 Variation 1 Ready - 10/23/24 4");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        contentBodyTopLevelPs   = $('#content-body > p').length,
        targetLocationP         = Math.floor(contentBodyTopLevelPs / 2);
    
    function moveDigDeeper() {
        // $('#DigDeeperSplash').appendTo($('#content-body > p').eq(targetLocationP));
        // $('#DigDeeperSplash').css('background','#fff');
        $('#DigDeeperSplash').insertAfter('#content-body');
    }

    moveDigDeeper();

    function DDIsInViewport() {
        // console.log('Content Recommendations Wave 1: DDIsInViewport firing');
        var elem = $('#DigDeeperSplash').first();
        // console.log("Content Recommendations total paragraphes in content body is: " + contentBodyTopLevelPs);
        // console.log("Content Recommendations DDLocationParagraph target location is: " + targetLocationP);
        // console.log('Content Recommendations Wave 1: DDIsInViewport elem ' + elem);
        var elemTop = elem.offset().top;
        // console.log('Content Recommendations Wave 1: DDIsInViewport elemTop ' + elemTop);
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 1: DDIsInViewport');
            DDHasBeenSeen = true;
            pushTrackingEvent("dig_deeper_in_view");
            return;
        } else {
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 1: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6714000335962112", "endOfRange": 5000}, {"entityId": "5768884192542720", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6366341456723968"}}], "policy": "single_experiment", "viewIds": ["5656666713096192"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "17823671204", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]], ["or", ["or", {"match": null, "name": null, "type": "location", "value": "US"}]], ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie8"}, {"match": null, "name": null, "type": "browser_version", "value": "ie9"}]]]]}, {"id": "17892952386", "name": null, "conditions": ["and", ["or", ["or", {"match": "exists", "name": "optly_techtarget_test", "type": "cookies", "value": ""}]]]}, {"id": "20324229137", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "browser_version", "value": "gc"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "24546530108", "category": "other", "apiName": "17796810052_url_targeting_for_ai_insider_marketing_offer_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": function aiInsiderMarketingEvaluations(activate, options) {
  console.log("Start AI Insider Marketing - Page Eval - 6/15/23 01");

  var url="https://www.techtarget.com/searchenterpriseai/pro/Elevate-your-AI-expertise-with-TechTargets-AI-Insider-Newsletter";
  var href=window.location.href;
 
	if ((href.indexOf(url) > -1)){
    console.log("AI Insider Marketing - ACTIVATE, matches targeted URL");
    return true;
  } else {
    return false;
    console.log("AI Insider Marketing - DO NOT ACTIVATE, does not match targeted URL");
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27459220497", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_abm_pillar_1", "name": null, "staticConditions": ["and", ["or", {"type": "custom_code", "value": function abmPillarSplash(utils) {
  console.log("ABM Pillar Splash - Start Page Eval - 11/1/2023");
  var appCodeExistsOnPage;
  var cloudFlareChecks;
  var canActivate;
  var pillarData;
  var collectionId,
    adId,
    topicId,
    meteringCheck1, // want = "false"
    meteringCheck2, // want = true
    loggedIn, // want null
    formAppCode,
    href = window.location.href,
    hostname = window.location.hostname,
    hostnameSplit = window.location.hostname.split('.')[0],
    mediaServerPath = 'https://cdn.ttgtmedia.com/ux/apps/optimizely/experiments/json/ttPillarId_test.json',
    pathname = window.location.pathname.split('/')[1],
    isAbmPillar = false,
    isRegPage = null,
    isMetered = null,
    consolSiteMatch = false,
    regularSiteMatch = false,
    siteName = null,
    siteNames = ['WhatIs', 'IoTAgenda', 'Sustainability'],
    siteNameMatch = false,
    //contentTypeMatch  = false,
    targetedSiteMatch = false,
    isTestPage = false,
    promiseResolved = false;
  //contentTypes      = ['/feature/','/tutorial/','/tip/','/answer/','/definition/','/tutorial/','/opinion/'];

  TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
    collectionId = ctx.collectionId;
    siteName = ctx.siteName;
    adId = ctx.adId;
    topicId = ctx.topicId;
    //mediaServerPath = mediaServerPath + topicId + '.json';
  });
  console.log("ABM Pillar Splash - collectionID: " + collectionId);
  

  checkForTTVar(); //check TT to determine if user is loggedIn
  checkifAbmPillar(); //only activate if CollectionId = ABM PIllar
  checkForMetering(); //only non-metered pages
  checkForSiteMatch(); //need all search site, IoT

  
  if (!isRegPage && isAbmPillar && siteNameMatch && !isMetered) {
    console.log('ABM Pillar Splash - ACTIVATE');
    return true;
  } else {
    console.log('ABM Pillar Splash - DO NOT ACTIVATE');
    console.log('ABM Pillar Splash - values: ' + isRegPage + " " + isMetered  + " " + isAbmPillar + " " + consolSiteMatch + " " + regularSiteMatch);
    return false;
  }

  function checkForTTVar() {
    if (typeof TT === "undefined") {
      console.log('ABM Pillar Splash - no tt avail, probably on reg page');
      isRegPage = true;
      return false;
    } else {
      console.log('ABM Pillar Splash - tt IS avail, you are not on reg page');
      isRegPage = false;
    }
  }

  function checkifAbmPillar() {
    if (collectionId === '366546058') {
      isAbmPillar = true;
      console.log('ABM Pillar Splash - isAbmPillar: true');
    } else {
      console.log('ABM Pillar Splash - isAbmPillar: false');
      return false;
      //console.log("RETURN FALSE");
    }
  }

  function checkForMetering() {
    //for (k=0;k<sites.length;k++) {

    console.log('ABM Pillar Splash - Checking for metering');
    //if (window.location.pathname.includes(contentTypes[k])) {
    //console.log('ABM Pillar Splash - Checking contentTypes');
    //console.log('ABM Pillar Splash - href ' + href);
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      console.log(meteringCheck1 + " " + meteringCheck2);
      console.log("ABM Pillar Splash - has metered reg - DON'T ACTIVATE");
      return false;
    } else if (formAppCode === 150 || formAppCode === 151) {
      console.log("ABM Pillar Splash - has leading reg - DON'T ACTIVATE");
      console.log(formAppCode);
      return false;
    } else {
      console.log('ABM Pillar Splash - isMetered: false');
      isMetered = false;
    }
  }

  function checkForSiteMatch() {
    if (hostname === 'www.techtarget.com' && ((siteName === ("WhatIs" || "IoTAgenda" || "Sustainability")) || (siteName.indexOf('search') > -1))) {
      siteNameMatch = true;
      console.log('ABM Pillar Splash - site match ' + siteNameMatch);
    } else {
      siteNameMatch = false;
      console.log('ABM Pillar Splash - no site match ' + siteNameMatch);
    }
  }
}
}], ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["not", ["or", {"match": "regex", "type": "url", "value": "search.*-eng\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "search.*-qa\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30356300218", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_table_of_contents__definit", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": function TOC_EOC(utils) {
  console.log("TOC_TaF - Start Page Eval - 09/09/2024");
  var appCodeExistsOnPage;
  var cloudFlareChecks;
  var canActivate;
  var pillarData;
  var collection,
      collectionId,
    adId,
    topicId,
    meteringCheck1, // want = "false"
    meteringCheck2, // want = true
    loggedIn, // want null
    formAppCode = $('smartforms-techtarget').attr('app-code'),
    href = window.location.href,
    hostname = window.location.hostname,
    hostnameSplit = window.location.hostname.split('.')[0],
    pathname = window.location.pathname.split('/')[1],
    isAbmPillar = false,
    isRegPage = null,
    isMetered = null,
    isMinWidth = false,
    isPillarCollection = null,
    isPillarMainOrCollection = null,
    consolSiteMatch = false,
    regularSiteMatch = false,
    siteName = null,
    siteNames = ['WhatIs', 'IoTAgenda', 'Sustainability'],
    siteNameMatch = false,
    contentTypeMatch  = false,
    targetedSiteMatch = false,
    isTestPage = false,
    promiseResolved = false,
    hasMinH2s = false,
  contentTypes      = ['/feature/', '/tip/',];
  //['/feature/','/tutorial/','/tip/','/answer/','/definition/','/tutorial/','/opinion/'];

  TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
    collection = ctx.collection;
    collectionId = ctx.collectionId;
    siteName = ctx.siteName;
    adId = ctx.adId;
    topicId = ctx.topicId;
  });
  console.log("TOC_TaF - collectionID: " + collectionId);
  

  checkForTTVar(); //check TT to determine if user is loggedIn
  checkifAbmPillar(); //only activate if CollectionId = ABM PIllar
  checkForMetering(); //only non-metered pages
  checkForSiteMatch(); //need all search site, IoT
  checkTestPage();
  checkForContentTypeMatch();
  checkForPillarMainCollection();
  checkH2Count();
  hasMinWidth();

  //&& isTestPage
  if (!isRegPage && !isAbmPillar && siteNameMatch && !isMetered  && contentTypeMatch && !isPillarMainOrCollection && hasMinH2s && isMinWidth ) {
    console.log('TOC_TaF - ACTIVATE');
    return true;
  } else {
    console.log('TOC_TaF - DO NOT ACTIVATE');
    console.log('TOC_TaF - values: ' + isRegPage + " " + isMetered  + " " + isAbmPillar + " " + consolSiteMatch + " " + isPillarCollection + " " + regularSiteMatch + " " + isTestPage);
    return false;
  }

  function checkForTTVar() {
    if (typeof TT === "undefined") {
      console.log('TOC_TaF - no tt avail, probably on reg page');
      isRegPage = true;
      return false;
    } else {
      console.log('TOC_TaF - tt IS avail, you are not on reg page');
      isRegPage = false;
    }
  }

  function checkifAbmPillar() {
    if (collectionId === '366546058') {
      isAbmPillar = true;
      console.log('TOC_TaF - isAbmPillar: true');
    } else {
      console.log('TOC_TaF - isAbmPillar: false');
      return false;
      //console.log("RETURN FALSE");
    }
  }

  function checkForMetering() {
    //for (k=0;k<sites.length;k++) {

    console.log('TOC_TaF - Checking for metering');
    //if (window.location.pathname.includes(contentTypes[k])) {
    //console.log('ABM Pillar Splash - Checking contentTypes');
    //console.log('ABM Pillar Splash - href ' + href);
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      console.log(meteringCheck1 + " " + meteringCheck2);
      console.log("TOC_TaF - has metered reg - DON'T ACTIVATE");
      isMetered = true;
      return false;
    } else if (formAppCode === "150" || formAppCode === "151") {
      console.log("TOC_TaF - has leading reg - DON'T ACTIVATE");
      isMetered = true;
      console.log(formAppCode);
      return false;
    } else {
      console.log('TOC_TaF - isMetered: false');
      isMetered = false;
    }
  }

   function checkTestPage() {
    if ((window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/tip/Why-should-I-use-Docker-containers-vs-VMs-for-my-cloud-apps') > -1) || (window.location.href.indexOf('https://www.techtarget.com/whatis/feature/Halliburton-cyberattack-explained-What-happened')> -1)) {
      isTestPage = true;
      console.log('TOC_TaF - isTestPage: true'); 

    }
  }

  function checkForSiteMatch() {
   // Check for 'whatis'
  if (href.indexOf('whatis') > -1) {
    siteNameMatch = true;
    console.log('TOC_TaF - "whatis" site detected, site match ' + siteNameMatch);
  } 
  // If not 'whatis', then proceed with other site checks
  else if (hostname === 'www.techtarget.com' && (
      (typeof siteName !== 'undefined') && // Ensure 'siteName' exists
      (siteName.indexOf('searchCloudComputing') > -1 ||
       siteName.indexOf('searchEnterpriseDesktop') > -1 ||
       siteName.indexOf('searchDataCenter') > -1 ||
       siteName.indexOf('searchWindowsServer') > -1)
    )) {
    siteNameMatch = true;
    console.log('TOC_TaF - site match ' + siteNameMatch);
  } else {
    siteNameMatch = false;
    console.log('TOC_TaF - no site match ' + siteNameMatch);
  }
}
  
  function checkForContentTypeMatch() {
    for (var j=0;j<contentTypes.length;j++) {
        if (window.location.pathname.includes(contentTypes[j])) {
            contentTypeMatch = true;
        }
    }
  }
  function checkForPillarMainCollection() {
    if ((collection === 'PILLAR') || (collection === 'NONE')) {
    	isPillarMainOrCollection = false;
      console.log('TOC v2 - isPillarCollection ' + isPillarMainOrCollection);
    } else {
    	isPillarMainOrCollection = true;
      console.log('TOC - isPillarCollection ' + isPillarMainOrCollection);
    }
  }
  
  function checkH2Count() {
  	var count = $('#content-body h2').length;
    if (count > 1) {
      hasMinH2s = true;
      console.log('TOC_TaF - minH2s ' + hasMinH2s);
  	} else {
  		hasMinH2s = false;
      console.log('TOC_TaF - minH2s ' + hasMinH2s);
  	}
  }
  function hasMinWidth() {
  	if ($(window).width() > 1445) {
    	isMinWidth = true;
    }
  }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30418870483", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_table_of_contents__defin_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": function TOC_defV2(utils) {
  console.log("TOC v2 - Start Page Eval - 09/16/2024");
  var appCodeExistsOnPage;
  var cloudFlareChecks;
  var canActivate;
  var pillarData;
  var collection,
      collectionId,
    adId,
    topicId,
    meteringCheck1, // want = "false"
    meteringCheck2, // want = true
    loggedIn, // want null
    formAppCode = $('smartforms-techtarget').attr('app-code'),
    href = window.location.href,
    hostname = window.location.hostname,
    hostnameSplit = window.location.hostname.split('.')[0],
    pathname = window.location.pathname.split('/')[1],
    isAbmPillar = false,
    isRegPage = null,
    isMetered = null,
    isMinWidth = false,
    isPillarCollection = null,
    isPillarMainOrCollection = null,
    consolSiteMatch = false,
    regularSiteMatch = false,
    siteName = null,
    siteNames = ['WhatIs', 'IoTAgenda', 'Sustainability'],
    siteNameMatch = false,
    contentTypeMatch  = false,
    targetedSiteMatch = false,
    isTestPage = false,
    promiseResolved = false,
    hasMinH2s = false,
  contentTypes      = ['/definition/'];
  //['/feature/','/tutorial/','/tip/','/answer/','/definition/','/tutorial/','/opinion/'];

  TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
    collection = ctx.collection;
    collectionId = ctx.collectionId;
    siteName = ctx.siteName;
    adId = ctx.adId;
    topicId = ctx.topicId;
  });
  console.log("TOC v2 - collectionID: " + collectionId);
  

  checkForTTVar(); //check TT to determine if user is loggedIn
  checkifAbmPillar(); //only activate if CollectionId = ABM PIllar
  checkForMetering(); //only non-metered pages
  checkForSiteMatch(); //need all search site, IoT
  checkTestPage();
  checkForContentTypeMatch();
  checkForPillarMainCollection();
  checkH2Count();
  hasMinWidth();

  //&& isTestPage
  if (!isRegPage && !isAbmPillar && siteNameMatch && !isMetered  && contentTypeMatch && !isPillarMainOrCollection && hasMinH2s && isMinWidth ) {
    console.log('TOC - ACTIVATE');
    return true;
  } else {
    console.log('TOC - DO NOT ACTIVATE');
    console.log('TOC - values: ' + isRegPage + " " + isMetered  + " " + isAbmPillar + " " + consolSiteMatch + " " + regularSiteMatch + " " + isTestPage);
    return false;
  }

  function checkForTTVar() {
    if (typeof TT === "undefined") {
      console.log('TOC - no tt avail, probably on reg page');
      isRegPage = true;
      return false;
    } else {
      console.log('TOC - tt IS avail, you are not on reg page');
      isRegPage = false;
    }
  }

  function checkifAbmPillar() {
    if (collectionId === '366546058') {
      isAbmPillar = true;
      console.log('TOC - isAbmPillar: true');
    } else {
      console.log('TOC - isAbmPillar: false');
      return false;
      //console.log("RETURN FALSE");
    }
  }

  function checkForMetering() {
    //for (k=0;k<sites.length;k++) {

    console.log('TOC - Checking for metering');
    //if (window.location.pathname.includes(contentTypes[k])) {
    //console.log('ABM Pillar Splash - Checking contentTypes');
    //console.log('ABM Pillar Splash - href ' + href);
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      console.log(meteringCheck1 + " " + meteringCheck2);
      console.log("TOC v2 - has metered reg - DON'T ACTIVATE");
      isMetered = true;
      return false;
    } else if (formAppCode === "150" || formAppCode === "151") {
      console.log("TOC v2 - has leading reg - DON'T ACTIVATE");
      isMetered = true;
      console.log(formAppCode);
      return false;
    } else {
      console.log('TOC v2 - isMetered: false');
      isMetered = false;
    }
  }

   function checkTestPage() {
    if ((window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/etip/Why-should-I-use-Docker-containers-vs-VMs-for-my-cloud-apps') > -1) || (window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/definition/cloud-browser')> -1)) {
      isTestPage = true;
      console.log('TOC v2 - isTestPage: true'); 

    }
  }
  function checkForSiteMatch() {
   // Check for 'whatis' 
  if (href.indexOf('whatis') > -1) {
    siteNameMatch = true;
    console.log('TOC v2   - "whatis" site detected, site match ' + siteNameMatch);
  } 
  // If not 'whatis', then proceed with other site checks
  else if (hostname === 'www.techtarget.com' && (
      (typeof siteName !== 'undefined') && // Ensure 'siteName' exists
      (siteName.indexOf('searchDataCenter') > -1 ||
       siteName.indexOf('searchNetworking') > -1 ||
       siteName.indexOf('searchWindowsServer') > -1 ||
       siteName.indexOf('searchEnterpriseDesktop') > -1) ||
      (siteName.indexOf('searchStorage') > -1)
    )) {
    siteNameMatch = true;
    console.log('TOC v2  - site match ' + siteNameMatch);
  } else {
    siteNameMatch = false;
    console.log('TOC v2  - no site match ' + siteNameMatch);
  }
} 
    

  function checkForContentTypeMatch() {
    for (var j=0;j<contentTypes.length;j++) {
        if (window.location.pathname.includes(contentTypes[j])) {
            contentTypeMatch = true;
        }
    }
  }
  function checkForPillarMainCollection() {
    if ((collection === 'PILLAR') || (collection === 'NONE')) {
    	isPillarMainOrCollection = false;
      console.log('TOC v2 - isPillarCollection ' + isPillarMainOrCollection);
    } else {
    	isPillarMainOrCollection = true;
      console.log('TOC - isPillarCollection ' + isPillarMainOrCollection);
    }
  }
  
  function checkH2Count() {
  	var count = $('#content-body h2').length;
    if (count > 1) {
      hasMinH2s = true;
      console.log('TOC v2 - minH2s ' + hasMinH2s);
  	} else {
  		hasMinH2s = false;
      console.log('TOC v2 - minH2s ' + hasMinH2s);
  	}
  }
  function hasMinWidth() {
  	if ($(window).width() > 1444) {
    	isMinWidth = true;
    }
  }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5656666713096192", "category": "other", "apiName": "17796810052_url_targeting_for_test", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": /****** JAVASCRIPT CONDITION (AND) ******/
function contentRecommendationsEvaluation() {
    console.log("contentRecommendationsEvaluation - Page Eval - 10/23/24 1");
 
    var $ = window.$,
        meteringCheck1,
        meteringCheck2,
        formAppCode,
        hostname          = window.location.hostname,
        pathname          = window.location.pathname.split('/')[1],
        pageType          = window.location.pathname.split('/')[2],
        hasDigDeeper      = false,
        consolSiteMatch   = false,
        // contentTypes = ['feature', 'tip' , 'news', 'opinion' , 'answer'],
        contentTypes = ['feature','tip','news','opinion','answer','definition'],
        contentTypeMatch  = false,
        // sites = ['searchsecurity','searchnetworking','searchenterpriseai','searchcio','searchitoperations','searcherp','sustainability'];
        sites = ['searchcustomerexperience','searchdatamanagement','searchitoperations','searchsoftwarequality','searchmobilecomputing','searchvirtualdesktop','searchapparchitecture','searchbusinessanalytics','searcherp','searchunifiedcommunications','searchitchannel','searchdatabackup','searchhrsoftware','searchcontentmanagement','searchdisasterrecovery','sustainability','searchsap','searchvmware','searchaws','searchoracle'];

    for (i=0;i<sites.length;i++) {
        if (hostname == 'www.techtarget.com' && (pathname === sites[i])) {
            consolSiteMatch = true;
        }
    }
    for (j=0;j<sites.length;j++) {
        if (pageType.includes(contentTypes[j])) {
            contentTypeMatch = true;
        }
    }

    if ($('#DigDeeperSplash').length){
        console.log('contentRecommendationsEvaluation - Page Eval - Dig Deeper on page');
        hasDigDeeper = true;
    } else {
        console.log('contentRecommendationsEvaluation - Page Eval - Dig Deeper not on page');
    }

    if(consolSiteMatch == true && contentTypeMatch == true){
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
            meteringCheck1 = ctx.isServerSideMetering;
            meteringCheck2 = metering.isMetered(ctx, cookie);
        });

        formAppCode = window.$("#inlineRegistration_AppCode").val();

        if (meteringCheck1 === "false" && meteringCheck2 === true){
            console.log("contentRecommendationsEvaluation - Page Eval - has metered reg - DON'T ACTIVATE");
            return false;
        } else if (formAppCode === 150 || formAppCode === 151) {
            console.log("contentRecommendationsEvaluation - Page Eval - has leading reg - DON'T ACTIVATE");
            return false;
        } else if (hasDigDeeper == true) {
            console.log("contentRecommendationsEvaluation - Page Eval - ACTIVATE");
            return true;
        } else {
            console.log("contentRecommendationsEvaluation - Page Eval - DON'T ACTIVATE");
            return false;
        }
    } else {
        console.log("contentRecommendationsEvaluation - Page Eval - DON'T ACTIVATE");
        return false;
    }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5910326256861184", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_genai_summarize_and_chat__", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "www\\.techtarget\\.com.*"}], ["or", {"type": "custom_code", "value": function genAIChatSummaryMainSurveyRelease(utils) { 
    console.log("(Gen AI) Chat Summary Main - Start Page Eval - 8/26/2024");
    var appCodeExistsOnPage;
    var cloudFlareChecks;
    var canActivate;
    var collection,
      collectionId,
      adId,
      topicId,
      meteringCheck1, // want = "false"
      meteringCheck2, // want = true
      loggedIn, // want null
      formAppCode,
      formAppCode = window.$("#inlineRegistration_AppCode").val(),
  fastRegAppCode = window.$('smartforms-techtarget').attr('app-code'),
      href = window.location.href,
      hostname = window.location.hostname,
      hostnameSplit = window.location.hostname.split('.')[0],
      pathname          = window.location.pathname.split('/')[1],
      isABMPillar       = false,
      isPillarMain      = false,
      isRegPage         = null,
      isMetered         = null,
      isCPCTraffic      = false,
      consolSiteMatch   = false,
      regularSiteMatch  = false,
      siteName          = null,
      siteNames         = ['Sustainability'],
      siteNameMatch     = false,
      contentTypeMatch  = false,
      targetedSiteMatch = false,
      isTestPage        = false,
      contentType,
      contentTypes      = ['/feature/','/tip/','/definition/'],
      responseError     = false,
      hasQueryParam     = false;
  
    TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
      collection = ctx.collection;
      collectionId = ctx.collectionId;
      siteName = ctx.siteName;
      contentType = ctx.contentType;
      adId = ctx.adId;
      topicId = ctx.topicId;
      meteringCheck1 = ctx.isServerSideMetering;
      meteringCheck2 = metering.isMetered(ctx, cookie);
      if (collection === "PILLAR Main") {
          isPillarMain = true;
        console.log("isPillarMain: "+isPillarMain);
      } else {
        isPillarMain = false;
        console.log("isPillarMain: "+isPillarMain);
      }
    /*console.log("(Gen AI) Chat Summary Main - adID: " + adId);
    console.log("(Gen AI) Chat Summary Main - topicID: " + topicId);
    console.log("(Gen AI) Chat Summary Main - MediaServerPath: " + mediaServerPathRightRail);*/
    });
  
    checkForTTVar();        // check TT to determine if user is loggedIn
    checkForContentTypes(); // only activate if Pillar Main
    checkifABMPillar();     // not activating on ABM Pillar
    checkForMetering();     // only non-metered pages
    checkForSiteMatch();    // need all search sites, Sustainability
    checkIfResponseError();
    checkTestPage();        // use to target to single page for testing
    var hasCookie = checkCookie('genaichatinternal');
    checkQueryParam();

  
    if (!isRegPage && !isPillarMain && !isABMPillar  && !isMetered && contentTypeMatch && siteNameMatch && !responseError && (hasQueryParam || hasCookie)) {
      console.log('(Gen AI) Chat Summary Main - ACTIVATE');
      return true;
    } else {
      console.log('(Gen AI) Chat Summary Main - DO NOT ACTIVATE');
      console.log('(Gen AI) Chat Summary Main - values: ' + isRegPage +" "+  contentTypeMatch + " " +isABMPillar+ " " +isPillarMain+ " " + siteNameMatch + " " + isMetered + " " + isTestPage);
      return false;
    }
      function checkIfResponseError() {
     responseError = sessionStorage.getItem('responseError');
    }
    function checkForTTVar() {
      if (typeof TT === "undefined") {
        console.log('(Gen AI) Chat Summary Main - no tt avail, probably on reg page, isRegPage: '+isRegPage);
        isRegPage = true;
        //return false;
      } else {
        console.log('(Gen AI) Chat Summary Main - tt IS avail, you are not on reg page, isRegPage: '+isRegPage);
        isRegPage = false;
      }
    }
    function checkForContentTypes() {
      //Note: Pillar Mains do not have EOC content types, they are "PILLAR" and url does not have content type in path. Therefore only looking to match "PILLAR"
      for (j=0;j<contentTypes.length;j++) {
          if (window.location.pathname.includes(contentTypes[j])) {
              console.log('(Gen AI) Chat Summary Main - contentTypeMatch: '+contentTypeMatch);
            contentTypeMatch = true;
          }
      }
    }
  
    function checkTestPage() {
      if ((window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/tip/Why-should-I-use-Docker-containers-vs-VMs-for-my-cloud-apps') > -1) || (window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/definition/cloud-modernization') > -1) || (window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/feature/Public-cloud-vs-private-cloud-Key-benefits-and-differences') > -1)) {
        isTestPage = true;
        console.log('(Gen AI) Chat Summary Main - isTestPage: true');
      }
    }
  
    function checkifABMPillar() {
      if (collectionId === "366546058") {
        isABMPillar = true;
        console.log('(Gen AI) Chat Summary Main - isABMPillar: true');
      } else {
        console.log('(Gen AI) Chat Summary Main - isABMPillar: false');
        isABMPillar = false;
      }
    }
  
    function checkForMetering() {
      //for (k=0;k<sites.length;k++) {
  
      console.log('(Gen AI) Chat Summary Main - Checking for metering');
      //if (window.location.pathname.includes(contentTypes[k])) {
      //console.log('(Gen AI) Chat Summary Main - Checking contentTypes');
      //console.log('(Gen AI) Chat Summary Main - href ' + href);
      if (meteringCheck1 === "false" && meteringCheck2 === true) {
        isMetered = true;
        console.log("(Gen AI) Chat Summary Main - meteringCheck 1: "+meteringCheck1+" isMetered: "+isMetered);
        console.log("(Gen AI) Chat Summary Main - meteringCheck 2: "+meteringCheck2+" isMetered: "+isMetered);
        console.log("(Gen AI) Chat Summary Main - has metered reg - DON'T ACTIVATE");
  
      } else if (formAppCode === 150 || formAppCode === 151 || fastRegAppCode === 150 || fastRegAppCode === 151) {
        isMetered = true;
        console.log("(Gen AI) Chat Summary Main - formAppCode: "+formAppCode+" isMetered: "+isMetered);
        console.log("(Gen AI) Chat Summary Main - formAppCode: "+formAppCode);
        console.log("(Gen AI) Chat Summary Main - has leading reg - DON'T ACTIVATE");
      } else {
        isMetered = false;
        console.log("(Gen AI) Chat Summary Main - isMetered: "+isMetered);
        console.log('(Gen AI) Chat Summary Main - NOT METERED');
      }
    }
  
    function checkForSiteMatch() {
      if ((hostname === 'www.techtarget.com') && ((siteName.indexOf('searchSecurity') > -1) || (siteName.indexOf('searchCIO') > -1) || (siteName.indexOf('searchEnterpriseAI') > -1))) {
        siteNameMatch = true;
      console.log('(Gen AI) Chat Summary Main - site match ' + siteNameMatch);
      } else {
      siteNameMatch = false;
      console.log('(Gen AI) Chat Summary Main - no site match ' + siteNameMatch);
    }
    }
  function checkQueryParam() {
  	if (window.location.href.indexOf('genaichatinternal') > -1) { 
      hasQueryParam = true;
      // Get unix milliseconds at current time plus number of days
      // 24 * 60 * 60 * 1000 * 14 days
      // set cookie for 14 days (1209600000)
      document.cookie = "genaichatinternal=true; max-age=1209600000; path=/";
    }
  }
  function checkCookie(name) {
    const cookies = document.cookie;
    const cookiesArray = cookies.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        if (cookie.startsWith(name + '=')) {
            return true;
        }
    }
    return false; // Cookie is not set
  }      
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "www\\.eng\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "www\\.qa\\.techtarget\\.com.*"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6009746243715072", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_content_recommendations__p", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": /****** JAVASCRIPT CONDITION (AND) ******/
function contentRecommendationsEvaluation() {
    console.log("contentRecommendationsEvaluation wave2 - Page Eval - 11/21/24 1");
 
    var $ = window.$,
        meteringCheck1,
        meteringCheck2,
        formAppCode,
        hostname          = window.location.hostname,
        pathname          = window.location.pathname.split('/')[1],
        pageType          = window.location.pathname.split('/')[2],
        hasDigDeeper      = false,
        consolSiteMatch   = false,
        // contentTypes = ['feature', 'tip' , 'news', 'opinion' , 'answer'],
        contentTypes = ['feature','tip','news','opinion','answer','definition'],
        contentTypeMatch  = false,
        sites = ['searchsecurity'];
        // sites = ['searchcustomerexperience','searchdatamanagement','searchitoperations','searchsoftwarequality','searchmobilecomputing','searchvirtualdesktop','searchapparchitecture','searchbusinessanalytics','searcherp','searchunifiedcommunications','searchitchannel','searchdatabackup','searchhrsoftware','searchcontentmanagement','searchdisasterrecovery','sustainability','searchsap','searchvmware','searchaws','searchoracle'];

    for (i=0;i<sites.length;i++) {
        if (hostname == 'www.techtarget.com' && (pathname === sites[i])) {
            consolSiteMatch = true;
        }
    }
    for (j=0;j<contentTypes.length;j++) {

        if (pageType.includes(contentTypes[j])) {
            contentTypeMatch = true;
        }
    }

    if ($('#DigDeeperSplash').length){
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper on page');
        hasDigDeeper = true;
    } else {
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper not on page');
    }

    if(consolSiteMatch == true && contentTypeMatch == true){
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
            meteringCheck1 = ctx.isServerSideMetering;
            meteringCheck2 = metering.isMetered(ctx, cookie);
        });

        formAppCode = window.$("#inlineRegistration_AppCode").val();

        if (meteringCheck1 === "false" && meteringCheck2 === true){
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has metered reg - DON'T ACTIVATE");
            return false;
        } else if (formAppCode === 150 || formAppCode === 151) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has leading reg - DON'T ACTIVATE");
            return false;
        } else if (hasDigDeeper == true) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - ACTIVATE");
            return true;
        } else {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
            return false;
        }
    } else {
        console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
        return false;
    }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "17846171135", "viewId": null, "name": null, "category": "other", "apiName": "inline_reg_successful_page1_submit", "eventType": "custom", "eventFilter": null}, {"id": "17857222016", "viewId": null, "name": null, "category": "other", "apiName": "global_app_code_127_dlo", "eventType": "custom", "eventFilter": null}, {"id": "17861001482", "viewId": null, "name": null, "category": "other", "apiName": "inline_reg_successful_page2_submit", "eventType": "custom", "eventFilter": null}, {"id": "17868031558", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17870890533", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17872770972", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17881411148", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17881411149", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17882861478", "viewId": null, "name": null, "category": "other", "apiName": "global_halfPageAd_clicked", "eventType": "custom", "eventFilter": null}, {"id": "17887132456", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17892190463", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17893250559", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17897702267", "viewId": null, "name": null, "category": "other", "apiName": "ad_300_x_250_mutop", "eventType": "custom", "eventFilter": null}, {"id": "17898270042", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17899670705", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17899730380", "viewId": null, "name": null, "category": "other", "apiName": "global_app_code_151_metering", "eventType": "custom", "eventFilter": null}, {"id": "17903280418", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17911180165", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17935170525", "viewId": null, "name": null, "category": "other", "apiName": "global_muTopAd_clicked", "eventType": "custom", "eventFilter": null}, {"id": "18092710965", "viewId": null, "name": null, "category": "other", "apiName": "myresearch_redCircModal_full_registration_submission", "eventType": "custom", "eventFilter": null}, {"id": "18165862266", "viewId": null, "name": null, "category": "other", "apiName": "my_research_modal_close_clicks_pe", "eventType": "custom", "eventFilter": null}, {"id": "18169870907", "viewId": null, "name": null, "category": "other", "apiName": "my_research_modal_download_clicks_pe", "eventType": "custom", "eventFilter": null}, {"id": "18177652889", "viewId": null, "name": null, "category": "other", "apiName": "myresearch_full_registration_successful_submit_pe", "eventType": "custom", "eventFilter": null}, {"id": "18241231076", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndLoggedOut_sideModal_successfulSubmit", "eventType": "custom", "eventFilter": null}, {"id": "18579980391", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18587600343", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_P2_page1_success", "eventType": "custom", "eventFilter": null}, {"id": "18601090247", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_P2_page2_success", "eventType": "custom", "eventFilter": null}, {"id": "18792322693", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_confirmShowing", "eventType": "custom", "eventFilter": null}, {"id": "18792392610", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_error_checkboxes", "eventType": "custom", "eventFilter": null}, {"id": "18794413039", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_error_email", "eventType": "custom", "eventFilter": null}, {"id": "18844861312", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "18844861313", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_percent", "eventType": "custom", "eventFilter": null}, {"id": "18848901370", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "18850581201", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18852902427", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_percent", "eventType": "custom", "eventFilter": null}, {"id": "18854773384", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "18858901179", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "18860613542", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18862561156", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18862793052", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18862830908", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_percent", "eventType": "custom", "eventFilter": null}, {"id": "18863952920", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18864122623", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18864133624", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18866172872", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18866740131", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18867901706", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "18867901707", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18867983058", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18870062338", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_next_steps_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18870101850", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18870160934", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18872132025", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_track_dlo_articles_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18872491997", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18874512939", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18875582363", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18875591512", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_percent", "eventType": "custom", "eventFilter": null}, {"id": "18875651065", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_reg_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18875652621", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18875862795", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18875904070", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "18877903549", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18877972666", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18878070960", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18879521966", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_track_dlo_articles_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18881151173", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18881151174", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18883022158", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18883380388", "viewId": null, "name": null, "category": "other", "apiName": "adblock_exists", "eventType": "custom", "eventFilter": null}, {"id": "18883443556", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "18883512806", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "18884990436", "viewId": null, "name": null, "category": "other", "apiName": "adblock_absent", "eventType": "custom", "eventFilter": null}, {"id": "18885154528", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18886990913", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18887132704", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18887162712", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_continueReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "18887213081", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18887263462", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18887800597", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18888380007", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_related_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18892961054", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18893081363", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18895002591", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_dig_deeper_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18904940260", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18905291797", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18910345831", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_downloadSingle_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18924251117", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_pillar_cluster", "eventType": "custom", "eventFilter": null}, {"id": "18929490007", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18940960004", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18949100710", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_sharedCodeVisitorCount", "eventType": "custom", "eventFilter": null}, {"id": "18954542623", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_dlo_openClicks", "eventType": "custom", "eventFilter": null}, {"id": "18962773475", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18968102449", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_cmpShowing", "eventType": "custom", "eventFilter": null}, {"id": "18970561673", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18972403926", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_cmpClick", "eventType": "custom", "eventFilter": null}, {"id": "18975315407", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_visible", "eventType": "custom", "eventFilter": null}, {"id": "18976142652", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_downloadSingle_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18977982148", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18981422415", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18987433661", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_notVisible_expand_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18989443194", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_downloadAll_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18990901494", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18995093384", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_visible_expand_clicks", "eventType": "custom", "eventFilter": null}, {"id": "19000750893", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19001023518", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_downloadAll_clicks", "eventType": "custom", "eventFilter": null}, {"id": "19019431536", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19044672151", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_total_opens", "eventType": "custom", "eventFilter": null}, {"id": "19064213200", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19068101317", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_body_links_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19388703826", "viewId": null, "name": null, "category": "other", "apiName": "regwall_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19398713286", "viewId": null, "name": null, "category": "other", "apiName": "regwall_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19560760228", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_extraInfoExists", "eventType": "custom", "eventFilter": null}, {"id": "19562550197", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_extraInfoAnchorClicked", "eventType": "custom", "eventFilter": null}, {"id": "19568160885", "viewId": null, "name": null, "category": "other", "apiName": "regwall_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19571830706", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_company", "eventType": "custom", "eventFilter": null}, {"id": "19572530315", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_lastName", "eventType": "custom", "eventFilter": null}, {"id": "19585430505", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_checkboxes", "eventType": "custom", "eventFilter": null}, {"id": "19587480658", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_firstName", "eventType": "custom", "eventFilter": null}, {"id": "19597111097", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_email", "eventType": "custom", "eventFilter": null}, {"id": "19920911061", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "19926910528", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_downloadShowing", "eventType": "custom", "eventFilter": null}, {"id": "19928048369", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19932346669", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "19932534749", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19934916962", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19936528826", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "19937847191", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19937895746", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19937927670", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_500-100", "eventType": "custom", "eventFilter": null}, {"id": "19941858164", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_pillar_cluster", "eventType": "custom", "eventFilter": null}, {"id": "19941858169", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19941967903", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_extra_info_exists", "eventType": "custom", "eventFilter": null}, {"id": "19942750417", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19942750421", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19943406396", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19943437402", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19943496615", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19943526147", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19945477228", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "19949396426", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19951247725", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19953876394", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_mainContent_clicked", "eventType": "custom", "eventFilter": null}, {"id": "19954975997", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_extra_info_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "19954996743", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19955018286", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19955971079", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19958978748", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_sharedCodeVisitorCount", "eventType": "custom", "eventFilter": null}, {"id": "19961006143", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19961831181", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19961861283", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19969051163", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19972971582", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_keyTakeawaysExists", "eventType": "custom", "eventFilter": null}, {"id": "19982762228", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_q1_yes", "eventType": "custom", "eventFilter": null}, {"id": "19984242712", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19984259816", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_visible", "eventType": "custom", "eventFilter": null}, {"id": "19986971487", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_contentBody_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20011412546", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_opened", "eventType": "custom", "eventFilter": null}, {"id": "20017192515", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_q1_no", "eventType": "custom", "eventFilter": null}, {"id": "20017223396", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_carousel_item_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20024891444", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_extra_info_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20032841636", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20032891317", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_ehand_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20038671518", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20039951310", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20046001388", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20046029798", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_sponsored_news_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20047721127", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_extra_info_exists", "eventType": "custom", "eventFilter": null}, {"id": "20049541749", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20051701511", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_ehand_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20051721631", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20051861321", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_500-100", "eventType": "custom", "eventFilter": null}, {"id": "20051861365", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20053611443", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20055321044", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_mainContent_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20055351193", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_keyTakeawaysExists", "eventType": "custom", "eventFilter": null}, {"id": "20057711247", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20057751120", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20061161284", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20063061495", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20063081106", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_contentBody_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20063081177", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20065081217", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20066941057", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20068941370", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20069930950", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_related_content_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20070991043", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_downloadShowing", "eventType": "custom", "eventFilter": null}, {"id": "20077291024", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_related_resources_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20092233623", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_pillarClusterSplashExists", "eventType": "custom", "eventFilter": null}, {"id": "20092262519", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20094573125", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_requiredReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "20098852507", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20100482805", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_aux", "eventType": "custom", "eventFilter": null}, {"id": "20102472686", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_main", "eventType": "custom", "eventFilter": null}, {"id": "20104583773", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_authorLinkExists", "eventType": "custom", "eventFilter": null}, {"id": "20106386438", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_botNav_rigthArrowInactive", "eventType": "custom", "eventFilter": null}, {"id": "20106692413", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_breadcrumbsExists", "eventType": "custom", "eventFilter": null}, {"id": "20111802396", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20114661605", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20119982964", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20125563047", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_googleAdClick", "eventType": "custom", "eventFilter": null}, {"id": "20127152847", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_varCodeStart", "eventType": "custom", "eventFilter": null}, {"id": "20127213096", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20129190008", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_secondary", "eventType": "custom", "eventFilter": null}, {"id": "20150211551", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_main_aux_sec_total", "eventType": "custom", "eventFilter": null}, {"id": "20184517767", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20204525345", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20212498257", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20220018492", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20221898982", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20222733000", "viewId": null, "name": null, "category": "other", "apiName": "qa_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20223557570", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20224134541", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20225947459", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20228372344", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer1_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20234632428", "viewId": null, "name": null, "category": "other", "apiName": "qa_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20235434581", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20236111994", "viewId": null, "name": null, "category": "other", "apiName": "qa_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20237198830", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20237702113", "viewId": null, "name": null, "category": "other", "apiName": "qa_question_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20238132490", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer_multiple_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20242734599", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_welcomeAdExists", "eventType": "custom", "eventFilter": null}, {"id": "20243015134", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20247092867", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20247522336", "viewId": null, "name": null, "category": "other", "apiName": "qa_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20255062690", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer_total_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20298909928", "viewId": null, "name": null, "category": "other", "apiName": "related_content_extraInfoExists", "eventType": "custom", "eventFilter": null}, {"id": "20305010682", "viewId": null, "name": null, "category": "other", "apiName": "qa_chat_expanded", "eventType": "custom", "eventFilter": null}, {"id": "20308874480", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20312632314", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20312632331", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20312743130", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20318919029", "viewId": null, "name": null, "category": "other", "apiName": "related_content_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20319892692", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20321893018", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20322551353", "viewId": null, "name": null, "category": "other", "apiName": "related_content_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20324143130", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20324198151", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20326273119", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20328279597", "viewId": null, "name": null, "category": "other", "apiName": "related_content_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20328293334", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20328323647", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20328870192", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20331919211", "viewId": null, "name": null, "category": "other", "apiName": "related_content_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20332801407", "viewId": null, "name": null, "category": "other", "apiName": "related_content_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20333609634", "viewId": null, "name": null, "category": "other", "apiName": "related_content_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20333653318", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20337382631", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20337399718", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20337483064", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20339429271", "viewId": null, "name": null, "category": "other", "apiName": "related_content_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20342223388", "viewId": null, "name": null, "category": "other", "apiName": "related_content_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20342610690", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20343113210", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20343119641", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20343341708", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20345048746", "viewId": null, "name": null, "category": "other", "apiName": "related_content_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20345053827", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20345072385", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20347113258", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_relatedResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20348351124", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20348371128", "viewId": null, "name": null, "category": "other", "apiName": "related_content_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20348520192", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20348952902", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20349410098", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20353320144", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20353812185", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20355700774", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20357651550", "viewId": null, "name": null, "category": "other", "apiName": "related_content_continueReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "20358311395", "viewId": null, "name": null, "category": "other", "apiName": "related_content_newRelatedContentModulesCreated", "eventType": "custom", "eventFilter": null}, {"id": "20359870025", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20361501426", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20361540550", "viewId": null, "name": null, "category": "other", "apiName": "related_content_extraInfoAnchorClicked", "eventType": "custom", "eventFilter": null}, {"id": "20365011501", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20365011502", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20366960522", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20402660708", "viewId": null, "name": null, "category": "other", "apiName": "cluster_navigation_nav_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20411144832", "viewId": null, "name": null, "category": "other", "apiName": "cluster_navigation_body_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20550780745", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20560922948", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20568563264", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_related_content_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20573452951", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20574170723", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20577672862", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20666601926", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_added", "eventType": "custom", "eventFilter": null}, {"id": "20848430999", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_rightRailVisible", "eventType": "custom", "eventFilter": null}, {"id": "20854120788", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_opens", "eventType": "custom", "eventFilter": null}, {"id": "20858641689", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20872850003", "viewId": null, "name": null, "category": "other", "apiName": "related_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20894763053", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeek_contentClicks2", "eventType": "custom", "eventFilter": null}, {"id": "20896820806", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_hasLocalStorage", "eventType": "custom", "eventFilter": null}, {"id": "20898711430", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_varStart", "eventType": "custom", "eventFilter": null}, {"id": "20900261252", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_link_exists", "eventType": "custom", "eventFilter": null}, {"id": "20900350010", "viewId": null, "name": null, "category": "other", "apiName": "related_content_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20902190003", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_author_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20902644375", "viewId": null, "name": null, "category": "other", "apiName": "ada_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20905631465", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_IDelementInDOM", "eventType": "custom", "eventFilter": null}, {"id": "20905910005", "viewId": null, "name": null, "category": "other", "apiName": "related_content_new_module_created", "eventType": "custom", "eventFilter": null}, {"id": "20910224402", "viewId": null, "name": null, "category": "other", "apiName": "ada_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20913381240", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_innerElementInDOM", "eventType": "custom", "eventFilter": null}, {"id": "20915230512", "viewId": null, "name": null, "category": "other", "apiName": "related_content_recommended_article_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20915547141", "viewId": null, "name": null, "category": "other", "apiName": "ada_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20917120256", "viewId": null, "name": null, "category": "other", "apiName": "related_content_content_container_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20919070372", "viewId": null, "name": null, "category": "other", "apiName": "related_content_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20921681101", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_pageTargetingConditionsNotMet", "eventType": "custom", "eventFilter": null}, {"id": "20923222194", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_meetsPageTargetingConditions", "eventType": "custom", "eventFilter": null}, {"id": "20929242312", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_showRRfail", "eventType": "custom", "eventFilter": null}, {"id": "20929391589", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_sessCookieFail", "eventType": "custom", "eventFilter": null}, {"id": "20963390201", "viewId": null, "name": null, "category": "other", "apiName": "ada_body_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20989111983", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20990951454", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_close_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21004854070", "viewId": null, "name": null, "category": "other", "apiName": "collections_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21020064029", "viewId": null, "name": null, "category": "other", "apiName": "collections_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21040830186", "viewId": null, "name": null, "category": "other", "apiName": "collections_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21042121053", "viewId": null, "name": null, "category": "other", "apiName": "collections_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21052210526", "viewId": null, "name": null, "category": "other", "apiName": "collections_body_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21054310271", "viewId": null, "name": null, "category": "other", "apiName": "collections_promo_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21073080321", "viewId": null, "name": null, "category": "other", "apiName": "collections_prev_next_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21077300004", "viewId": null, "name": null, "category": "other", "apiName": "collections_page_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21177150346", "viewId": null, "name": null, "category": "other", "apiName": "collections_window_960_and_up", "eventType": "custom", "eventFilter": null}, {"id": "21191930241", "viewId": null, "name": null, "category": "other", "apiName": "no_content_match", "eventType": "custom", "eventFilter": null}, {"id": "21377591162", "viewId": null, "name": null, "category": "other", "apiName": "related_content_article_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21385850004", "viewId": null, "name": null, "category": "other", "apiName": "related_content_content_container_left_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21485332035", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_noPeek", "eventType": "custom", "eventFilter": null}, {"id": "21488970581", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_close", "eventType": "custom", "eventFilter": null}, {"id": "23078651404", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_paused", "eventType": "custom", "eventFilter": null}, {"id": "23103401848", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_delayed_play_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23103671601", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_play_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23111140949", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_inline_reg_modal_displayed", "eventType": "custom", "eventFilter": null}, {"id": "23343580311", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_experiment_active", "eventType": "custom", "eventFilter": null}, {"id": "24194270969", "viewId": null, "name": null, "category": "other", "apiName": "abMeterCharCount_page2_click", "eventType": "custom", "eventFilter": null}, {"id": "24261660696", "viewId": null, "name": null, "category": "other", "apiName": "abMeterCharCount_page1_click", "eventType": "custom", "eventFilter": null}, {"id": "24387720430", "viewId": null, "name": null, "category": "other", "apiName": "contentCenterLinkClick", "eventType": "custom", "eventFilter": null}, {"id": "26003134783", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillar_splash_btn_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26106830101", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillar_splash_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26160620681", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_loading_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26171890905", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "26174931076", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "26175150437", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_helper_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26181580060", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_error", "eventType": "custom", "eventFilter": null}, {"id": "26181740093", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_content_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26184940668", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_content_body_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26185110622", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26188660160", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_loading_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26191500057", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_hovered", "eventType": "custom", "eventFilter": null}, {"id": "26205210046", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26304310006", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_in_view", "eventType": "custom", "eventFilter": null}, {"id": "26311570006", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_closed", "eventType": "custom", "eventFilter": null}, {"id": "26529820713", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "26574250764", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "26590190477", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_experiment_activated", "eventType": "custom", "eventFilter": null}, {"id": "26603370690", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "26645480644", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "26654141772", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillarSplash_varStart", "eventType": "custom", "eventFilter": null}, {"id": "26750590995", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillarSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "27170360020", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_content_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27189140226", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_content_body_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27190990262", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_open_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27197430215", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_contentBody_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27202960140", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "27211780038", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_close_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27213800063", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "27280080786", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_left_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27426710355", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__total_button_click_9vFzJn2GoHmfwejokfQUL", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-btnText"}}, {"id": "27438830382", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__cluster_nav_downlo_F7VzbRaBNQxdfy54jyPhw", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cluster-download"}}, {"id": "27446030464", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__splash_2_clicks_U4_JnTsxVqgAyb7Fvxw7xN2N", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-2 a"}}, {"id": "27446140424", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__splash_3_clicks_Tj_HEcay7pLHTf9v7qHDW6Rg", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-3 a"}}, {"id": "27456900406", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__total_anchor_click_HAGKQggY4FKu493VxcbQA", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-abm-pillar-splash a"}}, {"id": "27463250399", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__image_link_clicks_MTazav7KyLX7BYvDCnG4k", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-image-link"}}, {"id": "27486960298", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__total_link_clicks__AhHJ8xQ4y7ftRysExUrQA", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-title"}}, {"id": "27501290299", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__total_download_cli_JsTj3yTofigVHysqnytAQ", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#pillar-download a, .pillar-ribbon-download-tracking, .cluster-download"}}, {"id": "27506570154", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__cluster_nav_downlo_A8jGQRenXY6x7LJbHob3S", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pillar-ribbon-download-tracking"}}, {"id": "27528040038", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__big_circle_downloa_EU7m8roj8JnguT4bfbmps", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#pillar-download a"}}, {"id": "27530070030", "viewId": "27459220497", "name": null, "category": "other", "apiName": "17796810052_abm_pillar__splash_1_clicks_UW_Tzjsx9Q6XNdZJVDGZZcyY", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-1 a"}}, {"id": "27847190358", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz", "eventType": "custom", "eventFilter": null}, {"id": "28344880737", "viewId": null, "name": null, "category": "other", "apiName": "ServerError", "eventType": "custom", "eventFilter": null}, {"id": "28348030738", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission3", "eventType": "custom", "eventFilter": null}, {"id": "28354240649", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick3", "eventType": "custom", "eventFilter": null}, {"id": "28354260462", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer5", "eventType": "custom", "eventFilter": null}, {"id": "28355830671", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage0", "eventType": "custom", "eventFilter": null}, {"id": "28356360700", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "28359800442", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick2", "eventType": "custom", "eventFilter": null}, {"id": "28361460439", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer1", "eventType": "custom", "eventFilter": null}, {"id": "28363500411", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth", "eventType": "custom", "eventFilter": null}, {"id": "28366410304", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer2", "eventType": "custom", "eventFilter": null}, {"id": "28371710258", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_varStart", "eventType": "custom", "eventFilter": null}, {"id": "28379100419", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick1", "eventType": "custom", "eventFilter": null}, {"id": "28384830345", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompleted", "eventType": "custom", "eventFilter": null}, {"id": "28387180468", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ContentBodyClick", "eventType": "custom", "eventFilter": null}, {"id": "28388640296", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer", "eventType": "custom", "eventFilter": null}, {"id": "28392750209", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "28403920407", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage33", "eventType": "custom", "eventFilter": null}, {"id": "28403950315", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission1", "eventType": "custom", "eventFilter": null}, {"id": "28416870105", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick", "eventType": "custom", "eventFilter": null}, {"id": "28426210100", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizInserted", "eventType": "custom", "eventFilter": null}, {"id": "28434590460", "viewId": null, "name": null, "category": "other", "apiName": "FailedContentFetch", "eventType": "custom", "eventFilter": null}, {"id": "28446280062", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage100", "eventType": "custom", "eventFilter": null}, {"id": "28446360035", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage67", "eventType": "custom", "eventFilter": null}, {"id": "28449420010", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizInViewport", "eventType": "custom", "eventFilter": null}, {"id": "28450070020", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission2", "eventType": "custom", "eventFilter": null}, {"id": "28455430146", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer0", "eventType": "custom", "eventFilter": null}, {"id": "28460160007", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "28465240026", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer4", "eventType": "custom", "eventFilter": null}, {"id": "28477180004", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "28480960004", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer3", "eventType": "custom", "eventFilter": null}, {"id": "28581790312", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_quiz_anchor_clicks", "eventType": "custom", "eventFilter": null}, {"id": "29190920123", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_responseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "29208760214", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_varStart", "eventType": "custom", "eventFilter": null}, {"id": "29212690180", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_closeModal", "eventType": "custom", "eventFilter": null}, {"id": "29219550260", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_systemOptionShown", "eventType": "custom", "eventFilter": null}, {"id": "29222660183", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_contentCardShown", "eventType": "custom", "eventFilter": null}, {"id": "29223170165", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQNonMember", "eventType": "custom", "eventFilter": null}, {"id": "29228730159", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQMember", "eventType": "custom", "eventFilter": null}, {"id": "29231780166", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_addedToPage", "eventType": "custom", "eventFilter": null}, {"id": "29263220240", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQReturnFromReg", "eventType": "custom", "eventFilter": null}, {"id": "29271910224", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_CLpushFeatures", "eventType": "custom", "eventFilter": null}, {"id": "29297730050", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_CLpushContentCards", "eventType": "custom", "eventFilter": null}, {"id": "29681361185", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_winLoad_meteringMissing", "eventType": "custom", "eventFilter": null}, {"id": "29739340025", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_winLoad_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29744840570", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_emptySummary", "eventType": "custom", "eventFilter": null}, {"id": "29747410259", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_5s", "eventType": "custom", "eventFilter": null}, {"id": "29753110277", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29754100200", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_1s", "eventType": "custom", "eventFilter": null}, {"id": "29757090303", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_3s", "eventType": "custom", "eventFilter": null}, {"id": "29757740138", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_docReady_meteringMissing", "eventType": "custom", "eventFilter": null}, {"id": "29757950132", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_4s", "eventType": "custom", "eventFilter": null}, {"id": "29763290193", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_6s", "eventType": "custom", "eventFilter": null}, {"id": "29771840981", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_emptyRecommendations", "eventType": "custom", "eventFilter": null}, {"id": "29773040205", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_docReady_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29781170170", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_2s", "eventType": "custom", "eventFilter": null}, {"id": "29939100518", "viewId": null, "name": null, "category": "other", "apiName": "toc_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "29941450640", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "29952290406", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "29954400526", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "29963910493", "viewId": null, "name": null, "category": "other", "apiName": "toc_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "29967140643", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth10", "eventType": "custom", "eventFilter": null}, {"id": "29967880046", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_getContentFromURL_error", "eventType": "custom", "eventFilter": null}, {"id": "29969320512", "viewId": null, "name": null, "category": "other", "apiName": "toc_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "29974700030", "viewId": null, "name": null, "category": "other", "apiName": "toc_shareBarClick", "eventType": "custom", "eventFilter": null}, {"id": "29995270106", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "30266170361", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_displayed_returnMsg", "eventType": "custom", "eventFilter": null}, {"id": "30266910651", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_icon_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30279610915", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_text_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30290090230", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_displayed_introMsg", "eventType": "custom", "eventFilter": null}, {"id": "30312940386", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_text_icon_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30342460411", "viewId": "30356300218", "name": null, "category": "other", "apiName": "17796810052_content_body_clicks_not_toc_6GvNmLFh2BCGTpju99uG5", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a:not(.optly-toc-anchor)"}}, {"id": "30342570620", "viewId": "30356300218", "name": null, "category": "other", "apiName": "17796810052_toc_main_content_byline_conten_GkXc3mLak58US1sTLpLEU", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-content a"}}, {"id": "30371130646", "viewId": "30356300218", "name": null, "category": "other", "apiName": "17796810052_toc__header_clicks_MQyPcJtrmqyDdpAFnjTCD", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#page-header"}}, {"id": "30377850212", "viewId": "30356300218", "name": null, "category": "other", "apiName": "17796810052_toc_link_clicks_6J1y9AEVccvtJbJA5cpio", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optly-toc ul li a"}}, {"id": "30394060097", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth10", "eventType": "custom", "eventFilter": null}, {"id": "30396110089", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "30401590614", "viewId": "30418870483", "name": null, "category": "other", "apiName": "17796810052_toc_link_clicks_GLGJ9wP572mD3Rorpeb1M", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optly-toc ul li a"}}, {"id": "30403580061", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_shareBarClick", "eventType": "custom", "eventFilter": null}, {"id": "30403940083", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "30413260102", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "30413940055", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_onlyContentBody", "eventType": "custom", "eventFilter": null}, {"id": "30417190098", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "30421070091", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "30427510037", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "30428140629", "viewId": "30418870483", "name": null, "category": "other", "apiName": "17796810052_toc__header_clicks_A3x3Kzd1hpxYf4AqoCj5c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#page-header"}}, {"id": "30442380402", "viewId": null, "name": null, "category": "other", "apiName": "toc_onlyContentBody", "eventType": "custom", "eventFilter": null}, {"id": "30449140026", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "30460170260", "viewId": "30418870483", "name": null, "category": "other", "apiName": "17796810052_content_body_clicks_not_toc_sc3Cx859iXK4PMP9Ub3ic", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a:not(.optly-toc-anchor)"}}, {"id": "30465020343", "viewId": "30418870483", "name": null, "category": "other", "apiName": "17796810052_toc_main_content_byline_conten_L7Ksqc47tBTvRXLs7NikS", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-content a"}}, {"id": "30500240043", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loader_visible", "eventType": "custom", "eventFilter": null}, {"id": "30504310029", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loader_hidden", "eventType": "custom", "eventFilter": null}, {"id": "30515380077", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loading_displayed_5s", "eventType": "custom", "eventFilter": null}, {"id": "30519140176", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_jsonparserror", "eventType": "custom", "eventFilter": null}, {"id": "30526300015", "viewId": null, "name": null, "category": "other", "apiName": "toc_onlycontentbody", "eventType": "custom", "eventFilter": null}, {"id": "4507795492438016", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_content_body_clicks_1_U4N1xA7v_KZwYsgqPxwiqLK3jenoJx", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a"}}, {"id": "4565932773736448", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_content_card_clicks_MwhZ1iTH9j_Q2J4uBWM4ownGb5wkW2Ls", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal .o-contentCard"}}, {"id": "4847527959199744", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_dig_deeper_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "4923017227141120", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_max_questions__become_a_member_HBnvMsFCGRUQwDcZtQ3w6", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal .error a.nonMemberRegister"}}, {"id": "4979554700230656", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_content_library_clicks_4rYgwwh_ETnjLFqNaerN6Bu6PuVNq", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal #chat-content-library a"}}, {"id": "5138824720809984", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_contextDocumentsFetched", "eventType": "custom", "eventFilter": null}, {"id": "5197163915902976", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_userSubmit", "eventType": "custom", "eventFilter": null}, {"id": "5267807537987584", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_expandInputSelected", "eventType": "custom", "eventFilter": null}, {"id": "5423529496150016", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchChatHttpError", "eventType": "custom", "eventFilter": null}, {"id": "5634778804781056", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchChatNetworkError", "eventType": "custom", "eventFilter": null}, {"id": "5691832680579072", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_chat_form_button_clicks_F3N4gj_Ca9e8BxbJvcpdHEuj4Ygs", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal #submitBtn"}}, {"id": "5738564760109056", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_dig_deeper_in_view", "eventType": "custom", "eventFilter": null}, {"id": "5796640083148800", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_open_modal_button_clicks_LEiMw_M4JHMmfCt69Q6AvEkDLG4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#o-pageSummary-button"}}, {"id": "5936309282275328", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchError", "eventType": "custom", "eventFilter": null}, {"id": "6105454607073280", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_max_questions_nonmember__login_X8j8R6ZnxkfhuUN8iGzL4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal .error a.nonMemberLogin"}}, {"id": "6227315999375360", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_content_body_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "6291348240728064", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_followUpToggleClicked", "eventType": "custom", "eventFilter": null}, {"id": "6330392110694400", "viewId": "5910326256861184", "name": null, "category": "other", "apiName": "17796810052_system_option_clicks_WHBhNek4b_PLQUihr4AdrLGAED4fx4m", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#chatModal .systemOption a"}}, {"id": "6407455601590272", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchRecommendationsNetworkError", "eventType": "custom", "eventFilter": null}, {"id": "6544590988115968", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchRecommendationsHttpError", "eventType": "custom", "eventFilter": null}], "dimensions": [], "interestGroups": [], "tagGroups": []},f=__webpack_require__(1327),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(3154).setupPreviewGlobal(),__webpack_require__(3154).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync(""));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();v=r.getProjectToken(),h=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",v).replace("__PROJECT_ID__",h).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(3154).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var v,h,p;n.timeEnd("block");var g=n.now();n.setMark("optimizelyFinished",g,g)}}()}catch(t){try{__webpack_require__(371).handleError(t)}catch(n){console.log(n)}}}()})();