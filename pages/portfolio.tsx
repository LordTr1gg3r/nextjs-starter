import Head from 'next/head'
import Layout from '../components/layout'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import PortfolioHeader from '../components/portfolio/Header'
import ProjectCards from '../components/portfolio/ProjectCards'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material'

export default function Portfolio({
  allProjectsData
}: {
  allProjectsData: {
    title: string
    img: string
    date: string
    id: string
  }[]
}) {
  return (
    <Layout portfolio>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Container>
        <PortfolioHeader />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
          {allProjectsData.map(({ id, date, title, img }) => (
            <Grid xs={12} sm={6} md={4} key={id}  display="flex" justifyContent="center" >
              <ProjectCards id={id} title={title} date={date}  imgUrl={img}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}