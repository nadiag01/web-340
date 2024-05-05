const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.character={
      class: "", gender: "", funfact: ""
    }
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data=chunk.toString().trim().split(",")
 if (data.length===3){
  const characterclass=data[0].trim()
const charactergender=data[1].trim()
const characterfunfact=data[2].trim()
this.character.class=characterclass
this.character.gender=charactergender
this.character.funfact=characterfunfact
callback()
 }else{
  this.emit("error",new Error("invalid data"))
 } }

  _read(size) {
    // TODO: Implement your _read method here
    const format=`class: ${this.character.class}, gender: ${this.character.gender}, funfact: ${this.character.funfact}`
    this.push(format)
    this.push(null)
  }
}

module.exports = CharacterCreator;