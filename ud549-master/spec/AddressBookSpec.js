describe('Address Book', function() {
  var addressBook;
  var thisContact;

   beforeEach(function() {
    addressBook = new AddressBook();
     thisContact = new Contact();
 });

  it('should be able to add a contact', function() {
      addressBook.addContact(thisContact);
      expect(addressBook.getContact(0)).toBe(thisContact);
      });

  it('should be able to delete a contact', function() {

     addressBook.addContact(thisContact);
     addressBook.deleteContact(0);
     expect(addressBook.getContact(0)).not.toBeDefined();
  })
});

describe('Async Address Book', function() {
  it('Should grab all the initial contacts', function() {
    var addressBook = new AddressBook();

    addressBook.getInitialContacts();
    expect(addressBook.initialComplete).toBe(True);
  });
});
