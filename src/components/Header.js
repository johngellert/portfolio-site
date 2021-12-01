import React from 'react'

import Footer from './Footer'
import profile from '../assets/images/headshot-2021-profile.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image profile">
            <img src={profile} alt="" />
          </a>
          <h1>
            <strong>I'm John,</strong> a self-driven <br />
            software engineer who <br />
            enjoys the outdoors.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
