import type { RequestHandler } from "./$types";

import prisma from "$lib/db"

export const POST: RequestHandler = async ({request}) => {
   const { name, password } = await request.json();

   const user = await prisma.user.findFirst({
      where: {
         username: name,
         password: password,
      }
   })

   if (!user) return new Response(JSON.stringify({
      status: "ERROR",
      code: "AUTH_FAILURE",
      msg: "User not found or input data is incorrect"
   }));

   let session_token = crypto.randomUUID();

   await prisma.session.create({
      select: {
         agent: "",
      },
      data: {
         user: {
            connect: {
               id: user.id
            }
         }
      }
   })

   return new Response(JSON.stringify({
      status: "SUCCESS",
      code: null,
      msg: null,
   }))
}
