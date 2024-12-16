import React from 'react'

function CreateBlog() {
  return (
    <div>
        <form action="">
            <label htmlFor="">
            <h3>Title</h3>
            <input type="text" placeholder='Title' />
            </label>
            <h3>Description</h3>
            <input type="text" placeholder='Description' />
            <h3>Image</h3>
            <input type="text" placeholder='Image' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog