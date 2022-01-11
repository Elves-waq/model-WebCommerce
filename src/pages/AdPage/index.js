import React,{useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {PageContainer} from "../../Components/MainComponents";
import Api from "../../helpers/WebCommerceAPI";
import { PageArea,FakeArea,OthersArea,BreadChumb} from "./style";
import AdItem from "../../Components/Partials/AdItem"

const AdPage = () => {
    const useApi = Api();
    const {id} = useParams();
    const [ loading, setLoading ]= useState(true);
    const [adInfo,setAdInfo] = useState({});

    useEffect(()=>{
        const getAdInfo = async (id)=> {
           const json = await useApi.getAd(id,true);
           setAdInfo(json); 
           setLoading(false); 
        }

        getAdInfo(id);

    },[]);
    
    const formatDate = (data) => {
        let cData = new Date(data);
        let months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
        let cDay = cData.getDate();
        let cMonth = cData.getMonth();
        let cYear = cData.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;

    };
    
    return(
       <PageContainer>
           {adInfo.category&&
                <BreadChumb>
                        Você está aqui:
                        <Link to="/">Home</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                        /
                        {adInfo.title}

                </BreadChumb>
           }
           <PageArea>
                <div className="leftSide">
                    <div className="Adbox">
                        <div className="left__Adimg">
                            {loading && <FakeArea height={300}
                              />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img,key)=>
                                        <div key={key} className="each__slide">
                                            <img src={img} alt=""/>
                                        </div>

                                    )}

                                </Slide>
                            
                            }                
                        </div>
                        <div className="left__AdInfo">
                            <div className="left__AdInfo--name">
                                {loading && <FakeArea />}  
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>  
                            }   
                                {adInfo.dateCreated &&
                                   <small>created in {formatDate(adInfo.dateCreated)}</small> 
                                }                                
                            </div>
                            <div className="left__AdInfo--description">
                                {loading && <FakeArea height={100}/>}  
                                {adInfo.description} 
                                <hr/>
                                {adInfo.views &&
                                    <small>Views :{adInfo.views}</small>
                                }

                            </div>
                        </div>
                    </div>

                </div>
                <div className="rightSide">
                    <div className="Adbox">
                        {loading && <FakeArea height={20}/>}
                        {adInfo.priceNegotiable &&
                            "Negotiable Price"
                        }
                        {!adInfo.priceNegotiable && adInfo.price && 
                            <div className="price">Price: <span>R$ {adInfo.price}</span></div>
                        }   
                    </div>
                    {loading && <FakeArea height={50}/>}
                   {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contact__link"  >Contact the seller</a>
                            <div className="Adbox createdBy">
                                <small><strong>Created by:</strong> {adInfo.userInfo.name}</small>
                                <small><strong>Email:</strong> {adInfo.userInfo.email}</small>
                               <small><strong>State:</strong> {adInfo.stateName} </small>
                            </div>    
                        </>

                   }
                </div>

               

           </PageArea>
           <OthersArea>
                {adInfo.others && 
                    <>
                        <h2>Seller's other offers</h2> 
                        <div className="list" >
                                {adInfo.others.map((i,k)=>
                                    <AdItem className="aditem" key={k} data={i}/>
                                )}
                        </div>
                    </>      
                }
            </OthersArea>
       </PageContainer>
    );

};

export default AdPage;