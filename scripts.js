const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  const random = arr => {
      return Math.floor(Math.random()*arr.length)
  }
let making = () =>{
    let store = []
    for (const i in collectiveWisdom){
        switch (i) {
            case 'signInfo':
             store.push(`The sign is : ${collectiveWisdom[i][random(collectiveWisdom[i])]}`)
             break;
            case 'fortuneOutput' :
             store.push(`You are having ${collectiveWisdom[i][random(collectiveWisdom[i])]}`)
             break;
            case 'advice' :
             store.push(`My advice is : ${collectiveWisdom[i][random(collectiveWisdom[i])]}`)
             break;
            default:
            'GIVE MORE INFO'
            break;
     }
    }
    return store
 }
const result = () =>{
    return making().join('\n')
}
console.log(result())


    