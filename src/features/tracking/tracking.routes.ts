import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import addRecordHandler from "./logic/handlers/addRecord.handler";
import validateAddRecordRequestMiddleware from "./logic/middlewares/validateAddRecordRequest.middleware";
import validateFetchDayStatsRequestMiddleware from "./logic/middlewares/validateFetchDayStatsRequest.middleware";
import fetchDayStatsHandler from "./logic/handlers/fetchDayStats.handler";

export default (router: Router) => {
  router.get(
    "/",
    validateFetchDayStatsRequestMiddleware,
    expressAsyncHandler(fetchDayStatsHandler)
  );

  router.post(
    "/",
    validateAddRecordRequestMiddleware,
    expressAsyncHandler(addRecordHandler)
  );
};
