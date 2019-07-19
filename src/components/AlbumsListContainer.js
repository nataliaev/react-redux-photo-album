import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/addAlbum'
import { getAlbums } from '../actions/albums'
import { createAlbum } from '../actions/createAlbum'
import AddAlbumForm from './AddAlbumForm'

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return (
      <div>
        <AlbumsList albums={this.props.albums} />
        <AddAlbumForm createAlbum={this.props.createAlbum} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('State from ALbListC', state)
  return {
    albums: state.albums,
    photos: state.photos
  }
}

export default connect(mapStateToProps, { getAlbums, addAlbum, createAlbum })(AlbumsListContainer)