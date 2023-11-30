{// 타입 학습
    const a: string = '5';
    const b: number = 5;
    const c: boolean = true;
    const d: undefined = undefined;
    const e: null = null;
    const f: any = 123;

// function add(x: number, y: number): number { return x + y }
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

    interface Add {
        (x: number, y: number): number
    }

    const add: Add = (x, y) => x + y;


    const obj: { lat: number, lon: number } = {lat: 37.5, lon: 127.5};

    const arr: string[] = ['abc', 'def'];
    const arr2: Array<number> = [123, 456]
    const arr3: [number, number, string] = [3, 3, 'abc']

    const t: true = true;
    const five: 5 = 5;

    function add3(x: number, y: number): number
    function add3(x, y) {
        return x + y
    }

//타입 강제 변환
    let aa = 123;
    aa = 'hello' as unknown as number;

// never 타입 방지
// const array = []
    const array: string[] = []
    arr.push('hello')

}

