var removeClass = function(element, classname) {
    element.classList.remove(classname)
}
var addClass = function(element, classname) {
    element.classList.add(classname)
}
var clearClass = function(classname) {
    var selector = '.' + classname
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        removeClass(element, classname)
    }
}
var bindIndexOne = function() {
    var elements = document.querySelectorAll('.item1')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener('click', function(event) {
            var target = event.target
            clearClass('active-one')
            addClass(target, 'active-one')
        })
    }
}
var bindIndexTwo = function() {
    var elements = document.querySelectorAll('.item2')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener('click', function(event) {
            var target = event.target
            clearClass('active-two')
            addClass(target, 'active-two')
        })
    }
}
var bindIndexThree = function() {
    var elements = document.querySelectorAll('.item3')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener('click', function(event) {
            var target = event.target
            clearClass('active-three')
            addClass(target, 'active-three')
        })
    }
}
var __app = function() {
    bindIndexOne()
    bindIndexTwo()
    bindIndexThree()
}
__app()
