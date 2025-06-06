const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM3NmVjOWQ2LTRlMGUtNGVlZC05MThmLWI5ZTEwZjE5YTEwNC0xNzQ5MjM4MTc5MzgxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZmQ0NzM1NmUtYjg3ZC00ZTBmLTg3YzEtZmI0YjFhMjkzYTI4IiwidHlwZSI6InQifQ.jeSCmRNDrdnQaz2xCcS7BQ6ekPAHWEGwkFE4DYbhkr4'
cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
