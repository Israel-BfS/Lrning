const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint de estado
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        server_time: new Date().toISOString(),
        message: 'API Backend en Node.js comunicada correctamente con el frontend'
    });
});

// Endpoint de prueba que devuelve una lista de datos
app.get('/api/tasks', (req, res) => {
    res.json([
        { id: 1, title: 'Configurar servidor Linux', completed: true },
        { id: 2, title: 'Configurar GitHub Actions Runner', completed: true },
        { id: 3, title: 'Crear arquitectura Full-Stack', completed: true }
    ]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend API escuchando en el puerto ${PORT}`);
});