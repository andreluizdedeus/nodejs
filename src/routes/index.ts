import { Router, Request, Response } from 'express'

const router = Router()

//criando a primeira rota
router.get("/", (req, res) => {



    let idade: number = 18
    let mostrarIdade: boolean = false


    if (idade >= 18) {
        mostrarIdade = true
    }


    //user string = andré
    res.render('home', {
        name: 'André',
        lastName: 'Luiz',
        mostrarIdade,
        produtos:[
            {title: 'produtos X', preco:200},
            {title: 'produtos y', preco:200},
            {title: 'produtos w', preco:200},
        ]
    })

})


//criando a primeira rota para contato
router.get('/contato', (req, res) => {
    res.send("Esta é a pagina de contato")
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Sobre nós")
})

//ROTA ESTÁTICA
router.get('/noticia/titulo-da-noticia', (req: Request, res: Response) => {
    res.send("Noticia Aparecendo na tela")
})

//ROTA DINÂMICA
router.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurandos voos de ${origem} até ${destino}`)
})



export default router