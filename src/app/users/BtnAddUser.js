"use client";

import { createUser } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";

export const BtnAddUser = () => {

    const randomNum = Math.floor(Math.random() * 100);

    const handleAddUser = async () => {
        await createUser({
            name: 'Alice ' + randomNum
        });
    };

    return <Button onClick={handleAddUser}>+</Button>;
};
