
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  type: "user" | "bot";
  text: string;
}

const INITIAL_MESSAGE: Message = {
  type: "bot",
  text: "Hi there! I'm Sravya's virtual assistant. Ask me anything about her experience, skills, education, or current employment status!"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = { type: "bot", text: getBotResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("experience") || q.includes("work")) {
      return "Sravya has over 1 year of professional experience. She currently works as a Software Development Engineer at HSBC Technology India in Hyderabad. She also completed an internship at CSG System International in Bangalore.";
    } else if (q.includes("skill") || q.includes("technologies") || q.includes("programming")) {
      return "Sravya's technical skills include: Programming Languages (Python, Java), Web Technologies (Spring, SpringBoot, JavaScript, ReactJS, REST API), Database Management (MySQL, MongoDB, JDBC), Cloud Technologies (AWS, Azure, OTX), and Version Control (Git).";
    } else if (q.includes("education") || q.includes("degree") || q.includes("qualification")) {
      return "Sravya holds a B.Tech in Computer Science and Engineering from Nitte Meenakshi Institute of Technology, Bangalore with a CGPA of 9.38/10. She completed her Class 12 from Sri Chaitanya Junior College with 86.2% and Class 10 from Sri Chaitanya Techno School with 93.6%.";
    } else if (q.includes("current") || q.includes("job") || q.includes("employ") || q.includes("working")) {
      return "Sravya is currently employed as a Software Development Engineer at HSBC Technology India in Hyderabad, where she started in July 2024. She works on data processing, API development, and automation.";
    } else if (q.includes("project") || q.includes("portfolio")) {
      return "Sravya has worked on several notable projects including a Hospital Management System, which was a Hackathon Runner-Up, and an Alzheimer's Disease Detection system using Machine Learning that achieved 95% accuracy. You can find more details in the Projects section of her portfolio.";
    } else if (q.includes("publication") || q.includes("research") || q.includes("paper")) {
      return "Sravya has published multiple research papers including 'Housing Market Intelligence: Data Science for Rental Price Forecasting' (IEEE), 'Deep Learning Approaches to Image-Based Species Identification' (ICICACS 2024), and 'Detection of Alzheimer's Disease using Imaging and ML' (IEEE).";
    } else if (q.includes("award") || q.includes("achievement") || q.includes("recognition")) {
      return "Sravya has received several awards including the Most Recognized Intern Award at CSG System International, Runner-Up at HSBC Code Grind Hackathon, and ranked 6th in the CSE department at NMIT. She was also the Head of Sponsorships for the Venture Tank Club at NMIT.";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! How can I help you learn more about Sravya today?";
    } else if (q.includes("thank") || q.includes("thanks")) {
      return "You're welcome! Feel free to ask if you have any other questions about Sravya's background or skills.";
    } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
      return "You can contact Sravya via email at geethasravya.somu11@gmail.com, phone at +91 8310340918, or connect with her on LinkedIn at linkedin.com/in/geetha-sravya-somu.";
    } else {
      return "I'm not sure I understand that question. Feel free to ask about Sravya's experience, skills, education, projects, publications, or current employment!";
    }
  };

  return (
    <>
      <button 
        className="chatbot-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
      >
        <MessageSquare />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="bg-background rounded-xl shadow-xl w-full max-w-md h-[500px] flex flex-col animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <MessageSquare size={16} />
                </div>
                <h3 className="font-medium">Sravya's Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "max-w-[80%] p-3 rounded-xl animate-fade-in",
                    msg.type === "user" 
                      ? "bg-primary text-white ml-auto rounded-tr-none" 
                      : "bg-secondary text-secondary-foreground rounded-tl-none"
                  )}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-2 px-4 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                disabled={!input.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
