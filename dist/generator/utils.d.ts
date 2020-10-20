export declare class Utils {
    /**
     * Read and return JSON from file path.
     * @param {string} filePath a string or a path to the file.
     */
    static getJson(filePath: string): void;
    /**
     * Get the type of value as a string.
     * @param value the value to get the type as string
     * @return {string} the type of the value.
     */
    static getType(value: any): string;
    /**
     * Return default value depending on type.
     * @param {string} type
     * @return {any}
     */
    static getDefaultValue(type: string): any;
    /**
     * Test deep equality between two object with the possibility to omit recursively
     * some properties.
     * @param obj1: the first object to compare.
     * @param obj2: the second object to compare.
     * @param {string} omits: one or many names of properties to omit recursively.
     * @return {boolean}: whether the two object are identical or not.
     */
    static isEqualWithout(obj1: any, obj2: any, ...omits: string[]): boolean;
}
