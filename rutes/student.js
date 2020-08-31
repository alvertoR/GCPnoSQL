import express    from 'express';
import controller from '../controllers/student';

var router = express.Router();

router.post('/newStudent', controller.addStudent);
router.get('/students', controller.getStudents);

export default router;