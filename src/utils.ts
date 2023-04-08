export function getRandomString(length = 100) {
  return Math.random().toString(36).substring(2).slice(0, length);
}
