/**
 * Converts a given string into kebab-case (lowercase words separated by hyphens).
 * 
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case version of the input string.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 * 
 * @example
 * toKebabCase("Hello World") // returns "hello-world"
 * toKebabCase("my_variable_name") // returns "my-variable-name"
 * toKebabCase(" Multiple Words_here ") // returns "multiple-words-here"
 */
function toKebabCase(input) {
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-null, defined string.');
    }
    
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        return '';
    }

    return trimmedInput
        .toLowerCase()
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/-+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}

// Example usage
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("my_variable_name")); // "my-variable-name"
console.log(toKebabCase(" Multiple Words_here ")); // "multiple-words-here"