// Generic API response types

export interface ApiResponse<T = unknown> {
  message: string;
  data: T;
}

export interface PaginationInfo {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationInfo;
}