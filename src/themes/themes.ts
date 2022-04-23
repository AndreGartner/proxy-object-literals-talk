import { extendTheme } from "@chakra-ui/react";

// Version 2: Using functions
const overrides = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#0b0b0b",
      },
    }),
  },
});

export default overrides;
