// steps.js
import { FaCalendarAlt, FaChartLine, FaPencilAlt, FaLaptopCode } from "react-icons/fa";
import { Search, BarChart3, PenTool, Rocket } from "lucide-react";

export const steps = [
  {
  id: 1,
  icon: FaCalendarAlt,
  title: "Research",
  text: "I begin by understanding client goals, user needs, and project scope to build a clear development roadmap.",
  active: true,
},
{
  id: 2,
  icon: FaChartLine,
  title: "Analyze",
  text: "I plan the architecture, choose the right stack, and structure the database and APIs for smooth development.",
},
{
  id: 3,
  icon: FaPencilAlt,
  title: "Design",
  text: "I create clean, responsive interfaces using Tailwind CSS and Bootstrap for a seamless user experience.",
},
{
  id: 4,
  icon: FaLaptopCode,
  title: "Launch",
  text: "I test, deploy, and monitor the application, ensuring top performance and scalability post-launch.",
},

];



export const steps1 = [
  {
    id: "1",
    title: "Research",
    text: "Understand goals and user needs to define the roadmap.",
    icon: Search,
  },
  {
    id: "2",
    title: "Analyze",
    text: "Plan architecture, database, APIs, and technology stack.",
    icon: BarChart3,
  },
  {
    id: "3",
    title: "Design",
    text: "Build responsive and intuitive user interfaces.",
    icon: PenTool,
  },
  {
    id: "4",
    title: "Launch",
    text: "Test, deploy, and monitor performance.",
    icon: Rocket,
  },
];
