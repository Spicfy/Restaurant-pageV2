import foodImage from './images/food.jpeg';
function loadHome() {
    console.log('made it to home');
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    p.innerHTML = 'We\'ve been serving up delicious food for over 1000000 years! <br> Visit us today, it would be our pleasure to serve you.';

    p.classList.add('center-text');
    p.classList.add('cursive-text');
    h1.classList.add('cursive-text');
    h1.textContent = 'Welcome to Bruce\'s Culinary Corner!';
    const img = document.createElement('img');
    img.src = foodImage;
    img.alt = 'food being served!';
    img.classList.add('food-img');
    div.classList.add('home');

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(img);
    content.appendChild(div);

    const openingHours = document.createElement('div');
    openingHours.classList.add('center-text');
    openingHours.classList.add('cursive-text');
    openingHours.innerHTML = `
        <h2>Opening Hours</h2>
        <p>Monday: 9am - 9pm</p>
         <p>Tuesday: 9am - 9pm</p>
          <p>Wednesday: 9am - 9pm</p>
           <p>Thursday: 9am - 9pm</p>
            <p>Friday: 9am - 9pm</p>
        <p>Saturday: 10am - 10pm</p>
        <p>Sunday: 10am - 8pm</p>
    `;
    openingHours.classList.add('opening-hours');
    content.appendChild(openingHours);
}

export default loadHome;