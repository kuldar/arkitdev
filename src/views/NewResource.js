// Libraries
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Dropzone from 'react-dropzone'
import { categoryName } from '../lib/helpers'

// Constants
import { GC_FILE_API_ENDPOINT } from '../constants'

// New resource view
class NewResource extends Component {

  state = {
    title: '',
    description: '',
    websiteUrl: '',
    githubUrl: '',
    category: 'TUTORIAL',
    uploading: false,
    imageUrl: '',
    imageId: ''
  }

  // Handle image uploading
  handleImageUpload = (files) => {

    // Prepare form data & use the 'data' key
    let data = new FormData()
    data.append('data', files[0])

    // Upload the file
    fetch(GC_FILE_API_ENDPOINT, {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json()
    }).then(image => {
      this.setState({
        imageId: image.id,
        imageUrl: image.url
      })
    })
  }

  // Handle creating a new resource
  handleCreateResource = async () => {

    // Get values from state
    let { title, description, category, websiteUrl, githubUrl, imageId } = this.state

    // Create the resource
    await this.props.createResourceMutation({
      variables: { title, description, category, websiteUrl, githubUrl, imageId }
    })

    // Go to home
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='newResourceForm'>
        <h1 className='newResourceTitle'>Suggest a new tutorial, article or tool. 👇</h1>
        <div className='newResourceSubtitle'>This form can still be bit buggy, sorry.</div>
        <input
          placeholder='Title'
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          className='newResourceFormTitleInput'
          type='text' />

        <textarea
          placeholder='Description'
          value={this.state.description}
          className='newResourceFormTextarea'
          onChange={(e) => this.setState({ description: e.target.value })}>
        </textarea>

        <div className='newResourceFormSelect'>
          <span className='newResourceFormSelectValue'>{categoryName(this.state.category)}</span>
          <select className='newResourceFormSelectElement' onChange={(e) => this.setState({ category: e.target.value })}>
            <option value='TUTORIAL'>Tutorial</option>
            <option value='ARTICLE'>Article</option>
            <option value='PROJECT'>Project</option>
            <option value='TOOL'>Tool</option>
          </select>
        </div>

        <input
          placeholder='Website URL'
          value={this.state.websiteUrl}
          onChange={(e) => this.setState({ websiteUrl: e.target.value })}
          className='newResourceFormInput'
          type='text' />

        <input
          placeholder='Github URL'
          value={this.state.githubUrl}
          onChange={(e) => this.setState({ githubUrl: e.target.value })}
          className='newResourceFormInput'
          type='text' />

        { !this.state.imageId &&
          <Dropzone
            onDrop={this.handleImageUpload}
            accept='image/*'
            multiple={false}
            className='newResourceFormDropzone'
            onDropAccepted={(e) => { this.setState({ uploading: true }) } }>
            <div>{ this.state.uploading ? 'Uploading image...' : 'Click and choose an image'}</div>
          </Dropzone> }

        { this.state.imageUrl && <img src={this.state.imageUrl} className='newResourceFormImage' /> }

        { this.state.title &&
          this.state.description &&
          this.state.imageUrl &&
          <div className='newResourceFormButton' onClick={this.handleCreateResource}>Add a new resource</div> }

      </div>
    )
  }

}

const CREATE_RESOURCE_MUTATION = gql`
  mutation CreateResourceMutation($title: String!, $description: String!, $category: ResourceCategory!, $websiteUrl: String!, $githubUrl: String, $imageId: ID!) {
    createResource(
      title: $title,
      description: $description,
      category: $category,
      websiteUrl: $websiteUrl,
      githubUrl: $githubUrl,
      imageId: $imageId
    ) {
      id
      title
      description
      category
      websiteUrl
      githubUrl
      image {
        url
      }
    }
  }
`

export default graphql(CREATE_RESOURCE_MUTATION, { name: 'createResourceMutation' }) (NewResource)