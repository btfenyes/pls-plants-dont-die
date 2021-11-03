import { Request, response, Response } from 'express';
import mongoose, { Error } from 'mongoose';

import Plant from '../models/plant';
import Watering from '../models/watering';

export const getPlants = async (req: Request, res: Response) => {
  const plants = await Plant.find()
  .populate('waterings');
  res.send(plants);
};

export const postAddPlant = async (req: Request, res: Response) => {
  const { name, species, wateringIntervalDays } = req.body;
  const plant = new Plant({ name, species, wateringIntervalDays });
  try {
    await plant.save();
    res.redirect('/plants');
  } catch (error) {
    console.log(error)
  }
};

export const postAddWatering = async (req: Request, res: Response) => {
  const plantName = req.body.plant;
  const watering = new Watering({ 
    plant: plantName,
    _id: new mongoose.Types.ObjectId(),
  });
  try {
    await watering.save(async (err: Error) => {
      if (err) {
        console.log(err);
        return;
      }

      const plant = await Plant.findOne({ plant: plantName });
      plant.waterings.push(watering);
      await plant.save();
    });

    res.redirect('/plants');
  } catch (error) {
    console.log(error);
  }
};