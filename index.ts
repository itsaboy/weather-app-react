import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

const port: string | undefined = Bun.env.PORT

const app = new Elysia()
	.use(staticPlugin())
	.get('/', () => Bun.file('./public/index.html'))
	.listen({port})

console.log(`🦊 Server is listening on port ${app.server?.port}`)