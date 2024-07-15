import { Router } from "express";
import trackingRoutes from "./features/tracking/tracking.routes";

const router: Router = Router();

export default (): Router => {
  trackingRoutes(router);
  return router;
};
