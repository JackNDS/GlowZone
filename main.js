const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_center');
    const nav2 = document.querySelector('.navbar');

    const navLinks = document.querySelectorAll('.nav_center li');
    //Toggle Nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      nav2.classList.toggle('active');
      burger.classList.toggle('change');

  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.5}s`;
        }
      });
    });
    //Animate Links
  };
  navSlide();

  // FAQ
  (function() {
    var d = document,
      accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
      setAria,
      setAccordionAria,
      switchAccordion,
      touchSupported = 'ontouchstart' in window,
      pointerSupported = 'pointerdown' in window;
  
    skipClickDelay = function(e) {
      e.preventDefault();
      e.target.click();
    };
  
    setAriaAttr = function(el, ariaType, newProperty) {
      el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded) {
      switch (expanded) {
        case 'true':
          setAriaAttr(el1, 'aria-expanded', 'true');
          setAriaAttr(el2, 'aria-hidden', 'false');
          break;
        case 'false':
          setAriaAttr(el1, 'aria-expanded', 'false');
          setAriaAttr(el2, 'aria-hidden', 'true');
          break;
        default:
          break;
      }
    };
    //function
    switchAccordion = function(e) {
      console.log('triggered');
      e.preventDefault();
      var thisAnswer = e.target.parentNode.nextElementSibling;
      var thisQuestion = e.target;
      if (thisAnswer.classList.contains('is-collapsed')) {
        setAccordionAria(thisQuestion, thisAnswer, 'true');
      } else {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
      }
      thisQuestion.classList.toggle('is-collapsed');
      thisQuestion.classList.toggle('is-expanded');
      thisAnswer.classList.toggle('is-collapsed');
      thisAnswer.classList.toggle('is-expanded');
  
      thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
      if (touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if (pointerSupported) {
        accordionToggles[i].addEventListener(
          'pointerdown',
          skipClickDelay,
          false
        );
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
  })();
  
  /* Gallery */

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in-img');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in-img'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}