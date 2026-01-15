/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 * @returns {string} The camelCase version of the input string. Returns an empty string if the input is empty or whitespace-only.
 *
 * @example
 * // returns "helloWorld"
 * toCamelCase("hello world");
 *
 * @example
 * // returns "myVariableName"
 * toCamelCase("my_variable_name");
 */
function toCamelCase(input) {}

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 * @returns {string} The dot.case version of the input string. Returns an empty string if the input is empty or whitespace-only.
 *
 * @example
 * // returns "hello.world"
 * toDotCase("hello world");
 *
 * @example
 * // returns "my.variable.name"
 * toDotCase("my_variable_name");
 */
function toDotCase(input) {}
function toCamelCase(input) {
    // Validate input type
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and check for empty or whitespace-only strings
    const trimmed = input.trim();
    if (trimmed === "") {
        return "";
    }

    // Convert to lowercase and split by spaces, hyphens, and underscores
    const words = trimmed
        .toLowerCase()
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
}
function toDotCase(input) {
    // Validate input type
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and check for empty or whitespace-only strings
    const trimmed = input.trim();
    if (trimmed === "") {
        return "";
    }

    // Convert to lowercase and split by spaces, hyphens, and underscores
    const words = trimmed
        .toLowerCase()
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0);

    // Convert to dot.case
    return words.join(".");
}
