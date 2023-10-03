const TodoRepository = require('../database/repository/todo-repository')
class TodoService {
    constructor() {
        this.repository = new TodoRepository();
    }
    async getAllTodos() {
        const todos = await this.repository.findAllTodos();
        return todos;


    }

    async deleteTodo(id) {
        const itm = await this.repository.findById(id)


        if (itm) {
            const deletedItem = await this.repository.deleteTodoById(id)
            return deletedItem;
        }
    }
    async deleteAllTodos(){
        const deletedTodos= await  this.repository.deleteAllTodos()
        return deletedTodos
    }
    async editTodo (todoId,todo){
        const editItem=this.repository.editId(todoId)
        if(editItem){
            const editedTodo=await this.repository.editTodo(todoId,todo)
            return editedTodo

        }
    }
    async postTodo(todo){
        const newTodo=this.repository.addNewTodo(todo)
        return newTodo
    }
    async getTodo(todoId){
        const itm = await this.repository.findById(todoId)
        return itm


    }
}

module.exports = TodoService;
