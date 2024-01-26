<template>  
    <v-table class="items-table">
        <thead class="table-header">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Controls</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in $props.items" :key="index">
                <td>
                    <span >{{ item.id }}</span>
                </td>
                <td>
                    <v-text-field v-if="currentEdit && currentEdit == item.id" v-model="item.name"   />
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
                    <div style="display:flex; align-items: center;">
                        <v-btn v-if="!currentEdit || currentEdit != item.id" v-on:click="controls.onClickEdit(item.id!)" class="btn-control">Edit</v-btn>
                        <v-btn v-show="currentEdit == item.id" v-on:click="controls.onSaveEdit(item)" class="btn-control" style="background-color: #72db9a;">Save</v-btn>
                        <v-btn v-show="currentEdit == item.id" v-on:click="currentEdit = null" class="btn-control" style="background-color: #db7672">Cancel</v-btn>
                        <v-btn v-on:click="controls.onClickDelete(item.id!)" class="btn-control" style="background-color: red;">x</v-btn>

                       
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
    import {type Item} from '~/server/models/item'

    const emit = defineEmits(['delete'])

    const props = defineProps<{
        items: Item[]
    }>()

    const currentEdit: Ref<number | null> = useState('currentEdit', () => null)

    const columns = [{
        key: 'id',
        label: 'ID'
    }]

    const { getItems, deleteItemById, updateItemById } = useDbItems()

    /*const items: {
        data: Item[]
    } = reactive({
        data: props.items,
    })


    const { success, data}: ApiResponse<Item[]> = (await getItems())!
    
    if(success) {
        items.data = data
    }*/

    const controls = {
        onClickDelete : async (id: number) => {
            const { success, message}= await deleteItemById(id)

            if (success) {
                emit('delete', id)
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
                // items.data = items.data.map(_item => (_item.id == updated?.id ? updated : _item))
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
        border-width: 1px;
        border-color: #00000033;
        border-style: solid;
    }

    .items-table .table-header {
        background-color: lightblue;
    }

    .btn-control {
        margin-left: 2px;
        margin-right: 2px;
    }


</style>