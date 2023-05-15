import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import profilePicture from '../images/profile.jpg'
import NavBar from './navbar/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme'
import Copyright from './Copywright'
import HeroBanner from './Banner'
import NavBarHome from './navbar/NavBarHome'
import PortfolioContent from './portfolio/content'

const name = 'Simon Thow'
export const siteTitle = 'Next.js Sample Website'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


export default function Layout({
  children,
  home,
  portfolio
}: {
  children: React.ReactNode
  home?: boolean
  portfolio?: boolean

}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        {home ? (
          <>
            <NavBarHome />
            <HeroBanner />
            <Copyright />
          </>
        ) : (
          <>
            <NavBar />
            <main>{children}</main>
            <footer className={styles.footer}><Copyright /></footer>
            
          </>
        )
        }

      </>
    </ThemeProvider>
  )
}