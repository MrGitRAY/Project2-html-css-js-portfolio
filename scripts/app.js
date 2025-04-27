// hamburger butten and mobile menu ////////////////////////////////////////////////////

let hamburgerElem = document.querySelector('.nav__hamburger')
let hamburgerLine = document.querySelector('.hamburger__line')
let mobileMenuElem = document.querySelector('.nav__menu')
let cover = document.querySelector('.cover')

hamburgerElem.addEventListener('click', function(){
    hamburgerLine.classList.toggle('hamburger__line--active')
    mobileMenuElem.classList.toggle('nav__menu--active')
    cover.classList.toggle('cover--active')
})

// sticky navbar ///////////////////////////////////////////////////////////////////////
let stickyNav = document.querySelector('nav')

window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop != 0){
        stickyNav.style.height = '6rem'
    }
    else{
        stickyNav.style.height = '8.75rem'
    }
})

// resume scripts ///////////////////////////////////////////////////////////////////////
let resumeListItems = document.querySelectorAll('.resume-list__item')
let item_id = ''

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click', function () {
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
        this.classList.add('resume-list__item--active')
        
        document.querySelector('.resume-content--active').classList.remove('resume-content--active')
        item_id = this.getAttribute('list-item-id')
        document.querySelector(item_id).classList.add('resume-content--active')
    })
} )

// portfolio scripts ////////////////////////////////////////////////////////////////////
let portListItem = document.querySelectorAll('.port-list__item')

portListItem.forEach(item =>{
    item.addEventListener('click', function(){
        document.querySelector('.port-list__item--active').classList.remove('port-list__item--active')
        this.classList.add('port-list__item--active')
    })
})

// go top btn ///////////////////////////////////////////////////////////////////////////
let gotopBtn = document.querySelector('.gotop-btn')

gotopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: '0',
        behavior: 'smooth'
    })
})

// scroll to section ///////////////////////////////////////////////////////////////////
let menuLinks = document.querySelectorAll('.menu-link')

menuLinks.forEach(link =>{
    link.addEventListener('click', function(){
        event.preventDefault()
        document.querySelector('.menu-link--active').classList.remove('menu-link--active')
        this.classList.add('menu-link--active')
        let sectionClass = this.getAttribute("data-section")
        let sectionOffset = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffset,
            behavior: "smooth"
        })
    })
})

// observer ////////////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
});
const sections = document.querySelectorAll('main > section')

function observerHandler(allsection){
    allsection.map(section =>{
        if(section.isIntersecting){
            menuLinks.forEach(link =>{
                if(section.target.getAttribute('class') === link.getAttribute('data-section')){
                    document.querySelector('.menu-link--active').classList.remove('menu-link--active')
                    link.classList.add('menu-link--active')
                }
            })
        }
    })
}
sections.forEach(section => {
    observer.observe(section)
})

// change theme ////////////////////////////////////////////////////////////////////////////
let changeThemeBtn = document.querySelector('.change-theme')

window.addEventListener('load', ()=>{
    if(localStorage.getItem('theme') === 'dark'){
        document.documentElement.classList.add('dark-theme')
        changeThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`
    } else {
        document.documentElement.classList.remove('dark-theme')
        changeThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`
    }
})
changeThemeBtn.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark-theme')
    if(document.documentElement.classList.contains('dark-theme')){
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`
        localStorage.setItem('theme', 'dark')
    } else{
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`
        localStorage.setItem('theme', 'light')
    }
})

