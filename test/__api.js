const request = require('supertest');

describe('API', function(){
  const server;

  beforeEach(function (){
    server = require('../src/server.js');
  });

  afterEach(function(){
    server.close();
  });

  it('/ should return specified object.', function testhealth(done) {
        request(server)
        .get('/api/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { hello: "world"} ,done);
  });

    it('/status should return specified healthy:true.', function testhealth(done) {
        request(server)
        .get('/api/v1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { healthy: "true"} ,done);
  });

    it('/status should return specified object.', function testhealth(done) {
        const fakeUrl = "www.google.com";
        request(server)
        .get('/api/urls/' + fakeUrl)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { urls: {url: fakeUrl}} ,done);
  });
});
