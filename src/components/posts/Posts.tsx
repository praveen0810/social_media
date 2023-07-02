import React from 'react'
import './posts.scss'

const Posts = () => {
    return (
        <div className="posts">
            <div className="status-main">
                <img src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg" className="status-img" />
                <div className="album-detail">
                    <div className="album-title"><strong>Quan Ha</strong> create new <span>album</span></div>
                    <div className="album-date">6 hours ago</div>
                </div>
                <button className="intro-menu"></button>
            </div>
            <div className="album-content">When the bass drops, so do my problems.
                <div className="album-photos">
                    <img src="https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80" alt="" className="album-photo" />
                    <div className="album-right">
                        <img src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" className="album-photo" />
                        <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="album-photo" />
                    </div>
                </div>
            </div>
            <div className="album-actions">
                <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    87
                </a>
                <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    20
                </a>
                <a href="#" className="album-action">
                    <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1" viewBox="0 0 24 24">
                        <path d="M17 1l4 4-4 4" />
                        <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
                        <path d="M21 13v2a4 4 0 01-4 4H3" />
                    </svg>
                    13
                </a>
            </div>
        </div>)
}

export default Posts