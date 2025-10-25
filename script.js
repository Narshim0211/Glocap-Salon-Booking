(function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const openFormLinks = document.querySelectorAll('.js-open-form');
  openFormLinks.forEach((el) => {
    el.addEventListener('click', () => {
      const lead = document.getElementById('lead');
      if (!lead) return;
      // Smooth scroll if supported
      lead.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const form = document.getElementById('lead-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submitBtn');

  function setStatus(message, tone = 'neutral') {
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.style.color = tone === 'error' ? '#FF6B6B' : tone === 'success' ? '#27D17F' : '#C9C6D3';
  }

  function validate(fields) {
    const emailOk = /.+@.+\..+/.test(fields.email);
    const salonOk = fields.salon.trim().length > 1;
    const painOk = fields.pain.trim().length > 5;
    return emailOk && salonOk && painOk;
  }

  async function fakeNetwork(payload) {
    // Simulate network latency; replace with real API call later
    return new Promise((resolve) => setTimeout(() => resolve({ ok: true, id: crypto.randomUUID?.() || String(Date.now()) }), 1000));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form || !submitBtn) return;

    const formData = new FormData(form);
    const payload = {
      email: (formData.get('email') || '').toString().trim(),
      salon: (formData.get('salon') || '').toString().trim(),
      pain: (formData.get('pain') || '').toString().trim(),
      ts: new Date().toISOString(),
      source: 'landing-page',
    };

    if (!validate(payload)) {
      setStatus('Please fill out all fields with valid information.', 'error');
      return;
    }

    submitBtn.disabled = true;
    const prev = submitBtn.textContent;
    submitBtn.textContent = 'Submitting…';
    setStatus('Submitting your request…');

    try {
      const result = await fakeNetwork(payload);
      if (result?.ok) {
        try {
          const key = 'salonflow:leads';
          const existing = JSON.parse(localStorage.getItem(key) || '[]');
          existing.push({ id: result.id, ...payload });
          localStorage.setItem(key, JSON.stringify(existing));
        } catch (_) {
          /* ignore storage errors */
        }
        setStatus("You're on the list! We’ll reach out shortly.", 'success');
        submitBtn.textContent = 'Added!';
        form.reset();
      } else {
        throw new Error('Network failed');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again.', 'error');
      submitBtn.textContent = prev;
    } finally {
      submitBtn.disabled = false;
      setTimeout(() => {
        if (submitBtn.textContent === 'Added!') submitBtn.textContent = prev;
      }, 1500);
    }
  }

  if (form) form.addEventListener('submit', onSubmit);
})();
