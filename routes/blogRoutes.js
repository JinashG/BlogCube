import express from "express";
const router = express.Router();

let posts = [{
    id: 1,
    title: "Getting Started with Express.js",
    content: "Express.js is a minimal and flexible Node.js web application framework"
  },
  {
    id: 2,
    title: "Why EJS is Great for Server-Side Rendering",
    content: "EJS lets you embed JavaScript into HTML with ease. It's perfect for templating"
  },
  {
    id: 3,
    title: "Roadmap to Full Stack Development",
    content: "Start with HTML, CSS, and JavaScript. Then move to Node.js, Express, and databases"
  }];


router.get('/', (req, res) => {
    res.render('index', { posts });
});


router.get('/newpost', (req, res) => {
    res.render('newpost');
});


router.post('/newpost', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content
    };
    posts.push(newPost);
    res.redirect('/');
});

router.get('/post/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

export default router;