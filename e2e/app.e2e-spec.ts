import { NgFindTheLetterPage } from './app.po';

describe('ng-find-the-letter App', () => {
  let page: NgFindTheLetterPage;

  beforeEach(() => {
    page = new NgFindTheLetterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
