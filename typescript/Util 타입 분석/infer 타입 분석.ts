{
    function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean } {
        return {x, y, z}
    }

    type P<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never
    type R<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never

    type Params = P<typeof zip>
    type x = Params[0]
    type y = Params[1]
    type z = Params[2]

    type Returns = R<typeof zip>
    type returnsX = Returns['x']
    type returnsY = Returns['y']
    type returnsZ = Returns['z']
}



