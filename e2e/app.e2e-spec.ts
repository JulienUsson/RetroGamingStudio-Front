import { RgsPage } from './app.po';

describe('rgs App', () => {
  let page: RgsPage;

  beforeEach(() => {
    page = new RgsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
