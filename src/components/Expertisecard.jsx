// components/ExpertiseCard.jsx

const ExpertiseCard = () => {
  const skills = [
    { name: 'BACKEND', percentage: 88 },
    { name: 'DATABASE', percentage: 85 },
    { name: 'FRONTEND', percentage: 90 },
  ];

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 w-80 border border-gray-800 shadow-2xl">
      <h3 className="text-white font-semibold mb-6 text-lg">MY EXPERTISE</h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              <span className="text-white text-sm font-semibold">{skill.percentage}%</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full relative transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;