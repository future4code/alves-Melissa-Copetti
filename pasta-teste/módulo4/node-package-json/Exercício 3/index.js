
const fs = require("fs")

const showTaskSave = fs.readFileSync(_dirname + "/save.json")
const tasks = JSON.parse(showTaskSave)

const addTask = (newTask) => {
    tasks.push(newTask)
    const taksString = JSON.stringify(tasks)
fs.writeFileSync(_dirname + "/save.json", taksString)
return ('tarefa adicionada com sucesso!')
}

console.log(addTask(process.argv[2]))
console.log("Tarefas: ", taks)