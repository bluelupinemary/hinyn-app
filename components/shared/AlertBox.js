import styled from '@emotion/styled';
import { AlertIcon } from './Icon';
import { Grid } from '@mui/material';

const Container = styled.div`
    background: #ffffff;
    border-left: 8px solid #E96E3F;
    border-radius: 12px;
    padding: 23px 35px;
    box-shadow: 0px 3px 20px #00000029;
    color: #555555;
`
const IconContainer = styled.div`
    .icon{
        font-size: 20px;
    }
`

const AlertBox = ({children}) => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={1}>
                <IconContainer>
                    <AlertIcon className="icon"/>
                </IconContainer>
            </Grid>
            <Grid item xs={11}>
                {children}
            </Grid>
        </Grid>
    </Container>
  )
}

export default AlertBox