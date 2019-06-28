const Tweeter = function(){
    
    const _posts = []
    let postidCounter = 1
    let commentIdCounter = 0
    const getPosts = function(){
        return _posts
    }
    const addPost = function(text){
        let newPost = {
            text,
            id: `p${postidCounter}`,
            comments: []
            }
        _posts.push(newPost)
        postidCounter++
    }
    const removePost = function(postID){
        for(let index in _posts){
            if(postID == _posts[index].id){
                _posts.splice(index, 1)
            }
        }
    }
    const addComment = function(postID, text){
        for(let index in _posts){
            if(postID == _posts[index].id){
            commentIdCounter++
            let newComment = {
                id: `c${_posts[index].comments.length}`,
                text
                }
            _posts[index].comments.push(newComment)
            }
        }
    }   
    const removeComment = function(postID, commentID){
        for(let index in _posts){
            if(postID == _posts[index].id){
                for(let i in _posts[index].comments){
                    if(commentID == _posts[index].comments[i].id){
                        _posts[index].comments.splice(i, 1)
                    }
                }
            }
        }
    }    
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment

    }
}



