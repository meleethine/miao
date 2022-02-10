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
  
  difference: function (array,...values) {
    let arr = [], res = []
    for (let i = 0; i < values.length; i++){
      // 勿忘...
      arr.push(...values[i])
    }
    array.forEach(element => {
      if (!arr.includes(element))
        res.push(element)
    });
    return res
  },
  // difference: function (array, ...values) {
  //   let obj = {}
  //   let res = []
  //   for (let i = 0; i < values.length; i++){
  //     for (let j = 0; j < values[i].length; j++){
  //       // 此处设的值没关紧要,只为证明在obj中
  //       obj[values[i][j]]=1
  //     }
  //   }
  //   for (let i = 0; i < array.length; i++){
  //     if (array[i] in obj) continue
  //     res.push(array[i])
  //   }
  //   return res
  // }
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
  // flattenDeep: function (ary) {
  //   return flattenDepth(ary,Infinity)
  // },
  // 展平n层 flattenDepth调用flatten
  flattenDepth: function (ary,n=1) {
    for (let i = 0; i < n; i++){
      ary=flatten(ary)
    }
    return ary 
  },
  // 展开n层,第二参数默认1则只展开一层
  // flattenDepth: function (ary,n=1) {
  //   if (n == 0) return ary
  //   return ary.reduce((res, item) => {
  //     if (Array.isArray(item)) {
  //       return res.concat(flattenDepth(item,n-1))
  //     }
  //     return res.concat(item)
  //   },[])
  // }, 
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
    for (let i = fromIndex; i < array.length; i++){
      if(array[i]==value) return i
    }
    return -1
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
  join: function (array, separator) {
    let res = ''
    for (let el of array) {
      if (el = array[array.length - 1])
        res += el
      else {
        // 不加''若el和separator是数字会直接求和
        res+=''+el+separator
      }
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
    return -1
  },
  pull: function (array,...values) {
    for (let i = 0; i < array.length; i++){
      if (values.includes(array[i])) {
        array.splice(i, 1)
        i--
      } else
        continue
    }
    return array
  },
  pull: function (array,...values) {
    let obj = {}
    let res=[]
    for (let i = 0; i < values.length; i++){
      obj[values[i]]=1
    }
    array.forEach(element => {
      if (!(element in obj)) {
        res.push(element)
      }
    });
    return res
  },
  pull: function (array,...values) {
    let obj = {}
    for (let i = 0; i < values.length; i++){
      obj[values[i]]=1
    }
    // 简写 加{}则勿忘return,{}是作用域
    // let res = array.filter(el => !(el in obj))
    let res = array.filter(el => {
      return !(el in obj)
    })
    // array写到括号中,第一位是this,非lodash环境会报filter未定义的错
    // let res = filter(array,el => {
    //   return !(el in obj)
    // })
    return res
  },
  pullAll: function (array, values) {
    return pull(array, ...values)
  },
  // 反转数组
  reverse: function (array) {
    let res = []
    while (array[0]) {
      res.push(array.pop())    
    }
    return res
  },
  union: function (...array) {
    let res = []
    for (let arr of array) {
      res=res.concat(arr)
    }
    for (let i = 0; i < res.length; i++){
      //  从后把重复的元素剪掉
      if (res.lastIndexOf(res[i]) !== -1) {
        res.splice(res.lastIndexOf(res[i]),1)
      }
      return res
    }
  },
  union: function (...array) {
    let res = []
    for (let arr of array) {
      // concat操作后返回的新数组,需要接,否则为空
      res = res.concat(arr)
      // 或可用push,push原数组操作,不接
      // res.push(...arr)
    }
    let set = new Set(res)
    return [...set]
    // 或 return Array.from(set)
    // 解法2 直接uniq,但非lodash环境会报错
    // return uniq(res)
  },
  union: function (...array) {
    let arr = []
    let a = arr.concat(...array)
    let res = []
    a.forEach(element => {
      if (res.indexOf(element) == -1) {
        res.push(element)
      }
    });
    return res
  },
  sortedIndex: function (array,value) {
    let i = 0
    while (array[i++] < value && i < array.length) {
    }
    return i
  },
  sortedIndex: function (array,value) {
    // i声明不可放for中,会报错undefind
    let i = 0
    for (; array[i] < value && i < array.length;i++) {
    }
    return i
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
  
  size:function (collection) {
    let cnt = 0
    for (let key in collection) {
      cnt++
    }
    return cnt
  },
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
    return Object.prototype.toString.call(value)=='[object Boolean]'
  },
  isObject:function (value) {
    return Object.prototype.toString.call(value)=='[object Object]'
  },
  isNumber:function (value) {
    return typeof (value) == 'number'
  },
  isUndefined:function (value) {
    return typeof (value) == 'undefined'
  },
  isArguments:function(val) {
    return Object.prototype.toString.call(val)=='[objcet String]' 
  },
  isArray: function (val) {
    return Object.prototype.toString.call(val)=='[object Array]'
  },
  isNull: function (val) {
    return Object.prototype.toString.call(val)=='[object Null]'
  },
  isDate: function (val) {
    return Object.prototype.toString.call(val)=='[object Date]'
  },
  isElement: function (val) {
    return Object.prototype.toString.call(val)=='[object Element]'
  },
  match: function (val) {
    
  },
  isMatch:function(obj = { a: 1, b: 2, c: { x: 1, y: 2 } }, src = { b: 2, c: { y: 2 } }) {
    for (key in src) {
      if (src[key] && typeof src[key] == 'object') {
        if (!isMatch(obj[key], src[key]))
          return false
      } else {
        if (src[key] !== obj[key]) {
          return false
        }
      }
    }
    return true
  },
  matchesProperty:function(pair) {
    var key = pair[0]
    var val = pair[1]
    
  },
  // 返回的函数调用原函数,最多给原函数传n个参数.其他参数不要了
  ary: function (func, n = func.length) {
    return function (...arg) {
      return func(...arg.slice(0, n))
      // return func.call(this,...args.slice(0,n))
    }
  },
  
  unary: function (func) {
    return function (...arg) {
      // 返回一个元素,slice(0,1)默认第一个元素
      return func(...arg.slice(0, 1))
      // return func.call(this,...args.slice(0,1))
    }
  },
  // unary: function (func) {
  //  return this.ary(func,1)
  // },
  negate: function (f) {
    return function (...args) {
      return !f(...args)
    }
  },
  spread: function () {
    
  },
  before: function (n, func) {
    var c=0,res
    return function (...args) {
      if (c < n) {
        res= func(...args)
        c++
      }
      return res
    }
  },
  memoize: function (func) {
    var map=new Map()
    return function (val) {
      if (map.has(val)) {
      return map.get(val)
    }
      var res = func(val)
      map.set(val,res)
      return res
    }
  },
  toPath: function (path) {
    if (typeof path == 'string') {
      return path.split('[')
        .flatMap(it => it.split(']'))
        .flatMap(it => it.split('.'))
          .filter(it => it)
    }
    return path
  },
  // func没有挂其原型上,故需传入,若在原型则不必写
  // bind: function (func, thisArg, ...fixedArgs) {
  //   // thisArg对应的func 函数不需要绑定,因为没使用,故不用绑this
  //   // func是本函数,函数不需要绑定this,thisArg是绑成null
  //   return function (...args) {
  //     var bindedArgs = fixedArgs.slice()
  //     for (var i=0,j = 0; j < bindedArgs.length; j++){
  //       if (bindedArgs[j] == _) {
  //         bindedArgs[j]=args[i]
  //       }
  //     }
  //     // 返回截取出来的项，从写下的索引位置到结束位置
  //     bindedArgs.push(args.slice(i))
  //     // return func.call(thisArg,...bindedArgs)
  //     return func.apply(thisArg,bindedArgs)
  //   }
  // },
  bind: function (func, thisArg, ...fixedArgs) {
    return function(...args){
      let bindedArgs = fixedArgs.slice()
      for (let i = 0, j = 0; i < bindedArgs.length; j++){
        if (bindedArgs == _) {
          bindedArgs[j]=args[i++]
        }
      }
      bindedArgs.push(args.slice(i))
      return func.call(thisArg,...bindedArgs)
    }
  },
  get: function (obj, path) {
    let names = toPath(path)
    for (let name of names) {
      obj = obj[name]
      if (obj == null)
        return obj
    }
    return obj
  },
  property: function (name) {
    return function (obj) {
      return get(obj,name)
    }
  },
  curry: function (f,n=f.length) {
    return function (...args) {
      if (args.length < n) {
        return curry(f.bind(null,...args),n-args.length)
      } else {
        return f(...args)
      }
    }
  },
  match: function (target) {
    return function (obj) {
      for (let key in target) {
        if (obj[key] !== target[key]) {
          return false
        }
      }
      return true
    }
  },
  matchesProperty(path, val) {
    return function (obj) {
      // 这个路径的这个对象的值与val是否相等
      return isEqual(get(obj,path),val)
    }
  },
  iteratee: function (predicate) {
    if (typeof predicate === 'string') {
      predicate=property(predicate)
    }
    if (Array.isArray(predicate)) {
      predicate=matchesProperty(...predicate)
    }
    if (predicate && typeof predicate === 'object') {
      predicate = matches(predicate)
    }
    return predicate
  },
  transformIteratee: function (f) {
    return function (...args) {
      let last = args.pop()
      predicate = iteratee(last)
      return f(...args,predicate)
    }    
  },
  // ary和predicate是不同的两数组
  filter: function (ary, predicate) {
    predicate = iteratee(predicate)
    let res = []
    for (let i = 0; i < ary.length; i++){
      // 遍历的常规要传数组和其下标,函数不一定使用后者,但必须传
      if (predicate(ary[i], i)) {
        res.push(ary[i])
      }
    }
    return res
  },
  // 否定函数,相当于!
  negate: function (f) {
    return function (...args) {
      return !f(...args)
    }
  },
  // 将传入的参数展开
  spread: function (f) {
    return function (ary) {
      return f(...ary)
      // return f.apply(this,ary)
    }
  },
  // 将传入的参数反转
  flip: function (f) {
    return function (...args) {
      return f(...args.reverse())
    }
  },
  // 在执行n次以前返回调用参数的函数
  before: function (n, f) {
    var cnt=0,res
    return function (...args) {
      if (cnt++ < n) {
        res=f(...args)
      }
      return res
    }
  },
  // 在执行n次以后返回调用参数的函数
  after: function (n, f) {
    var cnt = 0, res
    return function (...args) {
      if (cnt > n) {
        res = f(...args)
        cnt++
      } else {
        cnt++
      }
      return res
    }
  },
  // 单个参数)记忆化存储,若之前计算过把结果映射到Map中,再相同计算不再计算,直接返回结果
  memoize: function (f) {
    return function (val) {
      let map = new Map()
      if (map.has(val))
        return map.get(val)
      let res = f(val)
      map.set(val, res)
      return res
    }
  },
  // 数组去重
  uniq: function (ary) {
    return Array.from(new Set(ary)) 
    },
}



