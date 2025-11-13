import request from "supertest";
import app from "../../app.js";

describe("POST /api/productos", () => {
  test("Debe crear un producto y retornar 201", async () => {

    const nuevoProducto = {
      codigo: Math.floor(Math.random() * 99999),
      nombre: "Producto Test",
      precio: 45000,
      categoria: "Ropa"
    };

    const res = await request(app)
      .post("/api/productos")
      .send(nuevoProducto);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.nombre).toBe("Producto Test");

    global.ID_PRODUCTO_TEST = res.body._id;
  });
});
