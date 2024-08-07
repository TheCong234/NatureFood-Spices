import express from 'express';

const router = express.Router();

//get all bill
router.get('/',)

//get bills by user id
router.get('/user/:userId')

//get bill by id
router.get('/:id')

//create bill
router.post('/')

//update bill by id
router.put('/:id')

//delete bill by id
router.delete('/:id')

export default router;