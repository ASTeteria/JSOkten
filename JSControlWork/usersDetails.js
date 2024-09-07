const userDetails = document.getElementById('userDetails');
const postContainer = document.getElementById('postContainer');
const postButton = document.getElementById('postButton');


const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    const userId = document.createElement('h3');
    userId.innerHTML = `<strong>ID:</strong> ${user.id}`;

    const userName = document.createElement('p');
    userName.innerHTML = `<strong>Name:</strong> ${user.name}`;

    const userUsername = document.createElement('p');
    userUsername.innerHTML = `<strong>Username:</strong> ${user.username}`;

    const userEmail = document.createElement('p');
    userEmail.innerHTML= `<strong>Email:</strong> ${user.email}`;

    const userAddress = document.createElement('p');
    userAddress.innerHTML = `<strong>Address:</strong> ${user.address.street}, ${user.address.city}`;

    const userPhone = document.createElement('p');
    userPhone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

    const userWebsite = document.createElement('p');
    userWebsite.innerHTML = `<strong>Website:</strong> ${user.website}`;

    const userCompany = document.createElement('p');
    userCompany.innerHTML = `<strong>Company:</strong> ${user.company.name}`;

    userDetails.append(userId, userName, userUsername, userEmail, userAddress, userPhone, userWebsite, userCompany);

}


postButton.onclick = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts)  {
                const postBlock = document.createElement('div');
                postBlock.classList.add('post-block');

                const postTitle = document.createElement('p');
                postTitle.innerHTML = `<strong>Title:</strong> ${post.title}`;

                const viewPost = document.createElement('button');
                viewPost.innerHTML = '<strong>View Post</strong>';
                viewPost.onclick = () => postDetails(post.id);

                postBlock.append(postTitle, viewPost);
                postContainer.appendChild(postBlock);
            };
        });
};

function postDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(value => value.json())
        .then(post => {
            localStorage.setItem('post', JSON.stringify(post));
            location.href = 'post-details.html';
        });
}