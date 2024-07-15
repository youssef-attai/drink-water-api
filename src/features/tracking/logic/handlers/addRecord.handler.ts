import { Request, Response } from "express";
import { DrinkLogModel } from "../../data/models/DrinkLog.model";

export default async function addRecordHandler(req: Request, res: Response) {
  const { date, time, amount } = req.body;

  const createdRecord = await DrinkLogModel.create({
    date,
    time,
    amount,
  });

  res.status(201).json({
    id: createdRecord._id,
    date: createdRecord.date,
    time: createdRecord.time,
    amount: createdRecord.amount,
  });
}
