const pages = Array.from(Array(30).keys()).map((item: number) => (item += 1));
export const LAST_PAGE = pages[pages.length - 1];

export const pageReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'NEXT': {
      return state + 1;
    }
    case 'PREVIOUS': {
      return state - 1;
    }
    case 'LAST': {
      return LAST_PAGE;
    }
    case 'PRELAST': {
      return LAST_PAGE - 1;
    }
    case 'NEXTNEXT': {
      return state + 2;
    }
    default:
      throw new Error('Reducer error!');
  }
};

export const Pagination = (page: number) => {
  const newPages: (string | number)[] = [];
  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];
  if (page > firstPage) {
    newPages.push('Previous');
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
    newPages.push('Next');
  }
  return newPages;
};
