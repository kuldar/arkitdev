// Libraries
import React, { Component } from 'react'
import { addRefToUrl, twitterUrlFromHandle, categoryName, getRandomInt } from '../lib/helpers'

// Constants
import { GC_IMAGES_API_ENDPOINT } from '../constants'

// Resource list item
class ResourceListItem extends Component {

  render() {
    const {
      title,
      description,
      websiteUrl,
      githubUrl,
      image,
      category,
      author } = this.props.resource

    const imageSettings = '/500x500'
    const imageUrl = GC_IMAGES_API_ENDPOINT + '/' + image.secret + imageSettings

    return (
      <div className='resourceListItem'>
        <div className='resourceListItemImage' style={{ backgroundImage: `url(${imageUrl})` }}></div>

        <div className='resourceListItemContent'>
          <div className='resourceListItemTitle'>
            <span>{title}</span> <span className='resourceListItemCategory'>{categoryName(category)}</span>
          </div>
          <div className='resourceListItemDescription'>{description}</div>
          <div className='resourceListItemAuthor'>
            { author.twitterHandle &&
              <img className='resourceListItemAuthorAvatar' src={`https://twitter.com/${author.twitterHandle}/profile_image?size=normal`} alt={author.twitterHandle} /> }
            <div className='resourceListItemAuthorInfo'>
              <a className='resourceListItemAuthorName' href={addRefToUrl(author.websiteUrl)}>
                {author.name}
              </a>
              { author.twitterHandle &&
                <a className='resourceListItemAuthorTwitter' href={twitterUrlFromHandle(author.twitterHandle)}>
                  @{author.twitterHandle}
                </a>
              }
            </div>
          </div>
        </div>

        <div className='resourceListItemSidebar'>
          <div className="resourceListItemSidebarLinks">
            <a
              className='resourceListItemMainLink'
              href={addRefToUrl(websiteUrl)}
              target='_blank'>
              <img className='resourceListItemMainLinkIcon' src='/images/viewIcon.svg' alt='View'/>
              <span className='resourceListItemMainLinkText'>View {categoryName(category).toLowerCase()}</span>
            </a>
            { githubUrl &&
              <a className='resourceListItemGithubLink' href={githubUrl} target='_blank'>
                <img className='resourceListItemGithubLinkIcon' src='/images/githubIcon.svg' alt='Github'/>
                <span className='resourceListItemGithubLinkText'>Github</span>
              </a> }
          </div>
        </div>
      </div>
    )
  }

}

export default ResourceListItem