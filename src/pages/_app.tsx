import '../style/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
//Rodar vercel --prod pra fazer um Deploy direto em prod