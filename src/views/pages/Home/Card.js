import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";

const useStyles = makeStyles(() => ({
  mainCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
    boxShadow: "0 4px 20px #d1d1d14d",
    cursor:"pointer",
    transition: "all 0.5s",
    "&:hover":{
        boxShadow: "0 0 20px 2px #cccccc",
    }
  },
  clipPath: {
    fontWeight: "700",

    color: "#FFFFFF",
    marginBottom: "10px",
    padding: "11px 20px",
    position: "absolute",
    top: "0",
    right: "0",
    background: "#042CB0",
    borderRadius: "0 10px",
  },
}));
export default function Card() {
  const classes = useStyles();
  return (
    <Box className={classes.mainCard}>
      <Box className={classes.clipPath}>
        <Typography variant="body2">Job</Typography>
      </Box>
      <Box>
        <IconButton style={{ background: "#F1F1F1" }}>
          <IoShareSocialOutline
            style={{ fontSize: "18px", color: "#DF6E12" }}
          />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Typography variant="h6"> Technician - Plant Electrical </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" style={{fontWeight:"600"}}> NSDC International Limited </Typography>
      </Box>
      <Box my={1} style={{display:"flex",alignItems:"center"}}>
        <Box>
            <MdLocationOn style={{color:"#11111"}}/>
        </Box>
        <Box ml={1}>
            <Typography variant="body1"> United Arab Emirates </Typography>
        </Box>
      </Box>
      <Box my={1} style={{display:"flex",alignItems:"center"}}>
        <Box>
            <FaSuitcase style={{color:"#11111",fontSize:"12px"}}/>
        </Box>
        <Box ml={1}>
            <Typography variant="body1">  Full Time |  Immediate Joiner  </Typography>
        </Box>
      </Box>
      <Box my={1} style={{display:"flex",alignItems:"center"}}>
        <Box>
            <BiRupee style={{color:"#11111",fontSize:"18px"}}/>
        </Box>
        <Box ml={1}>
            <Typography variant="h6">   109,666 / month  </Typography>
        </Box>
      </Box>
      <Box my={1} style={{display:"flex",alignItems:"center"}}>
        <Box>
            <Typography variant="body2" style={{fontWeight:"600"}}> View Details </Typography>
        </Box>
        <Box ml={1} mt={0.5}>
            <RiArrowRightLine style={{color:"#11111",fontSize:"18px"}}/>
        </Box>
      </Box>

    </Box>
  );
}
