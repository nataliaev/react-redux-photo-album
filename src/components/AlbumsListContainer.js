import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/addAlbum'
import { setAlbums } from '../actions/setAlbums'

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
  }

  render() {
    //console.log('Length:', this.props.albums.albums.length)
    if (!this.props.albums.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums.albums} />
  }
}

const mapStateToProps = (state) => {
  //console.log('State in mapState:', state)
  return {
    albums: state
  }
}

export default connect(mapStateToProps, { setAlbums, addAlbum })(AlbumsListContainer)