# Front-end para o Sprint 3
## Descrição
Este projeto é um front-end para Sprint 03, faz parte do ultimo sprint da Pós Graduação em Desenvolvimento Full Stack da PUC-Rio.

## Tecnologias
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

## Pré-requisitos
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)



## Instalação
1. Clone o repositório

2. Faca a build do container
```bash
docker build -t sprint-3-frontend .
```

3. Acesse o site
```bash
npm run dev
```
4. [Crie uma conta na NewsApi](https://www.themoviedb.org/)
  - Va para Get API Key
  - Preencha os campos
  - Acesse sua conta
  - Crie um arquivo .env na raiz do projeto
  - Troque VITE_API_KEY pelo valor da sua API Key

5. Acesse o endereço [http://localhost:5173](http://localhost:5173)


## Autores
- [Raphael Vaz](http://github.com/wrath-codes)

6. Comandos uteis:
   - Para rodar o container:
      ```bash
      docker run -it -p 5173:5173 sprint-3-frontend
      ```
   - Para parar o container:
      ```bash
      docker stop $(docker ps -a -q)
      ```
   - Para remover o container:
      ```bash
      docker rm $(docker ps -a -q)
      ```
