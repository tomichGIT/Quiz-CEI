// models/Student.js
import mongoose from 'mongoose';

// Mongoose va a crear "stuidents" en la base de datos (plural y en minúsculas)

const StudentSchema = new mongoose.Schema({
    name: String,
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
