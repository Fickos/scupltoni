import express, { Router } from "express";
import userRoutes from './users';
import projectRoutes from './projects';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

export default router;
