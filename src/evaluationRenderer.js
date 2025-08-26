async function renderEvaluation(evaluationPath) {

    console.log("Using default evaluation path");
    const response = await fetch(evaluationPath);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const evaluationJson = await response.json();
    console.log("Loaded evaluation from default path:", evaluationPath);

    const evaluationHtml = generateEvaluationHtml(evaluationJson, evaluationPath);
    const evaluationContainer = document.getElementById('evaluation-container');
    if (evaluationContainer) {
        evaluationContainer.innerHTML = evaluationHtml;
    }
}


function generateEvaluationHtml(evaluation, evaluationPath) {
    return `
    <div class="evaluation">
        <h3>Edit the JSON file in the respository at <span class="json-path">${evaluationPath.substring(3)}</span> to change the contents of this evaluation.</h3>
        <table class="evaluation-masthead">
            <thead>
                <tr>
                    <th class="evaluation-title" colspan="2">
                        <div>${evaluation.id?? ""}</div>
                        <div><h1>${evaluation.title ?? ""}</h1></div>
                        <div><h4>${evaluation.subtitle ?? ""}</h1></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="evaluators">
                    <th>EVALUATORS</th>
                    <td>
                        ${(evaluation.evaluators || []).map(evaluator =>
                            `<span class="evaluator">${evaluator.name} &lt;<a href="mailto:${evaluator.email}">${evaluator.email}</a>&gt;</span>`
                        ).join(', ')}
                    </td>
                </tr>   
                <tr class="evaluation-date">
                    <th>EVALUATION DATE</th>
                    <td>${evaluation.evaluationDate ?? ""}</td>
                </tr>
                <tr class="evaluation-funding">
                    <th>FUNDING</th>
                    <td>${evaluation.funding || 'None'}</td>
                </tr>
            </tbody>
        </table>

        <div class="use-case-section">
            <h4>USE CASES REFERENCED</h4>
            <table>
                <thead>
                    <tr class="use-case-header">
                        <th>LABEL</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    ${(evaluation.useCases || []).map(useCase => `
                        <tr id="${useCase.id}">
                            <td>${useCase.id}</td>
                            <td>${useCase.name}</td>
                            <td>${useCase.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="methods-section">
            <h4>METHODS EVALUATED</h4>
            <table>
                <thead>
                    <tr class="methods-header">
                        <th>LABEL</th>
                        <th>SPECIFICATION</th>
                        <th>NETWORK</th>
                        <th>REGISTRY</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    ${(evaluation.methods || []).map(method => `
                        <tr>
                            <td>${method.label}</td>
                            <td>${method.specificationUrl || ''}</td>
                            <td>${method.networkUrl || ''}</td>
                            <td>${method.registry || ''}</td>
                            <td>${method.description || ''}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        ${(evaluation.categories || []).map(category => `
            <div class="category-section">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                ${(category.criteria || []).map(criteria => renderCriteria(criteria, true)).join('')}
            </div>
        `).join('')}
    </div>
    `;
}
