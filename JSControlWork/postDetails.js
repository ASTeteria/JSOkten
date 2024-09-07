const postDetails = document.getElementById('postDetails');
const comentsContainer = document.getElementById('comentsContainer');


const post = JSON.parse(localStorage.getItem('post'));

if (post) {
    const postId = document.createElement('h4');
    postId.innerHTML = `<strong>ID:</strong> ${post.id}`;

    const postTitle = document.createElement('p');
    postTitle.innerHTML = `<strong>Title:</strong> ${post.title}`;

    const postBody = document.createElement('p');
    postBody.innerHTML = `<strong>Body:</strong> ${post.body}`;

    postDetails.append(postId, postTitle, postBody);

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments)  {
                const commentBlock = document.createElement('div');
                commentBlock.classList.add('comment-block');

                const commentId = document.createElement('h4');
                commentId.innerHTML = `<strong>Id:</strong> ${comment.id}`;

                const commentName = document.createElement('p');
                commentName.innerHTML = `<strong>Name:</strong> ${comment.name}`;

                const commentEmail = document.createElement('p');
                commentEmail.innerHTML = `<strong>Email:</strong> ${comment.email}`;

                const commentBody = document.createElement('p');
                commentBody.innerHTML = `<strong>Body:</strong> ${comment.body}`;

                commentBlock.append(commentId, commentName, commentEmail, commentBody);

                comentsContainer.appendChild(commentBlock);
            };
        });
}