export function FormatDate(date) {
  const FormatDate = new Date(date);
  const day = FormatDate.getDate();
  const month = FormatDate.toLocaleString("id-ID", { month: "long" });
  const year = FormatDate.getFullYear();
  return `${day} ${month} ${year}`;
}
