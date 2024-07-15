import * as validator from "express-validator";
import validateRequestMiddleware from "../../../common/middleware/validateRequest.middleware";

const validateAddRecordRequestMiddleware = [
  validator
    .body("date")
    .exists()
    .withMessage("Date is required")
    .isObject()
    .withMessage("Date must be an object"),
  validator
    .body("date.day")
    .exists()
    .withMessage("Day is required")
    .isInt()
    .withMessage("Day must be an integer"),
  validator
    .body("date.month")
    .exists()
    .withMessage("Month is required")
    .isInt()
    .withMessage("Month must be an integer"),
  validator
    .body("date.year")
    .exists()
    .withMessage("Year is required")
    .isInt()
    .withMessage("Year must be an integer"),

  validator
    .body("time")
    .exists()
    .withMessage("Time is required")
    .isObject()
    .withMessage("Time must be an object"),
  validator
    .body("time.hours")
    .exists()
    .withMessage("Hours is required")
    .isInt()
    .withMessage("Hours must be an integer"),
  validator
    .body("time.minutes")
    .exists()
    .withMessage("Minutes is required")
    .isInt()
    .withMessage("Minutes must be an integer"),
  validator
    .body("time.ampm")
    .exists()
    .isString()
    .isIn(["AM", "PM"])
    .withMessage("AM/PM must be either 'AM' or 'PM'"),

  validator
    .body("amount")
    .exists()
    .withMessage("Amount is required")
    .isInt()
    .withMessage("Amount must be an integer"),

  validateRequestMiddleware,
];

export default validateAddRecordRequestMiddleware;
