import { motion } from "framer-motion";

function Fact({ children }) {
  return (
    <motion.h2
      key={children}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
    >
      {children}
    </motion.h2>
  );
}

export default Fact;
