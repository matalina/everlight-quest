export function randomFromArray(list: any[]) {
  let max = list.length;
  let index = ((Math.round(Math.random() * 1000) % max) + 1);
  return list[index];
}