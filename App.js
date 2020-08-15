const http=require('http')
const routes=require('./route')

const users=[]
const server=http.createServer(routes)

server.listen(3000)