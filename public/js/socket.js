"use strict";

const socket = io()
/*s
    socket.on('connect', () => {
        console.log('Подключение установлено');
    })

    // получаем данные от сервера
    socket.on('hello', (counter) => {
        console.log(`Привет - ${counter}`)
    })
*/
    // отправляем данные на сервер
    /*let counter = 0
    setInterval(() => {
        ++counter
        socket.emit('hi', { counter })
    }, 1000)*/