// scss
import './assets/index.scss'

// bootstrap
import * as Popper from "@popperjs/core"

// Vue data
import App from './views/App.vue'
import { createApp } from 'vue'

// end
createApp(App, Popper).mount('#app')

// favicon color
function setFaviconColorFilter(colorFilter) {
  const favicon = document.getElementById('color-favicon');
  const img = new Image();
  img.src = favicon.href;

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);
    context.globalCompositeOperation = 'source-in';
    context.fillStyle = colorFilter;
    context.fillRect(0, 0, canvas.width, canvas.height);

    favicon.href = canvas.toDataURL();
  };
}

// Esempio di utilizzo: applica un filtro colore rosso
window.onload = () => setFaviconColorFilter('whitesmoke');
