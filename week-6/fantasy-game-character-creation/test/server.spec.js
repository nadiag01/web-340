const http = require('http');
const {server,create,confirm,view} = require('../src/server');

// TODO: Implement your tests here
describe("routetests",() =>{
    it("create a character",()=> {
const req= {
    on: jest.fn((event,callback)=> {
        if (event==="data")
        callback(JSON.stringify({class: "Warrior", gender: "female", funFact:"test"}))
    if (event==="end")
    callback()
    })
}
const res={
    end:jest.fn()
}
create(req,res)
expect(res.end).toHaveBeenCalledWith(JSON.stringify({message: "character created"}))
    })
    
    it("confirm a character",()=> {
        const req= {
        }
        const res={
            end:jest.fn()
        } 
        confirm(req,res)
        expect(res.end).toHaveBeenCalledWith(JSON.stringify({message: "character exists"}))
    })

    it("view a character",()=> {
        const req= {
        }
        const res={
            end:jest.fn()
        } 
        view(req,res)
        expect(res.end).toHaveBeenCalledWith(JSON.stringify({character: {class: "Warrior", gender: "female", funFact:"test"}}))
    })
})