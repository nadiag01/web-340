/**
 * Author: Nadia Gainer
 * Date:04/ 21/24
 * File Name:pie.specs.js
 * Description:pie-baker 
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
//
describe("bakePie test", ()=>{
it("test1",()=>{


			const ingredients= ["flour", "sugar", "butter", "egg"]
	   const pie = bakePie("Pumpkin",ingredients)
		expect(pie).toEqual("Your Pumpkin Pie Was Successfully Baked")

}) 
it("test2",()=>{
		console.warn = jest.fn()
		process.exit = jest.fn()
		const ingredients= ["flour", "sugar", "egg"]
	bakePie("Pumpkin",ingredients)
	expect(console.warn).toHaveBeenCalledWith(`You Are Missing butter`)
	expect(process.exit).toHaveBeenCalledWith(1)
	}) 

	it("test3",()=>{
		console.warn = jest.fn()
		process.exit = jest.fn()
		const ingredients= ["flour", "egg"]
	bakePie("Pumpkin",ingredients)
	expect(console.warn).toHaveBeenCalledWith(`You Are Missing butter`)
	expect(console.warn).toHaveBeenCalledWith(`You Are Missing sugar`)
	expect(process.exit).toHaveBeenCalledWith(1)
	})
}) 