// lib/store.js
import { create } from 'zustand';

export const useStore = create((set) => ({

    // Store para Quiz
    quizResults: [],
    setQuizResult: (result) => set((state) => ({
        quizResults: [...state.quizResults, result]
    })),
    clearQuizResults: () => set({ quizResults: [] }),

    // Store para Taraeas
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (updatedTask) => set((state) => ({
        tasks: state.tasks.map(task => task._id === updatedTask._id ? updatedTask : task)
    })),
    deleteTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter(task => task._id !== taskId)
    })),
}));