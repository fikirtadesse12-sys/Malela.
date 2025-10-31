/* Small JS to power filters, modal, theme toggle and contact form */
document.addEventListener('DOMContentLoaded', () => {
  // theme toggle (persist)
  const themeToggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');
  updateToggleText();

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateToggleText();
  });

  function updateToggleText(){
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  }

  // scroll nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  document.getElementById('scroll-contact').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  });

  // filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.grid .card');
  filterBtns.forEach(f => f.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    f.classList.add('active');
    const type = f.dataset.filter;
    cards.forEach(c => {
      c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none';
    });
  }));

  // modal view
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modalTitle.textContent = btn.dataset.title || 'Project';
      modalDesc.textContent = btn.dataset.desc || '';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });
  });
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  // contact form basic validation
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      formMsg.textContent = 'Please complete all fields.';
      return;
    }
    formMsg.textContent = 'Message ready to send (demo only).';
    form.reset();
    setTimeout(()=> formMsg.textContent = '', 3000);
  });
  document.getElementById('clear-form').addEventListener('click', () => {
    form.reset(); formMsg.textContent = '';
  });

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
/* ...existing code... */
document.addEventListener('DOMContentLoaded', () => {
  // theme toggle (persist)
  const themeToggle = document.getElementById('theme-toggle');

  // if button missing, nothing to do
  if (!themeToggle) return;

  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');
  updateToggleText();

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateToggleText();
  });

  function updateToggleText() {
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  }
});
/* ...existing code... */