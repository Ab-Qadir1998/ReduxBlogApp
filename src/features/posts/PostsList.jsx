import React from 'react'
import { useSelector } from 'react-redux'
import { allPosts } from './postsSlice'
import PostAuthor from './PostAuthor';
const PostsList = () => {
    const posts = useSelector(allPosts);
    console.log(posts)
    const renderPosts = posts.map((posts) => (
        <article key={posts.id} className='post'>
            <h3>{ posts.title }</h3>
            <p>{ posts.description }</p>
            <p>Post By <strong><PostAuthor userId={posts.userId}/></strong></p>
        </article>
    ))
  return (
    <section>
        <h2>Posts List</h2>
        {renderPosts}
    </section>
  )
}

export default PostsList