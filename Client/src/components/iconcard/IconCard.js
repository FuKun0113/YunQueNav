// @mui
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Button, Typography, Grid, Stack } from "@mui/material";
// components

// ----------------------------------------------------------------------

const StyledIcon = styled("img")(({ theme }) => ({
  margin: 'auto',
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
}));

// ----------------------------------------------------------------------

IconCard.propTypes = {
  color: PropTypes.string,
  website: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  sx: PropTypes.object,
};

export default function IconCard({
  title,
  subtitle,
  website,
  color = "primary",
  sx,
  ...other
}) {
  return (
    <Button
      href={`https://${website}`}
      variant="contained"
      sx={{
        py: 2,
        display:"flex",
        flexWrap:"wrap",
        width: "100%",
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        '&:hover': {
          color: (theme) => theme.palette[color].lighter,
        bgcolor: (theme) => theme.palette[color].darker,
      },

        ...sx,
      }}
      {...other}
    >

        <StyledIcon
          src={`https://dominant-magenta-swift.faviconkit.com/${website}/128`}
          alt={title}
          sx={{
            mx:2,
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(
                theme.palette[color].dark,
                0
              )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
          }}
        ></StyledIcon>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{flexGrow:1,py: 2,}}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            {subtitle}
          </Typography>
        </Stack>
    </Button>
  );
}


