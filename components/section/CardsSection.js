import styled from "@emotion/styled";
import { Grid,Box } from "@mui/material";
import Filter from "../shared/Filter";
import CustomCard from "../shared/CustomCard";
import Dropdown from "../shared/Dropdown";

const sortOptions = [
    {
        title: 'Ranking',
        value: 'ranking'
    },
    {
        title: 'Newly Added',
        value: 'newly-added'
    },
    {
        title: 'Ascending',
        value: 'ascending'
    },
    {
        title: 'Descending',
        value: 'descending'
    }
]

const GridContainer = styled(Box)`
    margin-top: 2.5rem;
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`
const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50vh;
    justify-content: center;
    color: #EB4C60;
`


function CardsSection({cards, hasTools=true, cardText, handleButtonClick}) {
  return (
    <GridContainer>
        {hasTools ? 
            <FilterContainer>
                <Filter/>
                <Dropdown hasLabel={true} label="Sort By" items={sortOptions}/>
            </FilterContainer>
            : null
        }
        {cards.length > 0 
        ? 
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5, lg:8 }}>
        {cards.map( (card,idx) => (
            <Grid key={idx} item xs={12} sm={6} lg={3} sx={{position:'relative', marginTop:"3rem"}}>
                <CustomCard data={card} cardText={cardText} handleButtonClick={handleButtonClick}/>
            </Grid>
            ))       
        }
        </Grid>
        :
        <NotFoundContainer>No freelancers available for this category.</NotFoundContainer>
    }
    </GridContainer>
  )
}

export default CardsSection