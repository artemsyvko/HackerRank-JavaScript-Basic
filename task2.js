'use strict';

class StaffList {
    //add your code here 

}

function main() { const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const obj = new StaffList();
    const operationCount = parseInt(readLine().trim());

    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            let res;
            if (operationInfo[0] === 'add') {
                obj.add(operationInfo[1], parseInt(operationInfo[2]));
            } else if (operationInfo[0] === 'remove') {
                res = obj.remove(operationInfo[1]);
                ws.write(`${res}\n`);
            } else if (operationInfo[0] === 'getSize') {
                res = obj.getSize();
                ws.write(`${res}\n`);
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}