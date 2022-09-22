import { NavLink } from "react-router-dom";

import { Container, Typography, Link } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{
      paddingTop: { xs: '88px', sm: '96px' },
      paddingLeft: '16px',
      paddingRight: '16px',
      width: '100%',
      textAlign: 'center'
    }}>
      <Typography variant="h5" sx={{marginBottom: '16px'}}>Opps! There is no such page.</Typography>
      <Typography variant="p">Please proceed to <Link component={NavLink} to="/">Home page.</Link></Typography>
    </Container>
  );
};

export default HomePage;