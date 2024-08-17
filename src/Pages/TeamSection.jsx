import img1 from '../assets/PXL_20240126_040559574.jpg';
import img2 from '../assets/342871818_481152144146322_3312888620850921372_n.jpg';
import img3 from '../assets/PXL_20240126_055542427.MP.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Tanvir Rahman Rafi",
      profession: "CE19026",
      university: "MBSTU, CSE",
      image: img1,
    },
    {
      name: "Shefat Hossain Tonmoy",
      profession: "CE19025",
      university: "MBSTU, CSE",
      image: img2,
    },
    {
      name: "Dr. Md. Sazzad Hossain",
      profession: "Professor",
      university: "MBSTU, CSE",
      image: img3,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] py-12">
      <h2 className="text-3xl font-bold text-center text-orange-500 font-serif mb-12">
        Our Team Members
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group bg-black rounded-lg overflow-hidden w-[320px] h-[420px] text-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[300px] object-cover "
            />
            <div className="p-4 bg-gray-900 h-[120px] flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.profession}</p>
              <p className="text-sm text-orange-400">{member.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
