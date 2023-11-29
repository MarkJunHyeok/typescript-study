export default 0

const $p = $("p");

// removeClass(
//     className_function?:
// | string | string[]
// | ((this: TElement, index: number, className: string) => string),
// ): this;

$p
    .removeClass(["myClass noClass", "hello"])
    .removeClass((index, className) => {
        return index + className
    })
    .addClass("yourClass");

// text(
//     text_function:
// | string
// | number
// | boolean
// | ((this: TElement, index: number, text: string) => string | number | boolean),
// ): this;

$(["p", "t"])
    .text("hello")
    .text(5)
    .text(true)
    .text((index, text) => {
        return index + text
    })

// addClass(
//     className_function:
// | JQuery.TypeOrArray<string>
// | ((this: TElement, index: number, currentClassName: string) => string),
// ): this;

const tag = $("ul li")
    .addClass('hello')
    .addClass(function (index) {
        return "item-" + index
    })

// html(
//     htmlString_function:
// | JQuery.htmlString
// | JQuery.Node
// | ((this: TElement, index: number, oldhtml: JQuery.htmlString) => JQuery.htmlString | JQuery.Node),
// ): this;

$(tag)
    .html(function (i: number) {
        console.log(this)
        return $(this).data('name') + '입니다'
    })
    .html(document.createElement('div'))
    .html(document.createDocumentFragment)
    .html(document)
