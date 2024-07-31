function loadContact() {
    const content = document.getElementById('content');
    const manager = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.textContent = 'Meet our extroadinary team full of Bruces!';
    h1.classList.add('center-text');
    h1.classList.add('cursive-text');
    content.appendChild(h1);
    manager.innerHTML = ` 
        <h2 class = cursive-text> Manager: Bruce Wang </h2>
        <p>phone number: 555-555-10101011</p>
        <p>email: realEmail@Email.com</p>
    `;
    manager.classList.add('center-text');
    const hChef = document.createElement('div');
    hChef.innerHTML = `
    <h2 class = cursive-text> Head Chef: Bruce Wayne </h2>
    <p>phone number: 555-555-10101011</p>
    <p>email: realEmail@email.com</p>
    `;
    hChef.classList.add('center-text');

    const sousChef = document.createElement('div');
    sousChef.innerHTML = `
    <h2 class = cursive-text> Sous Chef: Bruce Li</h2>
    <p>phone number: 555-555-10101011</p>
    <p>email: realEmail@email.com</p>
    `;
    sousChef.classList.add('center-text');
    const joinUs = document.createElement('div');

    joinUs.innerHTML = `
        <h2 class = cursive-text> Want to join our team? </h2>
        <p>Join us by calling: 12345678 today or by emailing: Bruces@email.com</p>
    `;
    joinUs.classList.add('center-text');
    content.appendChild(manager);
    content.appendChild(hChef);
    content.appendChild(sousChef);
    content.appendChild(joinUs);
}

export default loadContact;