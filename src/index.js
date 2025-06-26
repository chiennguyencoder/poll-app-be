import express from 'express'
import router from './apis/index.js'
import templateEngineConfig from './config/templateEngine.config.js'
import { errorHandler } from './middleware/error.middleware.js'
import {connectDatabase}  from './config/db.config.js'
import cors from 'cors';


import path from 'path'
import { fileURLToPath } from 'url'

// get file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const startApp = function(){
    const app = express()
    const port = 3000
    app.use(express.json())
    app.use(cors());


    // app route
    app.use('/', router)

    // Static file
    app.use(express.static(path.join(__dirname, 'public')))

    // Template engine
    templateEngineConfig(app)
    app.get('/', (req, res, next) => {
        res.render('index.ejs')
    })

    // Check error
    app.use(errorHandler)
    app.listen(port, '0.0.0.0',() => console.log(`Example app listening at http://localhost:${port}`))
}

const run = async () => {
    try {
        await connectDatabase();
        console.log('Connected to mongodb')
        startApp();
    }
    catch(error){
        console.error('Error connecting to mongodb: ', error)
        process.exit(1);
    }
}

run()