document.querySelectorAll('.accordion > button').forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.accordion > button').forEach((item) => { item.setAttribute('aria-expanded', 'false'); item.querySelector('b').textContent = '+'; });
    if (!isOpen) { button.setAttribute('aria-expanded', 'true'); button.querySelector('b').textContent = '−'; }
  });
});
document.getElementById('copy-code').addEventListener('click', async () => { await navigator.clipboard?.writeText('JTYA20-BBNL391'); });
document.getElementById('share').addEventListener('click', async () => { if (navigator.share) await navigator.share({ title: document.title, url: location.href }); else await navigator.clipboard?.writeText(location.href); });
document.querySelectorAll('.thumbnail').forEach((thumbnail) => thumbnail.addEventListener('click', () => { document.querySelectorAll('.thumbnail').forEach((item) => item.classList.remove('active')); thumbnail.classList.add('active'); }));
document.querySelector('.swatch').addEventListener('click', (event) => event.currentTarget.classList.toggle('selected'));
