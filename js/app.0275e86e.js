(function(e){function a(a){for(var i,n,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&u.push(t[n][0]),t[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],i=!0,n=1;n<o.length;n++){var c=o[n];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"deffb3a4","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"6a421713",creditos:"903a22f5",glosario:"f0487138",intro:"88b64783",referencias:"4dd68ce4",sintesis:"0afc18da",tema1:"b8e29063",tema2:"07fa14b1",tema3:"f8a2830e"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"7b816aef","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"0dfe5fca","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"cc043ef5","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"d8d58bc5",creditos:"54738403",glosario:"71f29b4f",intro:"31d6cfe0",referencias:"8b654f4f",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],m.parentNode.removeChild(m),o(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,o){i=t[e]=[a,o]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=t[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,o[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(o,i,function(a){return e[a]}.bind(null,i));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("68f3"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=o("2877"),l=Object(s["a"])(c,n,t,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Manipular sistemas de potabilización",descripcionCurso:"El proceso de potabilización de agua involucra el uso de unidades que mediante la aplicación de principios físicos y químicos permite remover del agua aquellos elementos indeseables, que pueden generar a simple vista un rechazo por parte de los usuarios o incluso representar algunos tipos de riesgo para la salud de estos. Es así como en el presente componente se llevará a cabo una revisión de los temas asociados con la operación de unidades de potabilización, manejo de insumos químicos y control de calidad.",imagenBannerPrincipal:o("9128"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("71f8")},{clases:["banner-principal-decorativo-2"],imagen:o("8f04")},{clases:["banner-principal-decorativo-3"],imagen:o("7d72")},{clases:["banner-principal-decorativo-4"],imagen:o("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Operación de unidades de potabilización",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Principales conceptos asociados al sistema de potabilización",hash:"t_1_1"},{numero:"1.2",titulo:"Tipos de agua",hash:"t_1_2"},{numero:"1.3",titulo:"Características físicas, químicas, organolépticas y microbiológicas del agua cruda y tratada",hash:"t_1_3"},{numero:"1.4",titulo:"Normatividad para agua potable: conceptos, aplicación",hash:"t_1_4"},{numero:"1.5",titulo:"Procesos y operaciones unitarias",hash:"t_1_5"}]},{nombreRuta:"tema2",numero:"2",titulo:"Instrumentos y equipos para el control de procesos de potabilización",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Instrumentación primaria",hash:"t_2_1"},{numero:"2.2",titulo:"Válvulas, motobombas y tableros eléctricos en el proceso de potabilización",hash:"t_2_2"},{numero:"2.3",titulo:"Bombas",hash:"t_2_3"},{numero:"2.4",titulo:"Sustancias químicas para el tratamiento de agua",hash:"t_2_4"},{numero:"2.5",titulo:"Equipos para la dosificación de insumos en la potabilización",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"Tratamiento de lodos y olores ofensivos",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Tratamiento de lodos",hash:"t_3_1"},{numero:"3.2",titulo:"Olores ofensivos",hash:"t_3_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/921200_CF06_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1.2 Tipos de agua.",referencia:"Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=e3Rlv1hW9yc"},{tema:"1.4 Normatividad para agua potable: conceptos, aplicación.",referencia:"Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título A. Aspectos generales de los sistemas de agua potable y saneamiento básico.",tipo:"Libro",link:"https://minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf"},{tema:"1.4 Normatividad para agua potable: conceptos, aplicación.",referencia:"Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título B. Sistemas de acueducto.",tipo:"Libro",link:"https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf"},{tema:"1.4 Normatividad para agua potable: conceptos, aplicación.",referencia:"Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título C. Potabilización de agua.",tipo:"Libro",link:"https://www.catorce6.com/images/legal/Titulo_C_Potabilizacion.pdf"}],glosario:[{termino:"Ablandamiento",significado:"remoción de la dureza (calcio y/o magnesio) del agua (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Agua cruda",significado:"es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Agua potable",significado:"aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el Decreto 1575 de 2007 del Ministerio de la Protección Social y demás normas que lo reglamentan, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Calidad del agua",significado:"resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Cloración",significado:"aplicación de cloro al agua, generalmente para desinfectar o para oxidar compuestos indeseables. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Desarenador",significado:"componente destinado a la remoción de las arenas y sólidos que están en suspensión en el agua, mediante un proceso de sedimentación. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Filtración",significado:"proceso mediante el cual se remueven las partículas suspendidas y coloidales del agua al hacerlas pasar a través de un medio poroso. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Pérdida de carga",significado:"disminución de la energía de un fluido debido a la resistencia que encuentra a su paso o pérdida de nivel. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"pH óptimo",significado:"valor de pH que produce la máxima eficiencia de remoción en un proceso determinado (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Planta de tratamiento o de potabilización",significado:"conjunto de obras, equipos, materiales y personal necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)"},{termino:"Turbiedad",significado:"propiedad óptica del agua basada en la medida de luz reflejada dispersada por las partículas en suspensión (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.). "}],referencias:[{referencia:"Aguas de occidente (s.f.). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P ",link:""},{referencia:"Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. YouTube.",link:"https://www.youtube.com/watch?v=e3Rlv1hW9yc"},{referencia:"Marín G., Rafael. (s.f.) Características físicas, químicas y biológicas de las aguas. Córdoba.",link:""},{referencia:"Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título A. ",link:""},{referencia:"Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título B",link:""},{referencia:"Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título C.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricía Aristizábal Gutiérres",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Xiomara Becerra Aldana",cargo:"Instructora Ambiental",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Lubin Andrés Hernández Sanabria",cargo:"Instructor Ambiental",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Jesús Ricardo Arias Munevar",cargo:"Instructor Ambiental",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Javier Ricardo Luna Pineda",cargo:"Diseñador Instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Evaluador Instruccional",centro:"Centro de diseño y metrología - Regional Distrito Capital"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador Instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisión Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftali Lizcano Reyes",cargo:"Asesor Pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "},{nombre:"Gloria Amparo López Escudero",cargo:"Adecuador Instruccional",centro:"Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital."},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesor metodológico",centro:"Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital."}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Jesús Antonio Vecino Valero",cargo:"Diseño web",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Manuel Felipe Echavarria Orozco",cargo:"Desarrollador Fullstack",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Jhon Jairo Urueta Álvarez",cargo:"Desarrollo Fullstack",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluadora de contenidos inclusivos y accesibles",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validadora de recursos educativos",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validadora de recursos educativos",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var C=o("9224");i["a"].prototype.$package=C,new i["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},"71f8":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.8c6dfee9.svg"},"7d72":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.c2be14ce.svg"},"8f04":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2.013495ee.svg"},9128:function(e,a,o){e.exports=o.p+"img/banner-princiapal.f0a97baa.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.5bca3987.png"},f53d:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-4.3af9bb32.svg"}});
//# sourceMappingURL=app.0275e86e.js.map