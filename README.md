# Addons-Linter Server Implementation

## Mozilla Assay Tool

## Addons-Linter

# README

## Introduction
This is a simple server script (`server.mjs`) built with Node.js using ES6 module syntax. The server utilizes the `addons-linter` library to lint Mozilla add-ons. 

## Prerequisites
- Node.js installed on your machine.

## Installation
1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.

## Usage
1. Ensure you have Mozilla add-ons in your desired directory.
2. Run the server using `node server.mjs`.
3. Access the server through a web browser or API client.
4. Provide a directory parameter in the query string if you want to specify a different directory for linting. Currently,
it is hardcoded to check the animated.zip file in extensions/. If you provide a different query in the url it will throw an error.
```
URL to use: http://localhost:3000/?directory=extensions
```
5. The server will lint the provided directory using the `addons-linter` library.
6. Linting results will be logged to the console.

## Configuration
- The server runs on port 3000 by default. You can change the port by modifying the `port` constant in the `server.mjs` file.
- Customize linting options by modifying the `config` object in the `server.mjs` file according to your requirements.


This repository contains the implementation of the Mozilla Assay Tool as a Language Server. This project is part of the CSUMB Spring 2024 Capstone.

## Getting Started with Local Development

1. **Git Clone:** `git clone https://github.com/camsterrrr/MozillaAssay.git`
2. **Change Directory:** `cd MozillaAssay/`
3. **Install Dependencies:** `npm install`

This should install all necessary dependencies and packages. To begin custom development, visit `server/out/server.js`.

```javascript
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
```

This is an event listener that checks for when a file has been changed by the user.

The function:

```javascript
async function validateTextDocument(textDocument)
```

is a custom function that checks the files for consecutive capitalization and reports the errors in the server's terminal.

```
server
├── out
│   ├── server.js
│   └── server.js.map
```

## Running the Server

1. **Mac:** Press Shift+Command+B, this starts the build task.
   ![Build Task](img/Build_task.png)
2. Click on the Debug tab on the left side of VSCODE.
3. Make sure 'Launch Client' is selected and click play. This will open another vscode window.
   ![Debug Launch Client](img/Debug_LaunchClient.png)
4. Create a .txt file and paste the following:
   ```
   TypeScript lets you write JavaScript the way you really want to.
   TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
   ANY browser. ANY host. ANY OS. Open Source.
   ```
5. If it is running correctly, you should see this output in the new window:
   ![Test Output](img/test.png)

## Continuing Development

To address concerns related to the code snippet at a specific location in `server.server.js`:

[Link to server.server.js (line 117)](https://github.com/your/repository/server.server.js#L117)

### Things to Look Into:

1. Modify the `documents.onDidChangeContent` function to incorporate multiple validators:

   ```javascript
   documents.onDidChangeContent(change => {
       //This doesn't utilize both validators, or maybe it does but the second one overwrites the first

       validateTextDocument(change.document);
       //validateTextDocumentForExploits(change.document);
       validateTextDocumentForEval(change.document);
   });
   ```

   Ensure that both `validateTextDocument` and `validateTextDocumentForEval` functions are executed and their information outputted to the Remote Client terminal.

   Validators/Functions:
   ```javascript
   async function validateTextDocument(textDocument)
   async function validateTextDocumentForEval(textDocument)
   ```
   
Adjust the URLs, file names, and line numbers in the clickable link according to your project's structure to make sure it navigates users to the correct location.