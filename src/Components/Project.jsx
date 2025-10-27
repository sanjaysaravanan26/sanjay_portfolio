import fas from './../assets/fasion.png';
import py from './../assets/python.jpg';
import blink from './../assets/blink.jpg';
import house from './../assets/house.png';
import { Github } from 'lucide-react'; // optional: for a clean GitHub icon

function Project() {
  const project = [
    {
      title: "Fashion Recommendation System",
      image: fas,
      link: "https://github.com/sanjaysaravanan26/Fashion-Recommendation-Project",
      about:
        "A content-based recommendation model that suggests similar fashion products based on user preferences using Python, Pandas, Scikit-learn, and Flask.",
    },
    {
      title: "Blinkit Grocery Data Analysis",
      image: py,
      link: "https://github.com/sanjaysaravanan26/Data-Analysis-Project-using-Python-Pandas-",
      about:
        "Analyzed Blinkit’s grocery dataset using Pandas, Matplotlib, and Seaborn to explore item types, outlet performance, and sales distribution trends.",
    },
    {
      title: "House Rent Price Prediction",
      image: house,
      link: "https://github.com/sanjaysaravanan26/-PREDICTING-HOUSE-RENT-PRICES-WITH-ADVANCED-ML-MODELS",
      about:
        "Built a machine learning web app to estimate house rent based on inputs like bedrooms, bathrooms, square footage, and location using regression models.",
    },
    {
      title: "Blinkit Power BI Dashboard",
      image: blink,
      link: "https://github.com/sanjaysaravanan26/PowerBI_project",
      about:
        "Developed an interactive Power BI dashboard analyzing Blinkit’s retail performance across outlet types, sizes, and product categories.",
    },
  ];

  return (
    <section id="projects" className="py-20  text-center">
      <h2 className="text-2xl font-bold  mb-12 underline underline-offset-8 ">
         Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-12">
        {project.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-56 h-56 mx-auto mb-4 rounded-xl object-cover border border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {item.about}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              <Github size={18} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
