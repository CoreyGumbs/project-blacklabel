const navBar = document.querySelector('.navigation');
console.log(navBar);



window.onscroll = () => {
    if(window.pageYOffset > 10){
        navBar.classList.add('solid-bg');
    }else{
        navBar.classList.remove('solid-bg')
    }
}