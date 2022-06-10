<template>
  <div class="flex justify-end">

    <div class="flex items-center justify-flex-end | bg-neutral-200 | rounded-full | h-11 m-w-content">

      <TimerComp class="ml-5" v-if="workEntry.workEntryIn" :status="workEntry.employee.workStatus"
        :startDateTime="workEntry.workEntryIn.date" :accumulatedTimer="workEntryAccumulatedTime" />

      <ButtonActionsComp v-if="isValidState()" :status="workEntry.employee.workStatus" @clockEvent="clockEventHandler"
        class="ml-5" />

      <div class="mx-5 text-gray-400 text-xl">|</div>

      <AvatarComp v-if="workEntry.employee.firstName" :status="workEntry.employee.workStatus" />
      <MenuDropdownComp class="mx-5" :mainLabel="`${workEntry.employee.firstName} ${workEntry.employee.lastName}`" />
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import getTimeInFormat from './utils/dates.js';
import { isSameDay } from "date-fns";

import { configHeaders, clockInContentBodyRequest, clockOutContentBodyRequest } from './utils/axios.js';
import actions from './utils/actions.js';
import states from './utils/states.js';

import AvatarComp from './components/AvatarComp.vue';
import ButtonActionsComp from './components/ButtonActionsComp.vue';
import TimerComp from './components/TimerComp.vue';
import MenuDropdownComp from './components/MenuDropdownComp.vue';

export default {
  name: 'App',
  components: {
    AvatarComp, ButtonActionsComp, TimerComp, MenuDropdownComp
  },
  mounted() {
    this.getWorkStatus();
  },
  data: () => {
    return {
      workEntryAccumulatedTime: null,
      workEntry: {
        workEntryIn: null,
        workEntryOut: null,
        employee: {
          firstName: '',
          lastName: '',
          workStatus: '',
        }
      }
    }
  },
  methods: {
    isValidState() {
      return [states.ONLINE, states.OFFLINE, states.PAUSED].includes(this.workEntry.employee.workStatus)
    },
    getWorkStatus() {
      axios.get('https://api-test.sesametime.com/schedule/v1/work-entries',
        configHeaders
      )
        .then((response) => {
          const lastItem = response.data.data.sort((a, b) => {
            return new Date(b.workEntryIn.date) - new Date(a.workEntryIn.date);
          })[0];
          this.workEntry = lastItem;
          this.calculateAccumulativeTime(response.data.data);
        })
    },
    calculateAccumulativeTime(workEntries) {

      const accumulateMilliSeconds = workEntries.reduce((accum, itemWorkEntry) => {
        if (itemWorkEntry.workEntryIn && itemWorkEntry.workEntryOut && isSameDay(new Date(itemWorkEntry.workEntryIn.date), new Date())) {
          const itemDateIn = new Date(itemWorkEntry.workEntryIn.date);
          const itemDateOut = new Date(itemWorkEntry.workEntryOut.date);
          return accum + (itemDateOut.getTime() - itemDateIn.getTime());
        }
        return accum;

      }, 0);
      this.workEntryAccumulatedTime = getTimeInFormat(0, accumulateMilliSeconds);
    },
    handlerClockResponse(response) {
      this.workEntry = response.data.data;
      this.getWorkStatus();
    },
    clockIn() {
      axios.post('https://api-test.sesametime.com/schedule/v1/work-entries/clock-in',
        clockInContentBodyRequest,
        configHeaders
      )
        .then(this.handlerClockResponse)
    },
    clockOut() {
      axios.post('https://api-test.sesametime.com/schedule/v1/work-entries/clock-out',
        clockOutContentBodyRequest,
        configHeaders
      )
        .then(this.handlerClockResponse)
    },
    clockEventHandler(typeAction) {
      if (typeAction === actions.IN) {
        this.clockIn();
      } else if (typeAction === actions.OUT) {
        this.clockOut();
      } else if (typeAction === actions.PAUSE) {
        console.log("stop, wait a minute!");
      }
    }
  }

}
</script>

<style>
</style>
