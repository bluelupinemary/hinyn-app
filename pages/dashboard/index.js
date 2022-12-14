import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DashboardHeader from "../../components/section/DashboardHeader";
import { useState } from "react";
import NewsfeedSection from "../../components/section/NewsfeedSection";
import BrowseProjectsSection from "../../components/section/BrowseProjectsSection";

const Index = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleChangeTab = (val) => {
        setCurrentTab(val)
    }
  return (
    <Box sx={{background:'#EBEBEB', height:'auto'}}>
        <DashboardHeader setTabChange={handleChangeTab} currentTab={currentTab}/>
        {currentTab === 0 ? <NewsfeedSection /> : null }
        {currentTab === 1 ? <BrowseProjectsSection /> : null }
    </Box>
  )
}

export default Index