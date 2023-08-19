'use strict';

class NotesStore { 
    //add your code here
    
}

function main() { const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const obj = new NotesStore();
    const operationCount = parseInt(readLine().trim());

    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            if (operationInfo[0] === 'addNote') {
                obj.addNote(operationInfo[1], operationInfo[2] || '');
            } else if (operationInfo[0] === 'getNotes') {
                const res = obj.getNotes(operationInfo[1]);
                if (res.length === 0) {
                    ws.write('No Notes\n');
                } else {
                    ws.write(`${res.join(',')}\n`);
                }
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }

    ws.end();
}