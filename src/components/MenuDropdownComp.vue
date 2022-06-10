<template>
    <div class="relative block group">
        <button class=" block ">

            <div class="flex h-11 items-center">
                <span>{{ mainLabel }}</span>
                <ArrowComp :direction="'bottom'" />
            </div>
            <div class="hidden group-hover:block">
                <div class=" absolute top-5 right-8 | text-white">▲</div>
                <div class=" absolute top-9 right-0 | | w-60 | bg-white shadow-md shadow-slate-100 | rounded-2xl">
                    <div
                        class="group-2 | h-16 | flex justify-between items-center | px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-slate-600 | rounded-2xl">
                        <ArrowComp :direction="'left'" class="absolute" />
                        <button class="flex">
                            <span>Mis cuentas</span>
                            <div
                                class="group-2-items | hidden | absolute top-0 right-60 | w-72 | bg-white shadow-md shadow-slate-200">
                                <div
                                    class="h-18 w-full | px-5 py-4 | flex items-center | text-gray-800 hover:bg-emerald-100 hover:text-slate-600">
                                    <div
                                        class="rounded-full | h-8 w-8 | flex items-center justify-center | bg-zinc-200 border-2 border-gray-400 text-zinc-400">
                                        S1</div>
                                    <div class="flex flex-col items-start | ml-4">
                                        <div><span class="font-bold">Sesame 1</span> <span>Kelly Pierce</span></div>
                                        <div><span class="text-gray-300">Hoy llevas 10:00</span></div>
                                    </div>
                                </div>
                                <div
                                    class="h-18 w-full  px-5 py-4 | flex items-center | text-gray-800 hover:bg-emerald-100 hover:text-slate-600">
                                    <div
                                        class="rounded-full | h-8 w-8 | flex items-center justify-center | bg-zinc-200 border-2 border-gray-400 text-zinc-400">
                                        S2</div>
                                    <div class="flex flex-col items-start | ml-4">
                                        <div><span class="font-bold">Sesame 2</span> <span>Mike Pierce</span></div>
                                        <div><span class="text-gray-300">Hoy llevas 01:00</span></div>
                                    </div>
                                </div>

                            </div>
                        </button>
                        <div></div>
                    </div>
                    <div
                        class="h-16 flex justify-center items-center px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-slate-600 rounded-2xl">
                        Vista
                        empleado</div>
                    <div
                        class="h-16 flex justify-center items-center px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-slate-600 rounded-2xl">
                        Mi perfil</div>
                    <div
                        class="h-16 flex justify-center items-center px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-slate-600 rounded-2xl">
                        Cerrar sesión</div>
                </div>
            </div>
        </button>
    </div>
</template>
<script>
import ArrowComp from './ArrowComp.vue';
export default {
    name: 'MenuDropdownComp',
    props: ['mainLabel'],
    components: {
        ArrowComp
    },
}
</script>
<style>
/*tailwind not let use multiple groups*/
.group-2:hover .group-2-items {
    display: block;
}
</style>