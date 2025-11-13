import request from "supertest";
import app from "../../app.js";

describe("DELETE /api/productos/:id", () => {

  test("Debe crear y eliminar un producto correctamente", async () => {

    const nuevo = {
      codigo: Math.floor(Math.random() * 999999),
      nombre: "Producto Temp",
      precio: 10000,
      categoria: "Ropa"
    };

    const creado = await request(app)
      .post("/api/productos")
      .send(nuevo);

    const id = creado.body._id;

    expect(creado.statusCode).toBe(201); 

    const res = await request(app)
      .delete(`/api/productos/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("mensaje");
    expect(res.body.mensaje).toBe("Producto eliminado");

    const buscar = await request(app).get(`/api/productos/${id}`);
    expect(buscar.statusCode).toBe(404);
  });

});
