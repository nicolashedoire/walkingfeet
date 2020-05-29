export const getCurrentYear = (): string => {
  return new Date(Date.now()).getFullYear().toString();
};

export const formatDate = (date: string) => {
  return Date.parse(date);
};
