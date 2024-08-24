// Импортируем модуль events
const EventEmitter = require('events');

// Создаем экземпляр EventEmitter
const chatEmitter = new EventEmitter();

// Функция отправки сообщений
function sendMessage(username, message, emitter) {
  // Генерируем событие 'message'
  emitter.emit('message', username, message);
}

// Регистрируем обработчик для события 'message'
chatEmitter.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
});

// Вызов функции sendMessage с разными пользователями и сообщениями
sendMessage('Ann', 'Hello, everyone!', chatEmitter);
sendMessage('Bob', 'Hi, Alice!', chatEmitter);
sendMessage('Charl', 'Good morning, all!', chatEmitter);
