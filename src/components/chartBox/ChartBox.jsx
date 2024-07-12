import { Line, LineChart, ResponsiveContainer } from "recharts";
import { chartBoxUser } from "../../utils/data";
const ChartBox = () => {

    const chartData = chartBoxUser.chartData;


    return (
        <div>




            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

export default ChartBox;