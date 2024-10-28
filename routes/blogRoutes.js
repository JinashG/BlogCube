import express from "express";
const router = express.Router();

let posts = [];


router.get('/', (req, res) => {
    res.render('index', { posts });
});


router.get('/new', (req, res) => {
    res.render('new_post');
});


router.post('/new', (req, res) => {
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