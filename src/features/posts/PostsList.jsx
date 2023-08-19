import React from 'react'
import { useSelector } from 'react-redux'
import { allPosts } from './postsSlice'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
const PostsList = () => {
    const posts = useSelector(allPosts);

    const orderPost = posts.slice().reverse();
    
    const renderPosts = orderPost.map((posts) => (
        <article key={posts.id} className='post'>
            <h3>{ posts.title }</h3>
            <p>{ posts.description }</p>
            <p>Post By <strong><PostAuthor userId={posts.userId}/></strong></p>
            <p><TimeAgo timeStamp={posts.date}/></p>
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