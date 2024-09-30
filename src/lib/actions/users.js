"use server";

import dbConnect from '@/lib/mongodb';
import Student from '@/models/Student';

import { revalidatePath } from 'next/cache';

// Server Actions to get Users
export const getUsers = async () => {
    try {
        await dbConnect();
        const students = await Student.find({});

        revalidatePath("/");
        return students;
    } catch (error) {
        return { error: 'Error fetching students' };
    }
}

export const removeUser = async (id) => {
    try {
        await dbConnect();
        // const usuario = await Student.findById(id);
        // console.log(usuario);
        // if (!usuario) {
        //     return { error: 'Usuario not found' };
        // }
        // console.log("Por eliminar usuario con id: ", id);
        const result = await Student.findByIdAndDelete(id);


        revalidatePath("/");
        return result.name;
    }
    catch (error) {
        return { error: 'Error removing student' };
    }
}

export const createUser = async (data) => {
    try {
        await dbConnect();
        const user = new Student(data);
        await user.save();

        revalidatePath("/");
        return user.name;
    } catch (error) {
        return { error: 'Error creating student' };
    }
}
