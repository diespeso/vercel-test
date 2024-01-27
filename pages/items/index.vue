<template>
    <ItemsTable :items="items.data" @delete="onDelete"/>
    <ItemsCreateForm :on-create="onCreateItem"  />
</template>

<script setup lang="ts">

    import { onMounted } from 'vue';
import {type Item} from '~/server/models/item'

    const { getItems } = useDbItems()

    const items: Ref<{
        data: Item[]
    }> = useState('items', () => {
        return {
            data: []
        }
    })

    const response = await getItems()
        const {success, data} = response!
        if (success) {
            items.value.data = data
        }

    const onCreateItem = async (item: Item) => {
        items.value.data.push(item)
    }

    const onDelete = (id: number) => {
        items.value.data = items.value.data.filter(item => item.id != id)   
    }

</script>