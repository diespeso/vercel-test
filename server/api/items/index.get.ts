import { PrismaClient } from "@prisma/client"
import { sendApiFailure, sendApiSuccess } from "~/utils/requests";

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const items = await prisma.item.findMany();


    return items ? sendApiSuccess(items) : sendApiFailure(null, 'Items not found')

})