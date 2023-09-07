import { motion } from "framer-motion";
import { fadeInLeft } from "@/components/animation/animations";

export default function ReportsSnippet() {
  return (
    // I'm Using image not SVG, because when I tried to take the svg it doesn't work correctly.
    <motion.img
      {...fadeInLeft}
      src={require("./reports-snippet.png")}
      loading={"eager"}
      alt={"reports show"}
    />
  );
}
