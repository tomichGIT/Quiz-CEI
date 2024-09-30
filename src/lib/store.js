// lib/store.js
import { create } from 'zustand';

export const useStore = create((set) => ({
    quizResults: [],
    setQuizResult: (result) => set((state) => ({
        quizResults: [...state.quizResults, result]
    })),
    clearQuizResults: () => set({ quizResults: [] }),
}));