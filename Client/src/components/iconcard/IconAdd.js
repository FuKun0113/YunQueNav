// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Button, Card, Typography, Grid, Stack } from "@mui/material";
// components
import Iconify from '../iconify';
// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  display: 'flex',
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
}));

// ----------------------------------------------------------------------


export default function IconCard({
  sx,
  ...other
}) {
  return (
    <Button
    variant="contained"
      sx={{
        py: 2,
        display:"flex",
        flexWrap:"wrap",
        width: "100%",
        textAlign: "center",
        color: (theme) => theme.palette["primary"].darker,
        bgcolor: (theme) => theme.palette["primary"].lighter,
        '&:hover': {
          color: (theme) => theme.palette["primary"].lighter,
        bgcolor: (theme) => theme.palette["primary"].darker,
      },
        ...sx,
      }}
      {...other}
    >

        <StyledIcon
          sx={{
            mx:2,
            color: (theme) => theme.palette["primary"].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(
                theme.palette["primary"].dark,
                0
              )} 0%, ${alpha(theme.palette["primary"].dark, 0.24)} 100%)`,
          }}
        >
          <Iconify icon="ic:baseline-plus" width={48} height={48} />
        </StyledIcon>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{flexGrow:1,py: 2,}}>
          <Typography variant="h6">添加图标</Typography>
        </Stack>
    </Button>
  );
}
