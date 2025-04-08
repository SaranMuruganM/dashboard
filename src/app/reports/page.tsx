
import {PieChart} from '@mui/x-charts/PieChart'

export default function reports(){

    return (
      <section className="mt-[100px] lg:mt-0">
        <h1 className="text-2xl">Quarterly Reports:</h1>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={600}
          height={200}
        />
      </section>
    );
}