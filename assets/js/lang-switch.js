(function(){
  function updateLangLinks(){
    const path = window.location.pathname || '/';
    const fileName = path.split('/').pop() || 'index.html';
    
    const container = document.querySelector('.top-lang-switch');
    if(!container) return;

    container.querySelectorAll('.lang-flag').forEach(a => {
      const lang = a.dataset.lang;
      if(!lang) return;
      
      let targetHref = '/index.html';
      
      if (lang === 'tr') {
        // Turkish is root
        targetHref = '/' + fileName;
      } else if (lang === 'en') {
        targetHref = '/eng/' + fileName;
      } else if (lang === 'ru') {
        targetHref = '/rus/' + fileName;
      }

      // Check if it's a known page or just fallback to index
      // (Simple check: if we are in a subfolder, the fileName is what we want)
      a.href = targetHref;
      
      // Active state
      const isEng = path.startsWith('/eng/');
      const isRus = path.startsWith('/rus/');
      const isTr = !isEng && !isRus;
      
      a.classList.toggle('active', (lang === 'en' && isEng) || (lang === 'ru' && isRus) || (lang === 'tr' && isTr));
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', updateLangLinks);
  else updateLangLinks();

  const observer = new MutationObserver((mutations, obs) => {
    if(document.querySelector('.top-lang-switch')){
      updateLangLinks();
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
