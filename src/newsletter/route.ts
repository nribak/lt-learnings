import express from "express";
import NewsletterRepo from "./repo";

const router = express.Router();

const repo = new NewsletterRepo();

router.get('/', async (req, res) => {
    const data = await repo.getAll();
    res.json(data);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const data = await repo.getById(id);
    res.json(data);
});

router.post('/', async (req, res) => {
    const {title, details} = req.body;
    const data = await repo.createPost(title, details);
    res.json(data);
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    res.json(await repo.deleteById(id));
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, details} = req.body;
    const data = await repo.updatePost(id, title, details);
    res.json(data);
});

export default router;
