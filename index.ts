import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

app.get("/users", async(_, res) => {
const users = await prisma.user.findMany({
    where:{
     nationality:{
        in:["Indian", "Chinese", "French"]
     }
    }
})
res.json(users)
})

app.put("/users", async (_,res) => {
    const updateUser = await prisma.user.update({
        where:{
            email:"alice.johnson@example.com"
        },
        data:{
            age:12,
            isMarried:true
        }
    })
    res.json(updateUser)

})


app.delete("/users", async (_,res) => {
    const deleteUser = await prisma.user.deleteMany({
        where:{
            age:{gt:30}
        }
    })
    res.json(deleteUser)
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})