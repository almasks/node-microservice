const Todo = require('../model/Todo');
class TodoRepository {
    async findAllTodos() {
        const todos = await Todo.find({});
        const todoList=todos.map(itm => itm.todo)
        return todoList
    }   
    async findById(id){
        const todo= await Todo.findById(id)
        return todo
    }
    async deleteTodoById(id){
        return await Todo.findByIdAndDelete({_id:id})

    }
    async deleteAllTodos(){
        return await Todo.deleteMany({});

    }
    async editTodo(todoId,todo){


        const todoUpdated = await Todo.findByIdAndUpdate({_id:todoId}, { todo:todo },{
            new: true
          })
        return todoUpdated

    }
    async editId(todoId){
       const IdFound = await Todo.find({ _id: todoId });
       return IdFound

    }
    async addNewTodo(todo){
        const addedTodo=await Todo({todo})
        const todoResult = await addedTodo.save()

        return todoResult
    }

}
module.exports = TodoRepository;