declare module "react-mdx-prism-lighter" {
  function LinesNumberToHighlight(light: string, index: number): boolean;
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 0.1.0
   * @see
   */

  function LinesToHighlight(lineArray: LineProps[]): boolean;
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 0.1.0
   * @see
   */

  export { LinesNumberToHighlight, LinesToHighlight };
}
