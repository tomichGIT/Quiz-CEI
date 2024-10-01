// app/api/tasks/route.js
import { NextResponse } from 'next/server';
import { getTasks, createTask, updateTask, deleteTask } from '@/lib/actions/tasks';

export async function GET() {
    try {
        const tasks = await getTasks();
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const task = await createTask(data);
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, ...data } = await request.json();
        const task = await updateTask(id, data);
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating task' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        await deleteTask(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting task' }, { status: 500 });
    }
}