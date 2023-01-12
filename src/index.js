module.exports = function toReadable (number) {
  if (number===0) {
    return 'zero'
  }
  let result=[];
  function one(number) {
    switch (number) {
      case 1: result.push('one')
      break
      case 2: result.push('two')
      break
      case 3: result.push('three')
      break
      case 4: result.push('four')
      break
      case 5: result.push('five')
      break
      case 6: result.push('six')
      break
      case 7: result.push('seven')
      break
      case 8: result.push('eight')
      break
      case 9: result.push('nine')
      break
      case 10: result.push('ten')
      break
      case 11: result.push('eleven')
      break
      case 12: result.push('twelve')
      break
      case 13: result.push('thirteen')
      break
      case 14: result.push('fourteen')
      break
      case 15: result.push('fifteen')
      break
      case 16: result.push('sixteen')
      break
      case 17: result.push('seventeen')
      break
      case 18: result.push('eighteen')
      break
      case 19: result.push('nineteen')
      break
    }
  }

  function two(number) {
    switch(true){
      case String(number)[0]==2 : result.push('twenty ') 
      break
      case String(number)[0]==3 : result.push('thirty ') 
      break
      case String(number)[0]==4 : result.push('forty ') 
      break
      case String(number)[0]==5 : result.push('fifty ') 
      break
      case String(number)[0]==6 : result.push('sixty ') 
      break
      case String(number)[0]==7 : result.push('seventy ') 
      break
      case String(number)[0]==8 : result.push('eighty ') 
      break
      case String(number)[0]==9 : result.push('ninety ') 
      break
    }
  }

  function three(number) {
    switch(true){
      case String(number)[0]==1 : result.push('one hundred ')
      break
      case String(number)[0]==2 : result.push('two hundred ') 
      break
      case String(number)[0]==3 : result.push('three hundred ') 
      break
      case String(number)[0]==4 : result.push('four hundred ') 
      break
      case String(number)[0]==5 : result.push('five hundred ') 
      break
      case String(number)[0]==6 : result.push('six hundred ') 
      break
      case String(number)[0]==7 : result.push('seven hundred ') 
      break
      case String(number)[0]==8 : result.push('eight hundred ') 
      break
      case String(number)[0]==9 : result.push('nine hundred ') 
      break
    }
  }

  if(number<20){
    one(number)
    return result.join()
  }

  if(number>=20 && number<100){
    two(number)
    one(+String(number)[1])
    return result.join('').trimEnd()
  }

  if(number>100 && +String(number).slice(1, 3)<20){
    three(number)
    one(+(String(number).slice(1,3)))
    return result.join('').trimEnd()
  }


  if (number>=100) {
    three(number)
    two(+String(number)[1])
    one(+String(number)[2])
    return result.join('').trimEnd()
  }
  
}
