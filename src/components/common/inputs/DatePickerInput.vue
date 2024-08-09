<template>
  <div class="date-picker-container">
    <CommonLabel v-if="labelText" :text="labelText" />
    <input
      type="text"
      class="date-picker-input"
      :placeholder="placeholderText"
      :value="formattedDate"
      @click="toggleCalendar"
      readonly
    />
    <div v-if="isCalendarOpen" class="calendar">
      <div class="calendar-header">
        <select class="date-picker-month-control" v-model="currentMonth">
          <option v-for="(month, index) in months" :key="index" :value="index">
            {{ month }}
          </option>
        </select>
        <select class="date-picker-year-control" v-model="currentYear">
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="calendar-days">
        <div v-for="day in daysOfWeek" :key="day" class="calendar-day-name">
          {{ day }}
        </div>
        <div
          v-for="day in calendarDays"
          :key="day.date"
          class="calendar-day"
          :class="{
            today: day.isToday,
            selected: isSelected(day),
            notCurrentMonth: day.notCurrentMonth
          }"
          @click="selectDate(day.date)"
        >
          {{ day.date.getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CommonLabel } from '@/components/common';

defineProps({
  placeholderText: String,
  labelText: String
});

const selectedDate = ref<Date | null>(null);
const isCalendarOpen = ref(false);
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';

  const day = String(selectedDate.value.getDate()).padStart(2, '0');
  const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0');
  const year = selectedDate.value.getFullYear();

  return `${month}/${day}/${year}`;
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const years = Array.from(
  { length: 101 },
  (_, i) => new Date().getFullYear() - 50 + i
);

const toggleCalendar = () => {
  isCalendarOpen.value = !isCalendarOpen.value;
};

const isSelected = (day: { date: Date }) => {
  return (
    selectedDate.value &&
    day.date.toDateString() === selectedDate.value.toDateString()
  );
};

const selectDate = (date: Date) => {
  selectedDate.value = date;
  isCalendarOpen.value = false;
};

const calendarDays = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear.value,
    currentMonth.value + 1,
    0
  ).getDate();

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({
      date: new Date(
        currentYear.value,
        currentMonth.value,
        i - firstDayOfWeek + 1
      ),
      isToday: false,
      notCurrentMonth: true
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i);
    days.push({
      date,
      isToday: date.toDateString() === new Date().toDateString(),
      notCurrentMonth: false
    });
  }

  const remainingDays = 7 - ((daysInMonth + firstDayOfWeek) % 7);
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(currentYear.value, currentMonth.value + 1, i),
        isToday: false,
        notCurrentMonth: true
      });
    }
  }

  return days;
});
</script>

<style scoped>
.date-picker-container {
  position: relative;
  width: 100%;
}

.date-picker-input {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 5px 0;
  color: #dfdfe1;
  border-bottom: 1px solid #dfdfe1;
  font-size: 14px;
  font-family: sans-serif;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;
}

.date-picker-month-control,
.date-picker-year-control {
  background-color: #2e3137;
  color: white;
  border: none;
  font-size: 14px;
  font-family: sans-serif;
  padding: 5px;
  margin: 5px;
  max-height: 70px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #6c757d #2e3137;
}

.date-picker-month-control::-webkit-scrollbar,
.date-picker-year-control::-webkit-scrollbar {
  width: 8px;
}

.date-picker-month-control::-webkit-scrollbar-thumb,
.date-picker-year-control::-webkit-scrollbar-thumb {
  background-color: #6c757d;
  border-radius: 10px;
}

.date-picker-month-control::-webkit-scrollbar-track,
.date-picker-year-control::-webkit-scrollbar-track {
  background-color: #2e3137;
}

.calendar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #24262c;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 1000;
}

.calendar-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  background-color: #2e3137;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 8px;
}

.calendar-day-name {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #666;
}

.calendar-day {
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.calendar-day.today {
  font-weight: bold;
  color: #007bff;
}

.calendar-day.selected {
  background-color: #007bff;
  color: #fff;
}

.calendar-day.not-current-month {
  color: lightgrey;
}
</style>
