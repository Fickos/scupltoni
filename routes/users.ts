import express, { Router } from 'express';
import { login } from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/login', login);

export default router;
