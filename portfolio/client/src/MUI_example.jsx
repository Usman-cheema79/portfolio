import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Avatar,Snackbar } from '@mui/material';
import { Skeleton,Button, Box,Input } from '@mui/material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Stepper, Step, StepLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Masonry from '@mui/lab/Masonry';
import { Paper } from '@mui/material';
import Rating from '@mui/material/Rating';

function MUI_example() {
  const [value, setValue] = React.useState(2);

  const heights = [140, 210, 160, 240, 120, 190, 130];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 110 },
    { field: 'job', headerName: 'Job', width: 160 },
  ];
  
  const rows = [
    { id: 1, name: 'John Doe', age: 35, job: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 28, job: 'Designer' },
    // Add more rows as needed
  ];
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };
  return (
<>
<div>
      <Avatar alt="Profile Image" src="https://via.placeholder.com/150" />
      <Avatar sx={{ bgcolor: 'primary.main' }}>AB</Avatar>
    </div>
<Box>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="circular" width={40} height={40} />
    </Box>
<Box
  sx={{
    backgroundColor: 'lightblue',
    padding: '16px',
    margin: '8px',
    borderRadius: '8px',
  }}
>
  Content goes here
</Box>
<Input
  placeholder="Enter text"
  sx={{ width: '300px', padding: '8px', border: '1px solid #0000' }}
/>

<Button variant="contained" color="primary">
  Click Me
</Button>



<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="140"
    image="https://via.placeholder.com/345x140"
    alt="Placeholder Image"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Card Title
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Typography>
  </CardContent>
</Card>



{/* <div>
      <Button onClick={handleClick}>Show Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Action was successful!"
      />
    </div> */}


    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <Button onClick={handleBack}>Reset</Button>
          </div>
        ) : (
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>

    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Choose an option" />}
    />
     <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Step 1: Research</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Step 2: Design</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Step 3: Development</TimelineContent>
      </TimelineItem>
    </Timeline>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>

    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<FileCopyIcon />}
        tooltipTitle="Copy"
      />
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Save"
      />
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
      />
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
      />
    </SpeedDial>

    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index} sx={{ height }}>
          {`Item ${index + 1}`}
        </Paper>
      ))}
    </Masonry>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
</>
  );
}

export default MUI_example;
