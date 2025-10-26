// Year stamp & lightweight form handler
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('signup');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const endpoint = form.getAttribute('action');
  try {
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
    if (res.ok) {
      form.reset();
      alert('Thanks — you’re on the list.');
    } else {
      alert('Hmm, that didn’t work. Double‑check your email and try again.');
    }
  } catch (err) {
    alert('Network hiccup. Try again in a moment.');
  }
});
