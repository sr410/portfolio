var express = require('express');
var router = express.Router();

/* Home page */
router.get(['/', '/home'], function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* project page */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

/* contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


// Handle contact form submission
router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Form submitted:', name, email, message);

  // success message
  res.render('contact', { 
    title: 'Contact',
    success: ':) Your message has been sent successfully!'
  });
});

module.exports = router;