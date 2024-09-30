// app/api/topics/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Topic from '@/models/Topic';

export async function GET() {
    try {
        await dbConnect();
        const topics = await Topic.find({});
        return NextResponse.json(topics);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching topics' }, { status: 500 });
    }
}