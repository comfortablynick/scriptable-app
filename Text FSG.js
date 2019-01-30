// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;
const containers = await ContactsContainer.all();

let fsgContacts = [];

for (let ct of containers) {
  let contacts = await Contact.all([ct]);
  fsgContacts = contacts.filter(c => c.organizationName === "FSG");
}

console.log(fsgContacts);
let numbers = [];

for (let c of fsgContacts) {
  let lastName = c.familyName
  let firstName = c.givenName
  for (let n of c.phoneNumbers) {
    if (n['localizedLabel'] === 'mobile') {
      numbers.push([n['value'], lastName, firstName]);
    }
  }
}

// console.log(numbers);
const text = 'Good morning'

for (let n of numbers) {
    console.log(n)
    let msg = new Message();
    msg.recipients = [n[0]]
    msg.body = text;
    msg.send();
}
