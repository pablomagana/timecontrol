<template>
    <div v-if="direction === 'bottom'">
        <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
        </svg>

    </div>
    <div v-if="direction === 'left'">
        <svg class="fill-current h-4 w-4
                " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <rect id="view-box" width="24" height="24" fill="none" />
            <path id="Shape"
                d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
                transform="translate(14.75 17.75) rotate(180)" fill="#141124" />
        </svg>
    </div>
</template>
<script>
export default {
    name: 'ArrowComp',
    props: ['direction'],

}
</script>