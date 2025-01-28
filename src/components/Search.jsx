import PropTypes from "prop-types";
import {useState} from 'react';

Search.prototype = {
    searchFn : PropTypes.func
}
function Search(props){
    const [searchData,setSearchData] = useState({searchTerm : '', topSearch : 0});

    function filterFn(){
       console.log(searchData);
       props.searchFn(searchData);
    }
    function updateSearchTerm(e){
        // setSearchData({...searchData,searchTerm : e.target.value});
        // if(searchData.searchTerm.length <= 0)
        //    props.searchFn(searchData);
    }

    return (
        <>
            <div className="search">
                <input type="text" name="search" id="search" onChange={updateSearchTerm}
                />
                <input type="button" value="Top Rated"  onClick={updateSearchTerm}/>
                <input type="button" value="Search" onClick={filterFn}/>
            </div>
        </>
    )
}

export default Search;