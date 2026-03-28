/* ============================================================
   PRODUCTOS — AGREGA O EDITA AQUÍ TUS AROS
   ============================================================ */
const productosOro = [
  {
    id: 'oro-01',
    nombre: 'Aro Argolla Lisa',
    material: 'Oro 18K — Joyas KM',
    descripcion: 'Aro argolla en oro 18K, superficie lisa pulida. Diseño clásico atemporal, acabado espejo de alta calidad.',
    precio: 'p-oro-01',
    nuevo: false,
    fotos: [
      'img/aros-oro/oro01-1.jpg',
      'img/aros-oro/oro01-2.jpg',
      'img/aros-oro/oro01-3.jpg',
      'img/aros-oro/oro01-4.jpg',
    ],
    wsp: 'Aro%20Argolla%20Lisa%20en%20Oro%2018K'
  },
  {
    id: 'oro-02',
    nombre: 'Aro Colgante Lazo',
    material: 'Oro 18K — Joyas KM',
    descripcion: 'Aro colgante con diseño de lazo artesanal en oro 18K. Elegante y femenino, ideal para toda ocasión.',
    precio: 'p-oro-02',
    nuevo: true,
    fotos: [
      'img/aros-oro/oro02-1.jpg',
      'img/aros-oro/oro02-2.jpg',
      'img/aros-oro/oro02-3.jpg',
      'img/aros-oro/oro02-4.jpg',
    ],
    wsp: 'Aro%20Colgante%20Lazo%20en%20Oro%2018K'
  },
  {
    id: 'oro-03',
    nombre: 'Aro Diamantado',
    material: 'Oro 18K — Joyas KM',
    descripcion: 'Aro argolla con textura diamantada artesanal en oro 18K. Superficie facetada que capta la luz en cada movimiento.',
    precio: 'p-oro-03',
    nuevo: false,
    fotos: [
      'img/aros-oro/oro03-1.jpg',
      'img/aros-oro/oro03-2.jpg',
      'img/aros-oro/oro03-3.jpg',
      'img/aros-oro/oro03-4.jpg',
    ],
    wsp: 'Aro%20Diamantado%20en%20Oro%2018K'
  },
];

const productosPlata = [
  {
    id: 'plata-01',
    nombre: 'Aro Argolla Lisa Plata',
    material: 'Plata 925 — Joyas KM',
    descripcion: 'Aro argolla en plata 925, superficie lisa pulida. Diseño clásico y versátil para uso diario.',
    precio: 'p-plata-01',
    nuevo: false,
    fotos: [
      'img/aros-plata/plata01-1.jpg',
      'img/aros-plata/plata01-2.jpg',
      'img/aros-plata/plata01-3.jpg',
      'img/aros-plata/plata01-4.jpg',
    ],
    wsp: 'Aro%20Argolla%20Lisa%20en%20Plata%20925'
  },
  {
    id: 'plata-02',
    nombre: 'Aro Colgante Estrella',
    material: 'Plata 925 — Joyas KM',
    descripcion: 'Aro colgante con dije de estrella en plata 925. Diseño moderno y luminoso para el día a día.',
    precio: 'p-plata-02',
    nuevo: true,
    fotos: [
      'img/aros-plata/plata02-1.jpg',
      'img/aros-plata/plata02-2.jpg',
      'img/aros-plata/plata02-3.jpg',
      'img/aros-plata/plata02-4.jpg',
    ],
    wsp: 'Aro%20Colgante%20Estrella%20en%20Plata%20925'
  },
  {
    id: 'plata-03',
    nombre: 'Aro Perla Barroca',
    material: 'Plata 925 — Joyas KM',
    descripcion: 'Aro con perla barroca natural montada en plata 925. Elegancia natural y sofisticada para cada ocasión.',
    precio: 'p-plata-03',
    nuevo: false,
    fotos: [
      'img/aros-plata/plata03-1.jpg',
      'img/aros-plata/plata03-2.jpg',
      'img/aros-plata/plata03-3.jpg',
      'img/aros-plata/plata03-4.jpg',
    ],
    wsp: 'Aro%20Perla%20Barroca%20en%20Plata%20925'
  },
];

/* ============================================================
   ICONO WHATSAPP SVG
   ============================================================ */
const wspIcon = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ============================================================
   GENERAR TARJETA DE PRODUCTO
   ============================================================ */
function crearTarjeta(p) {
  const badge = p.nuevo ? `<div class="badge-nuevo">Nuevo</div>` : '';

  const thumbs = p.fotos.map((foto, i) =>
    `<div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeImg(this, '${foto}')">
       <img src="${foto}" onerror="this.src='https://placehold.co/100x100/F8F5EE/C9A84C?text=${i+1}'">
     </div>`
  ).join('');

  return `
  <div class="product-card">
    <div class="gallery-main" onclick="openLightbox(this.querySelector('img').src)">
      <img src="${p.fotos[0]}" alt="${p.nombre}"
           onerror="this.src='https://placehold.co/600x600/F8F5EE/C9A84C?text=Foto+Pronto'">
      ${badge}
    </div>
    <div class="gallery-thumbs">${thumbs}</div>
    <div class="product-info">
      <div class="product-name">${p.nombre}</div>
      <div class="product-material">${p.material}</div>
      <div class="product-desc">${p.descripcion}</div>
      <div class="product-price-row">
        <span class="product-price" id="${p.precio}"></span>
        <span class="product-price-unit">CLP</span>
      </div>
      <a class="btn-whatsapp"
         href="https://wa.me/56945460876?text=Hola%20Joyas%20KM%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20${p.wsp}"
         target="_blank">
        ${wspIcon} Consultar por WhatsApp
      </a>
    </div>
  </div>`;
}

/* ============================================================
   RENDERIZAR GRIDS
   ============================================================ */
function renderizar() {
  document.getElementById('grid-oro').innerHTML   = productosOro.map(crearTarjeta).join('');
  document.getElementById('grid-plata').innerHTML = productosPlata.map(crearTarjeta).join('');
  cargarPrecios();
}

/* ============================================================
   CARGAR PRECIOS DESDE CSS
   ============================================================ */
function cargarPrecios() {
  const s = getComputedStyle(document.documentElement);
  const todos = [...productosOro, ...productosPlata];
  todos.forEach(p => {
    const el = document.getElementById(p.precio);
    if (el) el.textContent = s.getPropertyValue(`--precio-${p.precio.replace('p-','')}`).trim().replace(/"/g,'');
  });
}

/* ============================================================
   TABS
   ============================================================ */
function showSection(nombre, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + nombre).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   GALERÍA MINIATURAS
   ============================================================ */
function changeImg(thumb, src) {
  const card = thumb.closest('.product-card');
  const main = card.querySelector('.gallery-main img');
  const thumbs = card.querySelectorAll('.thumb');
  main.style.opacity = '0';
  setTimeout(() => { main.src = src; main.style.opacity = '1'; }, 180);
  thumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('DOMContentLoaded', renderizar);