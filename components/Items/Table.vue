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
                <td>
                    <span >{{ item.id }}</span>
                </td>
                <td>
                    <v-text-field v-if="currentEdit && currentEdit == item.id" v-model="item.name" />
                    <span v-else>{{ item.name }}</span>
                </td>
                <td>
                    <v-text-field v-if="currentEdit && currentEdit == item.id" v-model="item.description"/>
                    <span v-else>{{ item.description }}</span>
                </td>
                <td>
                    <v-text-field v-if="currentEdit && currentEdit == item.id" v-model="item.price"/>
                    <span v-else>{{ item.price }}</span>
                </td>
                <td>
                    <div>
                        <v-btn v-on:click="controls.onClickDelete(item.id!)">x</v-btn>
                        <v-btn v-if="!currentEdit || currentEdit != item.id" v-on:click="controls.onClickEdit(item.id!)" >Edit</v-btn>
                        <v-btn v-show="currentEdit == item.id" v-on:click="controls.onSaveEdit(item)">Save</v-btn>
                        <v-btn v-show="currentEdit == item.id" v-on:click="currentEdit = null">Cancel</v-btn>
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

    const currentEdit: Ref<number | null> = useState('currentEdit', () => null)

    const columns = [{
        key: 'id',
        label: 'ID'
    }]

    const { getItems, deleteItemById, updateItemById } = useDbItems()

    const items: {
        data: Item[]
    } = reactive({
        data: []
    })


    const { success, data}: ApiResponse<Item[]> = await getItems()
    
    if(success) {
        items.data = data
    }

    const controls = {
        onClickDelete : async (id: number) => {
            const { success, message}= await deleteItemById(id)

            if (success) {
                items.data = items.data.filter(item => item.id != id)
            } else {
                alert(message)
            }
        },
        onClickEdit: async (id: number) => {
            if (currentEdit.value) {
                if (currentEdit.value == id) {
                    currentEdit.value = null // toggle
                }
            } else {
                currentEdit.value = id;
            }
        },
        onSaveEdit: async (item: Item) => {
            const { success, data: updated, message} = await updateItemById(item.id!, item)

            if (success) {
                items.data = items.data.map(_item => (_item.id == updated?.id ? updated : _item))
                currentEdit.value = null
            } else {
                alert(message)
            }
        }
    }
</script>

<style>
    .items-table {
        margin: 15px;
    }
</style>