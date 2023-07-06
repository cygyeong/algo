function solution(str1, str2) {
    let upStr1 = str1.toUpperCase().split('')
    let upStr2 = str2.toUpperCase().split('')
    let setStr1 = []
    let setStr2 = []
    
    for (let i = 0; i < upStr1.length; i++){
        if (i+1 < upStr1.length){
            if (/^[a-z|A-Z]+$/.test(upStr1[i]+upStr1[i+1])){
                setStr1.push(upStr1[i]+upStr1[i+1])
            }
        }
    }
    for (let i = 0; i < upStr2.length; i++){
        if (i+1 < upStr2.length){
            if (/^[a-z|A-Z]+$/.test(upStr2[i]+upStr2[i+1])){
                setStr2.push(upStr2[i]+upStr2[i+1])
            }
        }
    }
    // let inter = setStr1.filter(x => setStr2.includes(x))
    let temp_inter = []
    let inter = []
    if (setStr1 > setStr2) {
        temp_inter = [...setStr1]
        let inter_x = setStr2.map((el)=>{
            if (temp_inter.includes(el)){
                temp_inter.splice(temp_inter.indexOf(el),1)
                if (el !== undefined){
                    return el
                    
                }            } 
        })
        inter.push(...inter_x)
        
    } else {
        temp_inter = [...setStr2]
         let inter_x = setStr1.map((el)=>{
            if (temp_inter.includes(el)){
                temp_inter.splice(temp_inter.indexOf(el),1)
                if (el !== undefined){
                    return el
                    
                }
            } 
        })
        inter.push(...inter_x)
    }
    
    
    
    
    let temp = []
    let union = []

    if (setStr1.length < setStr2.length) {
        temp = [...setStr1]
        union = [...setStr2]
    } else {
        temp = [...setStr2]
        union = [...setStr1]
    }

    let difference = inter.map((x) => {
        if (temp.includes(x)){
            temp.splice(temp.indexOf(x),1)
        }
    });

    union.push(...temp)
    let resInter = inter.filter((el)=>{
        if (el!==undefined){
             return el
        } 
    })
    let answer = 0;
    if (union.length === 0){
        answer = 1
    } else{
        answer = resInter.length / union.length
    }
    
    return parseInt(answer*65536);
}

console.log(solution("abab", "baba"))