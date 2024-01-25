
import type { updateItemById } from '~/composables/useDbItems';

<template>
    <div>
        Testing Update Item
    </div>
    <div>
        <div>
            <span>Name:</span>
            <input v-model="itemForm.name"/>
        </div>
    </div>
    <div>
        <button v-on:click="sendUpdate">Update</button>
    </div>
</template>

<script setup lang="ts">

import { type Item} from '~/server/models/item'

const { updateItemById, getItemById } = useDbItems()

    const props = defineProps<{
        itemId: number
    }>()

    const itemForm = reactive({
        name: null
    })

    const sendUpdate = async () => {
        console.log(await updateItemById(props.itemId, itemForm))
    }


    const response: ApiResponse<Item> = await getItemById(props.itemId)
    itemForm.name = response?.data?.name

    console.log('works')


</script>