import $ from 'jquery'
import '../css/1.css'
import '../css/1.less'

$(function () {
    $('li:odd').css('backgroundColor', 'white');
    $('li:even').css('backgroundColor', 'blue');
})
class Person {
    static info = 'aaa'
}

console.log(Person.info)