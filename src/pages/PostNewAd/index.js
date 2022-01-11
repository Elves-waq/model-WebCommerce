import React,{useState ,useRef,useEffect} from "react";
import { ContainerAdArea, AreaProduct } from "./style";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { ErrorMessage } from "../../Components/MainComponents";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import Api from "../../helpers/WebCommerceAPI";


const AddSeller = () => {
    const useApi =Api();
    const Navigate =useNavigate();
    const [title, setTitle] = useState('');
    const [categories,setCategories]= useState([])
    const [category,setCategory]= useState('');
    const [price, setPrice]= useState('');
    const [priceNegotiable,setPriceNegotiable]=useState(false);
    const [desc ,setDesc] = useState('');
    const fileField = useRef();
    const [disabled,setDisabled] = useState(false);
    const [error,setError] = useState('');
    
    useEffect(()=> {
        const getCategories = async () => {
            const cats = await useApi.getCategories();
            setCategories(cats);

        }
        getCategories();

    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        let errors = [];

        if (!title.trim()) {
            errors.push('Untitled');
        }
        if(!category) {
            errors.push('Without category')
        }

        if(errors.length === 0 ){
            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceneg',priceNegotiable);
            fData.append('desc',desc);
            fData.append('cat',category);

            if(fileField.current.files.length > 0 ) {
                for(let i=0;i< fileField.current.files.length;i++){
                    fData.append('img',fileField.current.files[i]); 
                }
            }

            const json = await useApi.addAd(fData);

            if(!json.error) {
               Navigate(`/ad/${json.id}`);
                
            }else {
                setError(json.error);
            }


        }else {
            setError(errors.join("\n"));
        }
        
        setDisabled(false)

        
    };

    const priceMask = createNumberMask({
        prefix:'R$',
        includeThousandsSeparator:true ,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true ,
        decimalSymbol:',' 
    });


  return (
    <PageContainer>
        <ContainerAdArea>
          
        <AreaProduct>
        
            <h3 className="ad__title">Post a product</h3>
                {error &&
                   <ErrorMessage>{error}</ErrorMessage> 

                } 
                <form onSubmit={handleSubmit}>
                
                <label>
                    <legend className="ad__text">Title:</legend>
                    <input type="text" name="email"  placeholder="Title for your product" disabled={disabled}
                    value={title} onChange={e =>setTitle(e.target.value)} required />
                </label>
                <label>
                    <legend className="ad__text">Category:</legend>
                    <select disabled={disabled} onChange={e=>setCategory(e.target.value)} required>
                        <option></option>
                        {categories && categories.map(i=>
                            <option key={i._id} value={i._id}>{i.name}</option>
                            )}                        
                    </select>
                </label>
                <label>
                    <legend className="ad__text">Price:</legend>
                    <MaskedInput 
                        mask={priceMask} 
                        placeholder="R$"
                        disabled={disabled || priceNegotiable}
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                    />
                </label>
                <label className="price__negotiable">
                    <legend className="ad__text">Price negotiable:</legend>
                    <input type="checkbox" disabled={disabled} value={priceNegotiable} onChange={e=>setPriceNegotiable(!priceNegotiable)}/>
                </label>
                <label>
                    <legend className="ad__text">Description:</legend>
                    <textarea disabled={disabled} value={desc} onChange={e=>setDesc(e.target.value)}>

                    </textarea>
                </label>
                <label>
                    <legend className="ad__text">images (one or more):</legend>
                    <input type="file" disabled={disabled}
                    multiple ref={fileField}/>
                </label>
                
                
                <label>
                <button  className="button__Add" disabled={disabled}>Add product</button>
                </label>
            
               
            </form>
        </AreaProduct>
         
     </ContainerAdArea>
    </PageContainer>
  );
};
export default AddSeller;
