var royfun = function () {

  function chunk(array, size = 1) {
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

  function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  function concat(array, ...values) {
    let res = slice(array)
    values.forEach(it => {
      if (isArray(it)) {
        res.push(...it)
      } else {
        res.push(it)
      }
    })
    return res
  }

  function drop(array, n = 1) {
    let res = []
    for (let i = n; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  }

  return {
    compact,
    chunk,
    fill,
    drop,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    lastIndexOf,
    initial,
    join,
    last,
    pull,
    reverse,
    every,
    some,
    countBy,
    groupBy,
    keyBy,
    forEach,
    map,
    filter,
    reduce,
    reduceRight,
    size,
    sortBy,
    sample,
    isUndefined,
    isNull,
    isNil,
    max,
    min,
    maxBy,
    minBy,
    round,
    sumBy,
    flagMap,
    flatMapDepth,
    get,
    has,
    mapKeys,
    mapValues


  }

} ()
