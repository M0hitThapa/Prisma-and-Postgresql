
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function seed() {
await prisma.user.createMany({
    data: [
        { name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, isMarried: false, nationality: "American" },
  { name: "Rajesh Kumar", email: "rajesh.kumar@example.com", age: 34, isMarried: true, nationality: "Indian" },
  { name: "Maria Gonzalez", email: "maria.gonzalez@example.com", age: 25, isMarried: false, nationality: "Mexican" },
  { name: "Liam Smith", email: "liam.smith@example.com", age: 40, isMarried: true, nationality: "British" },
  { name: "Chen Wei", email: "chen.wei@example.com", age: 31, isMarried: false, nationality: "Chinese" },
  { name: "Amara Nwosu", email: "amara.nwosu@example.com", age: 29, isMarried: true, nationality: "Nigerian" },
  { name: "Sophie Dubois", email: "sophie.dubois@example.com", age: 35, isMarried: false, nationality: "French" },
  { name: "Hiroshi Tanaka", email: "hiroshi.tanaka@example.com", age: 42, isMarried: true, nationality: "Japanese" },
  { name: "Fatima Al-Farsi", email: "fatima.alfarsi@example.com", age: 27, isMarried: false, nationality: "Omani" },
  { name: "Lucas Müller", email: "lucas.mueller@example.com", age: 33, isMarried: true, nationality: "German" }
    ]
})
}

seed().then(() => prisma.$disconnect())