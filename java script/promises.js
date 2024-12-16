// let res=fetch('https://jsonplaceholder.typicode.com/posts')
// // console.log(res)
// let data = res.then((data)=>{
//     // console.log(data)
//     return data.json()
// })
// // console.log(data)
// data.then((data)=>{
//     console.log(data)
// })
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>
    
    console.log(data)
)
.catch(err=>console.log(err))