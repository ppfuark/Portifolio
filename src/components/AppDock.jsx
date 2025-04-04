import { FaGithub, FaReact } from "react-icons/fa";
import { SiDjango, SiFastapi, SiSpringboot, SiArduino, SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";

const AppDock = () => {
    const apps = [
        { id: 1, icon: <SiDjango size={32} /> },
        { id: 2, icon: <SiFastapi size={32} /> },
        { id: 3, icon: <SiSpringboot size={32} /> },
        { id: 4, icon: <FaReact size={32} /> },
        { id: 5, icon: <FaGithub size={32} />, link: "https://github.com/phfuark" },
        { id: 6, icon: <SiArduino size={32} /> },
        { id: 7, icon: <IoLogoFigma size={32} /> },
        { id: 8, icon: <TbBrandMysql size={32} /> },
        { id: 9, icon: <SiPostman size={32} /> },
    ];

    return (
        <div className="bg-gray-900/60 rounded-2xl px-4 py-2 flex gap-4 shadow-lg backdrop-blur-lg mb-2">
            {apps.map((app) => (
                app.link ? (
                    <a
                        key={app.id}
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:scale-150 transition-transform duration-300 cursor-pointer"
                    >
                        {app.icon}
                    </a>
                )
                    : (
                        <div key={app.id} className="text-white hover:scale-150 transition-transform duration-300">
                            {app.icon}
                        </div>
                    )
            ))}
        </div>
    );
};

export default AppDock;