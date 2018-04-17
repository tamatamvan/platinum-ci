const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp)

describe('app', () => {
  it('should access app without any problem', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
})