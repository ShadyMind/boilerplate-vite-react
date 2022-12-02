import { renderHook } from '@testing-library/react-hooks';
import { usePageTitle } from './use-page-title';

describe('usePageTitle', () => {
  it('should set title', () => {
    const documentTitle = jest.spyOn(document, 'title');
    
    renderHook(() => usePageTitle('test text'));

    expect(documentTitle).toStrictEqual('test text');

  });
});
