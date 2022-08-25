const express = require('express')

const app = express()

app.use(express.json())

const books = [
    { title: 'java', id: 1},
    { title: 'c#', id: 2},
    { title:'nodejs', id: 3},
   
]

app.get('/',(req, resp)=>{
    resp.send('Welcome to study and learn about Rest api ')
})

app.get('/api/books',(req, resp) =>{
    resp.send(books)
})

app.get('/api/books/:id',(req, resp) =>{
    const book = books.find(v => v.id === parseInt(req.params.id))
    if(!book)resp.status(404).send('books not found')
    resp.send(book)
})
app.post('/api/books/addbook',(req , resp)=>{
    const book={
        id:books.length+1,
        title:req.body.title
    }
    books.push(book)
    resp.send(book)
})
app.put('/api/books/:id',(req,resp)=>{
    const book = books.find(v => v.id === parseInt(req.params.id))
    if(!book)resp.status(404).send('books not found')

    book.title = req.body.title
})
app.delete('/api/books/:id',(req,resp)=>{
    const book = books.find(v => v.id === parseInt(req.params.id))
    if(!book)resp.status(404).send('books not found')
    const index = books.indexOf(book)
    books.splice(index,1)
    resp.send(book)

})

app.listen(8080)

