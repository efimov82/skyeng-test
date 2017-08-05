import { TextVimboxPage } from './app.po';

describe('text-vimbox App', () => {
  let page: TextVimboxPage;

  beforeEach(() => {
    page = new TextVimboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
