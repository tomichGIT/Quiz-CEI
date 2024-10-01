
// importar server actions para obtener usuarios
import { getUsers, createUser, removeUser } from "@/lib/actions/users";

import { Button } from "@/components/ui/button";

import { BtnRemoveUser } from "./BtnRemoveUser"
import { BtnAddUser } from "./BtnAddUser"

/**
 * Ejemplo de ServerSide component
 * 
 *  - Puede obtener información directamente de otras APIs o bases de datos de manera segura
 *  - Se renderiza del servidor
 *  - No puede utilizar hooks de React (useState, useEffect, etc)
 *  - No puede acceder al Store (zustand)
 *  - Para usar dichas funcionalidades, debes crear un componente hijo que tenga "use client" y enviarle la información como prop
 */

export const metadata = {
    title: 'Users Section',
    description: 'Aplicación de quiz para estudiantes de CEI',
}

const Users = async () => {

    const users = await getUsers();




    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Users</h1>


            <BtnAddUser />

            {
                users.map((user, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
                        <h2 className="text-xl font-bold">{user.name}</h2>


                        <BtnRemoveUser userId={user.id} />
                    </div>
                ))
            }
        </div>
    );
}

export default Users;