import { Code } from "@nextui-org/code";

import { Paper } from "./paper";

import { paperCategories } from "@/data/paper_selected";

export const Papers = () => {
  return (
    <div className="flex flex-col items-center my-5">
      {paperCategories.map((cat) => (
        <div key={cat.category} className="w-full mb-6">
          <div className="text-sm font-bold text-default-500 uppercase tracking-wider mb-3">
            {cat.category}
          </div>
          <div className="grid gap-4">
            {cat.papers.map((data) => (
              <Paper key={data.title} {...data} />
            ))}
          </div>
        </div>
      ))}

      <br />
      <center style={{ fontFamily: "Oleo Script" }}>&quot;Maintain an equanimous mind.&quot;</center>
    </div>
  );
};
