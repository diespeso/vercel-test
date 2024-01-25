<template>
    <ItemsTable :items="items.data"/>
    <ItemsCreateForm :on-create="onCreateItem" />
</template>

<script setup lang="ts">

    import { onMounted } from 'vue';
import {type Item} from '~/server/models/item'

    const { getItems } = useDbItems()
    
    const  items = reactive({
        data: []
    })

    onMounted(async () => {
        const {success, data} = await getItems()
        if (success) {
            items.data = data
        }
    })




    const onCreateItem = async (item: Item) => {
        items.data.push(item)
    }

</script>