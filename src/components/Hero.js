// Libraries
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Cookie from 'js-cookie'

// Hero
class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subscribed: Cookie.get('arkitdevSubscription') ? true : false,
      successMessage: false,
      errorMessage: false
    }
  }

  // Handle creating a new resource
  handleNewSubscriber = async () => {

    // Get values from state
    let { email } = this.state

    // Create the subscription
    let response = await this.props.subscribeToNewsletterMutation({
      variables: { email }
    })

    console.log(response)

    // Do the thing
    this.setState({
      subscribed: true,
      successMessage: true
    })

    Cookie.set('arkitdevSubscription', true)
  }

  render() {

    const resource = this.props.resource || 'development resources'
    const emoji = this.props.emoji || '🤓'

    return (
      <div className='hero'>
        <h1 className='heroTitle'>
          {process.env.MC_API_KEY}
          All your <span className='heroTitleUnderline'>freshest</span> ARKit {resource}. {emoji}
        </h1>
        { !this.state.subscribed &&
          <div className='heroSubtitle'>
            Would rather get a weekly bundle <span className='heroSubtitleEmojii'>💌</span> of best tutorials, articles and tools?
          </div>
        }
        { !this.state.subscribed &&
          <form className='heroForm'>
            <input
              className='heroFormEmail'
              type='email'
              placeholder='webmaster91@hotmail.com'
              onChange={(e) => this.setState({ email: e.target.value })} />
            <a className='heroFormButton' onClick={this.handleNewSubscriber}>Send me them goods!</a>
          </form>
        }
        { this.state.successMessage && <div className='heroFormSuccess'>You're on the list! 👌 Nice.</div> }
        { this.state.errorMessage && <div className='heroFormSuccess'>Something went bonkers, sorry! 🙁 Can you try again in a bit?</div> }
      </div>
    )
  }
}

const SUBSCRIBE_TO_NEWSLETTER_MUTATION = gql`
  mutation SubscribeToNewsletterMutation($email: String!) {
    subscribeToNewsletter(email: $email) { email }
  }
`

export default graphql(SUBSCRIBE_TO_NEWSLETTER_MUTATION, { name: 'subscribeToNewsletterMutation' }) (Hero)