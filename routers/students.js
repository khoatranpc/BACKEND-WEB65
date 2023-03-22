import express from 'express';
import studentsController from '../controllers/students.js';
const routerStudents = express.Router();


routerStudents.get('', studentsController.get)

routerStudents.post('', studentsController.insert)

export default routerStudents;