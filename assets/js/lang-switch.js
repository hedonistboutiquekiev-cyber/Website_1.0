(function(){
  function updateLangLinks(){
    let path = window.location.pathname || '/';
    // normalize multiple slashes
    path = path.replace(/\/+/g, '/');
    
    // Ensure we handle root path correctly
    if (path === '/' || path === '/rus/' || path === '/eng/') {
        if (path === '/') path = '/index.html';
        else if (path === '/rus/') path = '/rus/index.html';
        else if (path === '/eng/') path = '/eng/index.html';
    }

    // Determine the relative filename from the root (e.g. /index.html, /shop.html)
    let relativePath = path;
    if (path.startsWith('/rus/')) {
        relativePath = path.substring(4); // Remove '/rus'
    } else if (path.startsWith('/eng/')) {
        relativePath = path.substring(4); // Remove '/eng'
    }
    
    // Ensure relativePath starts with /
    if (!relativePath.startsWith('/')) relativePath = '/' + relativePath;

    // Construct target URLs
    const trHref = relativePath;
    const ruHref = '/rus' + relativePath;
    const engHref = '/eng' + relativePath;

    const container = document.querySelector('.top-lang-switch');
    if(!container) return;

    container.querySelectorAll('.lang-flag').forEach(a => {
      const lang = a.dataset.lang;
      if(!lang) return;
      
      if(lang === 'tr') a.href = trHref;
      if(lang === 'ru') a.href = ruHref;
      if(lang === 'en') a.href = engHref;
      
      // Update active state
      let isActive = false;
      if (lang === 'tr' && !path.startsWith('/rus/') && !path.startsWith('/eng/')) isActive = true;
      if (lang === 'ru' && path.startsWith('/rus/')) isActive = true;
      if (lang === 'en' && path.startsWith('/eng/')) isActive = true;
      
      a.classList.toggle('active', isActive);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', updateLangLinks);
  else updateLangLinks();

  // header might be injected after load; observe and update once present
  const observer = new MutationObserver((mutations, obs) => {
    if(document.querySelector('.top-lang-switch')){
      updateLangLinks();
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
