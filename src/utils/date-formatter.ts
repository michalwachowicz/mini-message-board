export default function formatDate(date: Date): string {
  const [day, time] = date.toISOString().split("T");
  const [hours, minutes] = time.split(":");

  return `${day} ${hours}:${minutes}`;
}
