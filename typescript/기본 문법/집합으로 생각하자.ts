{
    type aName = { name: string }

    type aAge = { age: number }
    type AB = aName | aAge
    type cC = aName & aAge

    const ab: AB = {name: 'zerocho'}
    const objCc = {name: 'zerocho', age: 29, married: false}
    const cc: cC = objCc
}