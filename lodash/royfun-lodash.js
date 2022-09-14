var royfun = function () {

  function chunk (array, size = 1) {
    let result = []
    for (let i = 0; i < array.length;) {
      let group = []
      for (let j = 0; j < size; j++) {
        group.push(array[i])
        i++
        if (i == array.length) {
          break
        }
      }
      result.push(group)
    }
    return result
  }

  return {
    chunk,
  }

}
