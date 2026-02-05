import { randomUUID } from 'crypto';
import { Event } from '../models/eventModel';
import { firestoreRepository } from '../repositories/firestoreRepository';

export async function createEventService(data: Omit<Event, "id" | "createdAt" | "updatedAt">): Promise<Event> {
    const event_id = randomUUID();
    const timestamp = new Date().toISOString();

    const event: Event = {
        id: event_id,
        ...data,
        createdAt: timestamp,
        updatedAt: timestamp
    };

    await firestoreRepository.createDocument('events', event, event_id);
    
    return event;
};
