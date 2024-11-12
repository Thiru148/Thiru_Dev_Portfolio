/* Change this file to get your personal Porfolio */

// Website related settings
//Home page
const personalData ={
    name:"Thiru",
    fullName:"Thirumala Satharla",
    nickName:"Thiru",
    role:"Full stack developer",
    description:"I'm a full stack developer with a passion for building web applications.",
    resumeLink :"",
    mail:"mailto:dev.thiru30@gmail.com"

}
const education ={
    degrees:[
        {
            clgName: "Sri Venkateswara University College of Engineering, Tirupati",
            specialization:"Mtech-Geotechnical Engineering",
            duration:"2019-2021",
            location:"Tirupati, Andhra Pradesh",
            descriptions: [
                "⚡ Pursued my Masters in Geotechnical engineering.",
                "⚡ Attended many webinars related to geo science and soil mechanics etc.",
                "⚡ I have done my project on finding shear strength parameters of unsaturated soils ",
              ],
            clgUrl:'https://svuniversity.edu.in/'
        },
        {
            clgName: "Jawaharlal Nehru Technological University College of Engineering, Pulivendula",
            specialization:"Civil Engineering",
            duration:"2015-2019",
            location:"Pulivendula, Andhra Pradesh",
            descriptions: [
                "⚡ Pursued my Bachelors of Engineering in Civil Engineering.",
                "⚡ Participated in NSS capms and webinars related to Civil Engineering etc.",
                "⚡ I have done my graduation project on Analysis of Black Spots"
              ],
            clgUrl:'https://jntuacep.ac.in/'
        }
    ]
}
const skillSet = {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
        "⚡ Building responsive website front end using ReactJS/NextJS",
        "⚡ Developing mobile applications using React Native and Android",
        "⚡ Creating application backend in Node, Express and MongoDB",
        "⚡ Integration of third party services such as Firebase for push notifications/ Azure services"
      ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "Express",
            fontAwesomeClassname: "simple-icons:express",
            style: {
              color: "#7377AD",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
            },
          },
          {
            skillName: "jQuery",
            fontAwesomeClassname: "simple-icons:jquery",
            style: {
              color: "#0865A6",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
          {
            skillName: "C",
            fontAwesomeClassname: "simple-icons:c",
            style: {
              color: "#E94E32",
            },
          },
          {
            skillName: "Python",
            fontAwesomeClassname: "simple-icons:python",
            style: {
              color: "#3776AB",
            },
          },
        ],
}
const settings = {
    isSplash: true, // Change this to true if you want to use the splash screen.
    useCustomCursor: true, // Change this to false if you want the good'ol cursor
  };
  
  
  const socialMediaLinks = {
    /* Your Social Media Link */
    github: "https://github.com/Thiru148",
    linkedin: "https://www.linkedin.com/in/satharla-thirumala-929745224/",
    gmail: "mailto:dev.thiru30@gmail.com",
    twitter: "https://twitter.com/Thiruma916098",
    instagram: "https://www.instagram.com/t_h_i_r_u_30/",
  };
  
  const certification = {
    certifications: [
      {
        title: "Kubernetes for Begineers",
        subtitle: "Kubernetes(Udemy)",
        link:"https://www.udemy.com/certificate/UC-d974160e-b295-4404-a331-b3652f4ac19b/",
      },
      {
        title: "Azure Adminstrator",
        subtitle: "AZ-104",
        link:"https://www.credly.com/badges/b62962be-2566-411d-86af-bfe09728863a",
      },
      {
        title: "Azure Fundamentals",
        subtitle: "AZ-900",
        link:"https://www.credly.com/badges/4042f88e-c867-485d-8421-c7f27c448861",
      },
      
      // color_code: "#8C151599",
      // color_code: "#7A7A7A",
      // color_code: "#0C9D5899",
      // color_code: "#C5E2EE",
      // color_code: "#ffc475",
      // color_code: "#g",
      // color_code: "#ffbfae",
      // color_code: "#fffbf3",
      // color_code: "#b190b0",
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "Work, Projects and Volunteership",
    description:
      "I am currently working as Application Developer at TCS. I've mostly done projects on my own and I would love to work in a new environment with better opportunities. I love learning new technologies and create better solutions with my knowledge.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Application Developer",
            company: "Tata Consultancy Services",
            company_url: "https://www.tcs.com/",
            logo_path: "TCS.png",
            duration: "Feb 2022 - Present",
            location: "Office/Work From Home",
            description:
            `Working as Full stack developer.
            Works closely with clients to understand the requirement and provide better solutions.
            Develops new and maintains existing applications.
            Increased productivity and problem-solving skills.
            Our applications uses WAMP/LAMP Stack. Most of my works are related to frontend development and DevOps related tasks.
            `,
            color: "#022b3a",
          },
          {
            title: "Front end Developer (Freelancer)",
            company: "General",
            company_url: "",
            logo_path: "coding.png",
            duration: "Feb 20222 - Present",
            location: "Work From Home",
            description:
            `Designed and developed few web applications for clients.
             Developed mobile application for the same web apps using native Java with webview, Intent and many other features along with Admob for monetization.
             Published those apps in google play store.
            `,
            color: "#022b3a",
          }
        ],
      },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "Projects",
            company: "Online",
            company_url: "",
            logo_path: "cwoc.png",
            duration: "April 2021- Present",
            location: "Work From Home",
            description:
              "Learning and building projects on weekends to better understanding of language and for more Hands-on experience.",
            color: "#4285F4",
          },
          {
            title: "GitHub",
            company: "GitHub",
            company_url: "https://github.com/",
            logo_path: "github.png",
            duration: "Feb 2021 - Present",
            location: "Work from Home",
            description:
            "Learning to contribute to Open Source Community and Open Source Projects.",
            color: "#040f26",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of variety of latest technology & tools. My best experience is to create React Projects, Native and Cross platform mobile apps and NodeJS Backend Projects. Below are some of my projects.",
    avatar_image_path: "projects_image.svg",
  };
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      description:
        "You can contact me from below links. I will try to get back to you as soon as I can. ",
    },
  };
  
  const projects = {
    data: [
      {
        id: "0",
        name: "React Notes App",
        url: "https://github.com/Thiru148/Keep-Notes-App",
        description: "A React Native Notes app with functionalities such as add, edit, delete",
        languages: ["HTML5","CSS3","Javascript","React","Netlify"],
      },
      {
        id: "1",
        name: "ToDo List App",
        url: "https://github.com/Thiru148/Todo-List-App",
        description:
          "A Simple ToDo list app that allows users to add todoitems, delete and mark as completed as functionalities",
          languages: ["HTML5","CSS3","Javascript","React","Netlify"],
      },
      
      {
        id: "2",
        name: "Thiru.Dev",
        url: "https://github.com/Thiru148/Thiru_Dev_Portfolio",
        description:
          "A Personal Portfolio Website that showcases my work and experience. It is hosted on Netlify.",
          languages: ["HTML5","CSS3","Javascript","React","SCSS","Netlify"],
        
      },
    ]
  };
  
  export {
    settings,
    personalData,
    socialMediaLinks,
    skillSet,
    education,
    certification,
    experience,
    projectsHeader,
    contactPageData,
    projects,
  };
  