# DID Rubric Evaluation Rendering

This repository contains two scripts that use JS Templating to render both a stand alone DID Rubric Criteria and a DID Rubric Evaluation from JSON. The example JSONs for this rendering can be found under the `json` folder.

The intention of this tool is to enable people to generate and render DID Rubric Evaluations in HTML. It is intented to be simple and lightweight. 

## Creating an Evaluation

1. Install npm packages: `npm install`
2. Generate a new evaluation: `npm run new-evaluation <evaluation_name>` 
3. Run the rendering tool: `npm run dev`
4. Open the website at [localhost:8080](http://localhost:8080)
5. Navigate to the evaluation page at `/evaluations/<evaluation_name>`
6. Edit the evaluation JSON file (in the repo) at `./json/evaluations/<evaluation_name>.json`
7. Trigger rerender of the HTML. (Ctrl+Shift+R for hard refresh)

