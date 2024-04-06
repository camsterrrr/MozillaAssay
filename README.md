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


