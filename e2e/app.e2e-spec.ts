import { MemoryLeakPage } from './app.po';

describe('memory-leak App', function() {
  let page: MemoryLeakPage;

  beforeEach(() => {
    page = new MemoryLeakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
