<template>
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
    <div>
        <v-btn v-on:click="sendCreate">Create</v-btn>
    </div>

</template>

<script setup lang="ts">
    import {type Item} from '~/server/models/item'

    const props = defineProps<{
        onCreate: AsyncFunction<void>
    }>()

    const { postItem } = useDbItems()

    const itemForm = reactive({
        name: null,
        description: null,
        price: 0.0
    })

    const sendCreate = async () => {
        const { success, data, message } = await postItem(itemForm)
        if (success) {
            props.onCreate(data)
        } else {
            console.log(data)
            throw new Error('failed to create item: ')
        }

    }
</script>