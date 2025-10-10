import { FaCalendarAlt, FaChartLine, FaPencilAlt, FaLaptopCode } from "react-icons/fa";

const WorkProcess = () => {
    const steps = [
    {
      id: 1,
      icon: <FaCalendarAlt />,
      title: "Research",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      active: true,
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Analyze",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      id: 3,
      icon: <FaPencilAlt />,
      title: "Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Launch",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-worksans font-semibold text-gray-900 mb-6">
            Work Process
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-6 rounded-2xl shadow-sm bg-white hover:shadow-md transition 
                ${step.active ? " " : "border-t-4 border-transparent"}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 
                ${step.active ? "bg-brand text-white" : "bg-purple-100 text-brand"}`}
              >
                {step.icon}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess