export function getList() {
    return fetch('http://localhost:3333/list')
    .then(data=>data.json())
}

export function getUsers() {
    return fetch('http://localhost:3333/users')
    .then(data=>data.json())
}