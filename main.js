const post = function(){
    if($("#input").val()){
    tweeter.addPost($("#input").val())
    $("#input").val("")

    renderer.renderPosts(tweeter.getPosts())
    }
}



const deletePost = function(){
// console.log("hello")
// console.log($(this).closest(".post").data().id)
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
}
$(".post").on("click", ".delete", deletePost)


const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


