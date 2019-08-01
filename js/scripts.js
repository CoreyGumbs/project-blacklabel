const navBar = document.querySelector('.navigation');
const navLogoMic = document.querySelector('.logo-mic')
console.log(navBar);



window.onscroll = () => {
    if(window.pageYOffset > 10){
        navBar.classList.add('solid-bg');
        navLogoMic.classList.add('logo-mic-min');
    }else{
        navBar.classList.remove('solid-bg')
    }
}