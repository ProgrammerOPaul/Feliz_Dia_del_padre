function adjustFontSize() {
    const fontSize = Math.min(32, window.innerWidth / 20);
    document.querySelector('p').style.fontSize = `${fontSize}px`;
  }
  
  window.addEventListener('resize', adjustFontSize);
  