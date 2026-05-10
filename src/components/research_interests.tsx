import { interestData } from "@/data/research_interests";

export const ResearchInterests = () => {
    return (
      <div className="w-full flex flex-col my-5">
        {/* 1. 标题：完全对齐 News 的标题结构 */}
        <div className="flex gap-1 justify-start items-end my-2">
          <div className="text-lg font-bold">Research Interests</div>
        </div>
        
        {/* 2. 内容：去掉 text-[1rem] 和 leading-relaxed，保持和 News 默认一致 */}
        <div className="flex justify-start my-2 p-0 text-default-600">
          {interestData.researchInterests}
        </div>
      </div>
    );
  };