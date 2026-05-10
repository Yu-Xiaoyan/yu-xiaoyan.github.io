export type PaperConfig = typeof paperSelectedData;
import {
  Neeko,
  DAMe,
  HyperSED,
  SocialED,
  CLIPDriven,
  MultiExpertAdaptive,
  SpatialMultiSemantic,
  DecoupledGNNs,
  PromptSED,
  Menatqa,
  RelationalPrompt,
  KnowledgeLocalization,
  AutoTIR,
  MultiViewIncongruity,
  AdaptiveDifferentialPrivacy,
  UNOArena,
  TableFilling,
  StructuralEntropy,
  IoTto5G,
  AccountableCredential,
  LifelongIntent, 
} from "./all_paper";

export const paperCategories = [
  {
    category: "Social Event Detection",
    papers: [
      PromptSED,
      HyperSED,
      SocialED,
      RelationalPrompt,
      DAMe,
      AdaptiveDifferentialPrivacy,
    ],
  },
  {
    category: "Large Language Models",
    papers: [
      StructuralEntropy,
      AutoTIR,
      KnowledgeLocalization,
      UNOArena,
      Neeko,
      Menatqa,
      MultiViewIncongruity,
    ],
  },
  {
    category: "Computer Vision & Applications",
    papers: [
      SpatialMultiSemantic,
      CLIPDriven,
      MultiExpertAdaptive,
      DecoupledGNNs,
    ],
  },
];

// flat list for backward compatibility
export const paperSelectedData = paperCategories.flatMap((c) => c.papers);
