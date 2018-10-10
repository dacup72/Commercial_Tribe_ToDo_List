import express from 'express';

const todoExpress = express();

todoExpress.get('/todo', (req, res) => TodoData.findAll().then(todos => res.json(todos)).catch((err) => res.status(500).json(err)));
todoExpress.post('/todo', (req, res) => TodoData.create(req.body).then(todo => res.json(todo)).catch((err) => res.status(500).json(err)));
todoExpress.delete('/todo/:id', (req, res) => TodoData.delete(req.params.id).then(() => res.sendStatus(200)).catch((err) => res.status(500).json(err)));

// TODO: Implement
todoExpress.put('/todo/:id', );

export default todoExpress;
