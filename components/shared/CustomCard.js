import styled from "@emotion/styled";
import breakpoint from "../utils/Breakpoints";
import Image from "next/image";
import {LocationIcon} from "../shared/Icon";
import StarRating from "./StarRating";
import Button from "./Button";
import headerImage from "/public/assets/img/bg@1x.png";
import { useState } from "react";

const StyledCard = styled.div`
    min-height:24rem;
    box-shadow:1px 1px 10px #aaaaaa20;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    padding: 4rem 0 2rem;
    row-gap: 0.2rem;
    background-repeat: no-repeat;
    background-position: bottom right;
    user-select:none;
    height:100%;
    background-color: #F8F8F8;
    position: relative;
    overflow: hidden;

    @media ${breakpoint.device.lg}{
        margin:0 1rem;
    }
    @media ${breakpoint.device.sm}{
        margin:0;
    }
    &:hover, &:focus{
        box-shadow:1px 1px 10px #0F766950;
        transition: all 0.3s ease-in-out;
    }
`;
const ImageContainer = styled.div`
    width: 5rem;
    height: 5rem;
    position: relative;
    background: #ffffff;
    border: 5px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
`
const StyledImage = styled(Image)`
    border-radius: 50%;
`
const Title = styled.span`
    font-size: 17px;
    text-transform: capitalize;
`
const Label = styled.span`
    font-size: 13px;
    color: ${props => props.variant ==='green' ? '#0F7669' : '#525252'};
    display:flex;
    column-gap: 5px;
`
const StyledButton = styled(Button)`
    font-size: 13px;
    margin-top: 1.5rem;
    transition: all 0.3s ease-in-out;
`
const HeaderBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 5.5rem;
    top:0;
`

function CustomCard({data, cardText, handleButtonClick}) {
    let imgsrc = data?.displayPhoto ? '/assets/img/avatars/'+data.displayPhoto : '/assets/img/avatars/img-avatar1.png';
    const handleClick = (data) => {
        handleButtonClick(data)
    }
  return (
    <StyledCard>
        <HeaderBackground>
            <Image src={headerImage} layout="fill"/>
        </HeaderBackground>
        <ImageContainer>
            <StyledImage
            src={imgsrc}
            layout="fill"
            alt="icon-img"
            />
        </ImageContainer>
        <Title>{data?.firstName} {data?.lastName}</Title>
        {data?.categories?.data && data?.categories?.data.map((category,idx)=>{
            return <Label key={'freelancer-category-'+idx} variant="green">{category?.attributes?.title}</Label>
        })}
        <StarRating data={data?.rating ?? 3}/>
        {data?.city && 
            <Label>
                <LocationIcon/>
                <div>{data?.city}, {data?.country}</div>
            </Label>
        }
        <StyledButton variant="outlined" onClick={()=>handleClick(data)}> {cardText ?? 'Hire me'} </StyledButton>
    </StyledCard>
  )
}

export default CustomCard