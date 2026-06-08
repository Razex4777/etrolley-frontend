/**
 * E-Trolley Main Application Script
 * Developer: Razex Xelite
 * Satisfies: Zero Inline JS requirements (no inline script elements)
 */

document.addEventListener('DOMContentLoaded', function() {
  initNavbarScroll();
  initIntlTelInput();
  initContactDrawer();
  initCreatestore();
  initVerification();
  initRegistrationDropdown();
  initRegistrationForms();
  initDomainCheckboxes();
  initStepsCta();
  initServicesScroll();
  initDesignsCarousel();
  initDesignspage();
  initBlogpage();
  initServicepage();
  initPricespage();
});

/* Helper to check current language */
function isArabic() {
  return document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
}

/* 1. Global Navbar scroll logic & Side CTA placement */
function initNavbarScroll() {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  function checkScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 20) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  window.addEventListener('resize', checkScroll, { passive: true });
  document.addEventListener('scroll', checkScroll, { passive: true });
  
  checkScroll();
  window.addEventListener('load', checkScroll);

  var sideCta = document.querySelector('[data-side-cta]');
  if (sideCta && sideCta.parentNode !== document.body) {
    document.body.appendChild(sideCta);
  }
}

/* 2. intl-tel-input library initialization */
function initIntlTelInput() {
  var phoneInput = document.getElementById('phone-input');
  if (!phoneInput) return;

  if (window.intlTelInput) {
    window.itiInstance = window.intlTelInput(phoneInput, {
      initialCountry: "qa",
      separateDialCode: false,
      preferredCountries: ["qa", "sa", "ae", "kw", "om", "bh"],
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js"
    });

    // Wrap flag inside a 38x38 container box
    function wrapFlag() {
      var flag = document.querySelector('.iti__selected-flag .iti__flag');
      if (flag && !flag.parentNode.classList.contains('iti__flag-box')) {
        var box = document.createElement('div');
        box.className = 'iti__flag-box';
        flag.parentNode.insertBefore(box, flag);
        box.appendChild(flag);
      }
    }

    setTimeout(wrapFlag, 50);
    phoneInput.addEventListener('countrychange', wrapFlag);
  }
}

/* 3. CSS-Only Expandable Contact Drawer Modal Event handling */
function initContactDrawer() {
  // Drawer form onsubmit handler
  var drawerForm = document.querySelector('.contact-drawer__form');
  if (drawerForm) {
    drawerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم إرسال الرسالة بنجاح!' : 'Message sent!');
      window.location.hash = '#';
    });
  }

  // Settle main contact forms
  var mainContactForms = document.querySelectorAll('.contact__form');
  mainContactForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم إرسال الرسالة بنجاح!' : 'Message sent!');
    });
  });

  var mainComplaintsForms = document.querySelectorAll('.contact__complaints-form');
  mainComplaintsForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم الإرسال بنجاح!' : 'Form submitted!');
    });
  });
}

/* 4. Create Store Form submit */
function initCreatestore() {
  var form = document.getElementById('phone-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var phoneInput = document.getElementById('phone-input');
    if (!phoneInput) return;

    var val = phoneInput.value.trim();
    var dialCode = "";
    if (window.itiInstance) {
      dialCode = "+" + window.itiInstance.getSelectedCountryData().dialCode + " ";
    }
    var fullNum = dialCode + val;
    localStorage.setItem('etrolley_phone', fullNum);
    window.location.href = isArabic() ? 'verification-ar.html' : 'verification.html';
  });
}

