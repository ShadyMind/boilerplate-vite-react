export const prepareDocument = (element: HTMLElement) => {
  const document = element.ownerDocument;
  const classNames = document.children[0]?.classList;
  
  if (classNames) {
    classNames.remove('no-js');
    
    if (classNames.length === 0) {
      document.children[0]?.removeAttribute('class');
    }
  }

  return element;
};
