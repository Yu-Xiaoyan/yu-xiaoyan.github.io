import { Code } from "@nextui-org/code";

import { PaperFull } from "./paper_full";

import { paperCategories } from "@/data/paper_selected";

export const PapersFull = () => {
  return (
    <div className="flex flex-col items-center  my-5">
      {paperCategories.map((cat) => (
        <div key={cat.category} className="w-full mb-8">
          <div className="text-base font-bold text-default-500 uppercase tracking-wider mb-4">
            {cat.category}
          </div>
          <div className="grid gap-4">
            {cat.papers.map((data) => (
              <PaperFull key={data.title} {...data} />
            ))}
          </div>
        </div>
      ))}
      <br />
      <Code className="uppercase" color="primary">
      Maintain an equanimous mind.
      </Code>
      {/* <Snippet symbol="" variant="bordered">Stay Hungry, Stay Foolish</Snippet> */}
    </div>
  );
};
