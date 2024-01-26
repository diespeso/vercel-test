import { PrismaClient } from "@prisma/client"
import { type Item } from "~/server/models/item"
import { sendApiFailure, sendApiSuccess } from "~/utils/requests"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const { name, description, price}: Item = await readBody(event)
        const created = await prisma.item.create({
            data: {
                name,
                description,
                price,
            }
    
        })
    
        return sendApiSuccess(created)
    } catch(exception: any) {
        setResponseStatus(event, 500)
        return sendApiFailure(null, exception)
    }

    
})