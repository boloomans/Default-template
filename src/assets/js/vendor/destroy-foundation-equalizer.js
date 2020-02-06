/* ===========================================
 * Remove equalizer height on window resize when
 * underneath minimum equalizer breakpoint (will
 * set height: auto; otherwise)
 * ===========================================
 */

const eqContainers = document.querySelectorAll('[data-equalizer]'); // Equalizer containers

if (eqContainers.length > 0) {
  window.onresize = () => {
    // Set debounce
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(() => {

      // Loop through equalizer containers
      for (let i = 0; i < eqContainers.length; i++) {
        const container = eqContainers[i];
        const breakpoint = container.getAttribute('data-equalize-on');

        // If minimum equalizer breakpoint is set
        if (breakpoint && !Foundation.MediaQuery.atLeast(breakpoint)) {
          const eqElements = container.querySelectorAll('[data-equalizer-watch]');

          // Loop through equalizable elements and reset height
          for (let j = 0; j < eqElements.length; j++) {
            const el = eqElements[j];
            el.style.height = null;
          }
        }
      }

    }, 250); // Debounce value
  };
}