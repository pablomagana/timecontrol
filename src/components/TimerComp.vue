<template>
    <div class="flex | child:text-xs | child:mx-1">
        <div class="w-12">{{ currentTimer }}</div>
        <div class="text-zinc-400 w-16" v-if="hasAcumulativeTimer()">/ {{ accumulatedTimer }}</div>
    </div>
</template>
<script>
import getTimeInFormat from "../utils/dates.js";
import states from "../utils/states.js";
export default {
    name: "TimerComp",
    props: ["status", "startDateTime", "accumulatedTimer"],
    mounted() {
        this.startTimer();
    },
    watch: {
        status: function () {
            this.startTimer();
        },
    },
    data: () => {
        return {
            interval: null,
            currentTimer: "00:00:00",
            hasAcumulativeTimer: function () {
                return this.accumulatedTimer;
            },
        };
    },
    methods: {
        startTimer() {
            if (this.status !== states.ONLINE) {
                clearInterval(this.interval);
                this.currentTimer = "00:00:00";
                return
            }
            this.startTime = new Date(this.startDateTime);
            this.interval = setInterval(() => {
                this.currentTimer = getTimeInFormat(this.startTime, new Date());
            }, 1000);
        },
    },
};
</script>
