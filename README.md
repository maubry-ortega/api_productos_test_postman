# Proyecto CRUD con Node.js, Express y MongoDB

Este es un proyecto básico que implementa un servicio backend para operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Node.js, el framework Express y MongoDB como base de datos.

## Características

*   **API RESTful** para la gestión de recursos.
*   Conexión a **MongoDB** para la persistencia de datos.
*   Configuración basada en **variables de entorno**.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

*   Node.js (se recomienda la versión LTS)
*   npm (normalmente viene con Node.js)
*   MongoDB (asegúrate de que el servicio esté en ejecución)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio** (si está en un control de versiones como Git):
    ```bash
    git clone https://github.com/maubry-ortega/api_productos_test_postman.git
    cd api_productos_test_postman
    ```

2.  **Instala las dependencias** del proyecto:
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno**:
    Crea un archivo llamado `.env` en la raíz del proyecto. Puedes usar el que ya existe o modificarlo con el siguiente contenido:

    ```ini
    MONGODB_URI=mongodb://localhost:27017/tienda_adso
    PORT=3000
    ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```bash
npm start
```

Si todo va bien, verás un mensaje en la consola indicando que el servidor está escuchando en el puerto `3000`.

> El servidor estará disponible en `http://localhost:3000`.

## Variables de Entorno

El proyecto utiliza las siguientes variables de entorno para su configuración:

*   `MONGODB_URI`: La cadena de conexión para tu instancia de MongoDB. Por defecto, se conecta a una base de datos local llamada `tienda_adso`.
*   `PORT`: El puerto en el que se ejecutará el servidor. Por defecto es `3000`.