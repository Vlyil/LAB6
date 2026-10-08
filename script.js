let likes = 100;
let dislikes = 20;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

const commentInput = document.getElementById("commentInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

const commentsDiv = document.getElementById("comments");


function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }

    return null;
}



function setCookie(name, value) {
    document.cookie =
        name + "=" + encodeURIComponent(value) +
        "; max-age=86400; path=/";
}


function deleteCookie(name) {
    document.cookie =
        name + "=; max-age=0; path=/";
}



likeBtn.addEventListener("click", function () {

    const vote = getCookie("vote");

    if (vote) {
        alert("You already voted!");
        return;
    }

    likes++;

    likeCount.textContent = likes;

    setCookie("vote", "like");
});



dislikeBtn.addEventListener("click", function () {

    const vote = getCookie("vote");

    if (vote) {
        alert("You already voted!");
        return;
    }

    dislikes++;

    dislikeCount.textContent = dislikes;

    setCookie("vote", "dislike");
});



submitBtn.addEventListener("click", function () {

    const oldComment = getCookie("comment");

    if (oldComment) {
        alert("You already submitted a comment!");
        return;
    }

    const comment = commentInput.value.trim();

    if (comment === "") {
        alert("Please write a comment.");
        return;
    }

    setCookie("comment", comment);

    displayComment(comment);

    commentInput.value = "";
});



function displayComment(comment) {

    commentsDiv.innerHTML = "";

    const paragraph = document.createElement("p");

    paragraph.textContent = comment;

    commentsDiv.appendChild(paragraph);
}



clearBtn.addEventListener("click", function () {

    deleteCookie("vote");
    deleteCookie("comment");

    likes = 100;
    dislikes = 20;

    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;

    commentsDiv.innerHTML = "";

    commentInput.value = "";

    alert("Your vote and comment have been reset.");
});



const savedComment = getCookie("comment");

if (savedComment) {
    displayComment(savedComment);
}