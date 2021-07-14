import React from 'react'
import Summary from "./Summary";
import News from "./News";
const Homepage:React.FC = () => {
    return (
        <div className="main-container">
            <div className="container middle">
                <Summary />
            </div>
            <div className="container right">
                <News />
            </div>
        </div>

    )
}

export default Homepage
