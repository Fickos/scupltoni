import express, { Router } from 'express';
import { save, load, list, generateAndExportProject } from '../controllers/project.controller';

const router: Router = express.Router();

router.get('/', list);
router.get('/:id', load);
router.post('/', save);
router.post('/export', generateAndExportProject);

export default router;
