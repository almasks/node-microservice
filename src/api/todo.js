const TodoService = require('../service/todo-services')
module.exports = async (app) => {
    const service = new TodoService();
    app.get('/todo', async (req, res, next) => {
        const todoList = await service.getAllTodos();
        res.send({
            sucess: todoList
        })
    })

    app.get('/todo/:id', async (req, res, next) => {
        const todoId = req.params.id
        const getItem = await service.getTodo(todoId)
        res.send({
            itemfound: getItem
        })
    })

    app.delete('/todo/:id', async (req, res, next) => {
        const todoId = req.params.id;
        const deletedItem = await service.deleteTodo(todoId);
        res.send({ 'itm deleted': deletedItem });

    })

    app.delete('/todos', async (req, res, next) => {
        const deletedItem = await service.deleteAllTodos()
        res.send({ 'itm deleted': deletedItem });
    })

    app.put("/todo/:id", async (req, res, next) => {
        const todoId = req.params.id;
        const { todo } = req.body;
        const editedTodo = await service.editTodo(todoId, todo)
        res.send({ "updatedtodo": editedTodo })
    })

    app.post("/todo", async (req, res, next) => {
        const { todo } = req.body;
        const newTodo = await service.postTodo(todo)
        res.send({
            "success": newTodo
        })
    });
}