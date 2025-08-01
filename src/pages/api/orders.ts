import { mockOrders } from '@/_mock/orders';
import type { OrdersApiResponse } from '@/types/order';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrdersApiResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get pagination parameters from query
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // Calculate pagination
    const totalRecords = mockOrders.length;
    const totalPages = Math.ceil(totalRecords / limit);
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    // Get paginated orders and format dates
    const paginatedOrders = mockOrders
      .slice(startIndex, endIndex)

    const response: OrdersApiResponse = {
      message: 'Orders fetched successfully',
      data: {
        items: paginatedOrders,
        pagination: {
          currentPage,
          limit,
          totalPages,
          totalRecords,
        },
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}