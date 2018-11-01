// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;
const containers = await ContactsContainer.all();

for (let ct of containers) {
  console.log(`Container ${ct.identifier}`)
  let contacts = await Contact.all([ct])
  console.log(contacts.filter(c => c.familyName === "Murphy"))
}