/* 5. Verification inputs, paste & countdown timer */
function initVerification() {
  var verifyForm = document.getElementById('verify-form');
  var codeInputs = document.querySelectorAll('.createstore__code-input');
  if (!verifyForm || !codeInputs.length) return;

  // Populate phone number from localStorage
  var savedPhone = localStorage.getItem('etrolley_phone');
  var displayNum = document.getElementById('verify-phone-display');
  if (displayNum) {
    displayNum.textContent = savedPhone ? savedPhone : '+974 33433313';
  }

  // Digit Inputs Behavior (move focus forward/back)
  codeInputs.forEach(function(input, idx) {
    input.addEventListener('input', function() {
      input.value = input.value.replace(/[^0-9]/g, '');
      if (input.value.length === 1 && idx < codeInputs.length - 1) {
        codeInputs[idx + 1].focus();
      }
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && input.value.length === 0 && idx > 0) {
        codeInputs[idx - 1].focus();
      }
    });

    input.addEventListener('paste', function(e) {
      e.preventDefault();
      var pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (/^\d+$/.test(pasteData)) {
        var chars = pasteData.split('');
        codeInputs.forEach(function(inp, i) {
          if (chars[i]) {
            inp.value = chars[i];
            if (i < codeInputs.length - 1) {
              codeInputs[i + 1].focus();
            }
          }
        });
      }
    });
  });

  // Verify Form Submit Handler
  verifyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var code = Array.from(codeInputs).map(function(i) { return i.value; }).join('').trim();
    if (code === '11111' || code === '111111' || code === '1111') {
      window.location.href = isArabic() ? 'registration-ar.html' : 'registration.html';
    } else {
      alert(isArabic() ? 'رمز التحقق غير صحيح! يرجى استخدام الرمز: 11111' : 'Invalid Verification Code! Please use the code: 11111');
    }
  });

  // Countdown Timer logic
  var timerInterval;
  function startTimer(seconds) {
    clearInterval(timerInterval);
    var display = document.getElementById('countdown-timer');
    if (!display) return;
    
    var timeLeft = seconds;
    display.textContent = timeLeft;

    timerInterval = setInterval(function() {
      timeLeft--;
      display.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        setTimeout(function() { startTimer(22); }, 2000);
      }
    }, 1000);
  }

  // Auto-focus first field & start timer
  setTimeout(function() {
    if (codeInputs[0]) codeInputs[0].focus();
  }, 200);
  startTimer(22);
}

/* 6. Registration dropdown selections */
function initRegistrationDropdown() {
  var dropdown = document.getElementById('store-type-dropdown');
  if (!dropdown) return;

  var btn = dropdown.querySelector('.createstore__select-btn');
  var hiddenInput = document.getElementById('store-type-val');
  var placeholder = document.getElementById('selected-store-type');
  if (!btn || !hiddenInput || !placeholder) return;

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
  });

  document.addEventListener('click', function() {
    btn.setAttribute('aria-expanded', 'false');
  });

  dropdown.querySelectorAll('.createstore__select-option').forEach(function(opt) {
    opt.addEventListener('click', function(e) {
      e.stopPropagation();
      var val = opt.getAttribute('data-value');
      var text = opt.textContent;

      hiddenInput.value = val;
      placeholder.textContent = text;
      btn.classList.add('has-value');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 7. Registration & login form submits */
function initRegistrationForms() {
  // Step 1: registration.html
  var regForm = document.getElementById('register-form');
  if (regForm) {
    regForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = isArabic() ? 'registration2-ar.html' : 'registration2.html';
    });
  }

  // Step 2: registration2.html
  var reg2Form = document.getElementById('register2-form');
  if (reg2Form) {
    reg2Form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم إكمال التسجيل بنجاح!' : 'Registration Completed Successfully!');
      window.location.href = isArabic() ? 'index-ar.html' : 'index.html';
    });
  }

  // Step 3: registration3.html
  var reg3Form = document.getElementById('register3-form');
  if (reg3Form) {
    reg3Form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم إكمال التسجيل بنجاح!' : 'Registration Completed Successfully!');
      window.location.href = isArabic() ? 'index-ar.html' : 'index.html';
    });
  }

  // Login: login.html
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(isArabic() ? 'تم تسجيل الدخول بنجاح!' : 'Login Successful!');
      window.location.href = isArabic() ? 'index-ar.html' : 'index.html';
    });
  }
}

/* 8. Handle domain checkboxes toggle navigation */
function initDomainCheckboxes() {
  var domainCheckboxes = document.querySelectorAll('.createstore__domain-checkbox');
  domainCheckboxes.forEach(function(cb) {
    cb.addEventListener('click', function() {
      if (cb.checked) {
        window.location.href = isArabic() ? 'registration3-ar.html' : 'registration3.html';
      } else {
        window.location.href = isArabic() ? 'registration2-ar.html' : 'registration2.html';
      }
    });
  });
}

