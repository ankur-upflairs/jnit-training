import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../components/Blogs';
import Blog from '../components/Blog';

function SingleBlog() {
    // let params = useParams();
    let {id} = useParams();
    let singleBlog =blogData.find((el,i)=>el.id==id);
  return (
    <div>
        blog with id {id}
        <Blog title={singleBlog.title} description={singleBlog.description} image={singleBlog.image} />
    </div>
  )
}

export default SingleBlog
