import HomeArticleList from '../components/Home/HomeArticleList'
import HomeHero from '../components/Home/HomeHero'
import HomeImageList from '../components/Home/HomeImageList'
import HomeVideoList from '../components/Home/HomeVideoList'

function Home() {
    return(
        <main className='place-items-center'>
            <div className='w-[70%]'>
                < HomeHero />
                < HomeVideoList />  
                < HomeImageList />
                < HomeArticleList />
            </div>

        </main>
    )
}

export default Home