// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
const containers = await ContactsContainer.all();

let fsgContacts = [];

for (let ct of containers) {
  let contacts = await Contact.all([ct]);
  fsgContacts = contacts.filter(c => c.organizationName === "FSG");
}

let numbers = [];

for (let c of fsgContacts) {
  let lastName = c.familyName
  let firstName = c.givenName
  for (let n of c.phoneNumbers) {
    if (n['localizedLabel'] === 'mobile') {
      numbers.push([n['value'], lastName, firstName].join('|'));
//       numbers.push(n['value']);
    }
  }
}

const numsOnly = encodeURIComponent(numbers.join('\n'))

// console.log(numsOnly)
// console.log(URLScheme.forRunningScript())

let params = URLScheme.allParameters()
let baseURL = params["x-success"]
let url = baseURL + "?nums=" + numsOnly;
console.log(url)
Safari.open(url)