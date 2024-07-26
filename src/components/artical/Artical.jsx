import React from 'react'
import './artical.css'

const Article = ({ imgUrl, date, text }) => (
  <div className='hotel-container_article'>
    <div className='hotel-container_article-image'>
      <img src={imgUrl} alt='hotel_image' />
    </div>
    <div className='hotel-container_article-content'>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
)

export default Article
