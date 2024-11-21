export function loadSlaterScript() {
  const version = "1.0";
  const isStaging = window.location.host.includes("webflow.io");
  const scriptSrc = isStaging
    ? "https://slater.app/5072/10063.js"
    : `https://assets.slater.app/slater/5072/10063.js?v=${version}`;

  const script = document.createElement("script");
  script.src = scriptSrc;
  script.type = "text/javascript";
  document.body.appendChild(script);

  script.onload = () => console.log("Slater script loaded successfully.");
  script.onerror = (error) => console.error("Error loading Slater script", error);
