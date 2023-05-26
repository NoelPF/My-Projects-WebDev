// Module 1: Background Initialization
const initBg = (autoplay = true) => {
  const bgImgsNames = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'];
  const bgImgs = bgImgsNames.map(img => "img/" + img);

  $.backstretch(bgImgs, { duration: 4000, fade: 500 });

  if (!autoplay) {
    $.backstretch('pause');
  }
};

// Module 2: Set Background
const setBg = id => {
  $.backstretch('show', id);
};

// Module 3: Set Background Overlay
const setBgOverlay = () => {
  const windowWidth = window.innerWidth;
  const bgHeight = $('body').height();
  const tmBgLeft = $('.tm-bg-left');

  $('.tm-bg').height(bgHeight);

  if (windowWidth > 768) {
    tmBgLeft
      .css('border-left', `0`)
      .css('border-top', `${bgHeight}px solid transparent`);
  } else {
    tmBgLeft
      .css('border-left', `${windowWidth}px solid transparent`)
      .css('border-top', `0`);
  }
};

// Module 4: Document Ready
$(document).ready(function () {
  const autoplayBg = true; // set Auto Play for Background Images
  initBg(autoplayBg);
  setBgOverlay();

  const bgControl = $('.tm-bg-control');
  bgControl.click(function () {
    bgControl.removeClass('active');
    $(this).addClass('active');
    const id = $(this).data('id');
    setBg(id);
  });

  $(window).on('backstretch.after', function (e, instance, index) {
    const bgControl = $('.tm-bg-control');
    bgControl.removeClass('active');
    const current = $('.tm-bg-controls-wrapper').find(`[data-id=${index}]`);
    current.addClass('active');
  });

  $(window).resize(function () {
    setBgOverlay();
  });
});

// Module 5: Contact Form Validation and Submission
const contactForm = $('#contact-form');

contactForm.submit(function (e) {
  e.preventDefault();

  const nameInput = contactForm.find('input[name="name"]');
  const emailInput = contactForm.find('input[name="email"]');
  const messageInput = contactForm.find('textarea[name="message"]');
  const errorContainer = contactForm.find('.error-container');
  const successMessage = contactForm.find('.success-message');

  errorContainer.empty();
  successMessage.hide();

  const name = nameInput.val().trim();
  const email = emailInput.val().trim();
  const message = messageInput.val().trim();

  if (name === '') {
    showError('Please enter your name.', nameInput);
    return;
  }

  if (email === '') {
    showError('Please enter your email address.', emailInput);
    return;
  }

  if (!isValidEmail(email)) {
    showError('Please enter a valid email address.', emailInput);
    return;
  }

  if (message === '') {
    showError('Please enter a message.', messageInput);
    return;
.
