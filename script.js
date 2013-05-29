var onload = window.addEventListener("DOMContentLoaded", function onload () {
  window.removeEventListener("DOMContentLoaded", onload);
  onload = undefined;
  
  // switch text for browsers with touch events
  if ("ontouchstart" in document.documentElement) {
      document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
  }
  
  // initialize impress
  impress().init();

  // Insert manifest example
  document.getElementById('manifest_example').appendChild(
    document.createTextNode(
      JSON.stringify({
        "name": "Firefox OS Presentation",
        "version": "0.1",
        "description": "My Presentation",
        "developer": {
          "name": "Nick Desaulniers",
          "url": "https://nickdesaulniers.github.io"
        },
        "icons": {
          "60": "/60.png",
          "128": "/128.png"
        },
        "fullscreen": true
      }, null, "  ")
    )
  );
});