"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function CalculatePage() {
  const [height, setHeight] = useState(180);
  const [values, setValues] = useState({
    problem: 0,
    lowCons: 0,
    min: 0,
    max: 0,
    physical: 0,
  });

  const calculate = (height: number) => {
    const min = (height / 2) * 0.8;
    const max = min * 1.1;
    const physical = max * 1.1;
    const lowCons = min * 0.9;
    const problem = lowCons * 0.9;
    setValues({
      problem,
      lowCons,
      min,
      max,
      physical,
    });
  };

  useEffect(() => {
    calculate(height);
  }, [height]);

  return (
    <div className="block">
      <div className="py-24 sm:py-32 w-full prose dark:prose-invert">
        <h1>Kilo Hesabı</h1>
        <p>İdeal kilonuzu hesaplamak için aşağıya boyunuzu yazınız.</p>
        <Input
          placeholder="Boyunuz"
          value={height}
          type="number"
          onChange={(e) => {
            const height = Number.parseInt(e.target.value);

            if (Number.isInteger(height)) {
              setHeight(height);
            }
          }}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card
            title="Aşağısında gözle görülür sorunlar, saçma konuşmalar"
            value={values.problem}
          />
          <Card
            title="Aşağısında bilinç eski performansta değil"
            value={values.lowCons}
          />
          <Card title="İdeal kiloda dip kısım" value={values.min} />
          <Card title="Üst Sınır" value={values.max} />
          <Card title="Üstünde gözle görülür sıkıntı" value={values.physical} />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className={"flex flex-col items-start justify-start"}>
      <h3>{value.toFixed(1)}</h3>
      <p>{title}</p>
    </div>
  );
}
