import request from "supertest";
import app from "../../app.js";

describe("PUT /api/productos/:id", () => {

  test("Debe crear, actualizar y eliminar un producto correctamente", async () => {
    
    const nuevo = {
      codigo: Math.floor(Math.random() * 999999),
      nombre: "Temp",
      precio: 1000,
      categoria: "Ropa"
    };

    const creado = await request(app)
      .post("/api/productos")
      .send(nuevo);

    const id = creado.body._id;

    const updateData = {
      codigo: nuevo.codigo,
      nombre: "Producto Actualizado",
      precio: 2000,
      categoria: "Calzado"
    };

    const res = await request(app)
      .put(`/api/productos/${id}`)
      .send(updateData);

    console.log("PUT RESPONSE:", res.statusCode, res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("producto");
    expect(res.body.producto.nombre).toBe("Producto Actualizado");

    await request(app).delete(`/api/productos/${id}`);
  });

});
