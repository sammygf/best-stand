import { BestStandPage } from './app.po';

describe('best-stand App', () => {
  let page: BestStandPage;

  beforeEach(() => {
    page = new BestStandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
