const request = require('supertest');
const server = require("../server.js");
const db = require('../../data/db-config.js');
const model = require('./authModel.js');
const bcrypt = require('bcrypt');



describe("Register and Login", function(){

      //   beforeEach( async ()=>{
      //     await db('users').truncate();
      // })

      //   beforeEach(async () => {
      //     await db.seed.run();
      // });
    

     describe('post auth/register',  function(){

        it('responds with 500 status on register for duplicat username', function(done) {
            request(server)
              .post('/auth/register')
              .send({username: 'john', password: 'john'})
              .set('Accept', 'application/json')
              .expect(500)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
        });

        it('responds with json', function(done) {
            request(server)
              .post('/auth/register')
              .send({username: 'john', password: 'john'})
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
        });

    })

    describe('post /auth/login',  function(){

        it('responds with 200 status on login', function(done) {
            request(server)
              .post('/auth/login')
              .send({username: 'john', password: 'john'})
              .set('Accept', 'application/json')
              .expect(200)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
        });

        it('responds with a 500 signing in with fake credentials', function(){
            request(server)
            .post('/auth/login')
            .send({username: 'fake', password:'fake'})
            .set('Accept', 'application/json')
            .expect(500)
 
        })


        it('responds with json', function(done) {
            request(server)
              .post('/auth/login')
              .send({username: 'john', password: 'john'})
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
        });

    })
})