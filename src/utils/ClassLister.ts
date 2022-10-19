interface StylesObject {
  [className: string]: string;
}
const ClassLister =
  (styles: StylesObject) =>
  (...selectorList: string[]) => {
    return selectorList.reduce((currentList: string, selector: string) => {
      let output = currentList;
      if (styles[selector]) {
        if (currentList) {
          output += ' ';
        }
        output = output + styles[selector];
      }
      return output;
    }, '');
  };

export default ClassLister;
