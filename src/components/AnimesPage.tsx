import React from 'react'
import AnimeList from './AnimeList'
import AnimeManage from './AnimeManage'
const AnimesPage = () => {
    return (
        <div className="main-container">
            <div className="container middle">
                <AnimeManage />
            </div>
            
            <div className="container right">
                <AnimeList />
            </div>
        </div>
    )
}

export default AnimesPage
