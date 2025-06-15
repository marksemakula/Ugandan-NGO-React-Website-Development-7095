import React, { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

const initialContent = {
  about: {
    title: "About Women Lens Africa",
    mission: "To empower women and girls in Africa through innovative programs, capacity building, and sustainable development initiatives.",
    vision: "A world where every African woman has equal opportunities to thrive and lead in their communities.",
    description: "Women Lens Africa is a non-governmental organization based in Uganda, dedicated to advancing gender equality and women's empowerment across the continent. We work at the intersection of technology, education, and economic empowerment to create lasting change.",
    values: [
      "Empowerment through education and skills development",
      "Innovation in addressing gender-specific challenges",
      "Community-driven sustainable solutions",
      "Inclusive leadership and participation"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Digital Skills Training",
      description: "Comprehensive digital literacy programs for women entrepreneurs",
      image: "./images/digitalskillstraining.jpg",
      status: "Active"
    },
    {
      id: 2,
      title: "Women in Leadership",
      description: "Leadership development and mentorship programs",
      image: "./images/womeninleadership.jpg",
      status: "Active"
    },
    {
      id: 3,
      title: "Economic Empowerment",
      description: "Microfinance and business development support",
      image: "./images/economic_empowerment.jpg",
      status: "Completed"
    }
  ],
  news: [
    {
      id: 1,
      title: "Women Lens Africa Launches New Digital Initiative",
      content: "We are excited to announce our new digital empowerment program...",
      date: "2024-01-15",
      image: "./images/launch.jpg"
    },
    {
      id: 2,
      title: "Partnership with Local Universities",
      content: "Building strategic partnerships to expand our reach...",
      date: "2024-01-10",
      image: "./images/university.jpg"
    }
  ],
  team: [
    {
      id: 1,
      name: "Ruth Nagudi",
      role: "Co-Founder & Executive Director",
      bio: "Passionate advocate for women's rights with 15+ years of experience",
      image: "./images/RuthNagudi.JPG"
    },
    {
      id: 2,
      name: "Beth Nakayenze",
      role: "Co-founder & Head of Programs",
      bio: "Expert in community development and program implementation",
      image: "./images/BethNakayenze.jpg"
    },
    {
      id: 3,
      name: "Lorna Nagawa",
      role: "Program Manager",
      bio: "Seasoned legal specialist with NGO expertise",
      image: "./images/LornaNagawa1.JPG"
    }
  ],
  impact: {
    womenTrained: 2500,
    programAreas: 8,
    communities: 45,
    partnerships: 25
  }
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(initialContent);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateContent = (section, data) => {
    setContent(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const login = (email, password) => {
    // Simple authentication - in production, use proper authentication
    if (email === "admin@womenlens.africa" && password === "WLA2024Admin!") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <ContentContext.Provider value={{
      content,
      updateContent,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </ContentContext.Provider>
  );
};