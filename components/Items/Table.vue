<template>
    <div>Table Component</div>

  
    <v-table class="items-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Controls</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items.data" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <div>
                        <v-btn v-on:click="controls.onClickDelete(item.id)">x</v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
    import {type Item} from '~/server/models/item'

    const props = defineProps<{
        items: Item[]
    }>()

    const columns = [{
        key: 'id',
        label: 'ID'
    }]
    const { getItems, getItemById, deleteItemById } = useDbItems()

    const items = reactive({
        data: []
    })


    const { success, data}: ApiResponse<Item[]> = await getItems()
    
    if(success) {
        items.data = data
    }

    const controls = {
        onClickDelete : async (id: number) => {
            const { success }= await deleteItemById(id)

            if (success) {
                items.data = items.data.filter(item => item.id != id)
            }
        }
    }
</script>

<style>
    .items-table {
        margin: 15px;
    }
</style>