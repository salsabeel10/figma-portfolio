// check-case-sensitivity.js
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "src");

// Get all source files recursively
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(js|jsx|ts|tsx)$/.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// Check if a given import path matches actual file name case
function checkImportCase(file) {
  const content = fs.readFileSync(file, "utf-8");
  const regex = /from\s+['"](\..*?)['"]/g;
  let match;
  const errors = [];

  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    const resolved = path.resolve(path.dirname(file), importPath);
    const actualFile = resolveFileWithExtension(resolved);

    if (actualFile && resolved !== actualFile) {
      const expected = path.relative(process.cwd(), actualFile);
      const used = path.relative(process.cwd(), resolved);
      if (expected !== used) {
        errors.push({ file, importPath, expected });
      }
    }
  }

  return errors;
}

function resolveFileWithExtension(filePath) {
  const extensions = ["", ".js", ".jsx", ".ts", ".tsx", ".json", ".png", ".jpg", ".jpeg", ".svg"];
  for (const ext of extensions) {
    const full = filePath + ext;
    if (fs.existsSync(full)) return fs.realpathSync(full);
  }
  return null;
}

// Run the check
const allFiles = getAllFiles(projectRoot);
let problems = [];

for (const file of allFiles) {
  problems = problems.concat(checkImportCase(file));
}

if (problems.length === 0) {
  console.log("✅ No case-sensitivity issues found!");
} else {
  console.log("\n⚠️ Case-sensitive import mismatches detected:\n");
  problems.forEach(p => {
    console.log(`File: ${p.file}`);
    console.log(`  Import: ${p.importPath}`);
    console.log(`  Expected: ${p.expected}\n`);
  });
  console.log("Tip: Fix the file names or imports so they match exactly (case-sensitive).");
}
