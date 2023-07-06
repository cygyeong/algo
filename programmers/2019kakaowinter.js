function solution(s) {
  var answer = [];
  let temp = s.slice(2,-2).split('},{')
  let s_temp = temp.map((el)=>{
     return el.split(',').map((e)=>{
          return Number(e)
      })
  })
  s_temp.sort((a,b)=>
      a.length - b.length
  )
  let res = []
  s_temp.map((el)=>{
      el.map((e)=>{
          if (res.indexOf(e) === -1) {
              res.push(e)
          }
      })
  })
  return res
  
}