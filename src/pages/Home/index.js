import React,{useState ,useEffect} from "react"
import { PageArea , SearchArea} from "./style";
import { ErrorMessage } from "../../Components/MainComponents";
import { Link } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import AdItem from '../../Components/Partials/AdItem';
import Api from "../../helpers/WebCommerceAPI";


const Home = () => {
    const userApi = Api();
    const [categories,setCategories] = useState([]);
    const [adsList,setAdsList] = useState([]);

    useEffect(()=>{
       const getCategories = async () => {
           const listCategories = await userApi.getCategories();
           setCategories(listCategories);
       } 
       getCategories();
    },[]);


    useEffect(()=>{
        const getRecentAds = async () => {
            const json = await userApi.getAds({
                sort:'desc',
                limit: 8
            });
           setAdsList(json.ads);
        } 
       getRecentAds();
     },[]);

  return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="search" placeholder="What your quest ?" />
                            <button>search</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt={i.name}/>
                                <span>{i.name}</span>
                            </Link>
                        )}        
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>New products</h2>
                    <div className="list">
                        {adsList.map((i,k)=>
                            
                            <AdItem key={k} data={i}/>

                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">See all</Link>
                    <hr/>
                    <p>All products are fictional. no offer contained on the site is real or available for sale.</p>
                </PageArea>
            </PageContainer>
        </>     
  );    
};
export default Home;
