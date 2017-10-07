// Libraries
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Header
class Header extends Component {
  render() {

    const pathName = this.props.location.pathname

    return (
      <div className='headerContainer'>
        <div className='header'>
          <div className='wrapper'>
            <a className='headerLogoLink' href='/'>
              <img className='headerLogo' src='/images/logo.svg' alt='ARKit Dev' />
            </a>
            <nav className='headerNav'>
              <Link to='/tutorials' className={ pathName === '/tutorials' ? 'headerNavLink isActive' : 'headerNavLink' }>👨‍🎓 Tutorials</Link>
              <Link to='/articles' className={ pathName === '/articles' ? 'headerNavLink isActive' : 'headerNavLink' }>📚 Articles</Link>
              <Link to='/projects' className={ pathName === '/projects' ? 'headerNavLink isActive' : 'headerNavLink' }>🌈 Projects</Link>
              <Link to='/new' className={ pathName === '/new' ? 'headerNavLink isActive' : 'headerNavLink' }>🙌️  Suggest a resource</Link>
              <a className='headerNavTwitter' href='https://twitter.com/arkitdevco'>
                <img className='headerNavTwitterIcon' src='/images/twitterIcon.svg' />
                <div className='headerNavTwitterText'>Follow <strong>@ARKitDevco</strong></div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)