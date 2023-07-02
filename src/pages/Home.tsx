import React from 'react'
import Stories from '../components/stories/Index'
import CreatePost from '../components/createPost/CreatePost'
import Posts from '../components/posts/Posts'
const Home = () => {
    return (
        <div className='home'>
            <Stories />
            <CreatePost />
            <div className='posts-container'>
                <Posts />

            </div>
        </div>
    )
}

export default Home