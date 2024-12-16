import React from 'react'

function Blog({title,description,image}) {
  return (
    <div style={{width:"30%"}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Blog