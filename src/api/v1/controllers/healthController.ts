import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";

const startTime = Date.now();

export const getHealth = (req: Request, res: Response) => {
  const uptime = (Date.now() - startTime) / 1000;

  return res.status(HTTP_STATUS.OK).json({
    status: "OK",
    uptime,
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
};