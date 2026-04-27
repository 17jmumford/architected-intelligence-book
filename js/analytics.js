/**
 * Google Analytics 4 — set your Measurement ID below (format G-XXXXXXXXXX).
 * Leave empty to disable; the snippet will not load.
 *
 * Google Search Console — if you chose the "HTML tag" verification method in GSC,
 * paste the meta tag Google shows into each page's <head> (see comment placeholder
 * in index.html and chapters/*.html), or use the DNS / HTML file upload methods instead.
 */
window.AI_GA4_MEASUREMENT_ID = "G-XX4EKDXM4E";

(function () {
  var raw = window.AI_GA4_MEASUREMENT_ID;
  var id = typeof raw === "string" ? raw.trim() : "";
  if (!id) return;

  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);
})();
