export type ProfileConfig = typeof profileData;

import profilePhoto from "@/assets/casia.jpg";

export const profileData = {
  name: "Xiaoyan Yu",
  name_zh: "余笑岩",
  note: "Postdoctoral Research Fellow at Nanyang Technological University",
  photo: profilePhoto,
  description: (
    <>
      Hi, I am{" "}
      <span style={{
        fontFamily: "Oleo Script",
        fontSize: "1.1rem",
        color: "#0c58ac"
      }}>
        Xiaoyan Yu
      </span>
      , a postdoctoral research fellow at <strong>Nanyang Technological University (NTU)</strong>, advised by <a href="https://statnlp.com/people/luwei/" style={{ fontWeight: "bold" }} target="_blank">Prof. Lu Wei</a>. 
      I received my Ph.D. degree at <strong>Beijing Institute of Technology</strong>, advised by <span style={{ fontWeight: "bold" }}>Prof. Zhu Liehuang</span>.  
      During 2025 to 2026, I was a visiting Ph.D. student at <a href="https://www.nextcenter.org/" style={{ fontWeight: "bold" }} target="_blank">NExT++ Research Centre</a> at NUS, advised by <a href="https://www.chuatatseng.com/" style={{ fontWeight: "bold" }} target="_blank">Prof. Chua Tat-Seng</a> and <a href="https://mysbupt.github.io/" style={{ fontWeight: "bold" }} target="_blank">Prof. Ma Yunshan</a>.
      <br />
      <br />
      My research primarily focuses on{" "}
      <span style={{
        fontFamily: "Oleo Script",
        fontSize: "1.1rem",
        color: "#0c58ac"
      }}>
        Natural Language Processing
      </span>
      .
      {" "}I am always open to new collaborations and discussions. If you'd like to discuss potential collaborations, feel free to reach out!
    </>
  ),
  institute: ["College of Computing and Data Science", "Nanyang Technological University"],
  email: "xiaoyan.yu@ntu.edu.sg",
  location: "Singapore",
};
