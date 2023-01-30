let post = `<div id="Newslist">
<div class="news">
    <div class="news-text">
        <div class="infotop">
            <img src="./image/avatar.png" alt="image">
            <p class="name">Authors name</p>
            <p class="data">in</p>
            <p class="name">Topics name ·</p>
            <p class="data">7 july</p>
        </div>
        <div class="text">
            <a href="content.html"> <p id="title"></p> </a>
            <p id="body"></p>
        </div>
        <div class="infobottom">
            <button>Java Script</button>
            <p>12 min read</p>
            <p>·</p>
            <p>Selected for you</p>
        </div>
    </div>
    <img id="news-img" src="./image/Img 1.png" alt="image">
</div>
<hr>
</div>`

fetch('https://jsonplaceholder.typicode.com/users/1/posts')
.then((response)=>response.json())
.then(function(data) {
    console.log(data.splice(1,3))
    data.splice(1,3).forEach(item=>{
        let newPost = post.replace('id="title">', `id="title">${item.title}`);
        newPost = newPost.replace('id="body">', `id="body">${item.body}`);

        posts.innerHTML += newPost;
    })
})