import { Document, model, Schema } from "mongoose";

export interface IConfig extends Document {
  goal: number;
  wakeUpTime: Date;
  sleepTime: Date;
  remindEvery: number;
}

export const configModelName = "Config";

export const configSchema = new Schema<IConfig>({
  goal: { type: Number, required: true },
  wakeUpTime: { type: Date, required: true },
  sleepTime: { type: Date, required: true },
  remindEvery: { type: Number, required: true },
});

export const ConfigModel = model<IConfig>(configModelName, configSchema);
