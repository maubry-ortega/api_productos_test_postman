import request from "supertest";
import app from "../../app.js";
import mongoose from "mongoose";

// Hook para cerrar la conexión después de todas las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});

describe("DELETE /api/productos/:id", () => {

  test("Debe eliminar un producto y retornar mensaje correcto", async () => {

    const id = global.ID_PRODUCTO_CREADO;

    const res = await request(app)
      .delete(`/api/productos/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("mensaje");
    expect(res.body.mensaje).toBe("Producto eliminado");
  });

});
