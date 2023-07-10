// 소수 판별 함수
function findPrime(n){
  if (n === 0 || n === 1){
      return false
  } else {
      for (let i = 2; i<= Math.sqrt(n); i++){
          if (n% i == 0){
              return false
          }
      }
      return true    
  }
  
}

function solution(n, k) {
  // k진수로 변환하기 
  const k_num = n.toString(k)
  const tmp =  k_num.split("0").filter((el)=>{
      if (el){
          return el
      }
  })
  const k_arr = tmp.map((el)=>{
      return parseInt(el)
  })

  let answer = 0;
  console.log(k_arr)
  k_arr.map((el)=>{
      if (findPrime(el)){
          answer += 1
      }
  })
  
  
  return answer;
}

