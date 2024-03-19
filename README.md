# Language Server Implementation

## Mozilla Assay Tool

## Getting Started with Local Development

1. Git Clone https://github.com/camsterrrr/MozillaAssay.git
2. cd MozillaAssay/
3. npm install

This should install all necessary dependencies and packages. To begin custom development, visit server/out/server.js.

```
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
```
is an event listener that checks for when a file has been changed by the user.

The function:
```
async function validateTextDocument(textDocument)
```

is a custom function that checks the files for consecutive capitalization and reports the errors in the servers terminal.

server
├── out
│   ├── server.js
│   └── server.js.map

This repository contains the implementation of the Mozilla Assay Tool as a Language Server. This project is part of the CSUMB Spring 2024 Capstone.


