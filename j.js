let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');
let selector =document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');


              document.querySelector( 'header nav a [href*='+ id + ']').classlist.add('active')
            })

            }     
           
      
            }) 
            }
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}