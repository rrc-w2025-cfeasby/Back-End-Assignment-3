import { Router } from 'express';
import { validateRequest } from '../middleware/validateRequest';
import { eventSchemas } from '../validation/eventSchemas';
import { 
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
} from '../controllers/eventController';

const router = Router();

router.post(
    "/events",
    validateRequest(eventSchemas.create),
    createEvent
);

router.get("/events", getAllEvents);
router.get("/events/:id", getEventById);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;