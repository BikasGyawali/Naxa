import { ExitToApp, PhotoCamera } from '@mui/icons-material';
import { Button, Card, CardContent, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [files, setFiles] = useState([])

  function handlePhotoChange(e) {
    let file = e.target.files[0];
    if (file) {
      let fileSizeValid = file.size < (2 * 1024 * 1024);
      if (fileSizeValid) {
        var postdata = new FormData();
        postdata.append("files", file);
        //handle post photo
      } else {
        return (<>
          <span>{"File size exceeded"}</span>
        </>)
      }
    }
  }

  useEffect(() => {
    if (files.length) {
      var postdata = new FormData();
      for (let i = 0; i < files.length; i++) {
        postdata.append("file", files[i]);
      }
      uploadFile(postdata);
    }
  }, [files]);

  function handleFileChange(e) {
    let files = e.target.files;
    let individualFileSizeValid = true;
    let fileSize = 0;
    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        fileSize += files[i].size;
        if (files[i].size > 10 * 1024 * 1024) {
          individualFileSizeValid = false;
          return (<>
            <span>{"File size exceeded"}</span>
          </>)
        }
      }
      let allFilesSizeValid = fileSize < (30 * 1024 * 1024);
      if (individualFileSizeValid && allFilesSizeValid) {
        setFiles(e.target.files);
      } else {
        return (<>
          <span>{"File size exceeded"}</span>
        </>)
      }
    }
  }

  function uploadFile(data) {
    //handle post file api
  }

  function onSubmit(data) {
    //handle post api here
  }

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && errors.name.type === "required" && (<span className="error-message">{"Required Field"}</span>)}
              </Grid><Grid item xs={12}>
                <TextField
                  fullWidth
                  id="address"
                  label="Adress"
                  margin="normal"
                  variant="outlined"
                  name="address"
                  {...register("address", { required: true })}
                />
                {errors.address && errors.address.type === "required" && (<span className="error-message">{"Required Field"}</span>)}
              </Grid><Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  margin="normal"
                  variant="outlined"
                  name="phoneNumber"
                  {...register("phoneNumber", { required: true, pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/ })}
                />
                {errors.userEmail && errors.userEmail.type === "required" && (<span className="error-message">{"Required Field"}</span>)}
                {errors.email && errors.email.type === "pattern" && (<span className="error-message">{"Enter Valid Phone Number"}</span>)}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  name="email"
                  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                />
                {errors.userEmail && errors.userEmail.type === "required" && (<span className="error-message">{"Required Field"}</span>)}
                {errors.email && errors.email.type === "pattern" && (<span className="error-message">{"Enter Valid Email"}</span>)}
              </Grid>
              <Grid item xs={12}>
                <Typography>Upload Photo: </Typography>
                <input name="photo" accept="image/*" id="photo" type="file" onChange={handlePhotoChange} />
                <label htmlFor="photo">
                  <IconButton color="primary" aria-label="upload photo" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Typography>Upload File: </Typography>
                <input name="file" accept=".pdf,.doc" id="file" type="file" onChange={(event) => { handleFileChange(event) }} />
                <label htmlFor="file">
                  <IconButton color="primary" aria-label="upload file" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button
                  endIcon={<ExitToApp />}
                  size="large"
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}