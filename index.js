const core = require('@actions/core');

try {
  // Get inputs
  const input1 = parseInt(core.getInput('input1'));
  const input2 = parseInt(core.getInput('input2'));

  // Perform calculations
  const sum = input1 + input2;
  const product = input1 * input2;

  // Create a custom message
  const message = `The inputs are ${input1} and ${input2}. Sum is ${sum}, product is ${product}.`;

  // Print the message
  console.log(message);
} catch (error) {
  core.setFailed(error.message);
}

