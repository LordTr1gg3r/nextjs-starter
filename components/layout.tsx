import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import profilePicture from '../images/profile.jpg'
import NavBar from './AppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swiper from '../components/swiper'

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

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#000',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
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
      <div>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.headingLg}>{name}</h1>
            <Image
              priority
              src={profilePicture}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
              <p className='m-10'>Insert Tag line Here </p>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={profilePicture}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
    </div>
  )
}