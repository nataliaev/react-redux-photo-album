import * as React from 'react'
import PhotoPage from './PhotoPage'
import { connect } from 'react-redux'
import { getPhotosByAlbum } from '../actions/photos'

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id
    console.log(`Now fetch photos for albumId = ${albumId}`)
    this.props.getPhotosByAlbum(albumId)
  }

  render() {
    if (!this.props.photos || !this.props.albums) return 'Loading...'
    const albumTitle = this.props.albums.find(album => album.id === parseInt(this.props.match.params.id)).title
    return <PhotoPage 
      photos={this.props.photos} 
      albumTitle={albumTitle}/>
  }
}

const mapStateToProps = (state) => {
  console.log('State from PhPC', state)
  return {photos: state.photos,
          albums: state.albums}
}

export default connect(mapStateToProps, {getPhotosByAlbum})(PhotoPageContainer)