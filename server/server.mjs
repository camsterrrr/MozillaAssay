import linter from 'addons-linter';
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    let sourceDir = process.cwd();
    let extensionName = '';

    if (req.query.directory && req.query.file) {
        const directory = req.query.directory;
        const fileName = req.query.file;
        sourceDir = path.join("file:///Users/machavez/Desktop/MozillaAssay/", directory, fileName); //Construct the source directory path
        
        //Extract extension name from file name
        const extensionFileName = path.basename(fileName);
        extensionName = path.parse(extensionFileName).name;
    }

    try {
        const lint = linter.createInstance({
            //options
            config: {
                _: [sourceDir],
                logLevel: process.env.VERBOSE ? 'debug' : 'fatal',
                stack: Boolean(process.env.VERBOSE),
                pretty: true,
                warningsAsErrors: false,
                metadata: false,
                output: 'none',
                boring: false,
                selfHosted: false,
            },
            runAsBinary: false,
        });

        const linterResults = await lint.run();
        
        //Log linting results to the console
        console.log(`Linting Results for ${extensionName}:`, linterResults);

        //Send linting results as JSON response
        res.json({ extensionName, lintingResults: linterResults });
    } catch (err) {
        console.error("addons-linter failure: ", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
