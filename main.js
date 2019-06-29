const post = function(){
    if($("#input").val()){
        tweeter.addPost($("#input").val())
        $("#input").val("")

        renderer.renderPosts(tweeter.getPosts())
    }
}



// const comment = function(){
//     if($(".myComment").val()){
//         tweeter.addComment($(".comment-btn").val())
//         $(".comment").val("")
//         renderer.renderPosts(tweeter.getPosts())
//     }
// }


$("#posts").on("click", ".delete", function(){
    deletePost($(this).closest(".post").attr("id"))
})

$("#posts").on("click", ".comment-btn", function(){
    if($(this).closest(".post").find(".myComment").val()){
        let id = $(this).closest(".post").attr("id")
        let text = $(this).closest(".post").find(".myComment").val()
       
        tweeter.addComment(id, text)
        $(".comment").val("")
        renderer.renderPosts(tweeter.getPosts())
    }
})

$("#posts").on("click", ".delete-comment", function(){
    console.log($(this).closest(".post").attr("id"))
    console.log($(this).closest("div").attr("data-commentID"))

    let postID = $(this).closest(".post").attr("id")
    let commentID = $(this).closest("div").attr("data-commentID")
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())

})


const deletePost = function(a){
tweeter.removePost(a)
renderer.renderPosts(tweeter.getPosts())


    // tweeter.removePost($(this).closest(".post").data().id)
    // renderer.renderPosts(tweeter.getPosts())
}





const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
