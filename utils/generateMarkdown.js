// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === "None") return "";
   return `![License](https://img.shields.io/badge/license-${license.replace(
     " ",
     "_"
   )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case "None":
    return "";
  case "MIT":
    return "https://opensource.org/licenses/MIT";
  case "Apache 2.0":
    return "https://opensource.org/licenses/Apache-2.0";
  case "BSD 2":
    return "https://opensource.org/licenses/BSD-2-Clause";
  case "BSD 3":
    return "https://opensource.org/licenses/BSD-3-Clause";

    break;

  default:
    break;
}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";
  const licenseLink = renderLicenseLink(license);
  return `## License
  This project is licensed under the ${license} License.`;
}

// Function generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
