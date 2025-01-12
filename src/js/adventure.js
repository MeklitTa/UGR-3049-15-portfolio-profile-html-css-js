
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('nav ul');
    menuButton.addEventListener('click', function () {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.justifyContent = 'flex-end'; 
            navList.style.flexDirection = 'column';   
            navList.style.position = 'absolute';
            navList.style.top = '100%';
            navList.style.left = '0';
            navList.style.backgroundColor = 'darkblue';   
            navList.style.width = '8rem';
            navList.style.listStyleType = 'none';
            navList.style.padding = '10px';
            navList.style.zIndex = '1';
            navList.style.marginLeft = '23rem'; 
             navList.style.border='2px solid blue'
        
        }
    });
   
});
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.style.textDecoration = 'none';
});
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navList.style.display = 'none';
    });
});


