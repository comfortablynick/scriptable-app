// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: code-branch;
let fm = FileManager.iCloud()
let dir = fm.documentsDirectory()
// Fetch all current scripts
let filePaths = allScripts(dir)
// Pick the folder that contains your repository
let dirs = await DocumentPicker.open(["public.folder"])
let dstDir = dirs[0]
let repoName = getFilename(dstDir)
// Remove all scripts in the repository. We'll replace the mwith the current ones.
removeScripts(dstDir)
// Copy all current scripts into the repository.
for (filePath of filePaths) {
  copyFile(filePath, dstDir)
}
// Find your key in the Working Copy settings
let key = "JFNLRTTYE"
await pushChanges(repoName, key)

async function pushChanges(repo, key) {
  let baseURL = "working-copy://x-callback-url/chain/"
  let msg = "Backup from Scriptable"
  let cbu = new CallbackURL(baseURL)
  cbu.addParameter("key", key)
  cbu.addParameter("repo", repo)
  cbu.addParameter("command", "commit")
  cbu.addParameter("message", msg)
  cbu.addParameter("limit", "999")
  cbu.addParameter("command", "push")
  await cbu.open()
}

function copyFile(srcFilePath, dstDir) {
  let fm = FileManager.iCloud()
  let filename = getFilename(filePath)
  let dstFilePath = fm.joinPath(dstDir, filename)
  fm.copy(srcFilePath, dstFilePath)
}

function removeScripts(dstDir) {
  let fm = FileManager.iCloud()
  let filePaths = allScripts(dstDir)
  for (filePath of filePaths) {
    fm.remove(filePath)
  }
}

function allScripts(dir) {
  let fm = FileManager.iCloud()
  let files = fm.listContents(dir)
  let filePaths = files.map(file => {
    return fm.joinPath(dir, file)
  })
  return filePaths.filter(isScript)
}

function isScript(filePath) {
  let fm = FileManager.iCloud()
  let uti = fm.getUTI(filePath)
  return uti == "com.netscape.javascript-source"
}

function getFilename(filePath) {
  let idx = filePath.lastIndexOf("/")
  return filePath.substring(idx + 1)
}