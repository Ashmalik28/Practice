import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUsers(){
    await client.user.create({
        data : {
            username : "SAshyam",
            age : 21 ,
            password : "131ed23d" ,
            city : "delhi",
            todos : {
                create : {
                    description : "Go to gym" , 
                    title : "Gym" , 
                    done : false
                }
            }
        }
    })

}