
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative mr-3 ml-3">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-gray backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
<nav
  onMouseLeave={() => setActive(null)}
  className="relative text-white border border-transparent flex flex-col sm:flex-row justify-normal items-center space-x-1 bg-transparent mt-10
             sm:justify-center md:justify-center lg:space-x-4"
>
  <div className="flex flex-row justify-normal">
    {children}
  </div>
  {/* Here add the download CV File */}
  <div className="flex justify-normal sm:ml-4 sm:flex-row sm:items-center mt-7 sm:mt-0">
    <button className="px-4 py-2 text-white rounded-lg box">Download CV</button>
  </div>
</nav>
  );
};

export const ProductItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <div>
      <h4 className="text-xl font-bold mb-1 text-gray text-black">
        {title}
      </h4>
      <p className=" text-sm max-w-[10rem] text-black">
        {description}
      </p>
    </div>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-gray"
    >
      {children}
    </a>
  );
};
