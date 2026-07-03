const publishBtn = document.getElementById("publishBtn");
const postText = document.getElementById("postText");
const posts = document.getElementById("posts");

publishBtn.onclick = () => {

    if(postText.value.trim()==""){
        alert("Введите текст публикации");
        return;
    }

    const post = document.createElement("div");

    post.className="post";

    post.innerHTML=`

<div class="user">

<div class="avatar"></div>

<div>

<h3>Вы</h3>

<p>Только что</p>

</div>

</div>

<div class="post-content">

<p style="padding:25px;font-size:18px;">
${postText.value}
</p>

<div class="post-buttons">

<button class="like-btn">🤍 <span>0</span></button>

<button>💬 Комментарий</button>

<button>📤 Поделиться</button>

</div>

</div>

`;

    posts.prepend(post);
const likeButton = post.querySelector(".like-btn");

likeButton.onclick = function(){

    const number = this.querySelector("span");

    let likes = Number(number.innerHTML);

    likes++;

    number.innerHTML = likes;

    this.innerHTML = `❤️ <span>${likes}</span>`;

}
    postText.value="";

}