(function(e){function n(n){for(var i,o,c=n[0],s=n[1],l=n[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(n);while(d.length)d.shift()();return t.push.apply(t,l||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(t.splice(n--,1),e=s(s.s=a[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"e4ab7fb4","chunk-0206bfa0":"f6b22203","chunk-0c047e41":"9b1bb559","chunk-13a6037e":"06ae7612","chunk-18f95272":"5bd05219","chunk-25b302c8":"629f4d9c","chunk-26fc7596":"713d4d59","chunk-2c06842c":"e087eb9f","chunk-2d0e96ec":"e68856df","chunk-2d208d90":"e58f6df0","chunk-2d21d0e2":"9ec1a248","chunk-2d22c123":"f1248a7a","chunk-2d2747e2":"40b1ebaa","chunk-2e80bb9a":"2508c8be","chunk-319206de":"20972ce0","chunk-32334cb6":"419c87c5","chunk-3c57cd7b":"702ca2e7","chunk-3d6834f6":"fa33c370","chunk-4cdd78c0":"c09fb6b1","chunk-4f2d402a":"69353a2b","chunk-4fde0a08":"8f9eb629","chunk-515a8379":"f653132c","chunk-53ccb27e":"b935e3c7","chunk-55d286b8":"d53c5e8e","chunk-59974754":"9dd2eeb2","chunk-6e1e538a":"5d7a1f2d","chunk-766a929b":"f67dfaec","chunk-c796899c":"a57ae547","chunk-e8a7823a":"dad736a2","chunk-f2df7d2c":"3b80efdb","chunk-fde47172":"2a900ac7",comple:"154ca89e",creditos:"046e91c6",glosario:"3ce81847",intro:"50c44e1b",referencias:"2f49c751",sintesis:"5e6e2152",tema1:"1a9edc08",tema2:"ebf758e7",tema3:"f6240116",tema4:"8411ab3d",tema5:"b0dd8bec"}[e]+".js"}function s(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"e9d7d83e","chunk-6e1e538a":"126808df","chunk-766a929b":"48e7f305","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===r)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var i=n&&n.target&&n.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],m.parentNode.removeChild(m),a(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)n.push(i[2]);else{var t=new Promise((function(n,a){i=r[e]=[n,a]}));n.push(i[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=i,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(a,i,function(n){return e[n]}.bind(null,i));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("68f3"),o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=a("2877"),l=Object(s["a"])(c,o,r,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return a.e("tema5").then(a.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Plan de comunicación de producto sostenible",descripcionCurso:"El sector productivo tiene la necesidad de capacitar a los colaboradores responsables de la gestión de comunicación para que contribuyan a transmitir la información y el plan de comunicación de productos sostenibles, esto con el ánimo de que se elaboren campañas ambientales, teniendo en cuenta que la dinámica comercial debe ir orientada a la protección del medio ambiente.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"<i>Ecomarketing</i>",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"<i>Brief</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos de <i>brief</i> y sus elementos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Análisis e interpretación de la información",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Diseño, creatividad e innovación",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Comunicación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Elementos y estructura del mensaje",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Normativa de comunicación",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Plan de comunicación integral",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"<i>Insight</i>",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Concepto",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Tipos y estructura",hash:"t_4_2"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"<i>Storytelling</i>",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"2. <i>Brief</i>",referencia:"Méndez, J. (2016). <i>Brief o Briefing - Qué es y cómo hacer uno</i>.",tipo:"Video",link:"https://youtu.be/6vlN4DZVQGc"},{tema:"3. Comunicación",referencia:"Gutiérrez, M., F. (2016). <i>Técnicas de comunicación</i>. Editorial Secade.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/79262"},{tema:"3.3 Estructura comunicación integral",referencia:"Asociación Empresarial para el Desarrollo. (2017). <i>Comunicación estratégica de la sostenibilidad</i>. Aedcr.",tipo:"Documento PDF",link:"https://www.aedcr.com/sites/default/files/docs/manual_comunicacion_sostenibilidad.pdf"},{tema:"4. <i>Insight</i>",referencia:"Mohou San Miguel. (2019). <i>La 0,0 de los cerveceros</i>.",tipo:"Video",link:"https://youtu.be/KuXClfXX8nE"},{tema:"4. <i>Insight</i>",referencia:"Futbolistas amateurs. (2011). <i>Futbolistas que trabajan de otra cosa - Psicólogo - Gatorade</i>.",tipo:"Video",link:"https://youtu.be/BwnM1nnZpJA"},{tema:"5. <i>Storytelling</i>",referencia:"Freire, S., A. (2017). <i>¿Cómo crear un storytelling de marca?: de la teoría a la práctica profesional</i>.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/116296"}],glosario:[{termino:"Ambiental",significado:"perteneciente o relativo al ambiente."},{termino:"<em>Brief</em>",significado:"sección informativa, informaciones o informe, hace referencia a un documento."},{termino:"<em>Briefing</em>",significado:"acción de crear el <i>brief</i> desde cualquier o en cualquier etapa."},{termino:"Campaña",significado:"proyecto que se hace para alcanzar un determinado objetivo."},{termino:"Comunicación",significado:"acción consciente de intercambiar información entre dos o más participantes."},{termino:"<em>Ecomarketing</em>",significado:"desarrollo de productos destinados a minimizar los efectos negativos en el medio ambiente."},{termino:"Estructura",significado:"disposición y orden de las partes dentro de un todo, sistema de conceptos coherentes enlazados."},{termino:"<i>Insight</i>",significado:"término usado en <i>marketing</i>, comunicación, publicidad, es la visión para detectar necesidades del usuario."},{termino:"Marca",significado:"identificación comercial, conformada por atributos y valores que la hacen única."},{termino:"<i>Marketing</i>",significado:"sistema de investigar un mercado, ofrecer valor y satisfacer al cliente."},{termino:"Público objetivo",significado:"noción que se emplea en el ámbito del <i>marketing</i> y la publicidad. El concepto hace referencia a un consumidor representativo e ideal, al cual se dirige una campaña, o al comprador al que se aspira seducir con un producto o un servicio."},{termino:"Producto",significado:"resultado de una serie de procedimientos para armar, construir, fabricar y elaborar algún objeto con una función útil"},{termino:"Protocolo",significado:"conjunto de reglas o normas, se establece para actos oficiales o empresariales."},{termino:"Segmentar",significado:"en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo."},{termino:"Sostenible",significado:"algo que está en condiciones de conservarse o reproducirse por sus propias características."},{termino:"<i>Storytelling</i>",significado:"técnica de <i>marketing</i> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual."}],referencias:[{referencia:"Alter Partner. (2016). <i>Cómo hacer un plan de comunicación integral. Alter Partner</i>. ",link:"http://alterpartner.com/como-hacer-un-plan-de-comunicacion-integral-en-10-pasos/"},{referencia:"Antevenio. (2017). <i>Qué es el insight, definiciones de marketing</i>. Antevenio. ",link:"https://www.antevenio.com/blog/2017/02/que-es-un-insight-definiciones-de-marketing/"},{referencia:"Asociación Empresarial para el Desarrollo. (2017). <i>Comunicación estratégica de la sostenibilidad</i>. Aedcr. ",link:"https://www.aedcr.com/sites/default/files/docs/manual_comunicacion_sostenibilidad.pdf"},{referencia:"Master Base. (2013). <i>Estructura de un mensaje</i>. [Blog]. ",link:"https://cdn2.hubspot.net/hub/37780/file-13965982-pdf/docs/estructura_de_un_mensaje.pdf"},{referencia:"Nueva ISO 14001:2015. (2015). <i>ISO 14001: Comunicación ambiental</i>. [Blog]. ",link:"https://www.nueva-iso-14001.com/2015/06/iso-14001-comunicacion-ambiental/#:~:text=La%20norma%20ISO%2014001%20establece,Ambiental%20de%20una%20forma%20funcional"},{referencia:"Peralta, E. (2018). <i>Guía práctica para hacer un buen briefing</i>. Genwords. ",link:"https://www.genwords.com/blog/briefing"},{referencia:"Pérez, G. (2017). <i>¿Qué es un brief y cómo hacer uno?</i> Esmartia. ",link:"https://resources.esmartia.com/blog/que-es-un-brief-y-como-hacer-uno"},{referencia:"Question Pro. (s. f.). <i>Qué es un insight: Todo lo que debe saber</i>. Question Pro. ",link:"https://www.questionpro.com/blog/es/que-es-un-insight/"},{referencia:"Unipymes. (2014). <i>Política Nacional de Producción y Consumo Sostenible</i>. Unipymes. ",link:"https://www.unipymes.com/politica-nacional-de-produccion-y-consumo-sostenible/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Esperanza Cardona Grisales",cargo:"Experto Temático",centro:"Centro de Comercio y Servicios - Regional Cauca"},{nombre:"Giovanna Andrea Escobar Ospina",cargo:"Diseñadora Instruccional",centro:"Centro de la industria, la empresa y los servicios (CIES) - Regional Norte de Santander"},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Ramirez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jhon Jairo Urueta Alvarez",cargo:"Desarrollo front-end",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=v;var k=a("9224");i["a"].prototype.$package=k,new i["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.a423054b.svg"},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.2cb3ec18.png"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.7de51394.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.1fb47f53.png"}});
//# sourceMappingURL=app.3fce8814.js.map