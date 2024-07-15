import { Request, Response } from "express";
import { DrinkLogModel } from "../../data/models/DrinkLog.model";
import { ConfigModel } from "../../data/models/Config.model";

type RequestQuery = { day: number; month: number; year: number };

function _getDate(dateTime: Date): string {
  return dateTime.toISOString().split("T")[0];
}

function _getTime(dateTime: Date): string {
  return dateTime.toISOString().split("T")[1].split(".")[0];
}

export default async function fetchDayStatsHandler(
  req: Request,
  res: Response
) {
  const { day, month, year } = req.query as unknown as RequestQuery;

  const [config, drinkLogs, current] = await Promise.all([
    ConfigModel.findOne(),
    DrinkLogModel.aggregate([
      {
        $match: {
          "date.day": day,
          "date.month": month,
          "date.year": year,
        },
      },
      {
        $sort: {
          "time.hours": -1,
          "time.minutes": -1,
          "time.ampm": -1,
        },
      },
    ]),
    DrinkLogModel.aggregate([
      {
        $match: {
          "date.day": day,
          "date.month": month,
          "date.year": year,
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]).then((result) => result[0]?.total ?? 0),
  ]);

  const goal = config?.goal ?? 4000;

  res.status(200).json({
    date: { day, month, year },
    goal,
    current,
    remaining: goal - current,
    logs: drinkLogs.map((log) => ({
      id: log._id,
      date: { ...log.date },
      time: { ...log.time },
      amount: log.amount,
    })),
  });
}
