import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  

import Med from "../../../public/Med.png"
import Tiny from "../../../public/Tiny.png"
import Port from "../../../public/port.png"
import Doc from "../../../public/Docpng.png"
import Sri from "../../../public/Sripng.png"
import My from "../../../public/MyPort.png"
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Medi Care" ,
      Subtitle: "Angular | ASP .NET | Group",
      content: "Medicare is a Centralized Patient Details System. It is a responsive web-based application",
      backgroundImage: Med,
    },
    {
      icon: RxPencil2,
      title: "Portfolio",
      Subtitle:" NextJS | Tailwind CSS | Individual",
      content: " A Responsive Web Page for a personal portfolio to showcase my experiences.",
      backgroundImage: Port,
    },
    {
      icon: RxDesktop,
      title: "Tiny Care",
      Subtitle:"Flutter | Laravel | Individual | Ongoing",
      content: "This is a Mobile application for baby health care Amazing UI things.",
      backgroundImage: Tiny,
    },
    {
      icon: RxReader,
      title: " Doctor Appointment",
      Subtitle:" Flutter | Laravel | Individual | Ongoing",
      content: "This is a Mobile application for doctor appointment Using Laravel Backend .",
      backgroundImage: Doc,
    },
    {
      icon: RxAccessibility,
      title: " Sri Go",
      Subtitle:"Flutter | Firebase | Google API | Individual | Ongoing",
      content: "Sri Go is a Comprehensive Travel guide App",
      backgroundImage: Sri,
    },
    {
      icon: RxRocket,
      title: " Personal Portfolio",
      Subtitle:" Vite | ReactJS | Individual",
      content: " A Responsive Web Application for a personal portfolio for Me.",
      backgroundImage: My,
    },
  ];
  
  export default ServiceData;
  