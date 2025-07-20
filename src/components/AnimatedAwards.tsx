
/*
import { useEffect, useRef } from 'react';
import { Award, Image as ImageIcon } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface AwardItem {
  title: string;
  organization: string;
  category: string;
  image?: string;
}

const awards: AwardItem[] = [
  { 
    title: "Most Recognized Intern Award",
    organization: "CSG System International",
    category: "Recognition",
    image: "/csg.png" // Replace with your actual image path
  },
  { 
    title: "HSBC Code Grind Hackathon (Runner-Up)",
    organization: "HSBC Technology India",
    category: "Hackathon",
    image: "/hsbcHackathon.JPG" // Replace with your actual image path
  },
  { 
    title: "CSE Rank 6th in College",
    organization: "NMIT",
    category: "Academic",
    image: "/rank6.png" // Replace with your actual image path
  },
  { 
    title: "Head of Sponsorships (Venture Tank Club)",
    organization: "NMIT",
    category: "Leadership",
    image: "/VT.png" // Replace with your actual image path
  }
];

const AnimatedAwards = () => {
  const awardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    awardRefs.current = awardRefs.current.slice(0, awards.length);

    // Function to check if an element is in viewport
    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to add animation with delay based on index
    const animateAwards = () => {
      awardRefs.current.forEach((award, index) => {
        if (award && isInViewport(award)) {
          setTimeout(() => {
            award.classList.add('visible');
          }, index * 100); // 0.1 second delay between each item
        }
      });
    };

    // Run on mount
    animateAwards();

    // Add scroll event listener
    window.addEventListener('scroll', animateAwards);
    
    return () => {
      window.removeEventListener('scroll', animateAwards);
    };
  }, []);

  // Generate random doodle elements
  const generateDoodles = (index: number) => {
    const doodles = [];
    const colors = ['hsl(var(--primary)/0.2)', 'hsl(var(--primary)/0.3)', 'hsl(var(--primary)/0.1)'];
    
    for (let i = 0; i < 3; i++) {
      const size = 20 + Math.random() * 40;
      const top = Math.random() * 100;
      const right = Math.random() * 40 + 60;
      const delay = Math.random() * 5;
      
      doodles.push(
        <div 
          key={`doodle-${index}-${i}`}
          className="doodle-circle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            right: `${right}px`,
            animationDelay: `${delay}s`,
            borderColor: colors[i % colors.length]
          }}
        />
      );
    }
    
    return doodles;
  };

  return (
    <div className="award-path relative py-6">
      <div className="path-line"></div>
      
      {awards.map((award, index) => (
        <div
          key={index}
          ref={el => awardRefs.current[index] = el}
          className="award-item ml-8 md:ml-[calc(50%-150px)]"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            {award.image && (
              <div className="doodle-frame">
                <div className="award-image">
                  <AspectRatio ratio={4/3} className="w-full h-auto overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </AspectRatio>
                </div>
              </div>
            )}
            
            <div>
              <div className="text-sm text-primary font-medium mb-1">{award.category}</div>
              <h3 className="text-lg font-bold mb-1">{award.title}</h3>
              <p className="text-muted-foreground">{award.organization}</p>
            </div>
          </div>
          
          {generateDoodles(index)}
        </div>
      ))}
    </div>
  );
};

export default AnimatedAwards;
*/



import { useEffect, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface AwardItem {
  title: string;
  organization: string;
  category: string;
  image?: string;
}

const awards: AwardItem[] = [
  { 
    title: "Most Recognized Intern Award",
    organization: "CSG System International",
    category: "Recognition",
    image: "/csg.png"
  },
  { 
    title: "HSBC Code Grind Hackathon (Runner-Up)",
    organization: "HSBC Technology India",
    category: "Hackathon",
    image: "/hsbcHackathon.JPG"
  },
  { 
    title: "CSE Rank 6th in College",
    organization: "NMIT",
    category: "Academic",
    image: "/rank6.png"
  },
  { 
    title: "Head of Sponsorships (Venture Tank Club)",
    organization: "NMIT",
    category: "Leadership",
    image: "/VT.png"
  }
];

const AnimatedAwards = () => {
  const awardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    awardRefs.current = awardRefs.current.slice(0, awards.length);

    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const animateAwards = () => {
      awardRefs.current.forEach((award, index) => {
        if (award && isInViewport(award)) {
          setTimeout(() => {
            award.classList.add('visible');
          }, index * 100);
        }
      });
    };

    animateAwards();
    window.addEventListener('scroll', animateAwards);

    return () => {
      window.removeEventListener('scroll', animateAwards);
    };
  }, []);

  const generateDoodles = (index: number) => {
    const doodles = [];
    const colors = ['hsl(var(--primary)/0.2)', 'hsl(var(--primary)/0.3)', 'hsl(var(--primary)/0.1)'];
    for (let i = 0; i < 3; i++) {
      const size = 20 + Math.random() * 40;
      const top = Math.random() * 100;
      const right = Math.random() * 40 + 60;
      const delay = Math.random() * 5;
      doodles.push(
        <div 
          key={`doodle-${index}-${i}`}
          className="doodle-circle absolute border rounded-full animate-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            right: `${right}px`,
            animationDelay: `${delay}s`,
            borderColor: colors[i % colors.length]
          }}
        />
      );
    }
    return doodles;
  };

  return (
    <div className="award-path relative py-6">
      <div className="path-line absolute left-4 top-0 bottom-0 w-1 bg-primary/20"></div>
      
      {awards.map((award, index) => (
        <div
          key={index}
          ref={el => awardRefs.current[index] = el}
          className="award-item ml-8 md:ml-[calc(50%-150px)] opacity-0 transition-opacity duration-500 ease-in-out"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="relative w-[150px] h-[110px] shrink-0 rounded-md overflow-hidden border bg-muted">
              <AspectRatio ratio={4/3}>
                <img 
                  src={award.image || "/placeholder.png"} 
                  alt={award.title} 
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
              </AspectRatio>
              {generateDoodles(index)}
            </div>

            <div>
              <div className="text-sm text-primary font-medium mb-1">{award.category}</div>
              <h3 className="text-lg font-bold mb-1">{award.title}</h3>
              <p className="text-muted-foreground">{award.organization}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedAwards;

