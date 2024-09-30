// models/Question.js
import mongoose from 'mongoose';

// Mongoose va a crear "questions" en la base de datos (plural y en minúsculas)

const QuestionSchema = new mongoose.Schema({
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    question: String,
    options: [String],
    correctAnswer: String,
});

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);