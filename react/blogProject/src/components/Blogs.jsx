import React from 'react'
import Blog from './Blog'
export let blogData = [
    {id:1, title:"pollution",description:"this blog is about pollution",image:"https://picsum.photos/200/300"},
    {id:2, title:"technology",description:"this blog is about technology",image:"https://picsum.photos/200/300"},
    {id:3, title:"environment",description:"this blog is about environment",image:"https://picsum.photos/200/300"},
]

function Blogs() {
  return (
    <div>
        {blogData.map((el,i)=>{
            return <Blog key={i} title={el.title} description={el.description} image={el.image} />
        })}
    </div>
  )
}

export default Blogs