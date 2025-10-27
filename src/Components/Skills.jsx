import programmingImg from './../assets/software.png';
import visualizationImg from './../assets/dashboard.png';
import toolsImg from './../assets/computer.png';
import statsImg from './../assets/analysis.png';
import softskillsImg from './../assets/requirements.png';

function Skills() {
  const skills = [
    {
      title: "Programming & Analysis",
      image: programmingImg,
      list: ["Python", "SQL", "Excel"],
    },
    {
      title: "Data Visualization",
      image: visualizationImg,
      list: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
    {
      title: "Libraries & Tools",
      image: toolsImg,
      list: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
    },
    {
      title: "Statistics & Machine Learning",
      image: statsImg,
      list: ["Descriptive Stats", "Regression", "Classification", "Clustering"],
    },
    {
      title: "Soft Skills",
      image: softskillsImg,
      list: ["Problem Solving", "Critical Thinking", "Data Storytelling", "Communication"],
    },
  ];

  return (
    <section id="skill" className="py-16  text-center">
      <h2 className="text-2xl font-bold  mb-8 underline underline-offset-5">Skills</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 ease-in-out"
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold  mb-4">{skill.title}</h3>
            <div className="flex flex-wrap justify-center">
              {skill.list.map((item) => (
                <span
                  key={item}
                  className="bg-blue-100 text-blue-700 px-3 py-1 m-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
