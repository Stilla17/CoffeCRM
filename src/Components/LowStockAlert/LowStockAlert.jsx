import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const LowStockAlert = () => {
    return (
        <Alert className="border-orange-200 bg-orange-50 rounded-xl mt-8">
            <AlertTitle className="flex items-center gap-2 text-[#a73412] text-lg mb-4  border-b border-b-orange-200 pb-4">
                <AlertTriangle className="w-5 h-5 " />
                Low Stock Alert
            </AlertTitle>

            <Card className="border-orange-200 shadow-none">
                <CardContent className="flex items-center justify-between py-4">
                    <div className="text-[#a73412]">
                        <p className="font-semibold">asda</p>
                        <p className="text-[12px]">
                            Current: 0 kg • Minimum: 0 kg
                        </p>
                    </div>

                    <Badge
                        variant="outline"
                        className="border-orange-300 text-[#a73412] bg-orange-50"
                    >
                        Low Stock
                    </Badge>
                </CardContent>
            </Card>
        </Alert>
    );
};

export default LowStockAlert;
