import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('get all contact');
});
router.post('/', async (req, res) => {
    res.send('post new contact');
});
router.get('/:id', async (req, res) => {
    res.send('get single contact');
});
router.put('/:id', async (req, res) => {
    res.send('update single contact');
});
router.delete('/:id', async (req, res) => {
    res.send('delete contact');
});

export default router;
