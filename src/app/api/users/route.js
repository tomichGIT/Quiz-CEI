// app/api/users/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Student from '@/models/Student';

export async function GET() {
    try {
        await dbConnect();
        const students = await Student.find({});
        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching students' }, { status: 500 });
    }
}