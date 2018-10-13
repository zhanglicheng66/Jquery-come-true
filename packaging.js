

Node.prototype.getSiblings = function{/*API*/
    var allChildren = this.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}
Node.prototype.addClass = function(classes){
    classes.forEach((value) =>this.classList.add(value))
}
item3.getSiblings.call(item4)
item3.addClass.call(item3,['a','b','c'])