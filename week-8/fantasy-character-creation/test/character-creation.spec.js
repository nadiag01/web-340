"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
 const fs = require('fs');

// For promises:
// const fs = require('fs').promises;
//jest.mock(fs)
describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  it("should write new character to file", ()=> {
    const character={class:"mage", gender:"male", ability:"fireball"}
    createCharacter(character, (data)=> {
      expect(data.class).toEqual("mage")
      expect(data.gender).toEqual("male")
      expect(data.ability).toEqual("fireball")
    })
  })
  // 2. Test that getCharacters reads characters from the file
  it("should read new character from file", ()=> {
    getCharacters((data)=> {
      expect(data.class).toEqual("mage")
      expect(data.gender).toEqual("male")
      expect(data.ability).toEqual("fireball")
    })
  })
  // 3. Test that createCharacter handles errors when writing to the file
  it("should write new character to file", ()=> {
    const character={gender:"male", ability:"fireball"}
    createCharacter(character,(data)=> {
      expect(data).toEqual("couldnt create character")
    })
  })
});