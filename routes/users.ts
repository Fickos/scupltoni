import express, { Router } from 'express';
import { login, list, register } from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/', list);
router.post('/login', login);
router.post('/register', register);

export default router;
