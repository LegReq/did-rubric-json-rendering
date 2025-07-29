async function renderEvaluation(evaluationPath) {
    const response = await fetch(evaluationPath);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const evaluation = await response.json();
    const evaluationHtml = generateEvaluationHtml(evaluation);
    const evaluationContainer = document.getElementById('evaluation-container');
    if (evaluationContainer) {
        evaluationContainer.innerHTML = evaluationHtml;
    }
}

function generateEvaluationHtml(evaluation) {
    return `
    <div class="evaluation">
        <table class="evaluation-masthead">
            <thead>
                <tr>
                    <th class="evaluation-title" colspan="2">
                        <div>${evaluation.id}</div>
                        <div><h1>${evaluation.title}</h1></div>
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
                    <th>DATE</th>
                    <td>${evaluation.evaluationDate}</td>
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
                    <tr>
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
                    <tr>
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
