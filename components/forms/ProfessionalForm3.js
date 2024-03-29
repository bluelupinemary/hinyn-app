import {useRef, useState} from 'react';
import { CssBaseline, Grid, Box, Typography, Container, TextareaAutosize} from '@mui/material';
import styled from '@emotion/styled';
import Text from '../shared/Typography';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import StyledTextField from '../shared/Textfield';
import { BackIcon } from '../shared/Icon';
import { updateClientData } from './formService';


const StyledButton = styled(Button)`
`

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  border-radius: 20px;
`;


const Error = styled.p`
  color:red;
  font-size:0.75rem;
  font-family: "Roboto", sans-serif;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`
const VerticalDivider = styled.div`
    height: 2rem;
    width:100%;
`

const StyledTextArea = styled(TextareaAutosize)`
    resize: none;
    width: 100%;
    min-height: 15rem;
    border-radius: 20px;
    border-color: #ccc;
    padding: 10px;
    font-family: inherit;
`



function ProfessionalForm3({handleNextClick}){

  const [open, setOpen] = useState(false);
  const [enteredBroadDescription, setBroadDescription] = useState('');
  const handleClose = () => {
    setOpen(false);
  };
  
    const [isValid, setValid] = useState({
      "description":false,
      "broadDescription":false,
      "form":false,
    });
    const [errorMessage, setErrorMessage] = useState({
        "description":null,
        "broadDescription":null,
    });
    const descriptionInputRef = useRef();


    function submitHandler(event){
        event.preventDefault();
        const enteredDescription = descriptionInputRef.current.value;
        
        if(enteredDescription && enteredBroadDescription && (enteredDescription !== '' && enteredBroadDescription !== '')){
            isValid.form = true; 
        }

        if(isValid.form){
          const clientId = localStorage.getItem('hinyn-cid');
          const clientData = {
            description: enteredBroadDescription,
            headline: enteredDescription,
            };
            updateClientData(clientData, clientId).then((result)=>{
              if(result?.data) handleNextClick(true);
            });
            
        }else{
            setOpen(true)
        }
    }
      

    return (
      <>
        <Container maxWidth="sm" sx={{marginBottom:"2rem",marginTop:"5rem"}}>
          <CssBaseline />
          <FormContainer>
            <Typography component="h1" variant="h4">
              <b>Let&apos;s make your profile</b>
            </Typography>
            <Typography component="p" align="center">
                Fill out your profile for clients to better understand your services.
            </Typography>
            <VerticalDivider/>
            <Text color="green">What do you do? </Text>
            <Typography component="p" align="center">
                Write a one line description about yourself
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 3, width:"100%"}}>
              <Grid container spacing={2} sx={{marginBottom:"2rem"}}>
                <Grid item xs={12}>
                  <StyledTextField
                    required
                    fullWidth
                    id="description"
                    placeholder="example: photographer"
                    name="description"
                    inputRef={descriptionInputRef}
                  />
                  {errorMessage.description && (
                        <Error >{errorMessage.description}</Error>
                   )}
                </Grid>       
              </Grid>
              <VerticalDivider />
              <Text color="green" align="center">Describe yourself </Text>
            <Typography component="p" align="center">
            Describe your top skills, strengths and experiences. Provide more details on the services you offer, things you’re interested in working on, and what you like to do.
            </Typography>
              <Grid container spacing={2} sx={{marginBottom:'2rem'}}>
                <Grid item xs={12}>
                <StyledTextArea
                    placeholder=''
                    defaultValue={enteredBroadDescription}
                    id='broadDescription'
                    name='broadDescription'
                    onChange={event => {
                        const { value } = event.target;
                        setBroadDescription(()=>value);
                      }}
                    />
                  {errorMessage.broadDescription && (
                        <Error >{errorMessage.broadDescription}</Error>
                   )}
                </Grid>       
              </Grid>
              <ButtonContainer>
                <Text>
                    <BackIcon isabsolute={false}/>
                    <span style={{marginLeft:'1rem'}}>Go Back</span>
                </Text>
                <StyledButton>
                    NEXT
                </StyledButton>
               </ButtonContainer>
            </Box>
          </FormContainer>
        </Container>

     <Modal handleClose={handleClose} isOpen={open} hasHeader={false} hasFooter={false}>
      <div>Oops! All fields are required.</div>
     </Modal>
</>
    );

}

export default ProfessionalForm3;