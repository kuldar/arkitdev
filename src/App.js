// Libraries
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Views
import Resources from './views/Resources'
import NewResource from './views/NewResource'
import Tutorials from './views/Tutorials'
import Articles from './views/Articles'
import Tools from './views/Tools'

// App
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Resources} />
          <Route exact path='/new' component={NewResource} />
          <Route exact path='/tutorials' component={Tutorials} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/tools' component={Tools} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
