export default 0

interface zQuery {
    text(param?: string
        | number
        | ((this: this, index: number) => string | number | boolean)
    ): this

    html(param: string
        | Document
        | DocumentFragment
    ): void
}

const $tag: zQuery = $(['p', 't']) as unknown as zQuery

$tag.text('123')
$tag.text(123)
$tag.text(function (this, index) {
    console.log(this, index)
    return true
})
$tag.text().html(document)
