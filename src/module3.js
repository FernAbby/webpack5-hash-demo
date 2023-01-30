import dayjs from "dayjs";

export function formatTime() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}

export function formatDate() {
  return dayjs().format('YYYY-MM-DD');
}

export const ENV = 'Test';