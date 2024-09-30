"use client";

// app/quiz/[tema]/page.js
import QuizComponent from '@/components/QuizComponent';

export default function TopicPage({ params }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Quiz: {params.tema}</h1>
            <QuizComponent tema={params.tema} />
        </div>
    );
}