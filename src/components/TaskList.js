// components/TaskList.js
'use client'

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { createTask, updateTask, deleteTask } from '@/lib/actions/tasks';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskList({ initialTasks }) {
    const { tasks, setTasks, addTask, updateTask: updateTaskInStore, deleteTask: deleteTaskInStore } = useStore();
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        setTasks(initialTasks);
    }, [initialTasks, setTasks]);

    const handleCreateTask = async (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        const newTask = await createTask({ title: newTaskTitle });
        addTask(newTask);
        setNewTaskTitle('');
    };

    const handleUpdateTask = async (id, updates) => {
        const updatedTask = await updateTask(id, updates);
        updateTaskInStore(updatedTask);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        deleteTaskInStore(id);
    };

    return (
        <div>
            <form onSubmit={handleCreateTask} className="mb-4">
                <Input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Nueva tarea"
                    className="mr-2"
                />
                <Button type="submit">Agregar Tarea</Button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id} className="flex items-center mb-2">
                        <Checkbox
                            checked={task.completed}
                            onCheckedChange={(checked) => handleUpdateTask(task._id, { completed: checked })}
                            className="mr-2"
                        />
                        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
                        <span className="ml-2 text-sm text-gray-500">
                            {task.assignedTo ? `Asignado a: ${task.assignedTo.name}` : 'Sin asignar'}
                        </span>
                        <Button onClick={() => handleDeleteTask(task._id)} className="ml-auto">Eliminar</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}