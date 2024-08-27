import dayjs from "dayjs";

type Consumption = {
  date: Date;
  km: number;
  liters: number;
  price: number;
};

export async function getConsumptions() {
  const response = await fetch(process.env.CONSUMPTIONS_ENDPOINT!, {
    headers: [["X-DataSource-Auth", "true"]],
  });

  const data = await response.json();
  const consumptions = data.rows.map((row: any) => ({
    ...row,
    date: dayjs(row.date).toDate(),
  })) as Consumption[];
  return consumptions;
}
