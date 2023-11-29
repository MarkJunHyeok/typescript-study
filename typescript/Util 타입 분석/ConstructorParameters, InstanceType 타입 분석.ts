{
    class A {
        a: string
        b: number
        c: boolean

        constructor(a: string, b: number, c: boolean) {
            this.a = a
            this.b = b
            this.c = c
        }
    }

    const c = new A('123', 123, true)

    type C<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer A) => any ? A : any
    type I<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer A ? A : any

    type c = C<typeof A>
    type i = I<typeof A>
}