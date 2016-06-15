describe('Derek Peruo | NWM Code Challenge', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Derek Peruo | NWM Code Challenge');
  });

  it('has 2 instances of the nwmUserList directive', function() {
    var lists = element.all(by.css('.nwm-user-list-container'))
    expect(lists.count()).toEqual(2);
  });

  it('populates the nwmUserList with users', function() {
    var users = element.all(by.css('.media'))
    expect(users.count()).toEqual(40)
  });
});
