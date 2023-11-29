{
    type A = string | null | undefined | boolean | number | { a: 'abc' }

    type N<T> = T & {};

    type B = N<A>
}