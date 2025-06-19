const fs = require('fs');
const path = require('path');

// set directories and paths
const criteriaDir = path.join(__dirname, '../json/criteria');
const indexFile = path.join(criteriaDir, 'index.json');

// Process all method files and generate an index file
(async () => {

  const allCriteria = [];
  process.stdout.write('Processing:');
  fs.readdirSync(criteriaDir).forEach(filename => {
    // skip index file
    if(['index.html', 'index.json'].includes(filename)) {
      return;
    }

    const criteriaFile = path.join(criteriaDir, filename);
    const criteriaData = fs.readFileSync(criteriaFile, 'utf-8');
    process.stdout.write(' ' + filename);

    try {
      const criteriaJson = JSON.parse(criteriaData);
      allCriteria.push(criteriaJson);
    } catch(e) {
        console.error('\n\n❌ ERROR: Failed to parse', filename, e);
        process.exit(1);
    }
  });

  if(allCriteria.length > 0) {
    fs.writeFileSync(indexFile, JSON.stringify(allCriteria, null, 2), 'utf-8');
    console.log('\n\nGenerated /json/criteria/index.json.');
  } else {
    console.error('\n\n❌ ERROR: No criteria found in criteria directory');
    process.exit(1);
  }

})();