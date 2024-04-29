const http = require('http');
const url = require('url');

// TODO: Implement your server here

const server = http.createServer((req, res) => {
 const urlPath=url.parse(req.url,true)
  // TODO: Implement your routes here
  if(req.method==="POST" && urlPath.pathname==="/create"){
create(req,res)
  }
  else if(req.method ==="POST" && urlPath.pathname==="/confirm"){
    confirm(req,res)
  }
  else if (req.method ==="GET" && urlPath.pathname==="/view"){
view(req,res)
  }
});

let character= {}
const create=(req,res) =>{
let body=""
req.on("data", (segment)=>{
  body+=segment.toString()
})
req.on("end", ()=>{
 
  const data= JSON.parse(body)
  character= {
    class: data.class, gender: data.gender, funFact: data.funFact 
  }
  console.log(character)
  res.end(JSON.stringify({message:"character created"}))
})
}
const confirm = (req,res) =>{
  if (character)
  res.end(JSON.stringify({message:"character exists"}))
else 
res.end(JSON.stringify({message:"character does not exist"}))
}
const view=(req,res) => {
  if (character)
  res.end(JSON.stringify({character: character}))
else 
res.end(JSON.stringify({message:"character does not exist"}))
}
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = {server,create,confirm,view};