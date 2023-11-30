{
    class A {
        private a: string = '123'
        b: number = 123

        constructor(a: string, b: number = 1234) {
            this.a = a;
            this.b = b;
        }

        method() {

        }
    }
}
{
type AA = A;
const a: A = new A('123')
const b: typeof A = A


interface B {
    readonly a: string;
    b: string;
}

class C implements B {
    readonly a: string = '123';
    b: string = '123';
    private c: string = 'private';

    method() {
        console.log(this.a)
    }
}
}