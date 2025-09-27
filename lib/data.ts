
import type { Order, Client, Product, Expense, LogEntry } from '../types';

export const initialClients: Client[] = [];

export const initialProducts: Product[] = [];


export const initialOrders: Order[] = [];

export const initialExpenses: Expense[] = [];

export const initialLogs: LogEntry[] = [
    { id: 'l1', timestamp: new Date().toISOString(), user: 'System', action: 'Initialized Dashboard', details: { version: '1.1.0' } },
];