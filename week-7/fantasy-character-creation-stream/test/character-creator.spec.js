const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const character1="mage,male, has a wand"
    characterCreator.on("data",()=>{
      expect(characterCreator.character.class).toBe("mage")
      expect(characterCreator.character.gender).toBe("male")
      expect(characterCreator.character.funfact).toBe("has a wand")
      done()
    })
    characterCreator.write(character1)
    characterCreator.end()
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error",(error)=>{
      expect(error.message).toBe("invalid data")
     
      done()
    })
    characterCreator.write("")
    characterCreator.end()
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const character2="warrior,female,has a shield"
    characterCreator.on("data",(data)=>{
      expect(data.toString()).toBe("class: warrior, gender: female, funfact: has a shield")
     
      done()
    })
    characterCreator.write(character2)
    characterCreator.end()
  });
});