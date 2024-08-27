import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { getConsumptions } from "./_components/consumptions";
import accessories from "./_components/accessories";
import { Gallery } from "./_components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RKS Freccia 150",
  description: "RKS Freccia 150 hakkında bilgiler.",
};

export default async function Page() {
  const consumptions = await getConsumptions();
  return (
    <div>
      <Gallery />
      <div className="lg:w-2/3 m-auto flex flex-col gap-4">
        <h1 className="text-4xl font-bold">RKS Freccia 150</h1>
        <p>
          31 Mayıs 2024&apos;de Uçar Motor&apos;dan peşin 131.000₺&apos;ye
          aldım.
        </p>
        <p>
          Quick sigorta ile 5.072₺&apos;ye sigortaladım. Ehliyet alışından motor
          seçimine kadar çok mesai geçirdiğimiz, sonrasında motor almaktan
          vazgeçen, ama motor sürme keyfine sebep olan İbrahim&apos;e sevgiler.
        </p>
        <Link href="https://www.rksmotor.com.tr/model/freccia-150.html">
          RKS Linki
        </Link>
        <Link href="https://drive.google.com/file/d/1n169LhJYlH9ZJe54P0PPxc5V43MdUFO-/view">
          Kullanım Kılavuzu
        </Link>
        <div>
          <h2 className="text-2xl font-bold my-2">Tüketimlerim</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tarih</TableHead>
                <TableHead>Alınan Litre</TableHead>
                <TableHead>Ücret ₺</TableHead>
                <TableHead>Gidilen KM</TableHead>
                <TableHead>KM&apos;de ₺</TableHead>
                <TableHead>LT/100 KM Tüketim</TableHead>
                <TableHead>Motor KM</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consumptions.map((consumption, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {consumption.date.toLocaleDateString("tr-TR")}
                  </TableCell>
                  <TableCell>{consumption.liters.toFixed(2)}</TableCell>
                  <TableCell>{consumption.price}₺</TableCell>
                  <TableCell>{consumption.km}</TableCell>
                  <TableCell>
                    {(consumption.price / consumption.km).toFixed(2)}₺
                  </TableCell>
                  <TableCell>
                    {((consumption.liters / consumption.km) * 100).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {consumptions
                      .slice(0, index + 1)
                      .reduce((acc, consumption) => acc + consumption.km, 0)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-2">Aksesuarlarım</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İsim</TableHead>
                <TableHead>Marka</TableHead>
                <TableHead>Özellik</TableHead>
                <TableHead className="text-right">Fiyat</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessories.map((accessory, index) => (
                <TableRow key={index}>
                  <TableCell>{accessory.name}</TableCell>
                  <TableCell>{accessory.make}</TableCell>
                  <TableCell>{accessory.size}</TableCell>
                  <TableCell className="text-right">
                    {accessory.price.toLocaleString()}₺
                  </TableCell>
                  <TableCell>
                    <Link href={accessory.link}>Link</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
