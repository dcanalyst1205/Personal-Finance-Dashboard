
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RiskLevel } from "@/lib/data";

interface RiskCardProps {
    title: string;
    description: string;
    riskLevel: RiskLevel;
    volatility: RiskLevel;
    apy: number;
    color?: string;
    fullWidth?: boolean;
}

const levelColors: Record<RiskLevel, string> = {
    Low: "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25 border-emerald-500/20",
    Medium: "bg-orange-500/15 text-orange-500 hover:bg-orange-500/25 border-orange-500/20",
    High: "bg-red-500/15 text-red-500 hover:bg-red-500/25 border-red-500/20",
    Extreme: "bg-purple-500/15 text-purple-500 hover:bg-purple-500/25 border-purple-500/20",
};

export function RiskCard({
    title,
    description,
    riskLevel,
    volatility,
    apy,
    color,
    fullWidth = false,
}: RiskCardProps) {
    return (
        <Card className={cn(
            "border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:border-slate-700",
            fullWidth ? "col-span-1 md:col-span-2 lg:col-span-4" : ""
        )}>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {color && <div className={cn("w-2 h-8 rounded-full", color)} />}
                        <div>
                            <CardTitle className="text-lg font-semibold text-slate-100">{title}</CardTitle>
                        </div>
                    </div>
                    <Badge variant="outline" className={cn("transition-colors", levelColors[riskLevel])}>
                        {riskLevel} Risk
                    </Badge>
                </div>
                <CardDescription className="text-slate-400 pt-1 line-clamp-2">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="space-y-1">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Volatility</p>
                        <p className={cn("font-medium",
                            volatility === 'Low' ? 'text-emerald-400' :
                                volatility === 'Medium' ? 'text-orange-400' :
                                    volatility === 'High' ? 'text-red-400' : 'text-purple-400'
                        )}>{volatility}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Proj. Return (APY)</p>
                        <p className="font-bold text-2xl text-slate-200">{(apy * 100).toFixed(1)}%</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
