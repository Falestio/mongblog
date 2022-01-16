const express = require('express')
const articleRouter = require('./routes/article')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles' ,articleRouter)

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test Article',
            createdAt: Date.now(),
            description: 'test description'
        }
    ]
    res.render('index', { articles: articles })
})

app.listen('6969', () => {
    console.log('server strated at port 6969')
})