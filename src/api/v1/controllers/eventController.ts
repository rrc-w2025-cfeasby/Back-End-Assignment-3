import { Request, Response, NextFunction } from "express";
import { eventService } from "../services/eventService";
import { successResponse } from "../models/responseModel";

export async function createEvent(req: Request, res: Response, next: NextFunction) {
  try{
    const event = await eventService.createEventService(req.body);
    res.status(201).json(successResponse(event, "Event created successfully"));
  }catch(error){
    next(error);
  }
};

export async function getAllEvents(req: Request, res: Response, next: NextFunction) {
  try{
    // const events = await eventService.getAllEventsService();
    // res.status(200).json(successResponse(event, "Events retrieved"));
  }catch(error){
    next(error);
  }
};

export async function getEventById(req: Request, res: Response, next: NextFunction) {
  try{
    // const event = await eventService.getEventByIdService(req.params.id);
    // res.status(200).json(successResponse(event, "Event retrieved"));
  }catch(error){
    next(error);
  }
};

export async function updateEvent(req: Request, res: Response, next: NextFunction) {
  try{
    // const updated = await eventService.updateEventService(req.params.id, req.body);
    // res.status(200).json(successResponse(updated, "Event updated successfully"));
  }catch(error){
    next(error);
  }
};

export async function deleteEvent(req: Request, res: Response, next: NextFunction) {
  try{
    // const result = await eventService.deleteEventService(req.params.id);
    // res.status(200).json(successResponse(result, "Event deleted successfully"));
  }catch(error){
    next(error);
  }
};

export const eventController = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};