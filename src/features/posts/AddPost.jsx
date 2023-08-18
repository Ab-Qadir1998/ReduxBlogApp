import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ userId, setUserId ] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onUserChange = e => setUserId(e.target.value)

    const dispatch = useDispatch();
    const allUsers = useSelector(selectAllUsers);

    const userOptions = allUsers.map(user => (
      <option key={user.id} value={user.id}>{ user.name }</option>
    ))
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(postAdded( title, description, userId ))
        setTitle('');
        setDescription('')

        console.log(userId)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Post Title' name="title" onChange={onTitleChange} value={title}/>
        <textarea placeholder='Post Description' name="description" onChange={onDescriptionChange} value={description}/>
        <select onChange={onUserChange}>
          <option value={""}></option>
          {userOptions}
        </select>
        <button>Add Post</button>
    </form>
  )
}

export default AddPost