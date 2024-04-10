import linter from 'addons-linter';
import express from 'express';

const app = express();
const port = 3000;


app.get('/', async (req, res) => {
	let sourceDir = process.cwd();

	if (req.query.directory) {
		sourceDir = "/Users/machavez/Desktop/MozillaAssay/" + req.query.directory + "/name_of_extension_zip_or_xpi"; // If a directory parameter is provided in the query, use it
	}

	 try {
        const lint = linter.createInstance({
            // options
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
        res.json({ lintingResults: linterResults });
    } catch (err) {
        console.error("addons-linter failure: ", err);
        res.status(500).json({ error: "Server error" });
    }
	
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
  });

