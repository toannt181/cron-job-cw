const schedule = require('node-schedule')
const chatwork = require('./chatwork')

console.log('START JOB')

schedule.scheduleJob({ hour: 16, minute: 30 }, () => {
  chatwork.sendMessageToChatwork(`TO ALL >>> [info]Anh chị ơi đến giờ rồi, rì bóp em đi :)))[/info]`)
  console.log('Message sended!')
})
