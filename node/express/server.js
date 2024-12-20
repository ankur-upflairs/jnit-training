import express from 'express';
import mongoose from 'mongoose';
import Blog from './models/blogs.js';
import cors from 'cors';
const app = express();

mongoose.connect("mongodb+srv://jnit:jnit123@cluster0.mk94png.mongodb.net/blogdatabase")
.then(()=>console.log("connected to database"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/blogs',async (req,res)=>{
    let blogs=await Blog.find()
    res.json(blogs)
})
app.post('/blogs',async (req,res)=>{
    let {title,description,image} = req.body
    let newBlog = new Blog()
    newBlog.title=title
    newBlog.description=description
    newBlog.image=image
    await newBlog.save()
    res.json(newBlog)
})
app.put('/blogs/:id',async (req,res)=>{
    let id= req.params.id
    await Blog.findByIdAndUpdate(id,req.body)
    res.json("updated")
})
app.delete('/blogs/:id',async (req,res)=>{
    let id= req.params.id
    await Blog.findByIdAndDelete(id)
    res.json("blog deleted")
})




app.listen(3000,'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});


// let blogs=[{
//     id:1,title:'pollution',
//     description:'pollution is a major problem in the world',
//     image:'https://images.unsplash.com/photo-1557683316-973673baf926'
// }]
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.get('/blogs',(req,res)=>{
//     res.json(blogs)
// })
// app.post('/blogs',(req,res)=>{
//     let newId= blogs[blogs.length-1].id+1
//     let newBlog=req.body
//     newBlog.id=newId
//     blogs.push(newBlog)
//     res.json(newBlog)
// })
// app.put('/blogs/:id',(req,res)=>{
//     let id= req.params.id
//     let data=req.body
//     data.id=id
//     let index=blogs.findIndex(blog=>blog.id==id)
//     blogs[index]=data
//     res.json(data)
// })
// app.delete('/blogs/:id',(req,res)=>{
//     let id= req.params.id
//     blogs=blogs.filter(blog=>blog.id!=id)
//     res.json("blog deleted")
// })
