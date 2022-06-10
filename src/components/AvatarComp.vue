<template>
    <div class="relative inline-block">
        <img class=" rounded-full | h-6 w-6 | object-contain | mx-1"
            src="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" alt="avatar" />
        <div class="absolute top-2 right-0">
            <div v-if="isOnline(status)" class="h-2 w-2 rounded-full bg-green-500"></div>
            <div v-else class="h-2 w-2 rounded-full bg-red-500"></div>
        </div>
    </div>
</template>

<script>
import states from '../utils/states.js';

export default {
    name: 'AvatarComp',
    props: ['status'],
    methods: {
        isOnline(status) {
            return status === states.ONLINE || status === states.PAUSED;
        }
    }
}
</script>