// components/QuizComponent.js
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function QuizComponent({ tema }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeStart, setTimeStart] = useState(null);
    const router = useRouter();
    const setQuizResult = useStore((state) => state.setQuizResult);

    useEffect(() => {
        // Aquí normalmente harías una llamada a la API para obtener las preguntas del tema
        // Por ahora, usaremos datos de ejemplo
        setQuestions([
            {
                question: '¿Cuál es la capital de Francia?',
                options: ['Londres', 'Berlín', 'París', 'Madrid'],
                correctAnswer: 'París'
            },
            {
                question: '¿Cuál es el río más largo del mundo?',
                options: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
                correctAnswer: 'Amazonas'
            },
            {
                question: '¿Cuál es el planeta más grande del sistema solar?',
                options: ['Tierra', 'Júpiter', 'Saturno', 'Urano'],
                correctAnswer: 'Júpiter'
            }
        ]);
        setTimeStart(Date.now());
    }, [tema]);

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        } else {
            // Penalidad de 5 segundos por respuesta incorrecta
            setTimeStart(timeStart - 5000);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const timeTaken = (Date.now() - timeStart) / 1000;
            setQuizResult({ score, time: timeTaken });
            router.push('/ranking');
        }
    };

    if (questions.length === 0) return <div>Cargando preguntas...</div>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Pregunta {currentQuestion + 1}</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                    <Button key={index} onClick={() => handleAnswer(option)} className="w-full">
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
}