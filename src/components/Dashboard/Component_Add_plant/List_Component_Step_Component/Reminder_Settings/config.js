import {
  IconsSun,
  IconsCloudy,
  IconsRainy,
  IconsStormy,
} from "@/utils/Component-Icons-Reminder-settings";

export const EACHS = [
  {
    title: "Day",
    value: "days",
  },
  {
    title: "Week",
    value: "weeks",
  },
  {
    title: "Month",
    value: "months",
  },
];

export const UNITS = [
  {
    title: "Liter",
    value: "liter",
  },
  {
    title: "Milliliter",
    value: "milliliter",
  },
];

export const WEATHERS = [
  {
    icons: <IconsSun />,
    title: "Bright Sun",
  },
  {
    icons: <IconsCloudy />,
    title: "Part Cloudy Sun",
  },
  {
    icons: <IconsRainy />,
    title: "Rainy",
  },
  {
    icons: <IconsStormy />,
    title: "Stormy Rain",
  },
];
