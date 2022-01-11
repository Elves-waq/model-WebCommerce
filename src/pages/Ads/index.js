import React,{useState ,useEffect} from "react"
import { PageArea} from "./style";
import { ErrorMessage } from "../../Components/MainComponents";
import { useLocation,useNavigate } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import AdItem from '../../Components/Partials/AdItem';
import Api from "../../helpers/WebCommerceAPI";

let timer ;
const Ads = () => {
    const userApi = Api();
    const navigate = useNavigate();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    const [adsTotal,setAdsTotal]=useState(0);
    const [q,setQ] = useState(query.get('q') != null ? query.get('q') : '');
    const [cat,setCat]=useState(query.get('cat') != null ? query.get('cat') : '');
    const [categories,setCategories] = useState([]);
    const [adsList,setAdsList] = useState([]);
    const [resultOpacity,setResultOpacity]= useState(1);
    const [loading,setLoading] = useState(true);
    const [pageCount,setPagecount]= useState(0);
    const [currentPage,setCurrentPage] = useState(1);
   
   
    const getAdsList =async ()=> {
        
        setLoading(true);
        let offSet = 0;
        offSet = (currentPage - 1) * 9 ;
        const json = await userApi.getAds({
            sort:'desc',
            limit: 9 ,
            q ,
            cat,
            offset:offSet
        });
       setAdsList(json.ads);
       setAdsTotal(json.total);
       setResultOpacity(1);
       setLoading(false);

    };
    useEffect(()=>{
        getAdsList();
        setResultOpacity(0.3);

    },[currentPage]);

    useEffect(()=>{
       const getCategories = async () => {
           const listCategories = await userApi.getCategories();
           setCategories(listCategories);
       } 
       getCategories();
    },[]);  

     useEffect(()=>{
         let queryString = [];
         if (q){
             queryString.push(`q=${q}`);
         }
         if (cat) {
             queryString.push(`cat=${cat}`)
         }
        navigate({search:`?${queryString.join('&')}`});

        if(timer) {
            clearTimeout(timer)
        }
        
        timer = setTimeout(getAdsList , 1000);
         setResultOpacity(0.3);
         setCurrentPage(1);
     },[ q, cat ]);

     useEffect(()=>{
        if(adsList.length > 0){
            setPagecount(Math.ceil(adsTotal / adsList.length) );
        }else {
            setPagecount(0);
        }       
     },[adsTotal]);

     let pagination = [];

     for(let i = 1 ;i<=pageCount ; i++){
        pagination.push(i);

     }

  return (
       <PageContainer>
           <PageArea>
                <div className="leftSide">
                    <form method="GET" >
                        <label className="filter__category">
                            <legend className="filter__title">Search:</legend>
                            <input type="text" name="q" placeholder="What are you looking for?" value={q} onChange={e=>setQ(e.target.value)}/>
                        </label>
                        <label className="filter__category">
                            <legend className="filter__title">Category:</legend>
                           <ul>
                                {categories.map((i,k)=>
                                    <li key={k} onClick={()=>setCat(i.slug)} className={cat==i.slug ? 'categoryItem active':'categoryItem'}>
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>

                                )}  
                           </ul>                  
                        </label>

                    </form> 
                </div>
                <div className="rightSide">
                    <h2>found items</h2>
                    {loading && adsList.length === 0 &&
                         <div className="listWarning">Loading...</div>
                    }
                    {!loading && adsList.length === 0 &&
                         <div className="listWarning">No products found</div>
                    }
                   
                    <div className="list" style={{opacity:resultOpacity}}>
                        {adsList.map((i,k)=>
                            <AdItem key={k} data={i}/>
                        )}          

                    </div>
                    <div className="pagination">
                        {pagination.map((i,k)=>
                          <div onClick={()=>setCurrentPage(i)} className={i === currentPage? 'pagItem active':'pagItem'} key={k}>{i}</div>  
                        )}
                    </div>
                </div>
           </PageArea>
       </PageContainer>
          
  );    
};
export default Ads;
