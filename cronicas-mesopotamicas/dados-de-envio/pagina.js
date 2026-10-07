(() => {
  const url=window.SHIPPING_REGISTRATION?.appsScriptUrl || '';
  const frame=document.getElementById('registration-frame');
  if (/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url)) frame.src=url;
})();
