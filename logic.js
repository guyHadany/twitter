const Tweeter = function(){
    
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
        ];
    let postidCounter = 0
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
        removePost,
        addComment,
        removeComment

    }
}



