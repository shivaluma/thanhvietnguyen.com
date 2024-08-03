export const siteConfigs = {
  author: "Thanh Viet Nguyen",
  role: "Frontend Engineer",
  description:
    "I build pixel-perfect, engaging, and accessible digital experiences.",

  url: "https://thanhvietnguyen.com",
  social: {
    github: "https://github.com/shivaluma",
    linkedin: "https://www.linkedin.com/in/shivaluma/",
    instagram: "https://www.instagram.com/shivaluma/",
    leetcode: "https://leetcode.com/shivaluma/",
  },
  experiences: [
    {
      time: "May 2023 - Present",
      title: "Frontend Engineer",
      company: "Be Group",
      location: "Ho Chi Minh City, Vietnam",
      hrefs: [
        {
          url: "https://corp.be.com.vn/",
          label: "beforBusiness",
        },
      ],

      stacks: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
  ],
} as const;
