import express from 'express';
import studentsController from '../controllers/students.js';
import studentsMiddleware from '../middlewares/students.js';
const routerStudents = express.Router();


routerStudents.get('', studentsController.get)
routerStudents.post('', studentsMiddleware.acceptWrite, studentsController.insert)
routerStudents.put('', studentsController.updateMany);
routerStudents.put('/:id', studentsController.updateOne);

export default routerStudents;