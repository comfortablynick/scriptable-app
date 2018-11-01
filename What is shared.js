// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: reply;
// share-sheet-inputs: file-url, url, plain-text, image;
// Run from a share sheet to see which
// arguments are shared. Arguments are
// passed to a script when it is run
// from a share sheet.
// Configure the types of arguments
// a script supports from the script
// setttings. This script accepts all
// types of arguments and logs the
// arguments to the console.
// This is useful to examine which
// values an app shares using the 
// share sheet.
for (arg of args.all) {
  console.log(arg)
}