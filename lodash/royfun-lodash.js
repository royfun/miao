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
    let res = []
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

  function fill(array, value, start = 0, end = array.length) {
    if (arguments.length == 2) {
      for (let i = 0; i < array.length; i++) {
        array[i] = value
      }
    } else if (arguments.length == 3) {
      for (let i = start; i < array.length; i++) {
        array[i] = value
      }
    } else {
      for (let i = start; i < end; i++) {
        array[i] = value
      }
    }
    return array
  }

  function findIndex(array, f, findIndex) {

  }






  return {
    chunk,
    compact,
    concat,
    drop,
    fill,





  }

} ()
