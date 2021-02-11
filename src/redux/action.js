import { database } from "../firebase";

export const addPost = (post) => async (dispatch) => {
    return await database.push(post);
}

export const getPost = (post) => async (dispatch) => {
    return await database.on('value', (snap) => {
        dispatch({
            type: "GET_POST",
            payload: snap.val()
        })
    }, (err) => {
        console.log(err)
    });
}

export const updatePost = (id, post) => async (dispatch) => {
    return await database.child(id).update(post);
}

export const removePost = (id) => async (dispatch) => {
    return await database.child(id).remove();
}