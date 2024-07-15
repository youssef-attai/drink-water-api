import * as validator from 'express-validator';
import validateRequestMiddleware from '../../../common/middleware/validateRequest.middleware';

const validateFetchDayStatsRequestMiddleware = [
    validator.query('day')
        .exists().withMessage("query parameter 'day' is required")
        .isInt().withMessage("query parameter 'day' must be an integer")
        .toInt(),
    validator.query('month')
        .exists().withMessage("query parameter 'month' is required")
        .isInt().withMessage("query parameter 'month' must be an integer")
        .toInt(),
    validator.query('year')
        .exists().withMessage("query parameter 'year' is required")
        .isInt().withMessage("query parameter 'year' must be an integer")
        .toInt(),

    validateRequestMiddleware,
];

export default validateFetchDayStatsRequestMiddleware;