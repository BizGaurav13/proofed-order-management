// Format date to human readable format
export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

// Calculate time remaining until due date
export const calculateTimeRemaining = (dueDateTime: string): string => {
  const now = new Date();
  const dueDate = new Date(dueDateTime);
  const timeDiff = dueDate.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return 'Overdue';
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};