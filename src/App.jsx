import React from 'react'
import PostsList from './features/posts/PostsList'
import AddPost from './features/posts/AddPost'

const App = () => {
  return (
    <div className='app'>
      <AddPost/>
      <PostsList/>
    </div>
  )
}

export default App