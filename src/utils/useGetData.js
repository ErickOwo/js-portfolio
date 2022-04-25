import { useEffect, useState } from "react";

const useGetData = (API) => {
  const [ data, setData ] = useState({gender: null,name:{title: null,first: null,last: null},location:{street:{number:6943,name: null},city: null,state: null,country: null,postcode:71941,coordinates:{latitude: null,longitude: null},timezone:{offset: null,description: null}},email: null,login:{uuid: null,username: null,password: null,salt: null,md5: null,sha1: null,sha256: null},dob:{date: null,age:58},registered:{date: null,age:11},phone: null,cell: null,id:{name: null,value: null},picture:{large: null,medium: null,thumbnail: null},nat: null})
  useEffect(()=>{
    const fetchData = async (id) => {
      const apiURl = id ? `${API}${id}` : API;
      try {
        const response = await fetch(apiURl);
        const data = await response.json();
        setData(data.results[0]);
      } catch (error) {
        console.log('Fetch Error', error);
      };
    };;
    fetchData();
},[API]);
  return data;
};

export default useGetData;