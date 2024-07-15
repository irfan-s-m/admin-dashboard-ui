import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { pieChartData } from "../../utils/data";

const PieChartBox = () => {
    const data = pieChartData;
    const chartColor = pieChartData.map(data => data.color)
    const color = [...chartColor];
    return (
        <div className="flex flex-col gap-2">
            <div>
                <h1 className="text-xl font-semibold">Leads by Source</h1>
            </div>
            <div>
                <ResponsiveContainer width="100%" height="100%" aspect={0.75}>
                    <PieChart>
                        <Tooltip
                        contentStyle={{background:'white', border:'none', borderRadius:'30px'}}></Tooltip>
                        <Pie
                            data={data}
                            innerRadius={75}
                            outerRadius={95}
                            fill={color}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 mt-8">
                {
                    data.map((data, idx) => <div className="flex gap-4 items-center" key={idx}>
                        <span>.</span>
                        <div className="">
                        <p>{data.name}</p>
                        <p>{data.value}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PieChartBox;