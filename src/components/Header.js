import React from 'react'

import Footer from './Footer'
import profile from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image profile"><img src={profile} alt="" /></a>
                    <h1><strong>Hello, I am John,</strong> a self-driven<br />
                    software developer who <br />
                    enjoys the outdoors.</h1>
                    {/* <a href="http://html5up.net">HTML5 UP</a>.</h1> */}
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
