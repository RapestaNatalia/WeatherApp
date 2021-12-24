var expect = require("chai").expect,
  request = require("supertest"),
  api = request("http://localhost:3000/v1");

describe("GET /current", () => {
  it("respond with json containing the current weather of your city", async () => {
    const result = await api.get("/current");
    expect(result.status).to.be.equal(200);
  });
});
describe("GET /current city", function () {
  it("respond with json containing the current weather of the parameters", async () => {
    const result = await api.get("/current/Londres");
    expect(result.status).to.be.equal(200);
  });
  it("respond with current city error", async () => {
    const result = await api.get("/current/xxxx");
    expect(result.status).to.be.equal(404);
  });
});
describe("GET /forest", function () {
  it("respond with json containing the forest weather of your city", async () => {
    const result = await api.get("/forest");
    expect(result.status).to.be.equal(200);
  });
});
describe("GET /forest city", function () {
  it("respond with json containing the forest weather of the parameters", async () => {
    const result = await api.get("/forest/Londres");
    expect(result.status).to.be.equal(200);
  });
  it("respond with forest city error", async () => {
    const result = await api.get("/forest/xxxx");
    expect(result.status).to.be.equal(404);
  });
});

describe("GET /location", function () {
  it("respond with your current location", async () => {
    const result = await api.get("/location");
    expect(result.status).to.be.equal(200);
  });
});
