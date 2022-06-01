const data = require('./data_controller')


// читаем + вивод
console.log(data.ReadIn(1))

// запись
data.WriteInTo(1,"новая дата")

// чтания + вивод
console.log(data.ReadIn(1))

// Удалить все
data.Reset