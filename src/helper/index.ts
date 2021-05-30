export const range = (start: number, end: number): number[] => {
  let list: number[] = []
  for (let i = start; i <= end; i++) {
    list.push(i)
  }
  return list
}
