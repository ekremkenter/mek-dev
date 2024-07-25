import dayjs from "dayjs";

type Consumption = {
  date: Date;
  km: number;
  liters: number;
  price: number;
};
const consumptions: Consumption[] = [
  {
    date: dayjs("2024-06-28").toDate(),
    km: 244,
    liters: 6.41,
    price: 270,
  },
  {
    date: dayjs("2024-01-11").toDate(),
    km: 182,
    liters: 6.13,
    price: 274,
  },
  {
    date: dayjs("2024-07-25").toDate(),
    km: 243,
    liters: 7.22,
    price: 324,
  },
];

export default consumptions;
