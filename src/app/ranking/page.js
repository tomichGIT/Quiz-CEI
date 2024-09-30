"use client";

// app/ranking/page.js
import { useStore } from '@/lib/store';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RankingPage() {

    const quizResults = useStore((state) => state.quizResults);

    // Ordenar los resultados por tiempo (menor a mayor)
    const sortedResults = [...quizResults].sort((a, b) => a.time - b.time);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Ranking</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Posición</TableHead>
                        <TableHead>Puntuación</TableHead>
                        <TableHead>Tiempo (segundos)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedResults.map((result, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{result.score}</TableCell>
                            <TableCell>{result.time.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}