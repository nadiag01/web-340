const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {
  // TODO: Implement this function
  function testEarthtoMars (){
    try{
      assert.strictEqual(calculateDistance("Earth","Mars"), 0.52);
      return true;
    } catch (error){
      console.error(`Failed testEarthtoMars:${error.message}`);
      return false;
    }
  }
  function testVenustoJupiter (){
    try{
      assert.strictEqual(calculateDistance("Venus","Jupiter"), 4.48);
      return true;
    } catch (error){
      console.error(`Failed testEarthtoMars:${error.message}`);
      return false;
    }
  } 
  function testMercurytoSaturn (){
    try{
      assert.strictEqual(calculateDistance("Mercury","Saturn"), 9.138);
      return true;
    } catch (error){
      console.error(`Failed testEarthtoMars:${error.message}`);
      return false;
    }
  }
  testEarthtoMars()
  testVenustoJupiter()
  testMercurytoSaturn()
}


// Call your test functions here
testFunctionDescription()