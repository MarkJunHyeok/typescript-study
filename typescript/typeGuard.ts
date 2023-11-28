{
// typeof 로 타입 추론을 하여 해당 타입의 메서드를 사용할 수 있다.
    function numOrStr(a: number | string) {
        if (typeof a === 'number') {
            a.toFixed(1)
        } else {
            a.indexOf("3")
        }
    }

// Array.isArray 를 사용하여 배열 타입을 추론 가능
    function numOrArray(a: number | number[]) {
        if (Array.isArray(a)) {
            a.push(1)
        } else {
            a.toFixed(3)
        }
    }


// instanceof 를 사용하여 클래스 타입을 추론 가능

    class A {
        aaa() {
        }
    }

    class B {
        bbb() {
        }
    }

    function aOrB(param: A | B) {
        if (param instanceof A) {
            param.aaa()
        } else {
            param.bbb()
        }
    }

    aOrB(new A())
    aOrB(new B())


    type D = { type: 'd', ddd: string }
    type E = { type: 'e', eee: string }
    type F = { type: 'f', fff: string }

// 값으로 타입 체크 가능
    function typeCheck(a: D | E | F) {
        if (a.type === 'd') {
            a.ddd
        } else if (a.type === 'e') {
            a.eee
        } else {
            a.fff
        }
    }

// 속성으로 타입 체크 가능
    function typeCheckIn(a: D | E | F) {
        if ('ddd' in a) {
            a.ddd
        } else if ('eee' in a) {
            a.eee
        } else {
            a.fff
        }
    }

// 타입을 구분해주는 커스텀 함수 정의

    interface Cat {
        meow: number
    }

    interface Dog {
        bow: number
    }

    function catOrDog(a: Cat | Dog): a is Dog {
        return !(a as Cat).meow;

    }

    const cat: Cat | Dog = {meow: 3}

    if (catOrDog(cat)) {
        console.log(cat.meow)
    }
    if ('meow' in cat) {
        console.log(cat.meow)
    }
}