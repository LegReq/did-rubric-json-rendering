const fs = require('fs');
const path = require('path');

function die(msg) {
  console.error(msg);
  process.exit(1);
}

const arg = process.argv[2];
if (!arg) {
  die('Usage: npm run new-evaluation <filename>\nExample: npm run new-evaluation my-evaluation');
}

// strip extension and validate
const safe = arg.replace(/\.json$/i, '');
if (!/^[a-z0-9_-]+$/i.test(safe)) {
  die('Filename must be alphanumeric with dashes/underscores only.');
}

const jsonName = `${safe}.json`;
const htmlName = `${safe}.html`;

// paths
const repoRoot = path.join(__dirname, '..');
const templateJson = path.join(repoRoot, 'json', 'templates', 'evaluation-template.json');
const destJson = path.join(repoRoot, 'json', 'evaluations', jsonName);
const destHtml = path.join(repoRoot, 'evaluations', htmlName);
const evaluationsListPath = path.join(repoRoot, 'evaluations.json');

const criteriaRendererPath = path.join(repoRoot, 'src', 'criteriaRenderer.js');
const evaluationRendererPath = path.join(repoRoot, 'src', 'evaluationRenderer.js');

// sanity checks
if (!fs.existsSync(templateJson)) die(`Template not found: ${templateJson}`);
if (fs.existsSync(destJson)) die(`JSON already exists: ${destJson}`);
if (fs.existsSync(destHtml)) die(`HTML already exists: ${destHtml}`);

// copy JSON template
fs.copyFileSync(templateJson, destJson);

// generate HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DID Rubric Evaluation – ${safe}</title>
  <link rel="stylesheet" href="../styles.css" />
</head>
<body>
  <header class="header">
    <a href="/" class="title">DID Rubric Evaluations</a>
  </header>
  <div id="evaluation-container" class="container">
  </div>

  <script src="../src/criteriaRenderer.js"></script>
  <script src="../src/evaluationRenderer.js"></script>
  <script>
    const evaluationPath = '../json/evaluations/${jsonName}';
    renderEvaluation(evaluationPath).catch(err => {
      console.error('Failed to render evaluation:', err);
    });
  </script>
</body>
</html>
`;
fs.writeFileSync(destHtml, html, { flag: 'wx' });

// update evaluations.json
let evaluations = [];
if (fs.existsSync(evaluationsListPath)) {
  try {
    evaluations = JSON.parse(fs.readFileSync(evaluationsListPath, 'utf-8'));
    if (!Array.isArray(evaluations)) {
      console.warn('⚠ evaluations.json was not an array. Resetting.');
      evaluations = [];
    }
  } catch {
    console.warn('⚠ Could not parse evaluations.json. Resetting.');
    evaluations = [];
  }
}

evaluations.push({
  name: safe,
  link: `./evaluations/${htmlName}`
});

fs.writeFileSync(evaluationsListPath, JSON.stringify(evaluations, null, 2));

console.log(`✅ Created evaluation: json/evaluations/${jsonName}`);
console.log(`✅ Created page: ${htmlName}`);
console.log(`✅ Updated evaluations.json with "${safe}"`);
