// Get your ranger data
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-json/rangers`)
    console.log(response.data)
    return response.data
}

//  Create constants to hold DOM elements
const DOM_Elements = {
    ranger_list : '.ranger_list'
}

// Create the ranger list HTML
const create_list = ( id, name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// 'beforebegin': Before the element itself
// 'afterbegin':Just inside the element, before its first child
// 'beforeend': Just inside the element, after its last child
// 'afterend': After the element itself

// Functions to load data and display in HTML

const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.name))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = ''
}
