document.getElementById('btnFetch').addEventListener('click', async () => {
    const statusBox = document.getElementById('apiStatus');
    const taskList = document.getElementById('taskList');

    statusBox.textContent = 'Cargando datos desde /api/...';
    taskList.innerHTML = '';

    try {
        // 1. Obtener status del backend
        const resStatus = await fetch('/api/status');
        const dataStatus = await resStatus.json();
        statusBox.textContent = JSON.stringify(dataStatus, null, 2);

        // 2. Obtener lista de tareas
        const resTasks = await fetch('/api/tasks');
        const dataTasks = await resTasks.json();

        dataTasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.completed ? '✅' : '⏳'} ${task.title}`;
            taskList.appendChild(li);
        });
    } catch (error) {
        statusBox.textContent = 'Error al conectar con la API: ' + error.message;
    }
});