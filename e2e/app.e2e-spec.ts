import { AngularSimpleInventoryPage } from './app.po';

describe('angular-simple-inventory App', () => {
  let page: AngularSimpleInventoryPage;

  beforeEach(() => {
    page = new AngularSimpleInventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
