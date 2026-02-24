"use client";

import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FinancialProduct } from "@/lib/data";

interface ProjectionCalculatorProps {
    product: FinancialProduct;
}

export function ProjectionCalculator({ product }: ProjectionCalculatorProps) {
    const [years, setYears] = useState([10]);
    const initialInvestment = 10000;

    const data = useMemo(() => {
        const result = [];
        const timeHorizon = years[0];
        for (let i = 0; i <= timeHorizon; i++) {
            // Compound interest: P(1 + r)^t
            const amount = initialInvestment * Math.pow(1 + product.apy, i);
            result.push({
                year: `Year ${i}`,
                amount: Math.round(amount),
                investment: initialInvestment
            });
        }
        return result;
    }, [years, product.apy]);

    const finalAmount = data[data.length - 1].amount;
    const gain = finalAmount - initialInvestment;

    return (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-slate-100">Growth Projection</CardTitle>
                <CardDescription className="text-slate-400">
                    Projected value of a <strong>${initialInvestment.toLocaleString()}</strong> investment over time.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-slate-300">Time Horizon: <span className="text-blue-400 font-bold">{years[0]} Years</span></label>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase">Projected Value</p>
                            <p className="text-xl font-bold text-emerald-400">${finalAmount.toLocaleString()}</p>
                        </div>
                    </div>
                    <Slider
                        value={years}
                        onValueChange={setYears}
                        min={1}
                        max={30}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div className="h-[300px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis
                                dataKey="year"
                                stroke="#64748b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                interval={years[0] > 15 ? 4 : 2}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', color: '#f8fafc' }}
                                itemStyle={{ color: '#3b82f6' }}
                                formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                                formatter={(value) => {
                                    const numericValue = typeof value === "number"
                                        ? value
                                        : typeof value === "string"
                                            ? Number(value)
                                            : 0;

                                    return [`$${Number.isFinite(numericValue) ? numericValue.toLocaleString() : "0"}`, "Value"];
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
