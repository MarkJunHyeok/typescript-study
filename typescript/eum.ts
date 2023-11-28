{
    const enum EDirection {
        Up = 3,
        Down = 5,
        Left = 4,
        Right = 6
    }

//객체를 상수로 쓰려면 const 키워드 붙이기
    const ODirection = {
        Up: 3,
        Down: 5,
        Left: 4,
        Right: 6
    } as const

    let up = EDirection.Up;
    let left = EDirection.Left;

//keyOf 학습
    const obj2 = {a: '123', b: 'hello', c: 'world'} as const
    type Key = typeof obj2[keyof typeof obj2]

    type ADirection = typeof ODirection[keyof typeof ODirection]

    function run(direction: ADirection) {
        console.log(direction.valueOf())
    }

    run(ODirection.Down)
}