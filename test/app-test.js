const request = require("supertest");
const app = require("../src/app");

describe("Application tests", () => {

  test("GET / should return 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.application)
      .toBe("GitHub Actions Trunk Demo");
  });

  test("GET /health should return UP", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

});