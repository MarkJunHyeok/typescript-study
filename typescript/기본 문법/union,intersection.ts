{// 간단한건 타입을 사용하고 복잡한 객체지향 시 인터페이스 사용
    type A = { a: string }
    const aHello: A = {a: 'hello'}

    interface B {
        a: string
    }

    const bHello: B = {a: 'hello'}


//union & intersection
    function addUnion(x: string | number, y: string | number): string | number {
        return x + y
    }

// &는 둘 객체 속성이 둘다 만족하면 같은 타입으로 인식한다.
    type And = { hello: 'world' } & { zero: 'cho' }
    const andInterSection: And = {hello: 'world', zero: 'cho'}

// |는 또는 이기 때문에 둘 객체 속성이 하나라도 만족하면 같은 타입으로 인식한다.
    type Or = { hello: 'world' } | { zero: 'cho' }
    const orUnion: Or = {hello: 'world', zero: 'cho'}

// And는 모든 속성이 다 있어야하고 OR은 하나만 있으면 된다.


}