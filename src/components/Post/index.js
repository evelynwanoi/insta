import React from 'react'
import './Post.css'

export default function (props) {
  const nickname = props.nickname
  const avatar = props.avatar
  const image = props.image
  const caption = props.caption
  return (
    <article className="Post" >
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={avatar} alt={nickname} />
          </div>
          <div className="Post-user-nickname">
            <span>{nickname}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt={caption} src={image} />
        </div>
      </div>
      <div className="Post-caption">
        <strong>{nickname}</strong>{caption}
      </div>
    </article>
  )
}