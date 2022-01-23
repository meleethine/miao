var meleethine = {
  // chunk数组按size长度分小数组
  chunk:function (ary, size) {
    if (size > ary.length) {
     return ary
    }
    let res = []
    let len = ary.length
    for (let i = 0; i < len; i += size){
      // 二维数组[[]],此处tmp是内框
      let tmp = []
      let end = (i + size) >= len ? len : i + size
      for (let j = i; j < end; j++){
        tmp.push(ary[j]) 
      }
      res.push(tmp)
    }
    return res
  },
  // compact清除非真数组元素
  /**
   * 
   * @param {*} ary 
   * @returns 
   */
   compact:function (ary) {
    let res = []
    for (let i = 0; i < ary.length; i++){
      if(ary[i]) res.push(ary[i])
    }
    return res
  },
  // 删除左边元素（从头删）
  // 先弹后塞
  /**
   * 
   * @param {*} ary 
   * @param {删除的位数} n 
   * @returns 
   */
  //  slice(1)返回除第一个元素的数组
   drop:function (ary, n = 1) {
    return ary.slice(n)
  },
  // 直接删
  drop:function (ary, n = 1) {
    let p = ary.length - n
    for (let i = 0; i < n; i++){
      ary.shift(ary[i])
    }
    return ary
  },
  // 删除数组右边的值，即从尾部删
  dropRight:function (ary, n = 1) {
    while (n>0) {
      ary.pop()
      n--
    }
    return ary
  },
  /**
   * 
   * @param {*} ary 
   * @param {*} values 
   */
   difference:function (ary, values) {
    let res = []
    let s = values.length
    let p = values.pop()
    for (let i = 0; i < ary.length&&s>0; i++,s--){
      if(ary[i]!==p) res.push(ary[i])
    }
  },
  /**
   * 
   * @param {*} ary 
   * @param {添的值} val 
   * @param {起始位} start 
   * @param {终止位} end 
   * @returns 
   */
   fill:function (ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++){
      ary[i]=val
    }
    return ary
  },
  flatten: function (ary) {
    return ary.reduce((res, item) => {
      if (Array.isArray(item))
        res.push(...item)
      else 
        res.push(item)
      return res
    },[])
  },
  // 若外层有[],concat会展开数组(一层)项再合并
  // flatten: function (ary) {
  //   return ary.reduce((res, item) => {
  //     return res.concat(item)
  //   },[])
  // },
  // flatten: function (ary) {
  //   return [].concat(...ary)
  // },
  // apply调用,替换... 后[](即this)同前
  // flatten: function (ary) {
  //   return [].concat.apply([],ary)
  // },
  // flatten: function (ary) {
  //   return flattenDepth(ary)
  // },
  // 深层展开,展开到底
  flattenDeep: function (ary) {
    let res = []
    for (let i = 0; i < ary.length; i++){
      let item = ary[i]
      if (Array.isArray(item)) {
        res.push(...flattenDeep(item))
      } else {
      res.push(item)      
      }
    }
    return res
  },
  flattenDeep: function (ary) {
    return flattenDepth(ary,Infinity)
  },
  // 展平n层 flattenDepth调用flatten
  // flattenDepth: function (ary,n=1) {
  //   for (let i = 0; i < n; i++){
  //     ary=flatten(ary)
  //   }
  //   return ary 
  // },
  // 展开n层,第二参数默认1则只展开一层
  flattenDepth: function (ary,n=1) {
    if (n == 0) return ary
    return ary.reduce((res, item) => {
      if (Array.isArray(item)) {
        return res.concat(flattenDepth(item,n-1))
      }
      return res.concat(item)
    },[])
  }, 
  // 将数组的两两元素进行映射
  frompairs: function (array) {
    let obj={}
    for (let i = 0; i < array.length; i++){
      obj[array[i][0]]=array[i][1]
    }
    return obj
  },
  frompairs: function (array) {
    let obj = {}
    array.forEach(element => {
      obj[element[0]]=element[1]
    });
    return obj
  },
  head: function (array) {
    return array.shift()
  },
  // 查找数组下标
  indexOf: function (array, value, fromIndex=0) {
    for (let i = 0; i < array.length; i++){
      if(array[i]==value) return i
    }
  },
  // 删除最后一元素返回数组
  initial:function (array) {
    array.pop()
    return array
  },
  initial:function (array) {
    array.splice(array.length-1) 
    return array  
  },
  // 合并数组返回字符串
  join: function (array, separator = ',') {
    let res=""
    for (let i = 0; i < array.length; i++) {
      res += array[i] + separator
      if(i==array.length-1) array[i]=array[i]
    }
    return res
  },
  // 返回最后一元素
  last: function (array) {
    return array[array.length-1]
  },
  nth: function (array, n = 0) {
    if (n >= 0) return array[n]
    else return array[array.length+n]
  },
  // 从最后往前寻找下标
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (let i = array.length-1; i >=0; i--){
      if(array[i]==value) return i
    }
  },
  // 反转数组
  reverse: function (array) {
    let res = []
    while (array[0]) {
      res.push(array.pop())    
    }
    return res
  },
  // 不带重复元素的数组
  uniq: function (array) {
    let res=[]
    let map = new Map()
    for (let i = 0; i < array.length; i++){
      if (map.has(array[i])) continue
      else map.set(array[i], 1)
      res.push(array[i])
    }
    return res
  },
  // 若元素和其它元素重复，去掉这两个元素
  without: function (array, ...values) {
    let res = []
    for (let item of array) {
      if(!values.includes(item)) res.push(item)
    }
    return res
  },
  // without: function (array, ...values) {
  //   let res = []
  //   for (let i = 0; i < array.length;i++) {
  //     if(!values.includes(array[i])) res.push(array[i])
  //   }
  //   return res
  // },
 
  zip: function (arrays) {
    let n = arguments.length
    let m = arguments[0].length
    let result = Array(m)
    for (let i = 0; i < m; i++) {
        let inner = []
        for (let j = 0; j < n; j++) {
            inner[j] = arguments[j][i]
        }
        result[i] = inner
    }
    return result
  },
  // zip: function (...array) {
  //   let res=[]
  //   for (let i = 0; i < array[0].length; i++){
  //     let wrapper = []
  //     for (let j = 0; j < array.length; j++){
  //       wrapper.push(arguments[j][i])
  //     }
  //     res.push(wrapper)
  //   }
  //   return res
  // },
  range: function (start = 0, end, step = 1) {
    let res=[],a=(end-start)|0,b=step|0
    if (step === 0) {
     let arr=new Array(a)
      return arr.fill(start)
    }
    let n = a / b
    while (n--) {
      res.push(start)
      start+=step
    }
    return res
  },
  max: function (array) {
    if(!array[0]) return undefined
    let max = 0
    for (let item of array) {
      if(item>max) max=item
    }
    return max
  },

  // 累加
  sum: function (array) {
    let res=0
    for (let item of array) {
      res += item
    }
    return res
  },
  sum: function (array) {
   let res = array.reduce((total,item) => {
    return total+=item
   }, 0)
    return res
  },
  sum: function (array) {
    return array.reduce((total,array)=>total+=array,0)
  },
  concat: function(array) {
    let res = [];
    for (let key in arguments) { // 隐藏的参数都存储在arguments类数组对象中
        if (Array.isArray(arguments[key])) {
            res.push(...arguments[key])
        } else {
            res.push(arguments[key])
        }
    }
    return res;
},
  // concat: function(array, values){
  //   return array.reduce((array, values)=> {
  //     if (Array.isArray(values)) array.push(...values)
  //     else array.push(values)
  //     return array
  //   },[])
  // },
  // concat: function(array, values){
  //     if (Array.isArray(values))
  //     array.push(...values)
  //     else array.push(values)
  //     return array
  // },
  repeat: function (string = '', n = 1) {
    let res=''
    if (n == 0) return res
    while (n--) {
      res+=string
    }
    return res
  },
  toArray: function (value) {
    let res = []
    for (let key in value) {
      res.push(value[key])
    }
    return res
  },
  isString: function (value) {
    return typeof (value) == 'string'
  },
  isBoolean:function (value) {
    return typeof (value) == 'boolean'
  },
  isObject:function (value) {
    return typeof (value) == 'object'
  },
  isNumber:function (value) {
    return typeof (value) == 'number'
  },
  isUndefined:function (value) {
    return typeof (value) == 'undefined'
  },
}



