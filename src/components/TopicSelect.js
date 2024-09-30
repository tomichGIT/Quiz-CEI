// components/TopicSelect.js
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TopicSelect({ onSelect }) {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        // Aquí normalmente harías una llamada a la API para obtener la lista de temas
        // Por ahora, usaremos datos de ejemplo
        setTopics([
            { id: 1, name: 'Matemáticas' },
            { id: 2, name: 'Historia' },
            { id: 3, name: 'Ciencias' },
        ]);
    }, []);

    return (
        <Select onValueChange={(value) => onSelect(value)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecciona un tema" />
            </SelectTrigger>
            <SelectContent>
                {topics.map((topic) => (
                    <SelectItem key={topic.id} value={topic.id.toString()}>
                        {topic.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}