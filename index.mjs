import cors from 'cors'
import express from 'express'

const app = express();
app.use(cors());

const posts = [{
    id: 1,
    title: 'Hello World',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
  }];


const postsComments = [{
    id: 1,
    postId: 1,
    author: 'João',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 1,
    author: 'Maria',
    content: 'Como faz pra dar palmas?'
  }]

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.send(posts.find((post)=>post.id === id));
})

app.get("/posts/:id/comments", (req, res) => {
    const id = parseInt(req.params.id);
    res.send(postsComments.filter((comment)=>comment.postId === id));
})


app.listen(4000);