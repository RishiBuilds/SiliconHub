


let currentIndex = 0;
let carouselTimer = null;

function showSlide(index) {
  const inner = document.querySelector('.carousel-inner');
  if (!inner) return;
  const slides = inner.querySelectorAll('.carousel-item');
  if (!slides.length) return;

  const total = slides.length;
  if (index >= total) currentIndex = 0;
  else if (index < 0) currentIndex = total - 1;
  else currentIndex = index;

  inner.style.transform = `translateX(${-currentIndex * 100}%)`;

  
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(nextSlide, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  showSlide(0);

  
  const slides = document.querySelectorAll('.carousel-item');
  if (slides.length > 1) {
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.onclick = () => { showSlide(i); resetCarouselTimer(); };
      dotsContainer.appendChild(dot);
    });
    carousel.appendChild(dotsContainer);
  }

  startCarouselTimer();

  
  carousel.addEventListener('mouseenter', () => clearInterval(carouselTimer));
  carousel.addEventListener('mouseleave', startCarouselTimer);
});

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarouselTimer();
}


function serch() {
  const search = document.getElementById('serch').value.trim().toLowerCase();
  if (!search) { erpopup('Please enter something to search!'); return; }

  const routes = {
    'fan': 'cooling-fans.html',
    "fan's": 'cooling-fans.html',
    'cooling fan': 'cooling-fans.html',
    "cooling fan's": 'cooling-fans.html',
    'cooling fans': 'cooling-fans.html',
    'graphic card': 'graphic-cards.html',
    "graphic card's": 'graphic-cards.html',
    'graphic cards': 'graphic-cards.html',
    'graphics card': 'graphic-cards.html',
    "graphics card's": 'graphic-cards.html',
    'graphics cards': 'graphic-cards.html',
    'gpu': 'graphic-cards.html',
    'motherboard': 'motherboards.html',
    "motherboard's": 'motherboards.html',
    'motherboards': 'motherboards.html',
    'processor': 'processors.html',
    "processor's": 'processors.html',
    'processors': 'processors.html',
    'cpu': 'processors.html',
    'ram': 'ram.html',
    "ram's": 'ram.html',
    'memory': 'ram.html',
    'smps': 'power-supply.html',
    'psu': 'power-supply.html',
    'power supply': 'power-supply.html',
    "power supply's": 'power-supply.html',
    'powersupply': 'power-supply.html',
    'ssd': 'ssd.html',
    "ssd's": 'ssd.html',
    'solid state drive': 'ssd.html',
    'storage': 'ssd.html'
  };

  const isInPages = window.location.pathname.includes('/pages/');
  const prefix = isInPages ? '' : 'pages/';

  if (routes[search]) {
    window.location.href = prefix + routes[search];
  } else {
    erpopup('No results for "' + document.getElementById('serch').value.trim() + '"');
  }
}


document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'serch') {
    serch();
  }
});


function popup(message) {
  const existing = document.querySelector('.custom-popup');
  if (existing) existing.remove();

  const popupBox = document.createElement('div');
  popupBox.className = 'custom-popup';

  const header = document.createElement('div');
  header.className = 'custom-popup-header';

  const left = document.createElement('div');
  left.className = 'left-section';
  left.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/></svg>Silicon-Hub`;

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.className = 'close-button';
  closeBtn.onclick = () => popupBox.remove();

  header.appendChild(left);
  header.appendChild(closeBtn);

  const body = document.createElement('div');
  body.className = 'custom-popup-body';
  body.textContent = message;

  popupBox.appendChild(header);
  popupBox.appendChild(body);
  document.body.appendChild(popupBox);
  popupBox.style.display = 'block';

  setTimeout(() => { if (document.body.contains(popupBox)) popupBox.remove(); }, 3500);
}


function erpopup(message) {
  const existing = document.querySelector('.ercustom-popup');
  if (existing) existing.remove();

  const popupBox = document.createElement('div');
  popupBox.className = 'ercustom-popup';

  const header = document.createElement('div');
  header.className = 'ercustom-popup-header';

  const left = document.createElement('div');
  left.className = 'left-section';
  left.style.color = '#ff9999';
  left.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>Silicon-Hub`;

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.className = 'close-button';
  closeBtn.onclick = () => popupBox.remove();

  header.appendChild(left);
  header.appendChild(closeBtn);

  const body = document.createElement('div');
  body.className = 'custom-popup-body';
  body.textContent = message;

  popupBox.appendChild(header);
  popupBox.appendChild(body);
  document.body.appendChild(popupBox);
  popupBox.style.display = 'block';

  setTimeout(() => { if (document.body.contains(popupBox)) popupBox.remove(); }, 3500);
}




