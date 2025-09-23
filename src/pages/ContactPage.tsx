import ContactInfo from '../components/contact/ContactInfo';
import GlassCard from '../components/GlassCard';
import Layout from '../components/Layout';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from '@mui/system';
import ContactForm from '../components/contact/ContactForm';


const Contact = () => {

  return (
    <Layout>

      <Grid container size={{ md: 4, xs: 12 }}
        spacing={{ xs: 2, lg: 4 }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          textAlign: "center",
          gap: { xs: 2, lg: 4 }
        }}>
        <Grid size={{ md: 4, xs: 12 }} sx={{ alignItems: "center", }}>
          <GlassCard>
            <ContactInfo icon={LocalPhoneIcon} text="+371 123456789" />
          </GlassCard>
        </Grid>

        <Grid size={{ md: 4, xs: 12 }}>
          <GlassCard>
            <ContactInfo icon={EmailIcon} text="info@spacexstats.com" />
          </GlassCard>
        </Grid>

        <Grid size={{ md: 4, xs: 12 }}>
          <GlassCard>
            <ContactInfo icon={LocationPinIcon} text="1 Rocket Road Hawthorne CA 0000000" />
          </GlassCard>
        </Grid>
      </Grid>

      <Grid container size={{ xs: 12 }} sx={{justifyContent: "center", marginTop: "30px", width: "100%"}}>
        <GlassCard>
          <ContactForm></ContactForm>
        </GlassCard>
      </Grid>

    </Layout>

  )
}

export default Contact