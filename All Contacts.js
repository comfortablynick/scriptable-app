// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: teal; icon-glyph: magic;
let containers = await ContactsContainer.all();
let contacts = await Contact.all(containers);
contacts.forEach(contact => console.log(`${contact.givenName} ${contact.familyName}`));