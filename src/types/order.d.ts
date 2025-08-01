import type { ApiResponse, PaginatedResponse } from './api';

// Order related types

export type JobType = 'Service' | 'Review' | 'Return';

export type OrderStatus = 'in queue' | 'on hold' | 'offer' | 'assign';

export interface Order {
  id: number;
  customerName: string;
  contentSize: number;
  currentJob: JobType;
  dueDateTime: string;
  status: OrderStatus;
}

// Order-specific API response types
export type OrdersApiResponse = ApiResponse<PaginatedResponse<Order>>;