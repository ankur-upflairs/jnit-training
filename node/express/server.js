import express from 'express';

const app = express();
let blogs=[{
    id:1,title:'pollution',
    description:'pollution is a major problem in the world',
    image:'https://images.unsplash.com/photo-1557683316-973673baf926'
}]
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/blogs',(req,res)=>{
    res.json(blogs)
})
app.post('/blogs',(req,res)=>{
    let newId= blogs[blogs.length-1].id+1
    let newBlog=req.body
    newBlog.id=newId
    blogs.push(newBlog)
    res.json(newBlog)
})
app.put('/blogs/:id',(req,res)=>{
    let id= req.params.id
    let data=req.body
    data.id=id
    let index=blogs.findIndex(blog=>blog.id==id)
    blogs[index]=data
    res.json(data)
})
app.delete('/blogs/:id',(req,res)=>{
    let id= req.params.id
    blogs=blogs.filter(blog=>blog.id!=id)
    res.json("blog deleted")
})

app.listen(3000,'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});