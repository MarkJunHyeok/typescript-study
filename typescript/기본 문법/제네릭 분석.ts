{
    interface Array<T> {
        forEach(callbackFn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

        map<U>(callbackFn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

        filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

        filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    }


    [1, 2, 3].forEach((item) => {
        console.log(item)
    });
    ['1', '2', '3'].forEach((item) => {
        console.log(item)
    });
    [true, false, true].forEach((item) => {
        console.log(item)
    });


    const strings = [1, 2, 3].map((item) => item.toString());


    const filtered = [1, 2, 3, 5, 6, 7].filter((value) => value % 2);


    const predicate = (value: string | number, index: number, array: string | number[]) => typeof value === 'string'
    const stringFiltered = ['1', 2, '3', 5, '6', 7].filter<string>(predicate);
}

// foreach 구현해보기
{
    interface Arr<T> {
        forEach(callbackFn: (item: T) => void): void
    }

    const a: Arr<number> = [1, 2, 3]

    a.forEach((item) => {
        console.log(item)
        item.toFixed()
    })

    const b: Arr<string> = ['1', '2', '3']

    b.forEach((item) => {
        console.log(item)
        item.charAt(3)
    })
}

// map 구현해보기
{
    interface Arr<T> {
        map<U>(callbackFn: (v: T) => U): Arr<U>
    }

    const a: Arr<number> = [1, 2, 3]
    const b = a.map((v) => v + 'Num')
    const c = a.map((v) => v === 3)
}


// filter 구현해보기
{
    interface Arr<T> {
        filter<S extends T>(callbackFn: (v: T) => v is S) : Arr<S>;
    }

    const a: Arr<number> = [1, 2, 3]
    const c = a.filter((v): v is number => v % 2 === 0);
}