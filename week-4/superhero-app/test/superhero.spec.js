/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles

function testPerformAction() {
    83
    try {
    // register an event listener for the ‘action’ event
    superhero.on("action", (action)=>{
        assert.strictEqual(action,"fly")
    })
    // call the perform action method
    superhero.performAction("fly")
    console.log("Passed testPerformAction");
    return true;
    } catch(err) {
    console.error(`Failed testPerformAction: ${err}`);
    return false;
    }
}

function testEncounterDanger() {
    83
    try {
    // register an event listener for the ‘action’ event
    superhero.on("danger", (danger)=>{
        assert.strictEqual(danger,"fire")
    })
    // call the perform action method
    superhero.encounterDanger("fire")
    console.log("Passed testencounterDanger");
    return true;
    } catch(err) {
    console.error(`Failed testencounterDanger: ${err}`);
    return false;
    }
}


function testhelpMaryJane() {
    83
    try {
    // register an event listener for the ‘action’ event
    superhero.on("help", (person)=>{
        assert.strictEqual(person,"MaryJane")
    })
    // call the perform action method
    superhero.helpSomeone("MaryJane")
    console.log("Passed testhelpSomeone");
    return true;
    } catch(err) {
    console.error(`Failed testhelpSomeone: ${err}`);
    return false;
    }
}

testPerformAction(),
testEncounterDanger(),
testhelpMaryJane()