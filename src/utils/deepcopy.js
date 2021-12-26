export function deepCopy(obj) {
  if (typeof obj === 'object') {
    const res = obj instanceof Array ? [] : {}
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        res[key] = deepCopy(obj[key])
      } else {
        res[key] = obj[key]
      }
    }
    return res
  } else {
    const res = obj
    return res
  }
}
