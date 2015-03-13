
var postsDiv = document.getElementById('posts');

var getPosts = function() {
    var url = 'http://localhost:8000/blogpostapi/posts/format/json';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var blogPostsArr = JSON.parse(xmlhttp.responseText);
            message = blogPostsArr.message;
            var blogPostsArr = xmlhttp.responseText;
            console.log(blogPostsArr);
            exposePosts(blogPostsArr);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

var exposePosts = function(posts) {
    posts = JSON.parse(posts);
    for (var i = 0; i < posts.length; i++) {
        var postElem = document.createElement('p');
        postElem.innerHTML = posts[i].post;
        postsDiv.appendChild(postElem);
    }
}

getPosts();
