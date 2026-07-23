import fs from "fs";
import path from "path";
import RichText from "./utils/rich-text";

const About = async () => {
  const source = await fs.promises.readFile(
    path.join(process.cwd(), "app/content/about.md"),
    "utf8"
  );

  return (
    <div className="w-full 2xl:w-2/3 px-2 space-y-5">
      <RichText source={source} />
    </div>
  );
};

export default About;
