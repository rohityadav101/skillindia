import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MainCards from "./MainCards";
import { maincardData } from "src/component/dummyJson";
export default function Tab2() {
  const [searchInput, setSearchInput] = useState("");

  const filteredData = maincardData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleClearSearch = () => {
    setSearchInput("");
  };


  return (
    <div>
      <Box pt={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} md={6}>
            <Typography variant="h6"> Most Popular </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Skill Courses"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary">
                      SEARCH
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Box pt={4}>
        <Grid container spacing={3}>
            {(searchInput === "" ? maincardData : filteredData).map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <MainCards item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
