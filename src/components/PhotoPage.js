import * as React from 'react'

export default function PhotoPage(props) {
  return (<div>
    {console.log(props)}
    <h1>Photos in the album: {props.albumTitle}</h1>

  {props.photos.map(photo => {
    return ( 
    <div key={photo.id}>
      <li>{photo.title}</li>
      <img src={photo.thumbnailUrl} alt='albums' />
    </div> )
    })}
  </div>)
}