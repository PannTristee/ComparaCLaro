const PRODUCTS=[
{name:"Móviles y smartphones",category:"Móviles",emoji:"📱",desc:"Pantalla, cámara, batería, rendimiento y años de actualizaciones.",slug:"como-elegir-movil"},
{name:"Móviles reacondicionados",category:"Móviles",emoji:"♻️",desc:"Estado, salud de batería, garantía y devolución.",slug:"movil-reacondicionado-que-comprobar"},
{name:"Portátiles",category:"Ordenadores",emoji:"💻",desc:"Equilibra rendimiento, peso, pantalla, memoria y autonomía.",slug:"que-mirar-en-un-portatil"},
{name:"Memoria RAM y almacenamiento",category:"Ordenadores",emoji:"💾",desc:"Elige capacidad suficiente para tu uso y evita cuellos de botella.",slug:"cuanta-ram-y-almacenamiento-necesito"},
{name:"PC gaming",category:"Gaming",emoji:"🎮",desc:"Compara componentes, rendimiento objetivo, refrigeración y ampliación.",slug:"pc-gaming-que-comparar"},
{name:"Tablets",category:"Tablets",emoji:"▣",desc:"Pantalla, lápiz, teclado, autonomía y soporte de software.",slug:"tablet-que-comparar"},
{name:"Televisores",category:"Televisores",emoji:"📺",desc:"Panel, tamaño, HDR, HDMI y aplicaciones según tu salón.",slug:"televisor-que-comparar"},
{name:"Monitores",category:"Accesorios",emoji:"🖥️",desc:"Resolución, ergonomía, frecuencia y conexiones.",slug:"como-elegir-monitor"},
{name:"Auriculares",category:"Audio",emoji:"🎧",desc:"Ajuste, calidad de llamadas, comodidad y autonomía.",slug:"elegir-auriculares"},
{name:"Auriculares con cancelación de ruido",category:"Audio",emoji:"🎵",desc:"Valora el aislamiento real, el ajuste y el uso diario.",slug:"auriculares-cancelacion-ruido"},
{name:"Relojes inteligentes",category:"Wearables",emoji:"⌚",desc:"Compatibilidad, batería, sensores y soporte.",slug:"reloj-inteligente-como-elegir"},
{name:"Impresoras",category:"Impresión",emoji:"🖨️",desc:"Calcula el coste por página y compara consumibles y volumen.",slug:"impresora-que-comparar"},
{name:"Routers y Wi-Fi",category:"Redes",emoji:"📶",desc:"Cobertura, estándares, puertos y necesidades de tu vivienda.",slug:"wifi-router-que-comprobar"},
{name:"SSD externos y memorias USB",category:"Almacenamiento",emoji:"💽",desc:"Velocidad, capacidad, resistencia y copias de seguridad.",slug:"ssd-externo-o-usb"},
{name:"Cargadores y USB-C",category:"Accesorios",emoji:"🔌",desc:"Potencia, protocolos, cable y compatibilidad.",slug:"guia-usb-c-cargadores"},
{name:"Baterías externas",category:"Accesorios",emoji:"🔋",desc:"Capacidad útil, potencia de salida y seguridad.",slug:"bateria-externa-como-elegir"},
{name:"Cámaras y objetivos",category:"Audio",emoji:"📷",desc:"Sensor, enfoque, estabilización y sistema de objetivos.",slug:"../comparativas.html#en-preparacion"},
{name:"Consolas y gaming portátil",category:"Gaming",emoji:"🕹️",desc:"Juegos, rendimiento, portabilidad, suscripciones y accesorios.",slug:"../comparativas.html#en-preparacion"},
{name:"Altavoces y barras de sonido",category:"Audio",emoji:"🔊",desc:"Diálogos, conectividad, tamaño de sala y formatos compatibles.",slug:"../comparativas.html#en-preparacion"},
{name:"Cámaras de seguridad y hogar inteligente",category:"Accesorios",emoji:"🏠",desc:"Privacidad, almacenamiento, compatibilidad y cuotas.",slug:"../comparativas.html#en-preparacion"},
{name:"Docking stations y hubs",category:"Accesorios",emoji:"🔗",desc:"Puertos, alimentación, monitores y compatibilidad.",slug:"../comparativas.html#en-preparacion"},
{name:"Lectores de libros electrónicos",category:"Tablets",emoji:"📚",desc:"Pantalla, luz, formatos, autonomía y ecosistema.",slug:"../comparativas.html#en-preparacion"}
];
const grid=document.querySelector("#product-grid"),search=document.querySelector("#search"),category=document.querySelector("#category"),sort=document.querySelector("#sort");
function render(){if(!grid)return;const term=(search?.value||"").trim().toLocaleLowerCase("es");let items=PRODUCTS.filter(p=>(category?.value==="all"||p.category===category.value)&&[p.name,p.category,p.desc].some(s=>s.toLocaleLowerCase("es").includes(term)));if(sort?.value==="name-asc")items.sort((a,b)=>a.name.localeCompare(b.name,"es"));if(sort?.value==="name-desc")items.sort((a,b)=>b.name.localeCompare(a.name,"es"));grid.replaceChildren();if(!items.length){const empty=document.createElement("p");empty.className="empty-state";empty.textContent="No encontramos coincidencias. Prueba con otra búsqueda o categoría.";grid.append(empty);return;}items.forEach(p=>{const card=document.createElement("article");card.className="product-card";card.innerHTML='<div class="product-visual" aria-hidden="true"></div><span class="product-category"></span><h3></h3><p></p><div class="product-bottom"><span class="product-price">Guía editorial</span><a class="product-link">Ver guía ↗</a></div>';card.querySelector(".product-visual").textContent=p.emoji;card.querySelector(".product-category").textContent=p.category;card.querySelector("h3").textContent=p.name;card.querySelector("p").textContent=p.desc;const link=card.querySelector("a");link.href=p.slug.startsWith("../")?p.slug:"guias/"+p.slug+".html";link.setAttribute("aria-label","Consultar "+p.name);grid.append(card);});}
[search,category,sort].forEach(el=>el?.addEventListener("input",render));render();const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
