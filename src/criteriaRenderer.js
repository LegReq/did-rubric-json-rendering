


// TODO: Currently only rendering single criteria. Need to create a fetch loop to simulate the did-rubric similar to DID methods.
async function renderAllCriteria() {
    try {
        const response = await fetch('./json/criteria/example-criteria.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const criteria = await response.json();
        let criteriaHtml = renderCriteria(criteria);
        let criteriaContainer = document.getElementById('criteria-container');
        criteriaContainer && (criteriaContainer.innerHTML = criteriaHtml);
    } catch (error) {
        console.error('Error loading criteria:', error);
        let criteriaContainer = document.getElementById('criteria-container');
        criteriaContainer && (criteriaContainer.innerHTML = '<p>Error loading criteria data</p>');
    }
}

function renderCriteria(criteria, isEvaluation = false) {
    console.log(criteria);
    return `
    <div class="criteria">
        <div class="section"/>
            <h1>${criteria.label} ${criteria.name}</h1>
            <div class="label-border></div> 
        <div>
        ${(criteria.source && criteria.source.sourceRef) ? `
            <div class="source">
                <p>Source: ${criteria.source.sourceRef}</p>
            </div>
        ` : ''}

        </div>
        <div class="question section">
            <h4>QUESTION</h4>
            <h1>${criteria.question.question}</p>
            <p>${criteria.question.instruction ? criteria.question.instruction : ''}</p>
        </div>

        <div class="responses section">
            <h4>RESPONSES</h4>
            <div class="responses-list">
                ${criteria.response && criteria.response.possibleResponses && criteria.response.possibleResponses.map(response => `
                    <div class="response-item">
                        <span class="response-label">${response.label}.</span>
                        <span class="response-meaning">${response.meaning}</span>
                    </div>
                `).join('')}
            </div>

        </div>

        <div class="relevance section">
            <h4>RELEVANCE</h4>
            <p>${criteria.relevance}</p>
        </div>

        <div class="assessments section">
            <h4>${isEvaluation ? 'ASSESSMENTS' : 'EXAMPLE ASSESSMENTS'}</h4>
            <table>
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    ${criteria.assessmentTemplate && criteria.assessmentTemplate.columns && criteria.assessmentTemplate.columns.map(column => `<th>${column.heading}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${isEvaluation ? criteria.assessments.map(assessment => `
                    <tr>
                        <!-- <td>${assessment.id}</td> -->
                        ${criteria.assessmentTemplate.columns.map(column => `<td>${assessment[column.propertyRef]}</td>`).join('')}
                    </tr>
                `).join('') : criteria.exampleAssessments.map(assessment => `
                    <tr>
                        <!-- <td>${assessment.id}</td> -->
                        ${criteria.assessmentTemplate.columns.map(column => `<td>${assessment[column.propertyRef]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
            </table>
        </div>

    </div>
    `

}