// Libraries
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Footer
class Footer extends Component {
  render() {

    const pathName = this.props.location.pathname

    return (
      <div className='footer'>
        <div className='wrapper'>
          <div className='footerSite'>
            <img className='footerLogo' src='/images/logoWhite.svg' alt='ARKit Dev' />
            <div>
              Get your daily dose of ARKit from
              <a className='footerSiteLink' href='https://arkitdev.co'>arkitdev.co</a>
            </div>
          </div>

          <div className='footerAbout'>
            A thing by <a href='https://twitter.com/kkuldar'>@kkuldar</a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)