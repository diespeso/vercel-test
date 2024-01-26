<template>
    <v-card class="form-card">
        <v-card-title style="display: flex; justify-content: center;">Create Item</v-card-title>
        <div>
            <div class="form-row">
            <v-text-field v-model="itemForm.name" color="primary" variant="underlined" label="Name"/>
            </div>
            <div class="form-row">
                <v-text-field v-model="itemForm.description" color="primary" variant="underlined" label="Description"/>
            </div>
            <div class="form-row">
                <v-text-field v-model="itemForm.price"  color="primary" variant="underlined" label="Price"/>
            </div>
        </div>
        <div style="display: flex; justify-content: center;">
            <v-btn v-on:click="sendCreate">Create</v-btn>
        </div>
    </v-card>


</template>

<script setup lang="ts">
    import {type Item, isSendValid} from '~/server/models/item'

    const props = defineProps<{
        onCreate: (data: Item) => Promise<void>
    }>()

    const { postItem } = useDbItems()

    const itemForm: Item = reactive({
        name: '',
        description: '',
        price: 0.0
    })

    const sendCreate = async () => {
        // validación de no vacios:
        if (isSendValid(itemForm)) {
            const { success, data, message } = await postItem(itemForm)
            if (success) {
                props.onCreate(data)
            } else {
                throw new Error('failed to create item: ')
            }
        } else {
            alert("Campos obligatorios")
        }


    }
</script>

<style>
    .form-card {
        width: 30%;
        margin: 20px;
        padding: 20px;
    }
</style>