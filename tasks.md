# 1. NotesStore

In this challenge, the task is to create a class **NotesStore**. The class will manage a collection of notes, with each note having a state and a name. Valid states for notes are: 'completed', 'active', and 'others'. All other states are invalid.

The class must have the following methods:

## 1. addNote(state, name):

Adds a note with the given name and state to the collection. In addition to that:
- If the passed name is empty, then it throws an **Error** with the message '*Name cannot be empty*'.
- If the passed name is non-empty but the given state is not a valid state for a note, then it throws an **Error** with the message '*Invalid state {state}*'.

## 2. getNotes(state):

Returns an array of names of notes with the given state added so far. The names are returned in the order the corresponding notes were added. In addition to that:
- If the given state is not a valid note state, then it throws an **Error** with the message '*Invalid state {state}*'.
- If no note is found in this state, it returns an empty array.

Note: The state names are case-sensitive.

Your implementation of the function will be tested by a stubbed code on several input files. Each input file contains parameters for the function's call. The functions will be called with those parameters, and the result of their executions will be printed to the standard output by the provided code. The stubbed code joins the strings returned by the **getNotes** function with a comma and prints to the standard output. If **getNotes** returns an empty array, the stubbed code prints '*No Notes*'. The stubbed code also prints messages of all the thrown errors.

```
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
```

# 2. Staff List

The task is to create a class **StaffList**. The class will manage a collection of staff members, where each member is uniquely identified by a name. The class must have the followinig methods:

## 1. add(name, age):
- Parameters string **name** and integer **age** are passed to this function.
- If **age** is less than or equal to 20, it throws an Error with the message 'Staff member age must be greater than 20'.
- It is guaranteed that at any time, if a member is in the collection, then no other member with the same name will be added to the collection.

## 2. remove(name):
- If the member with the given name is in the collection, it removes the member from the collection and returns true.
- Else if the member with the given name is not in the collection, it does nothing and returns false.

## 3. getSize():
- returns the number of members in the collection.

Your implementation of the class will be tested by a stubbed code on several input files. Each input file contains parameters for the functions calls. The functions will be called with those parameters, and the result of their excutions will be printed to the standard output by the provided code. The stubbed code prints values returned by the **remove(name)** and **getSize()** functions, and it also prints messages of all the cached errors.

```
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
```
