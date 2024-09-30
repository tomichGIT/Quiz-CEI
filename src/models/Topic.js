// models/Topic.js
import mongoose from 'mongoose';

// Mongoose va a crear "topics" en la base de datos (plural y en minúsculas)

const TopicSchema = new mongoose.Schema({
    name: String,
});

export default mongoose.models.Topic || mongoose.model('Topic', TopicSchema);
