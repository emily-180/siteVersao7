function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyARGYc6I4c43n6WlpPU4n1Uon2_Aj0lGBk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadProfessoresFromGoogleSheet();
        loadBolsistasFromGoogleSheet() ;
    });
}

function loadProfessoresFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk'; 
    const sheetName = 'pagina1'; 
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const professoresContainer = document.getElementById('professores-container');
            data.forEach(function (row) {
                const nome = row[0];
                const area = row[1];
                const grauInstrucao = row[2];
                const foto = row[3];
                const professorDiv = document.createElement('div');
                professorDiv.className = 'col-md-4';
                professorDiv.innerHTML = `
                    <div class="professor">
                        <img src="${foto}" alt="${nome}" class="img-fluid">
                        <h3>${nome}</h3>
                        <p>Área: ${area}</p>
                        <p>Grau de Instrução: ${grauInstrucao}</p>
                    </div>
                `;
                professoresContainer.appendChild(professorDiv);
            });
        }
    });
}

function loadBolsistasFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk'; 
    const sheetName = 'pagina2'; // Altere para a folha correta onde estão os dados dos bolsistas
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const bolsistasContainer = document.getElementById('bolsistas-container');
            data.forEach(function (row) {
                const nome = row[0];
                const area = row[1];
                const anoPeriodo = row[2];
                const foto = row[3];
                const bolsistaDiv = document.createElement('div');
                bolsistaDiv.className = 'col-md-4 bolsista';
                bolsistaDiv.innerHTML = `
                    <div class="bolsista">
                        <img src="${foto}" alt="${nome}" class="img-fluid">
                        <h3>${nome}</h3>
                        <p>Curso: ${area}</p>
                        <p>Ano/Período: ${anoPeriodo}</p>
                    </div>
                `;
                bolsistasContainer.appendChild(bolsistaDiv);
            });
        }
    });
}
gapi.load('client', initGoogleSheetsApi);
 
