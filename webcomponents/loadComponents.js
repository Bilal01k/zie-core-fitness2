Promise.all([
    fetch('components/Header.html').then(res => res.text()),
    fetch('components/Footer.html').then(res => res.text())
  ]).then(([header, footer]) => {
    document.getElementById('header-placeholder').innerHTML = header;
    document.getElementById('footer-placeholder').innerHTML = footer;
    document.body.style.visibility = 'visible';
  });