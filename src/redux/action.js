export const addPost = (content) => ({
    type : "ADD_POST",
    payload : {
        content
    }
})

export const getPost = (content) => ({
    type : "GET_POST",
    payload : {
        content
    }
})

export const updatePost = (content) => ({
    type : "UPDATE_POST",
    payload : {
        content
    }
})

export const removePost = (content) => ({
    type : "REMOVE_POST",
    payload : {
        content
    }
})