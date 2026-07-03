// ===== MOBILE NAV TOGGLE =====
(function () {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
})();

// ===== WEB3FORMS AJAX SUBMIT =====
// Progressive enhancement: forms still POST normally if JS is disabled.
// With JS, submit via fetch and show an inline success/error message
// so the visitor stays on the page.
(function () {
    var forms = document.querySelectorAll('form.web3form');
    if (!forms.length) return;

    Array.prototype.forEach.call(forms, function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var status = form.querySelector('.form-status');
            if (!status) {
                status = document.createElement('div');
                status.className = 'form-status';
                form.appendChild(status);
            }
            var btn = form.querySelector('[type="submit"]');
            var originalLabel = btn ? btn.innerHTML : '';

            status.className = 'form-status';
            status.textContent = '';
            if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            })
                .then(function (res) {
                    return res.json().then(function (json) {
                        return { ok: res.ok, json: json };
                    });
                })
                .then(function (r) {
                    if (r.ok && r.json.success) {
                        form.reset();
                        status.className = 'form-status success';
                        status.textContent = 'Thank you — your message has been sent. Our team will be in touch shortly.';
                    } else {
                        status.className = 'form-status error';
                        status.textContent = (r.json && r.json.message)
                            ? r.json.message
                            : 'Something went wrong. Please try again, or email us directly.';
                    }
                })
                .catch(function () {
                    status.className = 'form-status error';
                    status.textContent = 'Network error. Please try again, or email us directly.';
                })
                .finally(function () {
                    if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
                });
        });
    });
})();

// ===== CLIENT LOGO FALLBACK =====
// Until the logo files exist in images/logos/, show the company name as text
// instead of a broken image, so the carousel still looks intentional.
(function () {
    var logos = document.querySelectorAll('.client-logo');
    if (!logos.length) return;
    Array.prototype.forEach.call(logos, function (img) {
        img.addEventListener('error', function () {
            var span = document.createElement('span');
            span.className = 'client-logo-fallback';
            span.textContent = img.getAttribute('alt') || '';
            if (img.getAttribute('aria-hidden') === 'true') {
                span.setAttribute('aria-hidden', 'true');
            }
            img.replaceWith(span);
        });
    });
})();

// ===== SCROLL REVEAL =====
// Fade + slide elements into view as the user scrolls. Above-the-fold
// elements are shown immediately (no flash); grid items stagger.
(function () {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    var SELECTORS = [
        '.section-label',
        '.container > h2',
        '.pillars-grid > *', '.product-grid > *', '.projects-grid > *',
        '.services-grid > *', '.why-solar-grid > *', '.values-grid > *',
        '.board-grid > *', '.personnel-grid > *', '.cert-grid > *',
        '.mv-grid > *', '.process-steps > *',
        '.featured-article', '.side-article', '.news-main', '.news-side-item',
        '.about-image', '.partnership-banner', '.logo-marquee', '.trust-item',
        '.inquiry-form', '.inquiry-info', '.contact-form', '.map-placeholder',
        '.subscribe-form'
    ];
    var els = document.querySelectorAll(SELECTORS.join(','));
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    // Pass 1: mark everything as revealable.
    Array.prototype.forEach.call(els, function (el) { el.classList.add('reveal'); });

    // Pass 2: stagger siblings, and reveal above-the-fold items now (no flash).
    var vh = window.innerHeight || document.documentElement.clientHeight;
    Array.prototype.forEach.call(els, function (el) {
        var parent = el.parentElement;
        if (parent) {
            var sibs = Array.prototype.filter.call(parent.children, function (c) {
                return c.classList.contains('reveal');
            });
            var idx = sibs.indexOf(el);
            if (idx > 0) el.style.transitionDelay = Math.min(idx, 6) * 70 + 'ms';
        }
        if (el.getBoundingClientRect().top < vh * 0.92) {
            el.classList.add('in-view');
        } else {
            observer.observe(el);
        }
    });
})();

// ===== HEADER SHADOW ON SCROLL =====
(function () {
    var header = document.getElementById('header');
    if (!header) return;
    var onScroll = function () {
        header.classList.toggle('scrolled', window.pageYOffset > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
