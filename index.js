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
  
  // Create custom output messages
  const dash = `Output variable containing DASH in it.`;
  const underscore = `Output variable containing UNDERSCORE in it.`;
  
  // Set outputs
  core.setOutput('sum', sum);
  core.setOutput('product', product);
  core.setOutput('message', message);
  core.setOutput('dash-out', dash);
  core.setOutput('underscore_out', underscore);
} catch (error) {
  core.setFailed(error.message);
}

