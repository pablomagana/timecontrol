<template>
    <div class="block | child:text-xs child:text-white | child:py-2 child:mx-auto | child:w-28 | child:rounded-full">
        <div v-if="isOnline()" class="!w-auto">
            <button class="bg-neutral-400" @click="() => clockEvent(this.actions.PAUSE)">Pausar</button>
            <button class="bg-orange-500 !ml-2.5" @click="() => clockEvent(this.actions.OUT)">Salir</button>
        </div>
        <button v-else class="bg-emerald-500" @click="() => clockEvent(this.actions.IN)">Entrar</button>
    </div>
</template>
<script>
import actions from '../utils/actions.js';
import states from '../utils/states.js';
export default {
    name: 'ButtonActionsComp',
    props: ['status'],
    data: function () {
        return {
            actions
        }
    },
    methods: {
        isOnline() {
            return this.status === states.ONLINE || this.status === states.PAUSED;
        },
        clockEvent(typeAction) {
            this.$emit('clockEvent', typeAction);
        },

    }
}
</script>