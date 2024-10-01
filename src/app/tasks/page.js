// app/tasks/page.js
import { getTasks } from '@/lib/actions/tasks';
import TaskList from '@/components/TaskList';

export const metadata = {
    title: 'Tareas Section',
    description: 'Aplicación de quiz para estudiantes de CEI',
}

export default async function TasksPage() {
    const tasks = await getTasks();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
            <TaskList initialTasks={tasks} />
        </div>
    );
}