{
function a(x:string | boolean) :number{
    return +x;
}

a('1')
a(true)

// 리턴 타입은 더 넓은 타입으로 대입이 가능하다.
type B = (x: string) => number | string
const b: B = a

b('1')
}
