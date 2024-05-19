// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data");
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((err,data)=>{
      expect(err).toBeNull()
      expect(data).toEqual([
        {class:"mage",gender:"female", ability:"fireball"},
        {class: "warrior", gender:"male", ability: "strength"}
    ])
    done()
    })
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    gameCharacters= new GameCharacters("example.js")
    gameCharacters.getCharacters((err,data)=>{
      expect(err).not.toBeNull()
      expect(data).toBeUndefined()
    done()
    })
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    gameCharacters= new GameCharacters("failing-script.js")
    gameCharacters.getCharacters((err,data)=>{
      expect(err).not.toBeNull()
      expect(data).toBeUndefined()
      expect(err.message).toEqual("this script does not work")
    done()
    })
  });
});