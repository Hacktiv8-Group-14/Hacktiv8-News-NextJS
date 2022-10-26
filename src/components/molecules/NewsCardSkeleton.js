import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NewsCardSkeleton(){
    return(
        <div className="border-2 p-2 rounded-lg">
            <header className="border-b-2">
                <h5 className="text-lg"><Skeleton/></h5>
                <h1><Skeleton height={100}/></h1>
                <h1 className="text-2xl font-semibold"><Skeleton/></h1>
                <h3 className="mb-2"><Skeleton/></h3>
            </header>
            <div className="mt-2 mb-4">
                <Skeleton count={2}/>
            </div>
        </div>
    )
}
export default NewsCardSkeleton