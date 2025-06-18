# DID Rubric Criteria and Evaluation Rendering

This repository contains two scripts that use JS Templating to render both a stand alone DID Rubric Criteria and a DID Rubric Evaluation from JSON. The example JSONs for this rendering can be found under the `json` folder.

## Run the rendering

There are two separate HTML files:

-  `index.html` which renders a single criteria using the `src/renderCriteria.js` script.
-  `evaluation.html` which renders a full evaluation using the `src/renderEvaluation.js` and `src/renderCriteria.js` scripts.

Because the scripts use `fetch` to retrieve the JSON files stored in the `json` folder (copying the did-methods approach), 
it is necessary to use a http-server in development to host these files. 

I used the http-server npm package, the only dependency of this project and only a **development** dependency.

1. Install dependencies `npm install`
2. Run server `npm run dev`
3. Go to `http://localhost:8080` or `http://localhost:8080/evaluation.html`

