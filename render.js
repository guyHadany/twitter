const Renderer = function () {

    
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let index in posts){
        let newPost = `<div class="post post-text" id=${posts[index].id} data-id=${posts[index].id}>${posts[index].text}<br/><input placeholde="Got something to say?" class="myComment comments"><button class="comment-btn comments">comment</button><br/><button class=delete>Delete Post</button></div>`
            $("#posts").append(newPost)
            for(let i in posts[index].comments){
                let newComment = `<div class=comments data-commentID=${posts[index].comments[i].id}>${posts[index].comments[i].text}</div>`
                $(`#${posts[index].id}`).append(newComment)
            }
        }
    }
    return {
        renderPosts
    }
}


