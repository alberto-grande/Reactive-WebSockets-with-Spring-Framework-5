import { WsClientPage } from './app.po';

describe('ws-client App', () => {
  let page: WsClientPage;

  beforeEach(() => {
    page = new WsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
