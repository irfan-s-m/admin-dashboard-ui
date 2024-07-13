import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartBoxUser } from "../../utils/data";
import { Link } from "react-router-dom";
const ChartBox = () => {
    const { title, number, percentage, dataKey, chartData, color } = chartBoxUser;

    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-xl">
                    {title}
                </h3>
                <h2 className="font-semibold text-xl">{number}</h2>
                <Link to='users' className="text-green-600">view all</Link>
            </div>
            <div className="flex flex-col">
                <div>
                    <ResponsiveContainer width="100%" height="100%" aspect={1}>
                        <LineChart width={300} height={100} data={chartData}>
                            <Tooltip
                                contentStyle={{ background: 'transparent', border: 'none' }}
                                labelStyle={{ display: 'none' }}
                                position={{ x: 25, y: 55 }}></Tooltip>
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <h1 className="text-lg"><span className={percentage > 0 ? "text-lime-400" : "text-red-400"}>{percentage}%</span> this month</h1>
            </div>
        </div>

    );
};

export default ChartBox;