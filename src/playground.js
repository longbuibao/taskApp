// const mongoose = require('mongoose')
// const Task = require('../src/models/task')


// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     })
//     .then(res => console.log('connected to the database'))
//     .catch(e => console.log(e))

// async function removeTask(id) {
//     const result = await Task.findByIdAndRemove(id)
//     if (result) {
//         console.log("removed " + id + " task")
//     } else {
//         console.log("cannot find " + id + " or it was removed")
//     }
// }
// async function findAllIncompleteTasks() {
//     const numberOfIncompleteTasks = await Task.countDocuments({ completed: false })
//     console.log(`number Of Incomplete Tasks: ${numberOfIncompleteTasks}`)
//     return numberOfIncompleteTasks
// }

// removeTask('60a0cac8d178b33f8ccdd0f9');
// (async function() {
//     const num = await findAllIncompleteTasks()
//     console.log(num, 'hellooooooooooooo')
// })()
const bcrypt = require('bcrypt')

// bcrypt.genSalt(1, function(err, salt) {
//     console.log('salt: ', salt)
//     bcrypt.hash('buibaolong', salt, function(err, hash) {
//         console.log('hased: ', hash)
//     });
// })

bcrypt.hash('buibaolong', 1, (e, re) => { console.log(re) })