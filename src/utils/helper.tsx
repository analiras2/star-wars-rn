import { format, parse } from 'date-fns';

const getNumber = (url: string) => {
  const regex = /(\d+)/g;
  // @ts-ignore
  return regex.exec(url)[0];
};

export const getNextPage = (url: string) => getNumber(url);

export const getIdFromUrl = (url: string) => getNumber(url);

export const dateFormat = (date: string): string => {
  if (!date) return 'n/a';

  return format(parse(date), 'MM/DD/YYYY');
};
