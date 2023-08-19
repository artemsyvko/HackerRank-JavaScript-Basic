'use strict';

class StaffList {
    //add your code here 
    constructor() {
        this.members = new Map();
    }
    
    add(name, age) {
        if (age > 20) {
            this.members.set(name, age);
        } else {
            throw new Error('Staff member age must be greater than 20');
        }
    }
    
    remove(name) {
        if (this.members.has(name)) {
            this.members.delete(name);
            return true;
        } else {
            return false;
        }
    }
    
    getSize() {
        return this.members.size;
    }
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