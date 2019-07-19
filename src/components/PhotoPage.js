import * as React from 'react'

export default function PhotoPage(props) {
  return (<div>
    <h1>Photos in this album</h1>

  {props.photos.map(photo => {
    return ( 
    <div key={photo.id}>
      <li>{photo.title}</li>
      <img src={photo.thumbnailUrl} alt='albums' />
    </div> )
    })}
  </div>)
}