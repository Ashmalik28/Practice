import { publicProcedure, router } from './trpc';
import {z} from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoInputType = z.object({
    title : z.string() ,
    description : z.string()
})

const appRouter = router({
   
   signup : publicProcedure
   .input(z.object({
      email : z.string() , 
      password : z.string()
   }))
   .mutation(async (opts) => {
    let email = opts.input.email;
    let password = opts.input.password;

    //jwt verification 
    //using custom created token 

    let token = 'acbjscsdbk'

    return {
        token
    }
   }),
   createTodo : publicProcedure
   .input(todoInputType)
   .mutation(async (opts) => {
    console.log(opts.ctx.username);
    const title = opts.input.title;
    const description = opts.input.description;

    // Db calls 

    return {
        id : "1",
    }
   }) 
});


const server = createHTTPServer({
  router: appRouter,
  createContext(opts){
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);

    //jwt.verify
    return {
        username : "123"
    }
  }
});
 
server.listen(3000);

export type AppRouter = typeof appRouter;