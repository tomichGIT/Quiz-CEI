# Quiz-CEI
 
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
MONGODB_URI=mongodb+srv://<username>:<password>@cei-valencia.ulc7ujr.mongodb.net/<database>?retryWrites=true&w=majority
```