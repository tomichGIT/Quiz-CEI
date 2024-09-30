// components/StudentSelect.js
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function StudentSelect({ onSelect }) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Por ahora, usaremos datos de ejemplo
        // setStudents([
        //     { id: 1, name: 'Alice' },
        //     { id: 2, name: 'Bob' },
        //     { id: 3, name: 'Charlie' },
        // ]);

        // Aquí normalmente harías una llamada a la API para obtener la lista de estudiantes
        fetchStudents();

    }, []);

    async function fetchStudents() {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch students');
            }
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    }

    return (
        <Select onValueChange={(value) => onSelect(value)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecciona un estudiante" />
            </SelectTrigger>
            <SelectContent>
                {students.map((student) => (
                    // <SelectItem key={student.id} value={student.id.toString()}>
                    <SelectItem key={student.id} value={student.name}>
                        {student.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}