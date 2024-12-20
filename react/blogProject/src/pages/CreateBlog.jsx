import React,{useState} from 'react'
import axios from 'axios'
function CreateBlog() {
  // const [count,setcount] =useState(0)
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [image, setimage] = useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault();
    let res=await axios.post('http://localhost:3000/blogs',
      {title,description,image}
    )
    console.log(res.data)
  }

  return (
    <div>
      {/* {count} */}
      {/* <button onClick={()=>{setcount(count+1)}}>increse</button> */}
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
            <h3>Title</h3>
            <input type="text" value={title} placeholder='Title'
            onChange={(e)=>settitle(e.target.value)} />
            </label>
            <h3>Description</h3>
            <input type="text" value={description}
            onChange={(e)=>setdescription(e.target.value)} placeholder='Description' />
            <h3>Image</h3>
            <input type="text" value={image}
            onChange={(e)=>setimage(e.target.value)} placeholder='Image' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog