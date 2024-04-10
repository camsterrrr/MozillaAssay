import * as vscode from 'vscode';
import axios from 'axios';

// Function to fetch linting results from the server
async function fetchLintingResults(directory: string): Promise<any> {
    try {
        // Make a GET request to the server to fetch linting results
        const response = await axios.get(`http://localhost:3000?directory=${directory}`);
        return response.data.lintingResults;
    } catch (error) {
        console.error('Error fetching linting results:', error);
        return null;
    }
}

// Function to display linting results in Visual Studio Code
async function displayLintingResults(): Promise<void> {
    const directory = 'extensions'; // Directory to be linted

    // Fetch linting results from the server
    const lintingResults = await fetchLintingResults(directory);

    // Check if linting results are available
    if (lintingResults) {
        // Process and display linting results
        console.log(lintingResults);
        // Your logic to parse and display linting results
    } else {
        vscode.window.showErrorMessage('Error fetching linting results');
    }
}

// Activate function called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // Register a command to display linting results
    const disposable = vscode.commands.registerCommand('extension.lintCode', async () => {
        await displayLintingResults();
    });

    // Add the command to the extension's subscriptions
    context.subscriptions.push(disposable);
}

// Deactivate function called when the extension is deactivated
export function deactivate() {
    // Function to deactivate extension
    console.log('Extension deactivated.');
}

// // this method is called when your extension is activated
// // your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {
// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "helloworld-sample" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed

// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World!');
// 	});

// 	context.subscriptions.push(disposable);
// }
