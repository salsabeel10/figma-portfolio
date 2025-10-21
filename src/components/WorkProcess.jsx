import { steps } from "../data/steps";

const WorkProcess = () => {
  return (
    <section id="process" className="py-20 px-6 md:px-12 bg-[#F0F1F3]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-worksans font-semibold text-gray-900 mb-6">
            Work Process
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every project starts with understanding the problem and ends with
            delivering a fast, scalable, and user-friendly solution. Here’s how
            I build modern web applications from concept to deployment. I focus
            on writing clean, maintainable code that ensures long-term stability
            and easy updates. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            Each project is built with performance, security,
            and responsiveness in mind. I collaborate closely with clients to
            align every feature with their business goals. From backend logic to
            frontend design, I make sure every detail works seamlessly together.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step) => {
            const Icon = step.icon; //  assign the icon component
            return (
              <div
                key={step.id}
                className={`p-6 rounded-2xl shadow-sm bg-white hover:shadow-md transition 
                ${step.active ? "" : "border-t-4 border-transparent"}`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 
                  ${
                    step.active
                      ? "bg-brand text-white"
                      : "bg-purple-100 text-brand"
                  }`}
                >
                  <Icon />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
