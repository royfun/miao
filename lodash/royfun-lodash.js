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
    let res = array
    values.forEach(it => {
      if (Array.isArray(it)) {
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

  function findIndex(array, f, findIndex = 0) {

  }

  function flatten(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          res.push(array[i][j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  }

  function flattenDeep(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        let temp = flattenDeep(item)
        for (let j = 0; j < temp.length; j++) {
          res.push(temp[j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  }

  function flattenDepth(array, depth = 1) {
    let res = array
    let temp = []
    while (true) {
      let hasArray = false
      for (let i of res) {
        if (Array.isArray(i)) {
          temp.push(...i)
          hasArray = true
        } else {
          temp.push(i)
        }
      }
      res = temp
      temp = []
      depth--
      if (depth == 0 || hasArray == false) break
    }
    return res
  }

  function fromPairs(pairs) {
    let res = {}
    for (let i = 0; i < pairs.length; i++) {
      res[pairs[i][0]] = pairs[i][1]
    }
    return res
  }

  function toPairs(object) {
    let res = []
    for (let i in object) {
      let temp = []
      temp.push(i)
      temp.push(object[i])
      res.push(temp)
    }
    return res
  }

  function head(array) {
    return array[0]
  }

  function indexOf(arr, val, index = 0) {
    for (let i = index; i < arr.length; i++) {
      if (arr[i] == val) {
        return i
      }
    }
    return -1
  }

  function initial(arr) {
    arr.pop()
    return arr
  }

  function pull(arr, ...val) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i]
      if (!val.includes(temp)) {
        res.push(temp)
      }
    }
    return res
  }

  function join(arr,str = ',') {
    let res = ''
    for (let item of arr) {
      res += item + `${str}`
    }
    return res.slice(0, res.length - 1)
  }

  function reverse(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      let temp = arr[right]
      arr[right] = arr[left]
      arr[left] = temp
      left++
      right--
    }
    return arr
  }

  function last(arr) {
    return arr[arr.length - 1]
  }

  function nth(arr, n = 0) {
    if (n < 0) {
      return arr[arr.length + n]
    } else {
      return arr[n]
    }
  }

  function min(array) {
    let min = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
  }

  function max(array) {
    var max = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
  }

  function sample(arr) {
    let len = arr.length
    let randomIdex = Math.floor(Math.random() * len)
    return arr[randomIdex]
  }

  function round(n) {

  }

  function zip(...arrays) {
    let res = []
    for (let i in arrays[0]) {
      let item = []
      for (let j in arrays) {
        item.push(arrays[j][i])
      }
      res.push(item)
    }
    return res
  }

  function uniq(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i])
      }
    }
    return res
  }

  function without(array, ...values) {
    let result = []
    for (let item of array) {
        if (!values.includes(item)) {
            result.push(item)
        }
    }
    return result;
  }

  function lastIndexOf(arr, val, index = arr.length - 1) {
    for (let i = index; i > 0; i--) {
      if (arr[i] == val) {
        return i
      }
    }
    return -1
  }

  function intersection(...arrays) {
    let result = []
    let comp = arrays[0]
    for (let i = 0; i < comp.length; i++) {
      let hasItem = true
      for (let j = 1; j < arrays.length; j++) {
        if (!arrays[j].includes(comp[i])) {
          hasItem = false
          break
        }
      }
      if (hasItem == true) {
        result.push(comp[i])
      }
    }
    return result
  }

  function union(...arrays) {
    let res = []
    let map = {}
    for (let array of arrays) {
      for (let it of array) {
        if (map[it] === undefined) {
          map[it] = true
          res.push[it]
        }
      }
    }
    return res
  }

  function unionBy(...args) {
    let res = []
    let map = {}
    let iteratee = args.pop()
    let arrays = args
    for (let array of arrays) {
      for (let it of array) {
        if (typeof iteratee == 'function') {
          let trans = iteratee(it)
          if (map[trans] === undefined) {
            map[trans] = true
            res.push[it]
          }
        }
        if (typeof iteratee == 'string') {
          let trans = it[iteratee]
          if (map[trans] === undefined) {
            map[trans] = true
            res.push[it]
          }
        }
      }
    }
    return res
  }












  return {
    chunk,
    compact,
    concat,
    drop,
    fill,
    findIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    toPairs,
    head,
    indexOf,
    initial,
    pull,
    join,
    reverse,
    last,
    nth,
    min,
    max,
    sample,
    round,
    zip,
    uniq,
    without,
    lastIndexOf,
    intersection,
    union,
    unionBy,







  }

}()

// compact,chunk,fill,drop,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth
// fromPairs,head,indexOf,lastIndexOf,initial,join,last,pull,reverse,every,some
// countBy,groupBy,keyBy,forEach,map,filter,reduce,reduceRight,size,sortBy,sample,
// isUndefined,isNull,isNil,max,min,maxBy,minBy,round,sumBy
// flagMap,flatMapDepth,get,has,mapKeys,mapValues
