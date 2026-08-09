// Bridge Speech Therapy - Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Accordion Logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all accordions in same group if needed
      const parentGroup = item.parentElement;
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-item').forEach(child => {
          child.classList.remove('open');
          const childHeader = child.querySelector('.accordion-header');
          if (childHeader) childHeader.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Contact Page Tabs (Calendly vs Form)
  const tabBtnCalendly = document.getElementById('tab-btn-calendly');
  const tabBtnForm = document.getElementById('tab-btn-form');
  const tabContentCalendly = document.getElementById('tab-content-calendly');
  const tabContentForm = document.getElementById('tab-content-form');

  if (tabBtnCalendly && tabBtnForm && tabContentCalendly && tabContentForm) {
    tabBtnCalendly.addEventListener('click', () => {
      tabBtnCalendly.className = 'btn btn-primary';
      tabBtnForm.className = 'btn btn-outline';
      tabContentCalendly.style.display = 'block';
      tabContentForm.style.display = 'none';
    });

    tabBtnForm.addEventListener('click', () => {
      tabBtnForm.className = 'btn btn-primary';
      tabBtnCalendly.className = 'btn btn-outline';
      tabContentForm.style.display = 'block';
      tabContentCalendly.style.display = 'none';
    });
  }

  // Contact Form AJAX Handler
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  function showToast(message, isError = false) {
    if (!toast) return;
    const toastText = toast.querySelector('.toast-message');
    if (toastText) toastText.textContent = message;
    
    if (isError) {
      toast.style.backgroundColor = '#ef4444';
    } else {
      toast.style.backgroundColor = 'var(--primary-dark)';
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Send';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      const formData = new FormData(contactForm);
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          showToast('Thank you! Redirecting...');
          contactForm.reset();
          setTimeout(() => {
            window.location.href = '/thank-you.html';
          }, 800);
        } else {
          // Fallback if key not configured or fails
          showToast('Thank you! Opening your mail app...', false);
          setTimeout(() => {
            const email = formData.get('email') || '';
            const name = formData.get('name') || '';
            const message = formData.get('message') || '';
            window.location.href = `mailto:hello@bridgeslp.com?subject=Consultation%20Request%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
          }, 1500);
        }
      } catch (err) {
        showToast('Thank you! Opening your mail app...');
        const name = formData.get('name') || '';
        const message = formData.get('message') || '';
        setTimeout(() => {
          window.location.href = `mailto:hello@bridgeslp.com?subject=Consultation%20Request%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        }, 1500);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }
});
