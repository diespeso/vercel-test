<template>
    <div>Vista de items</div>
    <ItemsCreateForm />
    <div style="margin-left: 10px">
        <ItemsUpdateForm :item-id="1"/>
    </div>
</template>

<script setup lang="ts">
    const { data} = useFetch('/api/items')

    console.log('yeah data:', data)
</script>