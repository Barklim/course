import { Event } from '@/entities/Event';

export interface EventsSchema {
    isLoading: boolean;
    error?: string;
    data?: Event[];
}