/* 9. Steps CTA magnetic hover animation */
function initStepsCta() {
  var cta = document.querySelector('[data-component="steps"] .steps__cta');
  if (!cta) return;
  var text = cta.querySelector('.steps__cta-text');

  var targetX = 0, targetY = 0;
  var currentX = 0, currentY = 0;
  var textTargetX = 0, textTargetY = 0;
  var textCurrentX = 0, textCurrentY = 0;

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  function tick() {
    var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var isDesktop = window.innerWidth > 1100;
    if (hasHover && isDesktop) {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      textCurrentX = lerp(textCurrentX, textTargetX, 0.15);
      textCurrentY = lerp(textCurrentY, textTargetY, 0.15);
      cta.style.transform = 'translateX(-50%) translate(' + currentX.toFixed(2) + 'px, ' + currentY.toFixed(2) + 'px)';
      if (text) {
        text.style.transform = 'translate(' + textCurrentX.toFixed(2) + 'px, ' + textCurrentY.toFixed(2) + 'px)';
      }
    } else {
      cta.style.transform = '';
      if (text) text.style.transform = '';
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('mousemove', function(e) {
    var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var isDesktop = window.innerWidth > 1100;
    if (!hasHover || !isDesktop) return;

    var rect = cta.getBoundingClientRect();
    var anchorCenterX = rect.left + rect.width / 2 - currentX;
    var anchorCenterY = rect.top + rect.height / 2 - currentY;
    var distanceX = e.clientX - anchorCenterX;
    var distanceY = e.clientY - anchorCenterY;
    var distance = Math.hypot(distanceX, distanceY);
    var threshold = 180;

    if (distance < threshold) {
      var pull = (threshold - distance) / threshold;
      var maxShift = 35;
      targetX = (distanceX / distance) * pull * maxShift;
      targetY = (distanceY / distance) * pull * maxShift;
      textTargetX = targetX * 0.4;
      textTargetY = targetY * 0.4;
    } else {
      targetX = 0;
      targetY = 0;
      textTargetX = 0;
      textTargetY = 0;
    }
  });

  var stepsSection = cta.closest('.steps');
  if (stepsSection) {
    stepsSection.addEventListener('mouseleave', function() {
      targetX = 0;
      targetY = 0;
      textTargetX = 0;
      textTargetY = 0;
    });
  }

  tick();
}

/* 10. Services horizontal scroll gallery with boundary elasticity */
function initServicesScroll() {
  var track = document.getElementById('services-track');
  var indexContainer = document.getElementById('services-index');
  if (!track || !indexContainer) return;

  var cards = track.querySelectorAll('.services__card');
  var activeList = indexContainer.querySelector('.services__index-active-list');
  if (!cards.length || !activeList) return;

  var activeIndex = 0;
  var autoplayTimer = null;
  var isRtl = getComputedStyle(track).direction === 'rtl';

  function updateIndex(idx) {
    if (activeList) {
      activeList.style.transform = 'translateY(' + (-idx * 1) + 'em)';
    }
  }

  function calculateActiveIndex() {
    var trackRect = track.getBoundingClientRect();
    var minDiff = Infinity;
    var currentIdx = 0;

    for (var i = 0; i < cards.length; i++) {
      var cardRect = cards[i].getBoundingClientRect();
      var diff;
      if (isRtl) {
        diff = Math.abs(cardRect.right - trackRect.right);
      } else {
        diff = Math.abs(cardRect.left - trackRect.left);
      }

      if (diff < minDiff) {
        minDiff = diff;
        currentIdx = i;
      }
    }
    return currentIdx;
  }

  track.addEventListener('scroll', function() {
    if (!isDown) {
      var computedIndex = calculateActiveIndex();
      if (computedIndex !== activeIndex) {
        activeIndex = computedIndex;
        updateIndex(activeIndex);
      }
    }
  }, { passive: true });

  function scrollToCard(idx) {
    if (idx < 0 || idx >= cards.length) return;
    var targetScroll = cards[idx].offsetLeft - cards[0].offsetLeft;
    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }

  function nextSlide() {
    activeIndex = (activeIndex + 1) % cards.length;
    scrollToCard(activeIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 3500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  var isDown = false;
  var startX;
  var scrollLeftVal;
  var overscrollPx = 0;
  var springRaf = null;

  var MAX_SLIDE = 600;
  var SLIDE_DAMP = 800;

  function getScrollBounds() {
    return {
      min: 0,
      max: track.scrollWidth - track.clientWidth
    };
  }

  function dampedSlide(excessPx) {
    var sign = excessPx < 0 ? -1 : 1;
    var abs = Math.abs(excessPx);
    return sign * MAX_SLIDE * (1 - Math.exp(-abs / SLIDE_DAMP));
  }

  function applySlide(excessPx) {
    overscrollPx = excessPx;
    var tx = dampedSlide(excessPx);
    track.style.transform = 'translateX(' + tx + 'px)';
  }

  function clearSlide() {
    overscrollPx = 0;
    track.style.transform = '';
  }

  function springBack() {
    if (springRaf) cancelAnimationFrame(springRaf);

    var startTx = dampedSlide(overscrollPx);
    var startTime = null;
    var DURATION = 500;

    function tick(now) {
      if (!startTime) startTime = now;
      var t = Math.min((now - startTime) / DURATION, 1);
      var decay = Math.exp(-6 * t);
      var osc = Math.cos(t * Math.PI * 1.5);
      var ease = 1 - decay * osc;
      var tx = startTx * (1 - ease);
      track.style.transform = 'translateX(' + tx + 'px)';
      if (t < 1) {
        springRaf = requestAnimationFrame(tick);
      } else {
        clearSlide();
      }
    }
    springRaf = requestAnimationFrame(tick);
  }

  track.addEventListener('mousedown', function(e) {
    isDown = true;
    if (springRaf) { cancelAnimationFrame(springRaf); springRaf = null; }
    clearSlide();
    track.style.scrollBehavior = 'auto';
    track.style.scrollSnapType = 'none';
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeftVal = track.scrollLeft;
    stopAutoplay();
    e.preventDefault();
  });

  function handleMouseRelease() {
    if (!isDown) return;
    isDown = false;
    track.style.scrollBehavior = '';
    track.style.scrollSnapType = '';
    track.style.cursor = '';

    if (overscrollPx !== 0) {
      springBack();
    }

    var computedIndex = calculateActiveIndex();
    activeIndex = computedIndex;
    updateIndex(activeIndex);
    scrollToCard(activeIndex);
    startAutoplay();
  }

  document.addEventListener('mouseup', handleMouseRelease);

  document.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - track.offsetLeft;
    var walk = (x - startX) * 1.5;
    var desired = scrollLeftVal - walk;
    var bounds = getScrollBounds();

    if (desired < bounds.min) {
      track.scrollLeft = bounds.min;
      applySlide(bounds.min - desired);
    } else if (desired > bounds.max) {
      track.scrollLeft = bounds.max;
      applySlide(bounds.max - desired);
    } else {
      if (overscrollPx !== 0) clearSlide();
      track.scrollLeft = desired;
    }
  });

  var servicesSection = track.closest('.services');
  if (servicesSection) {
    servicesSection.addEventListener('mouseenter', stopAutoplay);
    servicesSection.addEventListener('mouseleave', startAutoplay);
  } else {
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
  }

  var touchStartX = 0;
  var touchScrollLeft = 0;

  track.addEventListener('touchstart', function(e) {
    stopAutoplay();
    if (springRaf) { cancelAnimationFrame(springRaf); springRaf = null; }
    clearSlide();
    track.style.scrollBehavior = 'auto';
    track.style.scrollSnapType = 'none';
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchmove', function(e) {
    var dx = touchStartX - e.touches[0].pageX;
    var desired = touchScrollLeft + dx;
    var bounds = getScrollBounds();

    if (desired < bounds.min) {
      e.preventDefault();
      track.scrollLeft = bounds.min;
      applySlide(bounds.min - desired);
    } else if (desired > bounds.max) {
      e.preventDefault();
      track.scrollLeft = bounds.max;
      applySlide(bounds.max - desired);
    } else {
      if (overscrollPx !== 0) clearSlide();
    }
  }, { passive: false });

  track.addEventListener('touchend', function() {
    track.style.scrollBehavior = '';
    track.style.scrollSnapType = '';

    if (overscrollPx !== 0) {
      springBack();
    }

    var computedIndex = calculateActiveIndex();
    activeIndex = computedIndex;
    updateIndex(activeIndex);
    scrollToCard(activeIndex);
    startAutoplay();
  }, { passive: true });

  startAutoplay();
}

/* 11. Designs horizontal arrow buttons navigation */
function initDesignsCarousel() {
  var track = document.getElementById('designs-track');
  var arrows = document.querySelectorAll('[data-component="designs"] .designs__arrow');
  if (!track || !arrows.length) return;

  arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      var dir = arrow.getAttribute('data-dir');
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      var scrollAmount = 282; // 242px card width + 40px gap
      if (dir === 'next') {
        track.scrollBy({ left: isRTL ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: isRTL ? scrollAmount : -scrollAmount, behavior: 'smooth' });
      }
    });
  });
}

