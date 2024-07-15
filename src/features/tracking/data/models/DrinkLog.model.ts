import { Document, model, Schema } from "mongoose";

export const drinkLogModelName = "DrinkLog";

export interface IDrinkLog extends Document {
  date: {
    day: number;
    month: number;
    year: number;
  };
  time: {
    hours: number;
    minutes: number;
    ampm: "AM" | "PM";
  };
  amount: number;
}

export const drinkLogSchema = new Schema<IDrinkLog>({
  date: {
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  time: {
    hours: { type: Number, required: true },
    minutes: { type: Number, required: true },
    ampm: { type: String, required: true, enum: ["AM", "PM"] },
  },
  amount: { type: Number, required: true },
});

export const DrinkLogModel = model<IDrinkLog>(
  drinkLogModelName,
  drinkLogSchema
);
