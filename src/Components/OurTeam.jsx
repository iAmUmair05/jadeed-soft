import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Qamar Ashfaq",
    role: "CEO/Full Stack Developer",
    imgUrl: "/team/qamar.jpg",
  },
  {
    name: "Umair Younus",
    role: "Frontend Lead",
    imgUrl: "/team/umair.jpg",
  },
  {
    name: "Zain Amir",
    role: "Full Stack Developer",
    imgUrl: "/team/avatar.png",
  },
  {
    name: "Haroon Ahmad",
    role: "Frontend Developer",
    imgUrl: "/team/avatar.png",
  },
  {
    name: "Rana Fahad Khan",
    role: "Project Manager/QA",
    imgUrl: "/team/avatar.png",
  },
  {
    name: "Hussnain Mazhar",
    role: "Backend Developer",
    imgUrl: "/team/hussnain.png",
  },
];

const OurTeam = () => {
  return (
    <section className="sm:my-24 my-10">
      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col ">
          <div className="main-heading">𝖬𝖾𝖾𝗍 𝖮𝗎𝗋 𝖳𝖺𝗅𝖾𝗇𝗍</div>

          <div className="text-para w-full sm:w-2/3 mx-auto mb-6">
            Jadeed Soft Technologies brings together an awesome community of
            like-minded professionals who love challenges. We&apos;re lucky, we
            get to curate the best team
          </div>

          <div className="grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center p-2">
                <div className="h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover hover:scale-110 duration-300"
                  />
                </div>
                <div className="text-lg font-medium text-white cursor-pointer mt-2">
                  {member.name}
                </div>
                <div className="italic text-slate-500">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
