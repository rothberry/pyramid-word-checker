# Pyramid Word Checker using  HTTP requests

**Problem statement**: Accept a string as input and return a response indicating whether a word is a pyramid word. A word is a pyramid word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

**Examples**:

*banana is a pyramid word because you have 1 'b', 2 'n's, and 3 'a's.*

*bandana is not a pyramid word because you have 1 'b' and 1 'd'.*
## Installation

> npm install

## Start expressjs server 

> npm start

## Request data

Send a request with a JSON body to **/check** using Insomnia, Postman, cUrl, etc..

JSON format:
> { "word" : "banana" }