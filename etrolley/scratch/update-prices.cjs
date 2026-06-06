const fs = require('fs');
const path = require('path');

const checkSvg = `                    <svg class="pricespage__check-icon" width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 3.19629H1.5V23.5004H21.8041V16.7324" stroke="#76AD60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.43164 10.9591L13.3436 16.871L27.5322 1.5" stroke="#76AD60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;

const unavailableSvg = `                    <svg class="pricespage__check-icon pricespage__unavailable-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2182 1.5H1.5V22.1055H22.1055V15.237" stroke="#C43B3D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.57422 11.957H15.7078" stroke="#C43B3D" stroke-width="3" stroke-linecap="round"/>
          </svg>`;

function updateFile(filePath) {
    const fullPath = path.join(__dirname, '..', 'src', 'components', 'pricespage', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Split content by rows: look for <!-- Row N:
    // This assumes the html has <!-- Row X: ... comments.
    // If not, we can split by <div class="pricespage__feature-label">
    
    let parts = content.split(/(<div class="pricespage__feature-label">[\s\S]*?<\/div>)/);
    
    // parts[0] is the top of the file before the first label.
    // then parts[1] is the label, parts[2] is the checks for row 1, etc.
    let newContent = parts[0];
    let rowIndex = 0;

    for (let i = 1; i < parts.length; i += 2) {
        let label = parts[i];
        let checksBlock = parts[i + 1];
        rowIndex++;

        // We know each row has exactly 4 <div class="pricespage__feature-check..."> blocks.
        // Let's replace the inside of each of them.
        
        let checkRegex = /(<div class="pricespage__feature-check[^>]*>)([\s\S]*?)(<\/div>)/g;
        
        let colIndex = 0;
        let newChecksBlock = checksBlock.replace(checkRegex, (match, openTag, inner, closeTag) => {
            colIndex++;
            let replacement = checkSvg; // default to check
            
            // For rows 26 to 34, column 1 is unavailable
            if (rowIndex > 25 && colIndex === 1) {
                replacement = unavailableSvg;
            }
            
            return openTag + replacement + closeTag;
        });

        newContent += label + newChecksBlock;
    }

    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
}

updateFile('pricespage.en.html');
updateFile('pricespage.ar.html');
