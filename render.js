const Renderer = function () {

    
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let index in posts){
        let newPost = `<div class=post id=${posts[index].id} data-id=${posts[index].id}><div class=post-text>${posts[index].text}</div><input placeholde="Got something to say?" class="myComment comments"><button class="comment-btn comments">comment</button><br/><button class=delete>Delete Post</button></div>`
            $("#posts").append(newPost)
            for(let i in posts[index].comments){
                let newComment = `<div class=comments data-commentID=${posts[index].comments[i].id}><span class=delete-comment>x</span>${posts[index].comments[i].text}</div>`
                $(`#${posts[index].id} div:first-child`).after(newComment)
                // console.log($(`#${posts[index].id}`).prepend(newComment))
            }
        }
    }
    return {
        renderPosts
    }
}