/* 12. Designs page filter tabs */
function initDesignspage() {
  var tabs = document.querySelectorAll('.designspage-tab');
  var cards = document.querySelectorAll('.designspage-card');
  if (!tabs.length || !cards.length) return;
  
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { 
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var filter = tab.getAttribute('data-filter');

      cards.forEach(function(card) {
        var categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.indexOf(filter) !== -1) {
          card.style.display = 'block';
          setTimeout(function() {
            card.classList.add('is-visible');
          }, 10);
        } else {
          card.classList.remove('is-visible');
          setTimeout(function() {
            card.style.display = 'none';
          }, 400);
        }
      });
    });
  });
}

/* 13. Blog Listing Scroll Reveal & Tag filter triggers */
function initBlogpage() {
  var cards = document.querySelectorAll('.blogpage-card, .blogpage-mostread-card');
  if (cards.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, idx) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('is-visible');
          }, idx * 100);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(function(el) { observer.observe(el); });
  }

  var tags = document.querySelectorAll('.blogpage-tag');
  if (tags.length) {
    tags.forEach(function(tag) {
      tag.addEventListener('click', function() {
        tags.forEach(function(t) { t.classList.remove('is-active'); });
        tag.classList.add('is-active');
      });
    });
  }
}

/* 14. Dedicated service timeline scroll-reveal & progress bar line */
function initServicepage() {
  var rows = document.querySelectorAll('.svcpage-row[data-reveal]');
  if (rows.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    rows.forEach(function(row) { observer.observe(row); });
  }

  var timeline = document.querySelector('.svcpage-timeline');
  var progressLine = document.querySelector('.svcpage-timeline__line-progress');
  if (!timeline || !progressLine) return;

  function updateProgress() {
    var rect = timeline.getBoundingClientRect();
    var viewH = window.innerHeight;
    var totalH = timeline.offsetHeight;
    var scrolledInto = viewH - rect.top;
    var pct = Math.max(0, Math.min(1, scrolledInto / totalH));
    progressLine.style.height = (pct * 100) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/* 15. Prices Page Mobile Package Accordions */
function initPricespage() {
  var buttons = document.querySelectorAll('.pricespage__mobile-toggle-btn');
  if (!buttons.length) return;

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var card = btn.closest('.pricespage__mobile-card');
      var features = card.querySelector('.pricespage__mobile-card-features');
      var isHidden = features.style.display === 'none' || !features.style.display;
      
      features.style.display = isHidden ? 'block' : 'none';
      if (isArabic()) {
        btn.textContent = isHidden ? 'عرض أقل' : 'عرض المزيد';
      } else {
        btn.textContent = isHidden ? 'View Less' : 'View More';
      }
      card.classList.toggle('is-expanded', isHidden);
      btn.classList.toggle('is-expanded', isHidden);
    });
  });
}
