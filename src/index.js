import './style.css';
import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';

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
        loadMenu();
    })
    contactBtn.addEventListener('click', () =>{
        clearContent();
        loadContact();
    })
}


function clearContent(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}

createTabs();
loadHome();