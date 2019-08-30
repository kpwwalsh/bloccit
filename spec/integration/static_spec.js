const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = "http://localhost:3000/marco";

describe("routes : static", () => {
  describe("GET /", () => {
      });
    });
 

describe("GET /", () => {
    it("should return status code 200", (done) => {
      request.get(marco, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it("should return 'polo'", (done) => {
      request.get(marco, (err, res, body) => {
        expect(body).toBe('polo');
        done();
      });
    });
  });
