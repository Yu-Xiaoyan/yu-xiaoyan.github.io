export type NewsConfig = typeof newsData;
import { Image } from "@nextui-org/image";

import NTU from "@/assets/img/ntu.png";
import NExT from "@/assets/img/next.png";

export const newsData = [
  {
    type: "",
    date: "1-May-2026",
    event: <>Two papers are accepted by ICML 2026!</>,
  },
  {
    type: "",
    date: "30-Apr-2026",
    event: (
      <>
        I am joining <strong style={{ display: "contents" }}>NTU</strong>{" "}
        <Image
          alt="NTU"
          height={16}
          radius="none"
          src={NTU}
          style={{ padding: "0 3px" }}
          width={22}
        />{" "}
        as a Postdoctoral Research Fellow!
      </>
    ),
  },
  {
    type: "",
    date: "7-Apr-2026",
    event: <>One paper is accepted by ACL 2026!</>,
  },
  {
    type: "",
    date: "8-Nov-2025",
    event: <>Two papers are accepted by AAAI 2026!</>,
  },
  {
    type: "",
    date: "24-Oct-2025",
    event: <>One paper is accepted by WSDM 2026!</>,
  },
  {
    type: "",
    date: "24-Oct-2025",
    event: <>One paper is accepted by CIKM 2025!</>,
  },
  {
    type: "",
    date: "11-Oct-2025",
    event: <>I'm selected for the National Scholarship!</>,
  },
  {
    type: "",
    date: "19-Sep-2025",
    event: <>One paper is accepted by NeurIPS 2025!</>,
  },
  {
    type: "",
    date: "12-Sep-2025",
    event: <>One demo system is selected as the Best Demo🏆 at APWeb-WAIM 2025!</>,
  },
  {
    type: "",
    date: "16-Aug-2025",
    event: <>One paper is accepted by TMM!</>,
  },
  {
    type: "",
    date: "29-Apr-2024",
    event: <>One paper is accepted by IJCAI 2025!</>,
  },
  {
    type: "",
    date: "12-Mar-2025",
    event: (
      <>
        I'm joining{" "}
        <Image
          alt="NExT"
          height={16}
          radius="none"
          src={NExT}
          style={{ padding: "0 3px" }}
          width={64}
        />{" "}
        as a visiting Ph.D. student!
      </>
    ),
  },
  {
    type: "",
    date: "7-Dec-2024",
    event: <>One paper is accepted by TCSVT!</>,
  },
  {
    type: "",
    date: "10-Dec-2024",
    event: <>One paper is accepted by AAAI 2025 as oral!</>,
  },
  {
    type: "",
    date: "7-Nov-2024",
    event: <>One paper is accepted by TMM!</>,
  },
  {
    type: "",
    date: "20-Sep-2024",
    event: <>Two papers are accepted by EMNLP 2024!</>,
  },
  {
    type: "",
    date: "16-Jun-2024",
    event: <>Four papers are accepted by CIKM 2024!</>,
  },
];
