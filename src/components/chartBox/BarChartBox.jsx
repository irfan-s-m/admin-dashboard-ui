import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { barChartBoxVisit } from "../../utils/data";

const BarChartBox = () => {
    const { title, color, dataKey, chartData } = barChartBoxVisit;
    return (
        <div>
            <h1 className="text-lg">{title}</h1>
            <div>
                <ResponsiveContainer width="100%" height="100%" aspect={1}>
                    <BarChart data={chartData}>
                        <Tooltip
                            contentStyle={{ background: 'none', border: 'none' }}
                            labelStyle={{ display: 'none' }}
                            position={{ x: 95, y: -38 }}
                        ></Tooltip>
                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartBox;