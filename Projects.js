export default function Projects() {
    const projects = [
      { title: "Projet 1", desc: "Description du projet 1" },
      { title: "Projet 2", desc: "Description du projet 2" },
    ];
  
    return (
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center dark:text-white">Mes Projets</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg dark:border-gray-700">
              <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
