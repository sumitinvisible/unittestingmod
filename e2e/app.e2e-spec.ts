import { UnittestingmodPage } from './app.po';

describe('unittestingmod App', function() {
  let page: UnittestingmodPage;

  beforeEach(() => {
    page = new UnittestingmodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
