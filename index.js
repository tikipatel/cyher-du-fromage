var phrase = {}


function create_key(index, event) {
    var character = event.target.value.toUpperCase()
    var hasValue = Object.values(phrase).includes(character)
    if (character.length === 1 && character.match(/[a-z]/i) && !hasValue) {
        phrase[index] = character
        event.target.value = event.target.value.toUpperCase()
        // event.target.blur()
    } else {
        delete phrase[index]
        event.target.value = ""
    }
    console.log(phrase)
}

function create_fromage(index, event) {
    console.log("coordinate value: ", event.target.value)

    var span = document.getElementById('c_to_f_' + index);

    while( span.firstChild ) {
        span.removeChild( span.firstChild );
    }
    var character = event.target.value
    if (character.length === 1 && character.match(/[0-9]/)) {
        if (phrase[event.target.value] === undefined) {
            console.log("Not found!")
            span.appendChild( document.createTextNode("") );
            return 
        }
        span.appendChild( document.createTextNode(phrase[event.target.value]) );
    } else {
        event.target.value = ""
        span.appendChild( document.createTextNode("") );
    }
}

function create_coordinate(index, event)  {
    console.log("fromage value: ", event.target.value)
    var span = document.getElementById('f_to_c_' + index);
    var character = event.target.value.toUpperCase()

    while( span.firstChild ) {
        span.removeChild( span.firstChild );
    }
    var character = event.target.value.toUpperCase()
    if (character.length === 1 && character.match(/[a-z]/i)) {
        event.target.value = event.target.value.toUpperCase()
        var keyValue = getKeyByValue(phrase, character)
        console.log("value is:" ,keyValue)
        if (keyValue === undefined) {
            console.log("Not found!")
            span.appendChild( document.createTextNode("") );
            return 
        }
        span.appendChild( 
            document.createTextNode(keyValue) 
        );
    } else {
        span.appendChild( document.createTextNode("") );
        event.target.value = ""
    }
    
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] == value);
}