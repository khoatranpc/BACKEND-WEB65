import express from 'express';
import routerStudents from './students.js';
const router = express.Router();

router.use('/students', routerStudents);

export default router;