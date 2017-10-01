// Libraries
import React, { Component } from 'react'

// Components
import ResourceListItem from './ResourceListItem'

// Resource list
class ResourceList extends Component {

  render() {
    const { resources } = this.props

    return (
      <div className='resourceList'>
        { resources.map(resource => <ResourceListItem key={resource.id} resource={resource} />) }
      </div>
    )
  }

}


export default ResourceList