function solution(id_list, report, k) {
  let user_list = {}
  let rep_cnt = {}
  
  id_list.map((user)=>  user_list[user] = [])
  id_list.map((user)=> rep_cnt[user] = 0)
  // 중복
  report.map((rep)=>{
      let temp = rep.split(" ")
      if (user_list[temp[0]].indexOf(temp[1]) === -1){
          user_list[temp[0]].push(temp[1])
          rep_cnt[temp[1]] += 1
      }
      })
  let report_user = [];
  id_list.map((user)=>{
      if (rep_cnt[user]>= k){
          report_user.push(user)
      }
  })
  let answer =[]
  console.log(user_list)
  id_list.map((user)=>{
      let cnt = 0
      user_list[user].map((el)=>{
          if (report_user.indexOf(el) !== -1){
              cnt += 1
          }
      })
      answer.push(cnt)
  })
  return answer;
}