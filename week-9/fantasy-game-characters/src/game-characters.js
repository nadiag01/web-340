// game-characters.js
const { spawn } = require("child_process");
const path = require("path")

class GameCharacters {
  constructor(script) {
    // TODO: Set the script file path
this.scriptpath = path.join(__dirname, script)
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child= spawn("node", [this.scriptpath])
let data=""
let error = ""
child.stdout.on("data", (chunk) =>{
  data+= chunk
})
child.stderr.on("data", (chunk) =>{
  error+= chunk
})
child.on("close",(status)=>{
  if(status!==0){
    const err= new Error(error.trim())
    console.log(err.message)
    callback(err, undefined) 
  }
  else {
    try{
      const parseddata = JSON.parse(data)
      callback(null,parseddata)
    }
    catch(error) {
      callback(error,undefined)
    }
  }
})
child.on("error", (err)=>{
  callback(err, undefined)
})
  }
}

module.exports = { GameCharacters };