export const defaultColors = {
  gas: '#98c16d',
  water: '#5b9ad5'
}
// 1表示废水 2表示废气
export const pollutionType = {
  water: 1,
  gas: 2
}
export const pollutionTypeStroke = {
  [pollutionType.water]: '#5b9ad5',
  [pollutionType.gas]: '#98c16d'
}

export const pollutionTypeText = {
  [pollutionType.water]: '废水',
  [pollutionType.gas]: '废气'
}

const tmpArr = []
Object.values(pollutionType).forEach(value => {
  tmpArr.push({
    text: pollutionTypeText[value],
    color: pollutionTypeStroke[value]
  })
})

export const discribeColor = tmpArr
