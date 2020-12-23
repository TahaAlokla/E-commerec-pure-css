/*===== MENU SHOW =====*/
const showMneu = (toogleId, navId) => {
    const toggle = document.getElementById(toogleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMneu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('nav-link'),
    navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction)
})

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollAction)

function scrollAction() {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHight = current.offsetHight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > screenTop && scrollY <= screenTop + sectionHight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })

}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll=()=>{

    header = document.getElementById('header')
    if(this.scrollY>=200){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}