interface LineProps {
  types: string[]
  content: string
  empty?: boolean
}
declare function LinesNumberToHighlight(light: string, index: number): boolean
/**
 * Returns a stateful value, and a function to update it.
 *
 * @version 0.1.0
 * @see
 */

declare function LinesToHighlight(lineArray: LineProps[]): boolean

export { LineProps, LinesNumberToHighlight, LinesToHighlight };
