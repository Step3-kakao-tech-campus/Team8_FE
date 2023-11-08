export const getFormattedDateTime = (originalDate: string): string => {
  const parsedDate = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  } as const;
  return parsedDate.toLocaleString('ko', options);
};

export const getFormattedDate = (originalDate: string): string => {
  const parsedDate = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  } as const;
  return parsedDate.toLocaleString('ko', options);
};

export const getFormattedTime = (originalDate: string): string => {
  const parsedDate = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  } as const;
  return parsedDate.toLocaleString('ko', options);
};
