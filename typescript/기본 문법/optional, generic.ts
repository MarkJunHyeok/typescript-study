{
//옵셔널 예제
function abc(a: number, b?: number, c?: number) {}

abc(1)
abc(1,2)
abc(1,2,3)

let obj: {a:string, b?: string} = {a: 'hello', b: 'world'}
obj = {a: 'hello'}

//제네릭 예제

function add<T extends number | string>(x: T, y: T) : T {
    return x + y;
}

add(1, 2)
add('1', '2')

//타입이 서로 다르니 안됨
add('1', 2)
// 호환되지 않는 타입이니 안됨
add(true, false)


function add2<T extends { name: 'a' }>(x: T):T {
    return x
}

add2({name: 'a'})


function add3<T extends (num: number) => string>(x: T):T {
    return x
}

add3((num) => { return 'hi'})

}
