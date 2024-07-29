import './style.css';
import loadHome from './home';


function createTabs(){
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', () =>{
        clearContent();
        loadHome();
    })
    menuBtn.addEventListener('click', () =>{
        clearContent();
    })
    contactBtn.addEventListener('click', () =>{
        clearContent();
    })
}


function clearContent(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}

createTabs();
loadHome();