function parseCart() {
  const raw = localStorage.getItem('cart');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}


function clearAllCookies() {
  localStorage.removeItem('cart');
}

function cart() {
  const items = parseCart();
  if (!items.length) {
    erpopup('Your cart is empty!');
    return;
  }
  let msg = `🛒 Cart (${items.length} item${items.length > 1 ? 's' : ''}):\n`;
  items.forEach(it => { msg += `• ${it.name} ×${it.qty} - Rs ${it.total}/-\n`; });
  popup(msg);
}

function clrcart() {
  clearAllCookies();
  popup('Cart cleared!');
  setTimeout(() => location.reload(), 2500);
}


function buy() {
  const items = parseCart();
  if (!items.length) {
    erpopup('Cart is empty! Add items first.');
    return false;
  }

  let grandTotal = 0;
  let rows = '';
  items.forEach((it, i) => {
    grandTotal += it.total;
    rows += `<tr><td>${i + 1}</td><td>${it.name}</td><td>${it.qty}</td><td>Rs ${it.price.toLocaleString('en-IN')}/-</td><td>Rs ${it.total.toLocaleString('en-IN')}/-</td></tr>`;
  });

  const invoiceContent = `
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><title>Silicon-Hub Invoice</title>
<style>
  body { font-family: 'Inter', Arial, sans-serif; padding: 32px; background: #f9f9f9; color: #1a1a2e; }
  .logo { font-size: 1.5em; font-weight: 800; color: #1a1a2e; border-bottom: 3px solid #FF8C00; padding-bottom: 12px; margin-bottom: 8px; }
  .meta { font-size: 0.85em; color: #666; margin-bottom: 24px; }
  table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
  th { background: #1a1a2e; color: white; padding: 12px 14px; text-align: left; font-size: 0.9em; }
  td { padding: 10px 14px; border-bottom: 1px solid #f0f0f0; font-size: 0.9em; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #f8f9ff; }
  .total { text-align: right; font-size: 1.2em; font-weight: 700; color: #1a1a2e; margin-top: 16px; }
  .total span { color: #4CAF50; }
  .footer { margin-top: 32px; text-align: center; color: #999; font-size: 0.85em; }
  .print-btn { display: block; margin: 20px auto 0; background: #FF8C00; color: white; padding: 12px 30px; border: none; border-radius: 8px; cursor: pointer; font-size: 1em; font-weight: 700; }
  @media print { .print-btn { display: none; } }
</style></head><body>
<div class="logo">🖥 Silicon-Hub</div>
<div class="meta">Invoice &nbsp;|&nbsp; Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} &nbsp;|&nbsp; Time: ${new Date().toLocaleTimeString()}</div>
<table><thead><tr><th>#</th><th>Product</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table>
<p class="total">Grand Total: <span>Rs ${grandTotal.toLocaleString('en-IN')}/-</span></p>
<button class="print-btn" onclick="window.print()">🖨 Print Invoice</button>
<p class="footer">Thank you for shopping at Silicon-Hub! &copy; 2024 Programmers.</p>
</body></html>`;

  const win = window.open('', '_blank');
  if (win) { win.document.write(invoiceContent); win.document.close(); }

  clearAllCookies();
  popup('Invoice generated! Cart cleared.');
  setTimeout(() => location.reload(), 2500);
  return false;
}
