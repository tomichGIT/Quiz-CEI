// models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);