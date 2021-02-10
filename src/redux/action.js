import { database } from "../firebase";

// export const addPost = (post) => async (dispatch) => {
//     const newPost = await database.push(post) 
//     dispatch({
//         type : "ADD_POST",
//         payload : newPost
//    })
//    console.log(newPost)
//    return newPost
// }

export function addPost(post) {
    return (dispatch, getState, getFirebase) => {
      return getFirebase()
        .ref('todos')
        .push(post)
        .then((res) => {
        //   dispatch(sendNotification('Todo Added'))
        console.log(res)
        })
  }
}
export const getPost = () => async (dispatch) => {
    const allPost = await database.once('value', (snap) => {
        console.log(snap.child())
        dispatch({
            type : "GET_POST",
            payload : snap.val()
       })
    }, (err) => {
        console.log(err)
      })
   console.log(allPost)
   return allPost
}

export const updatePost = (id, post) => async (dispatch) => {
    const updatedPost = await database.child(id).update(post); 
    dispatch({
        type : "UPDATE_POST",
        payload : updatedPost
   })
   return updatedPost
}

export const removePost = (id) => async (dispatch) => {
    const removedPost = await database.child(id).remove(); 
    dispatch({
        type : "REMOVE_POST",
        payload : removedPost
   })
   return removedPost
}