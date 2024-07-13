import { Line, LineChart, ResponsiveContainer } from "recharts";
import { chartBoxUser } from "../../utils/data";
import { Link } from "react-router-dom";
const ChartBox = () => {

    const chartData = chartBoxUser.chartData;

    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-xl">
                    Total Users
                </h3>
                <h2 className="font-semibold text-xl">11,238</h2>
                <Link to='/' className="text-green-600">view all</Link>
            </div>
            <div>
                <ResponsiveContainer width="100%" height="100%" aspect={1}>
                    <LineChart width={300} height={100} data={chartData}>
                        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default ChartBox;