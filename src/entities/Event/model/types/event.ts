import { User } from '@/entities/User';
import { EventType } from '@/entities/Event/model/consts/eventConsts';

export interface Event {
    id: string;
    user: User;
    title: string;
    price: number;
    participants: number;
    soldOut: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    type: EventType[];
}
