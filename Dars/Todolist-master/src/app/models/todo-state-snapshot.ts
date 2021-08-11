import 'firebase/firestore';
import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

import { Todo } from './todo';
import { TodoState } from '../store';

export function createSnapshot(state: TodoState): TodoStateSnapshot {
    return {
        created: stringToTimestamp(state.created),
        entities: state.ids.map(id => state.entities[id]),
    };
}

export function stringToTimestamp(date: string | number): Timestamp {
    return Timestamp.fromDate(new Date(date));
}

export function timestampToString(date: Timestamp): string {
    return new Date(date.seconds * 1000).toISOString();
}

export interface TodoStateSnapshot {
    created: Timestamp;
    entities: Todo[];
}
