export default 1

import axios, {AxiosError, AxiosResponse} from 'axios'


interface A{
    get<T = any, R = AxiosResponse<T>>(url: string): Promise<R>;
    post<T= any, R = AxiosResponse<T>, D = any>(url: string, data: D) : Promise<R>;
    isAxiosError <T = any, D = any>(error: any): error is AxiosError<T, D>;
    (config: Config) : void
    (url: string, config: Config) : void
}
interface Config<D = any> {
    method?: 'post' | 'get' | 'put' | 'patch' | 'delete' | 'head' | 'options';
    url?: string
    data?: D
}

interface Post {userId: number, id: number, title: string, body: string}
interface Data {userId: number, title: string, body: string}

(async() => {
    const a: A = axios;
    try {
        const res = await a.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
        const data = res.data;
        console.log(data.userId)
        console.log(data.body)
        console.log(data.id)
        console.log(data.title)

        const res2 = await a.post<Post, AxiosResponse<Post>, Data>('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
        const data2 = res2.data;
        console.log(data2.userId)
        console.log(data2.body)
        console.log(data2.id)
        console.log(data2.title)
    } catch (error) {
        if (a.isAxiosError<{message: string}>(error)) {
            console.log(error.response?.data.message)
            console.log(error.response?.status)
        }
    }
})()
