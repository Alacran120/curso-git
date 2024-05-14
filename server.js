const http = require('http');
const fs = require('fs');
const path = require('path');

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Ruta al archivo index.html
  const filePath = path.join(__dirname, 'index.html');

  // Lee el contenido del archivo index.html
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Si hay un error al leer el archivo
      res.writeHead(500);
      res.end(`Error interno del servidor: ${err}`);
    } else {
      // Si se lee el archivo correctamente, devuelve el contenido como respuesta
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

// Define el puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});