import clsx from "clsx";
import { Marker } from "./Marker";
import Link from "next/link.js";
import Image from "next/image";

const Button = ({
    icon,
    children,
    href,
    containerClassName,
    onClick,
    markerFill,
}: {
    icon?: string;
    children?: string;
    href?: string;
    containerClassName?: string;
    onClick?: () => void;
    markerFill?: string | undefined;
}) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[1px]">
                    <Marker fill={markerFill} />
                </span>

                {icon && (
                    <Image
                        src={icon}
                        width={24}
                        height={24}
                        alt="circle"
                        className="size-10 mr-5 object-contain z-10"
                    />
                )}

                <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
                    {children}
                </span>
            </span>

            <span className="glow-before glow-after" />
        </>
    );
    return href ? (
        <Link
            className={clsx(
                "relative p-0.5 g5 rounded-2xl shadow-500 group",
                containerClassName,
            )}
            href={href}
        >
            <Inner />
        </Link>
    ) : (
        <button
            title="."
            className={clsx(
                "relative p-0.5 g5 rounded-2xl shadow-500 group",
                containerClassName,
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};
export default Button;