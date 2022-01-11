var meleethine = function () {
  // chunk数组按size长度分小数组
  function chunk(ary, size) {
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
  }
  // compact清除非真数组元素
  /**
   * 
   * @param {*} ary 
   * @returns 
   */
  function compact(ary) {
    let res = []
    for (let i = 0; i < ary.length; i++){
      if(ary[i]) res.push(a[i])
    }
    return res
  }
  // 删除左边元素（从头删）
  // 先弹后塞
  /**
   * 
   * @param {*} ary 
   * @param {删除的位数} n 
   * @returns 
   */
  function drop(ary, n = 1) {
    let res=[]
    let p = ary.length - n
    while (p--) {
     res.unshift(ary.pop())
    }  
    return res
  }
  // 直接删
  // function drop(ary, n = 1) {
  //   let p = ary.length - n
  //   for (let i = 0; i < n; i++){
  //     ary.shift(ary[i])
  //   }
  //   return ary
  // }
  // 删除数组右边的值，即从尾部删
  function dropRight(ary, n = 1) {
    while (n>0) {
      ary.pop()
      n--
    }
    return ary
  }
  /**
   * 
   * @param {*} ary 
   * @param {*} values 
   */
  function difference(ary, values) {
    let res = []
    let s = values.length
    let p = values.pop()
    for (let i = 0; i < ary.length&&s>0; i++,s--){
      if(ary[i]!==p) res.push(ary[i])
    }
  }
  /**
   * 
   * @param {*} ary 
   * @param {添的值} val 
   * @param {起始位} start 
   * @param {终止位} end 
   * @returns 
   */
  function fill(ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++){
      ary[i]=val
    }
    return ary
  }

}