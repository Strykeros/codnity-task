import Header from '../components/Header'
import '../App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import StarlinkDashboard from '../components/index/starlinkDashboard';


const Index = () => {

  return (
    <>
      <Layout>
          <StarlinkDashboard></StarlinkDashboard>        
      </Layout>
    </>
  )
}

export default Index
