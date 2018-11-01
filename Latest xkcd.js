// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: laugh-squint;
// Loads the latest XKCD comic from
// xkcd.com and shows it. Works well
// when run from a Siri Shortcut.
// The comic will be shown inline and
// Siri will read out the text that 
// supplements the comic.
let url = "https://xkcd.com/info.0.json"
let req = new Request(url)
let json = await req.loadJSON()
let imgURL = json["img"]
alt = json["alt"]
req = new Request(imgURL)
let img = await req.loadImage()
// QuickLook is a powerful API that
// finds the best way to present a
// value. It works both in the app
// and with Siri.
QuickLook.present(img)
if (config.runsWithSiri) {
  Speech.speak(alt)
}