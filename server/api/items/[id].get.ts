import { PrismaClient } from "@prisma/client";
import { sendApiFailure, sendApiSuccess } from "~/utils/requests";

const prisma = new PrismaClient();

export default defineEventHandler(async event => {

    let id: number;
    try {
        id = parseInt(getRouterParam(event, 'id')!)
    } catch (exception: any) {
        return sendApiFailure(null, exception)
    }
    
    const item = await prisma.item.findUnique({
        where: {
            id: id
        }
    })

    if (!item) {
        setResponseStatus(event, 404);
        return sendApiFailure(null, 'Item not found');
    }


    return sendApiSuccess(item);
})