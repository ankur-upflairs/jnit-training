import http from 'node:http'

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url === '/'){
        res.write('home page')
       return res.end()
    }
    else if(req.url === '/about'){
        res.write('about page')
        return res.end()
    }
    res.end('hello world')
})

server.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
