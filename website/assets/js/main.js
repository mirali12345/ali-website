// Mobile nav toggle
document.addEventListener('DOMContentLoaded',function(){
  function setupToggle(toggleId, navId){
    var btn=document.getElementById(toggleId);
    var nav=document.getElementById(navId);
    if(!btn||!nav) return;
    btn.addEventListener('click',function(){
      nav.classList.toggle('show');
    });
  }
  setupToggle('navToggle','siteNav');
  setupToggle('navToggle2','siteNav2');
  setupToggle('navToggle3','siteNav3');
  setupToggle('navToggle4','siteNav4');
});
