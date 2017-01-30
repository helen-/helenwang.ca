import { HelenwangPage } from './app.po';

describe('helenwang App', function() {
  let page: HelenwangPage;

  beforeEach(() => {
    page = new HelenwangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
