{
    type R<T extends keyof any, S> = {
        [Key in T]: S;
    }

    const a: R<string, number> = {a: 3, b: 5, c: 7}
}