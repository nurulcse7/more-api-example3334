/*
২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
*/

function loadCommensts() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}

function displayComments(data){
    const ul = document.getElementById('comments');
    for(const comment of data){
        //console.log(comment.name)
        const li = document. createElement('li')
        li.innerText = `Name: ${comment.name} Email: ${comment.email}`
        ul.appendChild(li);
    }
}
loadCommensts();