"use client";

import { useState } from 'react';
import StudentSelect from '@/components/StudentSelect';
import TopicSelect from '@/components/TopicSelect';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const router = useRouter();

  const handleStart = () => {
    if (selectedStudent && selectedTopic) {
      router.push(`/quiz/${selectedTopic}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
      <StudentSelect onSelect={setSelectedStudent} />
      {selectedStudent && <TopicSelect onSelect={setSelectedTopic} />}
      {selectedStudent && selectedTopic && (
        <Button onClick={handleStart} className="mt-4">
          Comenzar Quiz
        </Button>
      )}
    </div>
  );
}