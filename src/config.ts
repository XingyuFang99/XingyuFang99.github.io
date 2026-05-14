export const personalInfo = {
  name: "方星雨",
  role: "算法工程师 / 中国科学院杭州医学研究所",
  about: "现任中国科学院杭州医学研究所算法工程师。硕士毕业于荷兰瓦赫宁根大学生物系统工程专业，期间致力于研究计算机视觉在农业领域的创新应用。毕业后从事AI药物研发工作，专注于小分子、蛋白质及核酸适配体的结构预测与生成模型，并具备分子动力学方面的研究经验。目前的研究重点为mRNA肿瘤疫苗设计的算法开发。",
  skills: [
    { name: "Python", level: 95 },
    { name: "Deep Learning", level: 95 },
    { name: "MATLAB", level: 80 },
    { name: "GROMACS / MD", level: 80 },
    { name: "R / Statistics", level: 80 },
    { name: "Algorithms Development", level: 90 },
  ],
  projects: [
    {
      title: "PCR偏好驱动的SELEX序列亲和力噪声消除模型",
      description: "通过构建高精度PCR偏好量化模型，有效剥离SELEX过程中的实验噪声，实现对核酸序列亲和力的精准指征，提升了适配体筛选的成功率与效率。",
      tags: ["Bio-Informatics", "CNN", "PCR Bias Correction", "Aptamer Selection"],
      link: "#"
    },
    {
      title: "基于等变图神经网络的小分子全原子三维结构预测",
      description: "提出一种全新的等变框架，通过极简的推理步骤高效生成高质量分子构象。该方法在预测精度与计算效率上均显著优于传统扩散模型，为AI辅助药物设计提供了核心技术支撑。",
      tags: ["Deep Learning", "Equivariant Graph Neural Networks", "Conformation Generation", "CADD"],
      link: "#"
    },
    {
      title: "AI驱动的多价肿瘤mRNA疫苗全链协同优化系统",
      description: "面向新一代肿瘤疫苗开发，构建了涵盖5'UTR、3'UTR设计及CDS区优化的全链条协同设计平台，实现了mRNA功能预测与结构的精准调控。",
      tags: ["Cancer Vaccine", "mRNA Design", "LLM", "MCTS", "AI Agents"],
      link: "#"
    }
  ],
  contact: {
    email: "xingyu.fang99@gmail.com",
    linkedin: "https://www.linkedin.com/in/xingyu-fang-22453520b",
    github: "https://github.com/XingyuFang99"
  }
};
