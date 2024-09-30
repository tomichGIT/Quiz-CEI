"use client";

import { removeUser } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";

export const BtnRemoveUser = ({ userId }) => {
    const handleRemoveUser = async () => {
        await removeUser(userId);
    };

    return <Button onClick={handleRemoveUser}>Eliminar</Button>;
};
