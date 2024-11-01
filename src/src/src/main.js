import { loadSlaterScript } from './loadScript.js';
import { initializeAnimations } from './animations.js';

document.addEventListener("DOMContentLoaded", function () {
  loadSlaterScript();
  initializeAnimations();
});
