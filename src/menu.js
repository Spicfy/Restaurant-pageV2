function loadMenu() {
    let menu = [];

    class foodItem {
        constructor(name, price, ingredients) {
            this.name = name;
            this.price = price;
            this.ingredients = ingredients;
        }
    }

    menu.push(new foodItem('Pizza', 10, ['cheese', 'tomato sauce', 'dough']));
    menu.push(new foodItem('Burger', 8, ['bun', 'cheese', 'patty']));
    menu.push(new foodItem('Poutine', 8, ['fries', 'cheese curds', 'gravy']));
    menu.push(new foodItem('Fries', 4, ['potatoes', 'salt', 'oil']));
    menu.push(new foodItem('Burrito', 7, ['tortilla', 'rice', 'beans']));
    menu.push(new foodItem('Steak', 15, ['beef', 'salt', 'pepper']));
    menu.push(new foodItem('pork chop', 12, ['pork', 'salt', 'pepper']));
    menu.push(new foodItem('chicken wings', 10, ['chicken', 'salt', 'pepper']));
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';
    h1.classList.add('cursive-text');
    h1.classList.add('center-text');
    content.appendChild(h1);
    menu.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cursive-text');
        div.classList.add('menu-item');
        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <p>Ingredients: ${item.ingredients.join(', ')}</p>        
        `;
        menuDiv.appendChild(div);
    })

    content.appendChild(menuDiv);
}

export default loadMenu;