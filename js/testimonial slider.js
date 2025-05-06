  // Simple testimonial slider
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(nextTestimonial, 5000);
  }
  