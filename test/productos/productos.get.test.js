import request from "supertest";
import app from "../../app.js";

describe("GET /api/productos", () => {
  test("Debe retornar status 200", async () => {
    const res = await request(app).get("/api/productos");
    expect(res.statusCode).toBe(200);
  });

  test("Debe devolver un array", async () => {
    const res = await request(app).get("/api/productos");
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("El primer producto debe tener campo 'codigo'", async () => {
    const res = await request(app).get("/api/productos");

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("codigo");
    }
  });
});
