import express from "express";
import NewsletterRepo from "./repo";
import {authMiddleware} from "../middlewares";

const router = express.Router();
router.use(authMiddleware);

const repo = new NewsletterRepo();

router.get('/', async (req, res) => {
    const data = await repo.getAll();
    res.json(data);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const data = await repo.getById(id);
    if(data)
        res.json(data);
    else res.sendStatus(404);
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
    if(data)
        res.json(data);
    else res.sendStatus(404);
});

export default router;
