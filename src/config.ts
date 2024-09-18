interface SiteConfig {
  author: string;
  role: string;
  description: string;
  url: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    leetcode: string;
  };
  experiences: {
    duration: string;
    title: string;
    company: string;
    company_url: string;
    description: string;
    location: string;
    hrefs: {
      url: string;
      label: string;
    }[];
    stacks: string[];
  }[];
}

export const siteConfigs: SiteConfig = {
  author: "Thanh Viet Nguyen",
  role: "Senior Full Stack Software Engineer",
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
      duration: "2023 - Present" as string,
      title: "Frontend Engineer",
      company: "Be Group",
      location: "Ho Chi Minh City, Vietnam",
      company_url: "https://be.com.vn/",
      description:
        "Build and maintain be for Web, a web application that helps users to conveniently book a ride using web technology like browser and webview. Work closely with cross-functional teams, including developers, designers, and product managers, to ensure the best user experience and performance.",
      hrefs: [
        {
          url: "https://nhandan.vn/be-chinh-thuc-ra-mat-tinh-nang-dat-xe-tren-zalo-mini-app-post785485.html",
          label: "be on Zalo",
        },
        {
          url: "https://corp.be.com.vn/",
          label: "beforBusiness",
        },
      ],

      stacks: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Framer Motion",
        "Zustand",
      ],
    },
    {
      duration: "2020 - 2023",
      title: "Fullstack Software Engineer",
      company: "Kobiton",
      location: "Atlanta, Georgia, United States",
      description:
        "As a Fullstack Software Engineer, I was responsible for building and maintaining the Kobiton platform, a mobile testing platform that allows users to test their mobile applications on real devices. By fixing bugs, adding new features, and improving the platform's performance, I helped to ensure that our customers had a seamless experience.",
      company_url: "https://kobiton.com/",
      hrefs: [
        {
          url: "https://kobiton.com/",
          label: "Kobiton",
        },
      ],

      stacks: ["React", "TypeScript", "NodeJS", "Kafka", "AWS"],
    },
  ],
} as const;
