import {Download, Features, SectionWrapper} from './components'
import assets from './assets'
import styles from './styles/Global';

const App = () => {
  return (
      <>
      <SectionWrapper 
        title="You own store of nifty Nft, start selling and Growing"
        description="buy, store, collect, nfts, exchange and earn crypto. Join 25 million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title="You own store of nifty Nft, start selling and Growing"
        description="buy, store, collect, nfts, exchange and earn crypto. Join 25 million people using ProNef Marketplace"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper 
        title="Deployment"
        description="Kyunef built using expo which runs natively on all users devices. you can easily get your app into peoples hands"
        showBtn
        mockupImg={assets.feature}
        banner="banner02"
      />

      <SectionWrapper 
        title="Createive way to showcase the store"
        description="THe app contains two screens. The first screen list all NFTs while the second one shows the details of a specific NFT.."
        mockupImg={assets.mockup}
        reverse
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">K Yusuf Muhammad</span>
        </p>
      </div>

      

      </>
  );
}

export default App;
