import { Helmet } from "react-helmet-async";
// @mui
import { Grid, Button, Container, Stack, Typography, Box, Paper} from "@mui/material";
// components
import Iconify from "../components/iconify";
import {IconCard, IconAdd} from "../components/iconcard";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <IconCard
            title="IT之家"
            website="www.ithome.com"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconCard
            title="IT之家"
            website="www.ithome.com"
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconCard
            title="IT之家"
            website="www.ithome.com"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <IconAdd/>
        </Grid>
        </Grid>
        
      </Container>
    </>
  );
}
