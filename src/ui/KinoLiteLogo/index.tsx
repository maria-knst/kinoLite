import { memo } from "react";
import { IconContext } from "react-icons";
import { PiFilmSlateFill } from "react-icons/pi";

interface LogoProps {
    className?: string;
}

const Logo = memo(({ className }: LogoProps) => {
    return (
        <div className={`${className} text-white`}>
            <IconContext.Provider value={{ size: "3em" }}>
                <div>
                    <PiFilmSlateFill />
                </div>
            </IconContext.Provider>
        </div>
    );
});

export default Logo;