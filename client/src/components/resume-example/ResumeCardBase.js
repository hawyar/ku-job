import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
} from "@chakra-ui/core";

const ResumeCardBase = () => {
  return (
    <Box>
      <StatGroup
        mt={16}
        mb={{ sm: 16, xl: 0 }}
        width={{ sm: "100%", xl: "85%" }}
        flexDirection={{ sm: "column", xl: "row" }}
      >
        <Stat
          width="90%"
          backgroundColor="brand.600"
          padding={6}
          mr={{ sm: "0", xl: "12" }}
        >
          <StatLabel>Saves</StatLabel>
          <StatNumber>1,327</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat
          width="90%"
          backgroundColor="brand.700"
          padding={6}
          mt={{ sm: "12", xl: "0" }}
        >
          <StatLabel>Total Earned</StatLabel>
          <StatNumber>$346.24</StatNumber>
          <StatHelpText>Feb 16 - Mar 02</StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default ResumeCardBase;
