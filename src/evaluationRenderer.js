async function renderEvaluation(evaluationPath) {
    const response = await fetch(evaluationPath);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const evaluation = await response.json();
    const evaluationHtml = generateEvaluationHtml(evaluation);
    const evaluationContainer = document.getElementById('evaluation-container');
    evaluationContainer && (evaluationContainer.innerHTML = evaluationHtml);
}


function generateEvaluationHtml(evaluation) {
    return `
    <div class="evaluation">
        <h1>${evaluation.title}</h1>

        <div class="evaluators-section">
            <h4>EVALUATORS</h4>
            <div class="evaluators-list">
                ${evaluation.evaluators.map(evaluator => `
                    <div class="evaluator-item">
                        <span class="evaluator-name">${evaluator.name}</span>
                        <span class="evaluator-email">${evaluator.email}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="evaluation-date-section">
            <h4>EVALUATION DATE</h4>
            <p>${evaluation.evaluationDate}</p>
        </div>

        ${evaluation.funding && `
            <div class="funding-section">
                <h4>FUNDING</h4>
                <p>${evaluation.funding}</p>
            </div>
        `}

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
                ${evaluation.useCases.map(useCase => `
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
                ${evaluation.methods.map(method => `
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

        ${evaluation.categories.map(category => `
            <div class="category-section">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                ${category.criteria.map(criteria => renderCriteria(criteria, true)).join('')}
            </div>
        `).join('')}


        
    </div>
    `

}
