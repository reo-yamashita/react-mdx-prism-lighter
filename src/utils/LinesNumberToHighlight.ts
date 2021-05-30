import { range } from "../helper/index"

export const LinesNumberToHighlight = (
  light: string,
  index: number
): boolean => {
  const Try = /{([\d\s,-]+)}/
  if (Try.test(light)) {
    const lineNumbers = Try.exec(light)![1]
    const result = lineNumbers.split(/,/)
    let allselectedNum: number[] = []

    result.forEach((num) => {
      if (/-/.test(num)) {
        const PairNum = num.split("-").map(Number)
        const NumResultLong = range(PairNum[0], PairNum[1])
        allselectedNum.push(...NumResultLong)
      } else {
        const AloneNum = Number(num)
        allselectedNum.push(AloneNum)
      }
    })

    const finalnums = [...new Set(allselectedNum)]
    return finalnums.includes(index + 1)
  } else return false
}
