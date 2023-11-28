{

//함수의 void 경우 리턴이 없어야 합니다.
    function aVoid(callback: () => void): void {
        return undefined
    }

    const bVoid = aVoid(() => {
    })


//인터페이스 메소드의 void 경우 반환값을 사용하지 않겠다는 의미로 리턴이 있을 수 있음
    interface HumanVoid {
        talk: () => void;
    }

    const human: HumanVoid = {
        talk() {
            return 'abc'
        }
    }


//콜백 매개변수를 void로 설정해줘도 target.push 에러가 발생하지 않음
//실제 리턴값이 뭐든 상관하지 않겠다는 의미
    declare function forEach(arr: number[], callback: (el: number) => void): void

    let target: number[] = []
    forEach([1, 2, 3], el => {
        target.push(el)
    })
    forEach([1, 2, 3], el => target.push(el))

}