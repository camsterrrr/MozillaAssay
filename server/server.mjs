import linter from 'addons-linter';
import express from 'express';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
	let sourceDir = process.cwd();

	if (req.query.directory) {
		sourceDir = "/Users/machavez/Desktop/MozillaAssay/" + req.query.directory + "/animated.zip"; // If a directory parameter is provided in the query, use it
	}

	console.log("sourceDir: ", sourceDir);

	const lint = linter.createInstance({
		// options
		config: {
		// This mimics the first command line argument from yargs,
		// which should be the directory to the extension.
		_: [sourceDir],
		logLevel: process.env.VERBOSE ? 'debug' : 'fatal',
		stack: Boolean(process.env.VERBOSE),
		pretty: true,
		warningsAsErrors: false,
		metadata: false,
		output: 'none',
		boring: false,
		selfHosted: false,
		// Lint only the selected files
		//   scanFile: ['path/...', ...]
		//
		// Exclude files:
		shouldScanFile: (fileName) => true,
		},
		// This prevent the linter to exit the nodejs application
		runAsBinary: false,
	});

	lint.run()
 	.then((linterResults) => {
  		// Send linting results back to VSCode as JSON
  		res.json({ lintingResults: linterResults });
 	}).catch((err) => {
  		console.error("addons-linter failure: ", err);
  		res.status(500).json({ error: "Server error" });
 	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
  });

