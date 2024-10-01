// lib/actions/tasks.js
'use server'

import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';

// Función auxiliar para convertir documentos de MongoDB a objetos planos
function convertToPlainObject(doc) {
    return JSON.parse(JSON.stringify(doc));
}

export async function getTasks() {
    await dbConnect();
    const tasks = await Task.find({}).populate('assignedTo', 'name');
    return convertToPlainObject(tasks);
}

export async function createTask(data) {
    await dbConnect();
    const task = new Task(data);
    await task.save();
    return convertToPlainObject(task);
}

export async function updateTask(id, data) {
    await dbConnect();
    const task = await Task.findByIdAndUpdate(id, data, { new: true }).populate('assignedTo', 'name');
    return convertToPlainObject(task);
}

export async function deleteTask(id) {
    await dbConnect();
    await Task.findByIdAndDelete(id);
    return { success: true };
}