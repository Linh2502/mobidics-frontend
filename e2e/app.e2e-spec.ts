import { MobidicsPage } from './app.po';

describe('mobidics App', () => {
  let page: MobidicsPage;

  beforeEach(() => {
    page = new MobidicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
