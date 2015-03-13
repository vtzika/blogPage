
/**
* HTML div element which contains all the posts
* @type {HTML element}
*/
var postsDiv = document.getElementById('posts');

/**
* This function gets the post resources from the blogPostApi and exposes the posts
*/
var getPosts = function() {
    var url = 'http://localhost:8000/blogpostapi/posts/format/json';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var blogPostsArr = JSON.parse(xmlhttp.responseText);
            message = blogPostsArr.message;
            var blogPostsArr = xmlhttp.responseText;
            exposePosts(blogPostsArr);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

/**
* This function creates an paragraph element for each post
* @param {array} posts - The array with the posts.
*/
var exposePosts = function(posts) {
    posts = JSON.parse(posts);
    for (var i = 0; i < posts.length; i++) {
        var postElem = document.createElement('p');
        postElem.innerHTML = posts[i].post;
        postsDiv.appendChild(postElem);
    }
}

/**
* calls the getPosts function on when this file is included on an HTML file
**/
getPosts();
