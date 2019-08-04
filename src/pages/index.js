import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
// import Gallery from '../components/Gallery'
import Projects from '../components/Projects';



import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "John Gellert"
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
                            <h2>Welcome!</h2>
                        </header>
                        {/* I am have a passion for discovering technology solutions to solve human problems.  */}
                        <p>
                            I am inspired by learning patterns and understanding how things work, and I use this 
                            curiosity to create new ways of doing things based on my observations. 
                            I am at my best after taking time to let my mind live with new ideas 
                            and materials, though when needed, I am flexible to get hands-on right 
                            away. I stay energized by exercising and taking time to allow my mind 
                            to ponder. In my free time, I enjoy the outdoors with friends and 
                            family.
                        </p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Projects</h2>
                        <Projects />
                        {/* <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} /> */}


                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Feel free to shoot me a message to connect!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="post" data-netlify-recaptcha="true" netlify-honeypot="bot-field" data-netlify="true">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div data-netlify-recaptcha="true"></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                                
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    {/* <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li> */}
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        <a href="tel:+1-320-743-7072">(320) 742-7072</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:gellertjm@gmail.com" target="_blank">gellertjm@gmail.com</a>
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