# Quiz App CEI

Esta es una aplicación web desarrollada con Next.js 14 para CEI Valencia, diseñada para ayudar a los estudiantes a practicar para sus exámenes a través de un sistema de quiz interactivo.

## Creación de Nuevo Proyecto
 
```bash
npx create-next-app@latest
npx shadcn@latest init
npx shadcn@latest add

npm i mongoose
npm i zustand
```


## Estructura

```bash
quiz-cei/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── quiz/
│   │   └── [tema]/
│   │       └── page.js
│   ├── ranking/
│   │   └── page.js
│   └── api/
│       ├── topics/
│       │   └── route.js
│       └── users/
│           └── route.js
├── components/
│   ├── ui/
│   ├── StudentSelect.js
│   ├── TopicSelect.js
│   └── QuizComponent.js
├── lib/
│   ├── actions/
│   │   └── users.js
│   ├── mongodb.js
│   └── store.js
├── models/
│   ├── Student.js
│   ├── Topic.js
│   └── Question.js
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Base de Datos (MongoDB + Mongoose)

```bash
# .env.local
MONGODB_URI=mongodb+srv://<username>:<password>@cei-valencia.ulc7ujr.mongodb.net/<database>?retryWrites=true&w=majority
```


## Características

- **Sistema de Quiz**: Los estudiantes pueden seleccionar temas y responder preguntas de opción múltiple.
- **Ranking**: Muestra el rendimiento de los estudiantes basado en el tiempo y la precisión de sus respuestas.
- **Lista de Tareas**: Los usuarios pueden crear, editar y eliminar tareas, así como asignarlas a estudiantes específicos.
- **Gestión de Usuarios**: Permite ver y gestionar la lista de estudiantes.

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router para el frontend y backend.
- **MongoDB**: Base de datos para almacenar información de estudiantes, preguntas, tareas y resultados.
- **Tailwind CSS**: Para el diseño y estilizado de la interfaz de usuario.
- **Zustand**: Para la gestión del estado en el lado del cliente.
- **Shadcn UI**: Componentes de UI preestilizados y accesibles.

## Configuración del Proyecto

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/quiz-app-cei.git
   cd quiz-app-cei
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y añade:
   ```
   MONGODB_URI=tu_uri_de_mongodb
   ```

4. Ejecuta el servidor de desarrollo:
   ```
   npm run dev
   ```

5. Abre `http://localhost:3000` en tu navegador.

## Estructura del Proyecto

- `app/`: Contiene las rutas y páginas de la aplicación.
- `components/`: Componentes reutilizables de React.
- `lib/`: Utilidades, acciones del servidor y configuración de la base de datos.
- `models/`: Modelos de Mongoose para la base de datos.
- `public/`: Archivos estáticos.

## Contribuir

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama para tu feature
3. Haz commit de tus cambios
4. Haz push a la rama
5. Crea un nuevo Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.