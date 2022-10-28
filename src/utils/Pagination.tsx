export const pages = Array.from(Array(30).keys()).map((item: number) => (item += 1));
export const groups = Array.from(Array(7).keys()).map((item: number) => (item += 1));
export const LAST_PAGE = pages[pages.length - 1];

export const Pagination = (page: number) => {
  const newPages: (string | number)[] = [];
  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];
  if (page > firstPage) {
    newPages.push('←');
  }
  newPages.push(page);
  if (page < lastPage - 1) {
    newPages.push(page + 1);
  }

  if (page < lastPage - 3) {
    newPages.push('...');
  }

  if (page < lastPage - 2) {
    newPages.push(lastPage - 1);
  }

  if (page < lastPage) {
    newPages.push(lastPage);
    newPages.push('→');
  }
  return newPages;
};
