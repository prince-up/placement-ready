const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'subjects.js');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace double escaped newlines (\\n) with single escaped (\n)
    // In regex, \\\\ matches a literal backslash.
    content = content.replace(/\\\\n/g, '\\n');

    // Replace double escaped quotes (\\') with single escaped (\')
    content = content.replace(/\\\\'/g, "\\'");

    // Additional cleanup for potential triple escapes or other artifacts if any
    // content = content.replace(/\\\\\\/g, '\\'); 

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully fixed subjects.js');
} catch (err) {
    console.error('Error fixing file:', err);
}
