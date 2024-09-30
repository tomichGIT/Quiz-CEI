// app/api/users/[name]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Student from '@/models/Student';

// find students by name
export async function GET(request, { params }) {
    try {
        await dbConnect();
        const { name } = params;
        console.log("Name is: ", name);

        // usando SearchParams
        // query is "hola" for /api/search?q=hola
        // const searchParams = request.nextUrl.searchParams
        // const query = searchParams.get('q')
        // console.log("Query q es: ", name);

        //const students = await Student.find({ name }); // exact
        const students = await Student.find({ name: { $regex: new RegExp(name, 'i') } }); // aprox

        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching students' }, { status: 500 });
    }
}