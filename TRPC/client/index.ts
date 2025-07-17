import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
       async headers(){
        return {
            Authorization : 'Bearer 123'
        }
    },
    }),
  ],
});

async function main(){
    let response = await trpc.createTodo.mutate({
        title : "Nitesh is bhadwa" , 
        description : "Nitesh does bhadwagiri"
    })
    console.log(response);

    let response2 = await trpc.signup.mutate({
        email : "niteshlodu@gmail.com" ,
        password : "niteshlodu"
    })

    console.log(response2)
}
main();