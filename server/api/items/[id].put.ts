import { PrismaClient } from "@prisma/client"
import { sendApiFailure, sendApiSuccess } from "~/utils/requests";

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    let id: number;
    try {
        id = parseInt(getRouterParam(event, 'id')!)
    } catch (exception: any) {
        return sendApiFailure(null, exception)
    }

    const { description, name, price }: { description?: string, name?: string, price?: number} = await readBody(event)

    const item = await prisma.item.update({
        where: {
            id,
        },
        data: {
            name,
            price,
            description
        }
    })

    if(!item) {
        setResponseStatus(event, 404)
        return  sendApiFailure(null, 'Failed to update item')
    }

    return sendApiSuccess(item)
})