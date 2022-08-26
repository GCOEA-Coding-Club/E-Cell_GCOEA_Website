let rocket = document.getElementById('rocket');
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    rocket.style.top=600-(value*3)+'px';
    rocket.style.left=(value*8)-120+'px';

})

