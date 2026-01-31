(function(){
  function createPanel(){
    if (document.querySelector('.ai-widget-panel')) return document.querySelector('.ai-widget-panel');
    const panel = document.createElement('div');
    panel.className = 'ai-widget-panel';
    panel.setAttribute('role','dialog');
    panel.innerHTML = `
      <div class="ai-widget-header">
        <strong>AI Assistant</strong>
        <button class="ai-close" aria-label="Close">✕</button>
      </div>
      <div class="ai-widget-body">Привет! Как помочь?</div>
      <div class="ai-widget-input">
        <input type="text" placeholder="Напишите сообщение..." aria-label="Message input">
        <button class="ai-send">Отправить</button>
      </div>
    `;
    document.body.appendChild(panel);

    panel.querySelector('.ai-close').addEventListener('click', ()=>{
      panel.classList.remove('open');
    });

    panel.querySelector('.ai-send').addEventListener('click', ()=>{
      const input = panel.querySelector('.ai-widget-input input');
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      const body = panel.querySelector('.ai-widget-body');
      const p = document.createElement('div');
      p.className = 'ai-user-msg';
      p.textContent = text;
      body.appendChild(p);
      input.value = '';
      body.scrollTop = body.scrollHeight;
    });

    return panel;
  }

  function togglePanel(){
    const panel = createPanel();
    panel.classList.toggle('open');
  }

  function init(){
    document.addEventListener('click', function(e){
      const t = e.target;
      if (t.closest && t.closest('.ai-widget-toggle')){
        e.preventDefault();
        togglePanel();
      }
    });

    // ensure toggle buttons exist on dynamically-included headers
    const observer = new MutationObserver(()=>{
      // no-op; click handler above is delegated to document
    });
    observer.observe(document.body, {childList:true, subtree:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
