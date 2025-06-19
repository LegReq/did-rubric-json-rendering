const fs = require('fs');
const path = require('path');

// Get the filename from command line arguments
const filename = process.argv[2];

if (!filename) {
  console.error('Usage: npm run new-evaluation <filename>');
  console.error('Example: npm run new-evaluation my-evaluation.json');
  process.exit(1);
}

// Ensure the filename has .json extension
const outputFilename = filename.endsWith('.json') ? filename : `${filename}.json`;

// Define source and destination paths
const sourcePath = path.join(__dirname, '..', 'json', 'templates', 'evaluation-template.json');
const destPath = path.join(__dirname, '..', 'json', 'evaluations', outputFilename);

try {
  // Check if source file exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    process.exit(1);
  }

  // Check if destination file already exists
  if (fs.existsSync(destPath)) {
    console.error(`Destination file already exists: ${destPath}`);
    console.error('Please choose a different filename or delete the existing file.');
    process.exit(1);
  }

  // Copy the file
  fs.copyFileSync(sourcePath, destPath);
  
  console.log(`✅ Successfully duplicated evaluation template to: ${outputFilename}`);
  console.log(`📁 Location: json/evaluations/${outputFilename}`);
  
} catch (error) {
  console.error('❌ Error duplicating template:', error.message);
  process.exit(1);
} 