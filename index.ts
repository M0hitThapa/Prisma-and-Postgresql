import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

app.get("/users", async(_, res) => {
const users = await prisma.user.findMany({
    where:{
      nationality: {
        not:"Indian"
      }
    }
})
res.json(users)
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})