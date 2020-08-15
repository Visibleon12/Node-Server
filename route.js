const users=require('./data')

const routes=(req,res)=>{
  const url=req.url;
  const method=req.method;
  if(url==='/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>MY Server Page</title></head>')
    res.write('<body><p>Hello To my server!</p>')
    res.write('<form action="/createUser" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>')
    res.write('</html>')
    return res.end()
  }
  if(url==='/users'){
    res.setHeader('Content-Type','application/json')
    res.write('<html>')
    res.write('<head><title>MY Server Page</title></head>')
    res.write('<body><p>List of Users!</p>')
    res.write('<ul><li>user1</li></ul>')
    res.write('</html>')
    return res.end()
  }
  if(url==='/createUser'&&method==='POST'){
    const body=[]
    req.on('data',(chunk)=>{body.push(chunk)})
    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString()
      const user=parsedBody.split('=')[1]
      users.push(user)
      res.statusCode=302
      res.setHeader('Location','/')
      return res.end()
    })
  }
}

module.exports=routes