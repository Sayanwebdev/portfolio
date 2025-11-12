// bg-effects.js
// Externalized background + cursor glow logic
// Loads after DOMContentLoaded and manages RGB overlay and interactive cursor glow.
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    try {
  // now cursor glow sits inside .page-bg
  const glow = document.querySelector('.page-bg #cursorGlow') || document.getElementById('cursorGlow');
      const rgb = document.querySelector('.page-bg .rgb-anim');
      const darkLayer = document.querySelector('.page-bg .dark-layer');
      const lightLayer = document.querySelector('.page-bg .light-layer');
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;

      // Templates and base values used so we can move the gradients with the pointer
      let rgbTemplate = '';
      let rgbBaseOpacity = 0.6;
      let rgbBaseFilter = '';
      let rgbBaseMix = 'overlay';
      let rgbBaseAnim = 'none';
  // smoothed positions (current) and targets for interactive movement
  let rgbX1 = 86, rgbY1 = 12, rgbX2 = 12, rgbY2 = 80;
  let rgbTargetX1 = rgbX1, rgbTargetY1 = rgbY1, rgbTargetX2 = rgbX2, rgbTargetY2 = rgbY2;
  let rgbSmoothing = 0.36; // 0..1, higher = snappier follow (was 0.12)

      function updateRgbPosition(mx1 = 86, my1 = 12, mx2 = 12, my2 = 80){
        if (!rgb || !rgbTemplate) return;
        // replace placeholders in the template with percentage positions
        const bg = rgbTemplate.replace(/\{mx1\}/g, mx1 + '%')
                              .replace(/\{my1\}/g, my1 + '%')
                              .replace(/\{mx2\}/g, mx2 + '%')
                              .replace(/\{my2\}/g, my2 + '%');
        rgb.style.background = bg;
      }

      // animate RGB positions smoothly toward targets
      function animateRgb(){
        // interpolate positions
        rgbX1 += (rgbTargetX1 - rgbX1) * rgbSmoothing;
        rgbY1 += (rgbTargetY1 - rgbY1) * rgbSmoothing;
        rgbX2 += (rgbTargetX2 - rgbX2) * rgbSmoothing;
        rgbY2 += (rgbTargetY2 - rgbY2) * rgbSmoothing;
        // only update visuals when a small movement happened to save work
        updateRgbPosition(Math.round(rgbX1), Math.round(rgbY1), Math.round(rgbX2), Math.round(rgbY2));
        requestAnimationFrame(animateRgb);
      }

      function configureRGB(isDark){
        if (!rgb) return;
        rgb.classList.remove('hidden');
        if (isDark) {
          // dark mode: spinning conic + subtle radial accents
          rgbTemplate = 'conic-gradient(from 0deg, rgba(255,0,120,0.12), rgba(0,160,255,0.12), rgba(120,255,100,0.12), rgba(255,0,120,0.12))';
          rgbBaseOpacity = 0.95;
          rgbBaseFilter = 'blur(36px) contrast(140%)';
          rgbBaseMix = 'overlay';
          rgbBaseAnim = 'spinColors 40s linear infinite';
          updateRgbPosition();
        } else {
          // light mode: deeper, interactive vignette using two radial gradients + soft conic
          // Use light-blue primary tones instead of pink, and slightly larger radii
          rgbTemplate = 'radial-gradient(980px 560px at {mx1} {my1}, rgba(80,180,255,0.6) 0%, rgba(80,180,255,0.48) 14%, rgba(30,140,255,0.48) 34%, transparent 60%),'
                      + ' radial-gradient(620px 360px at {mx2} {my2}, rgba(70,220,90,0.22), transparent 70%),'
                      + ' conic-gradient(from 0deg, rgba(80,160,255,0.16), rgba(0,160,255,0.16), rgba(120,255,100,0.16), rgba(80,160,255,0.16))';
          rgbBaseOpacity = 0.98;
          rgbBaseFilter = 'blur(14px) contrast(180%) saturate(220%)';
          rgbBaseMix = 'screen';
          rgbBaseAnim = 'spinColors 60s linear infinite';
          // initial positions tuned for a pleasing vignette
          rgbX1 = 86; rgbY1 = 12; rgbX2 = 12; rgbY2 = 80;
          rgbTargetX1 = 86; rgbTargetY1 = 12; rgbTargetX2 = 12; rgbTargetY2 = 80;
          updateRgbPosition(rgbX1, rgbY1, rgbX2, rgbY2);
        }

        // apply base styles
        rgb.style.opacity = String(rgbBaseOpacity);
        rgb.style.filter = rgbBaseFilter;
        rgb.style.mixBlendMode = rgbBaseMix;
        rgb.style.animation = rgbBaseAnim;
      }
      function updateLayers(){
        const isDark = document.documentElement.classList.contains('dark');
        // always show one of the theme layers; the effects are now tied to theme without a separate toggle
        if (isDark) {
          if (darkLayer) darkLayer.classList.remove('hidden');
          if (lightLayer) lightLayer.classList.add('hidden');
        } else {
          if (lightLayer) lightLayer.classList.remove('hidden');
          if (darkLayer) darkLayer.classList.add('hidden');
        }
        configureRGB(isDark);
      }

      // Reveal rgb layer (if present)
      if (rgb && !prefersReduced) {
        rgb.classList.remove('hidden');
      }

      updateLayers();

  // start animating the smooth rgb follow loop
  requestAnimationFrame(animateRgb);

      // Keep layers in sync when theme changes
      window.addEventListener('storage', function(e){ if (e.key === 'theme') updateLayers(); });
      const themeSwitch = document.getElementById('themeSwitch');
      if (themeSwitch) themeSwitch.addEventListener('change', updateLayers);

  // Interactive glow: skip on reduced motion or coarse pointers
  if (!glow || prefersReduced || isCoarse) return;

      glow.classList.remove('hidden');

      // make the circle start large and bright (viewport-based sizes)
      let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
      let drawX = mouseX, drawY = mouseY;

      function onMove(e){
        mouseX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || mouseX;
        mouseY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || mouseY;
        // Snap draw position to pointer to remove visible lag/distance
        drawX = mouseX;
        drawY = mouseY;
        // Directly position the glow (use left/top + translate -50% to center)
        glow.style.left = drawX + 'px';
        glow.style.top = drawY + 'px';
        glow.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        glow.style.opacity = '1';
  // keep it very large to cover most of the viewport (increased size)
  glow.style.width = '120vmax';
  glow.style.height = '120vmax';
        // interactive RGB: move the rgb vignette toward the pointer and boost opacity briefly
        if (rgb) {
          const px = (mouseX / window.innerWidth) * 100;
          const py = (mouseY / window.innerHeight) * 100;
          // secondary accent moves opposite-ish for depth
          const px2 = 12 + (px - 12) * 0.6;
          const py2 = 80 + (py - 80) * 0.6;
          // set targets (smoothed animation will interpolate)
          rgbTargetX1 = px; rgbTargetY1 = py; rgbTargetX2 = px2; rgbTargetY2 = py2;
          // boost opacity briefly on movement
          if (typeof rgbBaseOpacity === 'number') {
            rgb.style.opacity = String(Math.min(1, rgbBaseOpacity + 0.22));
            clearTimeout(window.__rgbMoveTimer);
            window.__rgbMoveTimer = setTimeout(() => { if (rgb) rgb.style.opacity = String(rgbBaseOpacity); }, 600);
          }
        }
      }

      window.addEventListener('mousemove', onMove, {passive:true});
      window.addEventListener('touchmove', onMove, {passive:true});

      function animate(){
  // gentle smoothing (increased to make glow follow more tightly)
  drawX += (mouseX - drawX) * 0.18;
  drawY += (mouseY - drawY) * 0.18;
        glow.style.left = drawX + 'px';
        glow.style.top = drawY + 'px';
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);

      // Idle behavior
      let idleTimer;
      function resetIdle(){
  // make the circle cover almost full screen when active (increased)
  glow.style.width = '120vmax';
  glow.style.height = '120vmax';
        glow.style.opacity = '1';
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function(){
          // idle slightly smaller but still large (increased)
          glow.style.width = '90vmax';
          glow.style.height = '90vmax';
          glow.style.opacity = '0.55';
        }, 700);
      }

      window.addEventListener('mousemove', resetIdle, {passive:true});
      window.addEventListener('touchmove', resetIdle, {passive:true});
      resetIdle();

    } catch (err) {
      // Fail silently in older browsers
      console.error('bg-effects error', err);
    }
  });
})();
