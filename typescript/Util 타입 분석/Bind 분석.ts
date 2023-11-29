{
    function a(this: Window | typeof obj) {
        console.log(this.name)
    }

    const obj = {name: 'zerocho'}
    const b = a.bind(obj);
    b() // 'zerocho'


    type T = ThisParameterType<typeof a>
    type OT = OmitThisParameter<typeof a>


    const a: T = () => {
        return
    }
    const b: OT = () => {
        return
    }


    function add(a: number, b: number, c: number) {
        return a + b + c
    }

    const add1 = add.bind(null, 1, 2);
    add1(4)
}