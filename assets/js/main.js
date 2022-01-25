const btnMobile = document.getElementById('btn-mobile');

function ClickMenu(event){
      if(event.type == 'touchstart') event.preventDefault()
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
}

btnMobile.addEventListener('click', ClickMenu);
btnMobile.addEventListener('touchstart', ClickMenu);