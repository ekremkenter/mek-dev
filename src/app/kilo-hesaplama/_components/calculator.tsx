"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export function Calculator() {
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
      <div className="py-12 sm:py-32 w-full prose dark:prose-invert">
        <h1>Kilo Hesaplama</h1>
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

        <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
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
      <h3 className="my-2">{value.toFixed(1)}</h3>
      <p>{title}</p>
    </div>
  );
}
