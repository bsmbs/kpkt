(function(t){function i(i){for(var a,o,r=i[0],c=i[1],u=i[2],p=0,d=[];p<r.length;p++)o=r[p],n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(i);while(d.length)d.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],a=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(a=!1)}a&&(s.splice(i--,1),t=o(o.s=e[0]))}return t}var a={},n={app:0},s=[];function o(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)o.d(e,a,function(i){return t[i]}.bind(null,a));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/kpkt/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=i,r=r.slice();for(var u=0;u<r.length;u++)i(r[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("p",{staticClass:"title"},[t._v("Kalkulator punktów")]),e("div",{staticClass:"window"},[e("p",{staticClass:"section"},[t._v("Świadectwo")]),e("p",{staticClass:"underSection"},[t._v("Oceny")]),e("p",{staticClass:"tip"},[t._v("Wybrane przedmioty wybiera szkoła, do której chcesz się udać. Informacje o tym należy znaleźć na stronie szkoły, najczęściej w regulaminie rekrutacji.")]),t._l(t.subjects,function(i,a){return e("div",{key:a,staticClass:"point"},[e("div",{staticClass:"pointName"},[t._v("Ocena z "+t._s(i.displayName))]),e("div",{staticClass:"pointS"},t._l(6,function(a){return e("div",{key:a,staticClass:"buton",class:i.ocena==a?"selected":"",on:{click:function(t){i.ocena=a}}},[t._v(t._s(a))])}),0)])}),e("p",{staticClass:"underSection"},[t._v("Dodatkowe")]),e("div",{staticClass:"point"},[t._m(0),e("div",{staticClass:"pointS"},[e("div",{staticClass:"buton",class:t.pasek?"selected":"",on:{click:function(i){t.pasek=!0}}},[t._v("Tak")]),e("div",{staticClass:"buton",class:t.pasek?"":"selected",on:{click:function(i){t.pasek=!1}}},[t._v("Nie")])])]),e("div",{staticClass:"point"},[t._m(1),e("div",{staticClass:"pointS"},[e("div",{staticClass:"buton",class:t.wolontariat?"selected":"",on:{click:function(i){t.wolontariat=!0}}},[t._v("Tak")]),e("div",{staticClass:"buton",class:t.wolontariat?"":"selected",on:{click:function(i){t.wolontariat=!1}}},[t._v("Nie")])])]),e("p",{staticClass:"underSection"},[t._v("Osiągnięcia")]),t._m(2),t._l(t.konkursyes,function(i,a){return e("div",{key:a+16},[e("p",{staticClass:"underUnderSection"},[t._v(t._s(a+1)+") "+t._s(i.name))]),t._l(i.sections,function(i,a){return e("div",{key:a+8,staticClass:"point"},[e("div",{staticClass:"pointName"},[t._v(t._s(i.name))]),i.count?e("div",{staticClass:"pointS"},t._l(i.count,function(a,n){return e("div",{key:n+1,staticClass:"buton",class:n+1==i.s?"selected":"",on:{click:function(e){return t.selectB(n+1,i)}}},[t._v("\n            "+t._s(a.n)+"\n          ")])}),0):e("div",[e("div",{staticClass:"buton",class:i.s?"selected":"",on:{click:function(e){return t.selectA(i)}}},[t._v("Tak")])])])})],2)}),e("p",{staticClass:"section"},[t._v("Egzamin")]),e("p",{staticClass:"tip"},[t._v("Wyniki właściwych egzaminów zostaną podane 14 czerwca")]),e("div",{staticClass:"buton",class:8==t.egzamin?"selected":"",on:{click:function(i){t.egzamin=8}}},[t._v("ósmoklasisty")]),e("div",{staticClass:"buton",class:3==t.egzamin?"selected":"",on:{click:function(i){t.egzamin=3}}},[t._v("gimnazjalny")]),0!=t.egzamin?e("div",[e("div",{staticClass:"point"},[e("div",{staticClass:"underUnderSection"},[t._v("Język polski")]),e("div",{staticClass:"pointS"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.polski,expression:"polski"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.polski},on:{input:function(i){i.target.composing||(t.polski=i.target.value)}}})])]),e("div",{staticClass:"point"},[e("div",{staticClass:"underUnderSection"},[t._v("Matematyka")]),e("div",{staticClass:"pointS"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.matematyka,expression:"matematyka"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.matematyka},on:{input:function(i){i.target.composing||(t.matematyka=i.target.value)}}})])]),e("div",{staticClass:"point"},[e("div",{staticClass:"underUnderSection"},[t._v("Język obcy "),3==t.egzamin?e("span",[t._v("(poziom podstawowy)")]):t._e()]),e("div",{staticClass:"pointS"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.obcy,expression:"obcy"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.obcy},on:{input:function(i){i.target.composing||(t.obcy=i.target.value)}}})])]),3==t.egzamin?e("div",[e("div",{staticClass:"point"},[e("div",{staticClass:"underUnderSection"},[t._v("Historia i WOS")]),e("div",{staticClass:"pointS"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.historia,expression:"historia"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.historia},on:{input:function(i){i.target.composing||(t.historia=i.target.value)}}})])]),e("div",{staticClass:"point"},[e("div",{staticClass:"underUnderSection"},[t._v("Przyrodniczy")]),e("div",{staticClass:"pointS"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pszyrka,expression:"pszyrka"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.pszyrka},on:{input:function(i){i.target.composing||(t.pszyrka=i.target.value)}}})])])]):t._e(),t.blad?e("div",{staticClass:"error"},[t._v(t._s(t.moze))]):t._e(),e("div",{staticClass:"buton bigbuton",on:{click:function(i){return t.oblicz()}}},[t._v(t._s(t.wynik))])]):t._e()],2),t._m(3)])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pointName"},[t._v("Świadectwo z wyróżnieniem czyli "),e("b",[t._v("czerwony pasek")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pointName"},[t._v("Aktywność społeczna czyli "),e("b",[t._v("wolontariat")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticClass:"tip"},[t._v("Laureaci z konkursów kuratoryjnych "),e("b",[t._v("przedmiotowych")]),t._v(" są przyjmowani do szkoły w pierwszej kolejności"),e("br"),t._v("Liczą się tylko finaliści i laureaci, więc jeśli nigdy nie dostałeś żadnego papierka o tym, to się nie liczy"),e("br"),e("br"),t._v("Jeżeli klikniesz zaznaczone ponownie, zostanie odznaczone"),e("br"),t._v("Jeżeli nie posiadasz żadnych osiągnięć, możesz pominąć tę sekcję")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("footer",[t._v("Na podstawie danych z "),e("a",{attrs:{href:"https://www.gov.pl/web/edukacja"}},[t._v("Ministerstwa Edukacji Narodowej")]),t._v(" • Źródło strony na "),e("a",{attrs:{href:"https://github.com/pizza61/kpkt"}},[t._v("GitHub")])])}],o=(e("c5f6"),e("ac6a"),{name:"app",methods:{selectA:function(t){1==t.s?t.s=!1:t.s=!0},selectB:function(t,i){i.s==t?i.s=0:i.s=t},oblicz:function(){var t=this;this.blad=!1;var i=0;this.subjects.forEach(function(e){switch(e.ocena){case 6:i+=18;break;case 5:i+=17;break;case 4:i+=14;break;case 3:i+=8;break;case 2:i+=2;break;case 1:t.blad=!0,t.moze="z jedyneczką daleko nie zajdziesz";break;default:t.blad=!0,t.moze="Nie podałeś oceny!";break}}),this.wolontariat&&(i+=3),this.pasek&&(i+=7);var e=0;this.konkursyes.forEach(function(t){var i=0;t.sections.forEach(function(t){t.count?t.s>0&&t.count[t.s-1].points>i&&(i=t.count[t.s-1].points):t.s&&t.points>i&&(i=t.points)}),e+i>18?e=18:e+=i}),i+=e,8==this.egzamin?(this.polski<=100&&this.polski>0?i+=.35*Number(this.polski):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.matematyka<=100&&this.matematyka>0?i+=.35*Number(this.matematyka):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.obcy<=100&&this.obcy>0?i+=.3*Number(this.obcy):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.blad||(this.wynik="Twój wynik to "+i+" pkt")):3==this.egzamin?(this.polski<=100&&this.polski>0?i+=.2*Number(this.polski):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.matematyka<=100&&this.matematyka>0?i+=.2*Number(this.matematyka):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.obcy<=100&&this.obcy>0?i+=.2*Number(this.obcy):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.historia<=100&&this.historia>0?i+=.2*Number(this.historia):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.pszyrka<=100&&this.pszyrka>0?i+=.2*Number(this.pszyrka):(this.blad=!0,this.moze="Podano nieprawidłowy wynik egzaminu"),this.blad||(this.wynik="Twój wynik to "+i+" pkt")):(this.blad=!0,this.moze="Nie wybrano egzaminu")}},data:function(){return{subjects:[{displayName:"języka polskiego",ocena:null},{displayName:"matematyki",ocena:null},{displayName:"pierwszego wybranego przedmiotu",ocena:null},{displayName:"drugiego wybranego przedmiotu",ocena:null}],konkursyes:[{name:"konkursy kuratoryjne o zasięgu ponadwojewódzkim",sections:[{name:"tytuł finalisty konkursu przedmiotowego",points:10,s:!1},{name:"tytuł laureata konkursu tematycznego lub międzyprzedmiotowego",points:7,s:!1},{name:"tytuł finalisty konkursu tematycznego lub międzyprzedmiotowego",points:5,s:!1}],total:0},{name:"konkursy kuratoryjne wojewódzkie",sections:[{name:"tytuł finalisty konkursu przedmiotowego",count:[{n:"1 raz",points:7},{n:"2 lub więcej razy",points:10}],s:0},{name:"tytuł laureata konkursu tematycznego lub międzyprzedmiotowego",count:[{n:"1 raz",points:5},{n:"2 lub więcej razy",points:7}],s:0},{name:"tytuł finalisty konkursu tematycznego lub międzyprzedmiotowego",count:[{n:"1 raz",points:3},{n:"2 lub więcej razy",points:5}],s:0}],total:0},{name:"inne konkursy ogólnopolskie lub międzynarodowe (dotyczy szkół artystycznych)",sections:[{name:"tytuł finalisty konkursu z przedmiotu objętych planem nauczania",points:10,s:!1},{name:"tytuł laureata turnieju z przedmiotu nieobjętego planem nauczania",points:4,s:!1},{name:"tytuł finalisty turnieju z przedmiotu nieobjętego planem nauczania",points:3,s:!1}],total:0},{name:"inne konkursy wojewódzkie lub międzywojewódzkie (dotyczy szkół artystycznych)",sections:[{name:"tytuł finalisty konkursu z przedmiotu objętego planem nauczania",count:[{n:"1 raz",points:7},{n:"2 lub więcej razy",points:10}],s:0},{name:"tytuł laureata turnieju z przedmiotu nieobjętego planem nauczania",count:[{n:"1 raz",points:3},{n:"2 lub więcej razy",points:7}],s:0},{name:"tytuł finalisty turnieju z przedmiotu nieobjętego planem nauczania",count:[{n:"1 raz",points:2},{n:"2 lub więcej razy",points:5}],s:0}],total:0}],pasek:!1,wolontariat:!1,egzamin:0,polski:0,matematyka:0,obcy:0,historia:0,pszyrka:0,moze:"Błąd",wynik:"Oblicz wynik",blad:!1}}}),r=o,c=(e("5c0b"),e("2877")),u=Object(c["a"])(r,n,s,!1,null,null,null),l=u.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";var a=e("5e27"),n=e.n(a);n.a},"5e27":function(t,i,e){}});
//# sourceMappingURL=app.c3bde789.js.map