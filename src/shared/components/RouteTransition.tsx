import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetchActiveMenuItem } from "../hooks/useFetchActiveMenuItem";
import { useLocation } from "react-router";

interface RouteTransitionProps {
  children: React.ReactNode;
}

export const RouteTransition: React.FC<RouteTransitionProps> = ({
  children,
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
        key={useFetchActiveMenuItem(pathname)}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
