<template>
    <v-card style="margin: 30px; padding: 20px">
        <v-card-title>Item</v-card-title>
        <v-card-text>
            <div>
            <div>
                <span>ID:</span>
                <span>{{ item.id }}</span>
            </div>
            <div>
                <span>Name: </span>
                <span>{{ item.name }}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{{ item.description }}</span>
            </div>
            <div>
                <span>Price:</span>
                <span>{{ item.price }}</span>
            </div>
            <div>
                <span>Created At:</span>
                <span>{{ item.created_at }}</span>
            </div>
            <div>
                <span>Updated At:</span>
                <span>{{ item.updated_at ?? 'N/A' }}</span>
            </div>
        </div>
        </v-card-text>
        
    </v-card>
   
</template>

<script setup lang="ts">
    import { type Item } from '~/server/models/item'

    const { getItemById } = useDbItems()

    const item: Ref<Item > = useState('item', () => {
        return <Item>{
            name: '',
            description: '',
            price: 0.0
        }
    })

    const route = useRoute()
    const {id} : { id?: number }= route.params;

    if (id) {
        const response = await getItemById(id);
        const { success, data} = response;

        if (success) {
            item.value = data
        }
    }


</script>