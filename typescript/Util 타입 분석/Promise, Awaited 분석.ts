{
    const p1 = Promise.resolve(1)
        .then((a) => a + 1)
        .then((a) => a + 1)
        .then((a) => a.toString())

    const p2 = Promise.resolve(2)
    const p3 = new Promise((res) => {
        setTimeout(res, 1000)
    })

    const promise = Promise.all([p1, p2, p3]);
    promise.then((result) => {
        console.log(result) // ['3' ,'2', undefined]
    })

}