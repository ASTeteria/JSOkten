const userContainer = document.getElementById('userContainer');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (let user of users)  {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            const userId = document.createElement('p');
            userId.innerHTML = `<strong>ID:</strong> ${user.id}`;

            const userName = document.createElement('p');
            userName.innerHTML = `<strong>Name:</strong> ${user.name}`;

            const detailsBtn = document.createElement('button');
            detailsBtn.innerHTML = '<strong>View Details</strong>';
            detailsBtn.onclick = () => userDetails(user.id);

            userBlock.append(userId, userName, detailsBtn);

            userContainer.appendChild(userBlock);
        };
    });

function userDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            location.href = 'user-details.html';
        });
}