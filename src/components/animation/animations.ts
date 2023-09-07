const fadeInUp = {
  initial: {
    y: 150,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const fadeInLeft = {
  viewport: { once: true },
  animate: {
    opacity: 0,
    x: "-100%",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.7,
      type: "spring",
    },
  },
};

const sidebarAnimations = {
  layout: {
    initial: {
      opacity: 0.5,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  },
  body: {
    initial: {
      scale: 0.2,
      opacity: 0.5,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};

const listItemAnimation = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export { fadeInUp, fadeInLeft, sidebarAnimations, listItemAnimation };

// export default options;
