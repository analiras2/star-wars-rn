export const getNextPage = (url: any): number =>
  url
    .split('=')
    .pop()
    .split('"')[0];

export const getIdFromUrl = (url: string) => {
  const parts = url.split('/');
  return parts.pop() || parts.pop();
};
