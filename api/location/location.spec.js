const request = require('supertest');
const server = require("../server.js");

describe("get /location",function(){

    it("should return a 401 status without headers",function(){
        return request(server)

        .get('/location')

        .then(res=>{
            expect(res.status).toBe(401);
        })
    })

    it("should return json", function(){
        return request(server)

        .get('/location')

        .then(res=>{
            expect(res.type).toMatch(/json/i)
        })
    })
})