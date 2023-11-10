//importando a biblioteca express
import  express,{Request, Response}from 'express'
import {Server} from 'http'
import path from 'path'
//importano mustache
import mustache from 'mustache-express'
//importando nosso arquivo index.ts
import mainRoutes from './routes/index'

//usando EXPRESS
const server = express()

//configurando mustache
server.set('views engine','mustache')

server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(mainRoutes)

// Criando a pagina não encontrada 
server.use((req: Request, res: Response) =>{
    res.status(404).send('Pagina não encontrada')
})

//gerando o servidor na porta 3000
server.listen(3000)



