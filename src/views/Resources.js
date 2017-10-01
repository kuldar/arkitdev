// Libraries
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

// Components
import Hero from '../components/Hero'
import ResourceList from '../components/ResourceList'
import { Loader, ErrorMessage, EmptyMessage } from '../lib/helpers'

// Resources view
class Resources extends Component {

  render() {
    const resources = this.props.allResourcesQuery.allResources

    const resourcesListComponent = () => {
      let query = this.props.allResourcesQuery
      if (query && query.loading) { return <Loader /> }
      else if (query && query.error) { return <ErrorMessage /> }
      else {
        if (resources.length > 0) {
          return <ResourceList resources={resources} />
        } else {
          return <EmptyMessage />
        }
      }
    }

    return (
      <div className='wrapper'>
        <Hero />
        { resourcesListComponent() }
      </div>
    )
  }

}

const ALL_RESOURCES_QUERY = gql`
  query AllResourcesQuery {
    allResources(filter: {isPublished: true}) {
      id
      title
      description
      category
      websiteUrl
      githubUrl
      image {
        secret
      }
      author {
        name
        twitterHandle
        websiteUrl
      }
    }
  }
`

export default graphql(ALL_RESOURCES_QUERY, {name: 'allResourcesQuery'}) (Resources)