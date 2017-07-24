import { SmashPage } from './app.po';

describe('smash App', () => {
  let page: SmashPage;

  beforeEach(() => {
    page = new SmashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
