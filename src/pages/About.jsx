import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const team = [
    {
      name: "Asadbek",
      role: "Founder",
      image: "https://picsum.photos/300?random=1",
    },
    {
      name: "Ali",
      role: "Developer",
      image: "https://picsum.photos/300?random=2",
    },
    {
      name: "Sara",
      role: "Designer",
      image: "https://picsum.photos/300?random=3",
    },
  ];

  return (
    <div className="bg-[#F3F4F6] min-h-[100vh] py-10">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-black animate-fade-in">
          About Us
        </h1>
        <p className="text-base leading-7 text-gray-700 mb-4">
          {showMore ? (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facere corrupti ullam eum modi vero magni, deleniti corporis illum
              delectus quis nesciunt saepe illo voluptatibus optio veritatis
              dolor hic molestias ratione numquam libero reprehenderit sint
              eaque impedit. Ullam, dolor minima unde atque sunt similique
              veritatis corrupti illum quibusdam architecto eaque eligendi, hic
              deserunt voluptate laborum ipsum! Minus officia, id iste aut
              eveniet assumenda neque quos at ducimus deserunt eligendi ex
              maxime amet unde quibusdam odio repellendus labore in facilis?
              Voluptas accusamus aut, a quis consequatur repudiandae quo
              molestias nemo quam reiciendis, facilis dolorum facere inventore
              in adipisci maiores, soluta non ex explicabo impedit qui
              temporibus ipsum suscipit autem. Totam distinctio iusto facere
              vitae, exercitationem itaque, asperiores accusantium sunt
              voluptates assumenda fuga in eius? Autem libero non vel,
              architecto fuga dolore vero natus labore obcaecati quo nemo ipsam
              blanditiis sapiente consequatur quis, impedit magnam harum,
              perferendis nulla quos! Distinctio nulla similique provident
              explicabo dignissimos quibusdam accusamus impedit ex animi culpa
              aspernatur, libero ipsam rem vitae excepturi consequatur minus
              eaque? Odio reiciendis ex dolore vel exercitationem! Praesentium
              exercitationem, nam at ea quo molestias error placeat blanditiis
              iusto voluptate rem nostrum aperiam neque pariatur suscipit quidem
              expedita minima doloribus esse alias assumenda dolores.
            </>
          ) : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facere corrupti ullam eum modi vero magni, deleniti corporis illum
              delectus quis nesciunt saepe illo voluptatibus optio veritatis
              dolor hic molestias ratione numquam libero reprehenderit sint
              eaque impedit.
            </>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-medium text-center">
                  {member.name}
                </h3>
                <p className="text-center text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Animation
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-in;
  }
`;

export default About;
