import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'
import Projects from '../components/Projects'

import johnGellertResume from '../assets/files/john-gellert-resume.pdf'
class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'John Gellert'
    const siteDescription = "A portfolio of John Gellert's work."

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About me</h2>
            </header>
            {/* I am have a passion for discovering technology solutions to solve human problems.  */}
            <p>
              I'm inspired by learning patterns and understanding how things
              work, and I use this curiosity to create new ways of doing things
              based on my observations. I am at my best after taking time to let
              my mind live with new ideas and materials, though when needed, I
              am flexible to get hands-on right away. I stay energized by
              exercising and taking time to allow my mind to ponder. In my free
              time, I enjoy the outdoors with friends and family.
            </p>
            <ul className="actions">
              <li>
                <a href={johnGellertResume} target="_blank" className="button">
                  View Resume
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Projects</h2>
            <Projects />
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>Feel free to shoot me a message to connect!</p>

            <div className="row">
              {/* <div className="8u 12u$(small)">
                <form
                  name="contact"
                  method="post"
                  data-netlify-recaptcha="true"
                //   netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div> */}
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  {/* <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li> */}
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    <a href="tel:+1-320-743-7072">(320) 742-7072</a>
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:gellertjm@gmail.com" target="_blank">
                      gellertjm@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
