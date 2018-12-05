// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: magic;
const containers = await ContactsContainer.all();
const contacts = await Contact.all(containers)
const fsgContacts = contacts.filter(c => c.organizationName === 'FSG');

let numbers = {};

for (let c of fsgContacts) {
  let lastName = c.familyName
  let firstName = c.givenName
  for (let n of c.phoneNumbers) {
    if (n['localizedLabel'] === 'mobile') {
      numbers[`${firstName} ${lastName}`] = n['value'];
    }
  }
}

let nums = encodeURIComponent(JSON.stringify(numbers));
let params = URLScheme.allParameters()
let baseURL = params["x-success"]
let url = baseURL + "?nums=" + nums;
// console.log(url)
Safari.open(url)