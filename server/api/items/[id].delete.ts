import { PrismaClient } from "@prisma/client";
import { sendApiFailure, sendApiSuccess } from "~/utils/requests";


const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    let id: number;
    try {
        id = parseInt(getRouterParam(event, 'id')!)
    } catch (exception: any) {
        return sendApiFailure(null, exception)
    }

    const deleted = await prisma.item.delete({
        where: {
            id
        }
    })

    return deleted ? sendApiSuccess(null) : sendApiFailure(null, "Failed to delete item")
})