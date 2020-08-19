document.getElementById("load-user").addEventListener('click',
function () {
    const countText = document.getElementById('user-count');
    const count = parseInt(countText.value);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data = data.slice(0, count);
        const userContainer = document.getElementById('users');
        userContainer.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            const p = document.createElement('p');
            p.innerHTML = `<p class="user">Name: <strong>${user.name} - ${user.id}</strong> <button onclick="getUserDetail(${user.id})">Details</button></p>`;

            userContainer.appendChild(p);
        }
    })
})




function getUserDetail(userId) {
    let url = 'https://jsonplaceholder.typicode.com/users/' + userId;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const detail = document.getElementById("user-detail");
            detail.innerHTML = `<h1>${data.name}</h1>
            <h4>${data.email}</h4>
            <p>${data.phone}</p>`
        })
}