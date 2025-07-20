import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Send,
  Calendar,
  Database,
  Server,
  Code,
  FileCode,
  GitBranch,
  Terminal,
  Monitor,
} from "lucide-react";
import Chatbot from "@/components/Chatbot";
import Navbar from "@/components/Navbar";
import AnimatedAwards from "@/components/AnimatedAwards";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import MovingBackground from "@/components/MovingBackground";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  // Register section ref
  const registerSection = (id: string, ref: HTMLElement | null) => {
    sectionRefs.current[id] = ref;
  };

  // Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Project animations
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add('visible');
            }, index * 100); // 0.1 second delay
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    projectRefs.current.forEach(project => {
      if (project) projectObserver.observe(project);
    });

    return () => {
      projectRefs.current.forEach(project => {
        if (project) projectObserver.unobserve(project);
      });
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    
    // In production, you would use EmailJS, FormSpree, or similar service
    // or call your own backend API to send the email
    
    // For now, let's simulate the email being sent
    console.log("Sending email to geethasravya.somu11@gmail.com with data:", data);
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MovingBackground />
      <Chatbot />
      <Navbar />
      
      {/* Header Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-400/10 rounded-full filter blur-3xl opacity-40 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="inline-block mb-4 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer
          </div>
          
          <h1 className="typing-effect text-4xl md:text-6xl font-bold tracking-tight mb-6 font-display animate-fade-in" style={{ animationDelay: "0.4s" }}>
            SOMU GEETHA SRAVYA
          </h1>
          
          <div className="role-text mb-6 text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="roles">
              <div>Software Development Engineer</div>
              <div>Java Developer</div>
              <div>Python Developer</div>
              <div>Software Development Engineer</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10 animate-fade-in" style={{ animationDelay: "1s" }}>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="public/SOMUGEETHASRAVYA-SDE-1.5YoE.pdf" 
              className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/70 transition-colors flex items-center gap-1.5"
              download="Somu_Geetha_Sravya_Resume.pdf"
              onClick={() => {
                toast({
                  title: "Resume Downloaded",
                  description: "Thank you for downloading my resume!",
                });
              }}
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a
              href="mailto:geethasravya.somu11@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/somusravya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/geetha-sravya-somu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="tel:+918310340918"
              className="social-icon"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </header>
      
      {/* About Section */}
      <section 
        id="about" 
        ref={(el) => registerSection("about", el)}
        className={cn("py-20 px-4 sm:px-6", isVisible["about"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-primary/20 to-pink-400/20 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full bg-secondary flex items-center justify-center">
                  <img 
                    src="public/facePhoto.png" 
                    alt="Somu Geetha Sravya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-lg mb-4">
                I am Somu Geetha Sravya, a passionate Software Engineer with 1.5+ years of experience in developing scalable and efficient software solutions. Currently, I am working at HSBC Technology India, where I specialize in backend development, automation, and cloud technologies.
              </p>
              <p className="text-lg">
                With a strong foundation in Python, Java, and full-stack development, I thrive on building innovative solutions that enhance performance and user experience. My expertise spans data processing, API development, cloud computing (AWS, Azure), and automation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section 
        id="education" 
        ref={(el) => registerSection("education", el)}
        className={cn("py-20 px-4 sm:px-6 bg-secondary/30", isVisible["education"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Education</h2>
          
          <div className="education-timeline">
            <div className="education-card left">
              <div className="text-sm text-primary font-medium mb-1">2025 - 2027</div>
              <h3 className="text-xl font-bold mb-2">Master of Science in Computer Science</h3>
              <p className="text-muted-foreground mb-2">University of Florida, Gainesville</p>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                In Progress
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="certificate-link">
                  <ExternalLink size={14} /> View Transcript
                </a>
                <a href="#" className="certificate-link">
                  <ExternalLink size={14} /> View Coursework
                </a>
              </div>
            </div>
            
            <div className="education-card right">
              <div className="text-sm text-primary font-medium mb-1">2020 - 2024</div>
              <h3 className="text-xl font-bold mb-2">B.Tech in Computer Science and Engineering</h3>
              <p className="text-muted-foreground mb-2">Nitte Meenakshi Institute of Technology, Bangalore</p>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                CGPA: 3.75/4.0
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="public/sravya_degree_VTU.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Degree Certificate
                </a>
                <a href="public/TRANSCRIPT_SRAVYA.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Transcript
                </a>
              </div>
            </div>
            
            <div className="education-card left">
              <div className="text-sm text-primary font-medium mb-1">2018 - 2020</div>
              <h3 className="text-xl font-bold mb-2">Class 12 (CBSE - PCMC)</h3>
              <p className="text-muted-foreground mb-2">Sri Chaitanya Junior College</p>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Percentage: 86.2%
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="public/12th_marks_CBSE.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Marksheet
                </a>
                <a href="public/12th_pass_CBSE.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </div>
            
            <div className="education-card right">
              <div className="text-sm text-primary font-medium mb-1">2017 - 2018</div>
              <h3 className="text-xl font-bold mb-2">Class 10 (CBSE)</h3>
              <p className="text-muted-foreground mb-2">Sri Chaitanya Techno School</p>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Percentage: 93.6%
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="public/10th_marks_certificate_cbse.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Marksheet
                </a>
                <a href="public/10th_study_srichaitanya.pdf" className="certificate-link">
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        id="skills" 
        ref={(el) => registerSection("skills", el)}
        className={cn("py-20 px-4 sm:px-6", isVisible["skills"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code size={16} />
                </div>
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">
                  <Terminal size={14} /> Python
                </span>
                <span className="skill-badge">
                  <FileCode size={14} /> Java
                </span>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Database size={16} />
                </div>
                Database Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">
                  <Database size={14} /> MySQL
                </span>
                <span className="skill-badge">
                  <Database size={14} /> MongoDB
                </span>
                <span className="skill-badge">
                  <FileCode size={14} /> JDBC
                </span>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Monitor size={16} />
                </div>
                Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">
                  <Code size={14} /> Spring
                </span>
                <span className="skill-badge">
                  <Code size={14} /> SpringBoot
                </span>
                <span className="skill-badge">
                  <Code size={14} /> JavaScript
                </span>
                <span className="skill-badge">
                  <Code size={14} /> ReactJS
                </span>
                <span className="skill-badge">
                  <Server size={14} /> REST API
                </span>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Server size={16} />
                </div>
                Cloud Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">
                  <Server size={14} /> AWS
                </span>
                <span className="skill-badge">
                  <Server size={14} /> Azure
                </span>
                <span className="skill-badge">
                  <Terminal size={14} /> OTX
                </span>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GitBranch size={16} />
                </div>
                Version Control
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">
                  <GitBranch size={14} /> Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Work Experience Section */}
      <section 
        id="experience" 
        ref={(el) => registerSection("experience", el)}
        className={cn("py-20 px-4 sm:px-6 bg-secondary/30", isVisible["experience"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Work Experience</h2>
          
          <div className="space-y-2">
            <div className="work-item" style={{ animationDelay: "0.1s" }}>
              <div className="text-sm text-primary font-medium mb-1">July 2024 - Present</div>
              <h3 className="text-xl font-bold mb-1">Software Development Engineer</h3>
              <p className="text-muted-foreground mb-4">HSBC Technology India, Hyderabad</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Project 1: Technology Resilience Maturity Framework</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Developed an automation tool using Java and Spring to assess overall scores for servicing and aggregation streams across cross-functional team components, covering 45+ levels.</li>
                    <li>Implemented statistical log analysis and memory functionality optimization using Python and various libraries for automated charting and management verification.</li>
                    <li>Resolved 120+ software issues, focusing on feature enhancements, localization, and performance optimization for HSBC website applications.</li>
                    <li>Modernized CI/CD infrastructure using AWS and GitHub Actions, reducing deployment time by 16%.</li>
                    <li>Led log analysis and real-time error monitoring using Grafana and Kibana, reducing error rates by 9% across all components.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Project 2: UKCCM Customer Duty Document Processing Service</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Processed and visualized client-generated XML data using OTX (OpenText Exstream) for text processing and content automation.</li>
                    <li>Utilized DB2 framework for efficient data storage and processing with Java used for API calls, requests, and data processing development.</li>
                    <li>Developed Unix scripts for automation and performed sanity testing to ensure stability and functionality of the code after each development cycle.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Project 3: MI Retail Tool Automation Project</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Developed MI Automation Tool from scratch using Python (Django) for backend and ReactJS for frontend.</li>
                    <li>Automated creation of model sheets and calculation of profit and loss metrics for HSBC's retail sector.</li>
                    <li>Led end-to-end project development from UI/UX enhancement to backend code integration.</li>
                    <li>Improved data accuracy and efficiency, reducing manual intervention and errors by 35% in financial reporting and optimized user experience by creating an intuitive and accessible interface tailored for financial analysis.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="work-item" style={{ animationDelay: "0.3s" }}>
              <div className="text-sm text-primary font-medium mb-1">Feb 2024 - July 2024</div>
              <h3 className="text-xl font-bold mb-1">Software Development Engineer Intern</h3>
              <p className="text-muted-foreground mb-4">CSG System International, Bangalore</p>
              
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Performed ETL operations on JSON data using Golang for telecom services.</li>
                <li>Managed AWS & Azure infrastructure, monitored logs via Kibana & Grafana.</li>
                <li>Automated CI/CD pipelines and Terraform scripting for deployments.</li>
              </ul>
            </div>
            
            <div className="work-item" style={{ animationDelay: "0.5s" }}>
              <div className="text-sm text-primary font-medium mb-1">Jan 2024 - Feb 2024</div>
              <h3 className="text-xl font-bold mb-1">Software Development Intern</h3>
              <p className="text-muted-foreground mb-4">CSG System International, Bangalore</p>
              
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Gained hands-on experience with cloud infrastructure and DevOps practices.</li>
                <li>Worked on data processing pipelines for telecom client applications.</li>
                <li>Collaborated with senior developers on code reviews and best practices.</li>
                <li>Participated in agile development methodologies and sprint planning sessions.</li>
                <li>Contributed to documentation and knowledge sharing within the team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        id="projects" 
        ref={(el) => registerSection("projects", el)}
        className={cn("py-20 px-4 sm:px-6", isVisible["projects"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              ref={el => projectRefs.current[0] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <div className="text-sm inline-flex items-center mb-2 bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Hackathon Runner-Up
                </div>
                <h3 className="text-xl font-bold mb-2">Hospital Management System - HMS</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive hospital management solution for appointment scheduling, doctor management, and reporting.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">HTML</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">CSS</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">JavaScript</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Java</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">JDBC</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => projectRefs.current[1] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <h3 className="text-xl font-bold mb-2">Detection of Alzheimer's Disease using Machine Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Developed a CNN model with 95% accuracy for Alzheimer's detection using brain scan images.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Python</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Jupyter</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">CNN</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">TensorFlow</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>

            <div 
              ref={el => projectRefs.current[2] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <h3 className="text-xl font-bold mb-2">E-Commerce Web Application</h3>
                <p className="text-muted-foreground mb-4">
                  Full-stack e-commerce platform with user authentication, product catalog, and payment integration.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">React</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Node.js</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">MongoDB</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Express</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>

            <div 
              ref={el => projectRefs.current[3] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <h3 className="text-xl font-bold mb-2">Real-time Chat Application</h3>
                <p className="text-muted-foreground mb-4">
                  Built a real-time messaging app with Socket.io, featuring group chats and file sharing capabilities.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Socket.io</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">React</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Node.js</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Firebase</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>

            <div 
              ref={el => projectRefs.current[4] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <h3 className="text-xl font-bold mb-2">Weather Prediction System</h3>
                <p className="text-muted-foreground mb-4">
                  Machine learning model for weather forecasting using historical data and multiple regression algorithms.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Python</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Scikit-learn</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Pandas</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Flask</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>

            <div 
              ref={el => projectRefs.current[5] = el}
              className="project-card project-item group"
            >
              <div className="project-card-hover">
                <h3 className="text-xl font-bold mb-2">Task Management Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborative project management tool with drag-and-drop functionality and team collaboration features.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">React</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
                  <span className="bg-secondary/70 px-2 py-1 rounded text-xs font-medium">Supabase</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/somusravya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section 
        id="publications" 
        ref={(el) => registerSection("publications", el)}
        className={cn("py-20 px-4 sm:px-6 bg-secondary/30", isVisible["publications"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Publications</h2>
          
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Housing Market Intelligence: Data Science for Rental Price Forecasting</h3>
              <p className="text-muted-foreground mb-3">IEEE Conference Paper | June 2023</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ieeexplore.ieee.org/document/10511646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Calendar size={14} /> June 15-17, 2023
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Deep Learning Approaches to Image-Based Species Identification</h3>
              <p className="text-muted-foreground mb-3">Published in ICICACS | April 2024</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ieeexplore.ieee.org/document/10498423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Calendar size={14} /> April 5-7, 2024
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 card-hover">
              <h3 className="text-xl font-bold mb-2">Detection of Alzheimer's Disease using Imaging and ML</h3>
              <p className="text-muted-foreground mb-3">IEEE Conference Certificate | November 2023</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ieeexplore.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Calendar size={14} /> November 10-12, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section 
        id="awards" 
        ref={(el) => registerSection("awards", el)}
        className={cn("py-20 px-4 sm:px-6", isVisible["awards"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Leadership & Awards</h2>
          
          <AnimatedAwards />
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => registerSection("contact", el)}
        className={cn("py-20 px-4 sm:px-6 bg-secondary/30", isVisible["contact"] ? "visible" : "", "section")}
      >
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Contact Info */}
            <div>
              <p className="text-lg mb-6">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:geethasravya.somu11@gmail.com" className="hover:text-primary">
                      geethasravya.somu11@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+918310340918" className="hover:text-primary">
                      +91 8310340918
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/geetha-sravya-somu" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/in/geetha-sravya-somu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/somusravya" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/somusravya
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send Message</h3>

                {/* Replace with your Formspree endpoint */}
                <form 
                  action="https://formspree.io/f/xovljwdy" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white rounded-lg py-3 font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Somu Geetha Sravya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
