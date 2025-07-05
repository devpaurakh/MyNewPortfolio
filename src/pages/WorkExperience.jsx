import React, { useState, useEffect, useRef } from 'react';

const EducationExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Is section in view:', entry.isIntersecting); // Debug
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const education = [
    {
      institution: "Islington College",
      period: "Secondary Class Honors Degree",
      degree: "Bsc. Mobile Application Development",
      description: "Specialized in Mobile App development, data structures, and algorithm design. Graduated with honors.",
      delay: 0
    },
    {
      institution: "GoldenGate International College",
      period: "3.08 GPA",
      degree: "Science (Physics, Chemistry, Mathematics)",
      description: "Focused on mathematics and science fundamentals. Achieved excellent grades in all subjects.",
      delay: 500
    },
    {
      institution: "New DonBosco Academy",
      period: "3.33 GPA",
      degree: "S.E.E",
      description: "Completed secondary education with strong foundation in core subjects and extracurricular activities.",
      delay: 1000
    }
  ];

  const experiences = [
    {
      company: "Triveni Municipality Office",
      period: "Jul 2023 - Oct 2023",
      role: "Jr.IT personnel - Internship",
      description: "Django, HTML, CSS, JavaScript",
      delay: 0
    },
    {
      company: "Phoenix Solutions Pvt. Ltd.",
      period: "Jul 2024 - Dec 2024",
      role: "Flutter Developer - UI/UX",
      description: "Designed official websites for the Himalayan College of Engineering and the Federal Parliament of Nepal, developed a mobile app for the Parliament, and redesigned the entrance portal for Lumbini Technical University.",
      delay: 500
    },
    {
      company: "Freelancing",
      period: "Jan 2025 - Present",
      role: "Flutter Developer",
      description: "Developed a tourism mobile app for Ratnanagar Municipality to promote local attractions and enhance visitor engagement.",
      delay: 1000
    }
  ];

  return (
    <div id='about' ref={sectionRef} className="min-h-[200vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-20 mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-orange-500">Journey</span>
          </h1>
          <p className="text-xl text-gray-600">Education & Work Experience</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 w-1 bg-gray-300 h-full">
                <div
                  className={`w-full bg-orange-500 transition-all duration-[2000ms] ease-out ${
                    isVisible ? 'h-full' : 'h-0'
                  }`}
                />
              </div>

              {/* Education Items */}
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Dot */}
                    <div className="absolute left-8 transform -translate-x-1/2 z-10">
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-700 ease-out ${
                          isVisible ? 'bg-orange-500 scale-100' : 'bg-gray-300 scale-0'
                        }`}
                        style={{ transitionDelay: `${edu.delay}ms` }}
                      />
                    </div>

                    {/* Card */}
                    <div className="ml-16 w-full">
                      <div
                        className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-105 ${
                          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: `${edu.delay + 200}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                          <span className="text-sm text-orange-500 font-semibold bg-orange-100 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">{edu.degree}</h4>
                        <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 w-1 bg-gray-300 h-full">
                <div
                  className={`w-full bg-orange-500 transition-all duration-[2000ms] ease-out ${
                    isVisible ? 'h-full' : 'h-0'
                  }`}
                />
              </div>

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Dot */}
                    <div className="absolute left-8 transform -translate-x-1/2 z-10">
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-700 ease-out ${
                          isVisible ? 'bg-orange-500 scale-100' : 'bg-gray-300 scale-0'
                        }`}
                        style={{ transitionDelay: `${exp.delay}ms` }}
                      />
                    </div>

                    {/* Card */}
                    <div className="ml-16 w-full">
                      <div
                        className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-105 ${
                          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}
                        style={{ transitionDelay: `${exp.delay + 200}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                          <span className="text-sm text-orange-500 font-semibold bg-orange-100 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">{exp.role}</h4>
                        <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
