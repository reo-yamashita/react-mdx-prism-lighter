import { LineProps } from "@/types/index";

let highlightFlag = false;
export const LinesToHighlight = (lineArray: LineProps[]) => {
  let flag = false;

  lineArray.forEach((line) => {
    const content = line.content;
    if (/\/\/highlight(\s*)$/.test(content)) {
      flag = true;
    } else if (/\/\/highlight-start(\s*)$/.test(content)) {
      highlightFlag = true;
    } else if (highlightFlag && /\/\/highlight-end(\s*)$/.test(content)) {
      flag = true;
      highlightFlag = false;
    }
    line.content = content.replace(
      /\/\/(highlight(\s*)$|highlight-(start|end)(\s*)$)/g,
      ""
    );
  });
  return highlightFlag || flag;
};
