import foodImage from './images/food.jpeg';
function loadHome(){
    console.log('made it to home');
    const content = document.getElementById('content');
    const div = document.createElement('div');   
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to our restaurant!';
    const img = document.createElement('img');
    img.src = foodImage;
    img.alt = 'food being served!';
    img.classList.add('food-img');
    div.classList.add('home');
   
    div.appendChild(h1);
    div.appendChild(img);
    content.appendChild(div);
}

export default loadHome;