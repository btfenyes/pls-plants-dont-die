import express from 'express';
import { getPlants, postAddPlant, postAddWatering } from '../controllers/controller';

const router = express.Router();

router.get('/plants', getPlants);
router.post('/add-plant', postAddPlant);
router.post('/water', postAddWatering);

export default router;