# Node API template + Prisma

## Requirements

-  Node.js 18+ and npm

## Getting started

Run the following command on your local environment:

```
git clone https://github.com/Chust3r/template-api.git

cd template-api

npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your API.

Project structure

```
├── controllers                     # Controllers & logic
├── lib                             # Utilities
├── middlewares                     # Middlewares
├── models                          # Database models (optional)
|  └── server.js                    # Sever
├── routes                          # Routes
├── prisma 
|  └── schema.prisma                # Prisma models & DataBase Connection
└── index.js                        # root
```
