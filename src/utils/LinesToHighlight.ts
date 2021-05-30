import { LineProps } from "@/types/index"

let highlightFlag: boolean = false
export const LinesToHighlight = (lineArray: LineProps[]): boolean => {
  let flag = false
  lineArray.forEach((line) => {
    const content = line.content
    if (/\/\/highlight$/.test(content)) {
      flag = true
    } else if (/\/\/highlight-start$/.test(content)) {
      highlightFlag = true
    } else if (highlightFlag && /\/\/highlight-end$/.test(content)) {
      flag = true
      highlightFlag = false
    }
    line.content = content.replace(/\/\/highlight(.*)/g, "")
  })

  return highlightFlag || flag
}
