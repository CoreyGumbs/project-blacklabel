const navBar = document.querySelector('.navigation');

window.onscroll = () => {
    if(window.pageYOffset > 10){
        navBar.classList.add('solid-bg');
    }else{
        navBar.classList.remove('solid-bg')
    }
}