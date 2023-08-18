import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {
    const allUsers = useSelector(selectAllUsers);
    const author = allUsers.find(user => user.id === userId)
  return (
    <span>{ author ? author.name : 'Unknown Author'}</span>
  )
}

export default PostAuthor