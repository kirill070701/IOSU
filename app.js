const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('one/index');
});

io.on('connection', socket => {
    console.log('Подключение установлено')
  
    let counter = 0
    setInterval(() => {
      // отправляем данные клиенту
      socket.emit('hello', ++counter);
    }, 1000)
  
    // получаем данные от клиента
    /*socket.on('hi', data => {
      console.log('hi', data)
    })*/
})

try {
    server.listen(3000, ()=>{
        console.log("OK. PORT 3000 ");
    })
} catch (error) {
    console.log("Error " + error);
}