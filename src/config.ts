export const personalInfo = {
  name: "方星雨",
  role: "算法工程师",
  about: "现任中国科学院杭州医学研究所算法工程师。硕士毕业于荷兰瓦赫宁根大学生物系统工程专业，期间致力于研究计算机视觉在农业领域的创新应用。毕业后从事AI药物研发工作，专注于小分子、蛋白质及核酸适配体的结构预测与生成模型，并具备分子动力学方面的研究经验。目前的研究重点为mRNA肿瘤疫苗设计的算法开发。",
  skills: [
    { name: "Python", level: 95 },
    { name: "MATLAB", level: 85 },
    { name: "R", level: 80 },
    { name: "Microsoft Office", level: 95 },
    { name: "AutoCAD", level: 80 },
    { name: "GROMACS", level: 75 },
  ],
  projects: [
    {
      title: "PCR偏好模型优化SELEX中序列亲和力指征",
      description: "构建模型以量化PCR偏好带来的噪声，以便排除其影响。",
      tags: ["SELEX", "CNN", "PCR bias"],
      link: "#"
    },
    {
      title: "全原子级别小分子结构预测",
      description: "提出一种等变图神经网络的框架以极少推理步骤高效生成高质量分子三维构象，并在精度与效率上优于扩散模型。",
      tags: ["Boosting", "Equivariant", "Transformer", "small molecules", "3D conformation"],
      link: "#"
    },
    {
      title: "人工智能驱动的多价肿瘤mRNA疫苗全链设计与优化",
      description: "mRNA全链多区域协同优化设计",
      tags: ["neoantigens", "multi-valent vaccine", "5‘UTR design", "3’UTR design", "CDS optimization", "function prediction"],
      link: "#"
    }
  ],
  contact: {
    email: "xingyu.fang99@gmail.com",
    linkedin: "https://www.linkedin.com/in/xingyu-fang-22453520b",
    github: "https://github.com/XingyuFang99"
  }
};
