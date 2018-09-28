import axios from 'axios'
import {ERR_OK,apiUrl} from '@/api/config'


export function getData(url){
	const _url = apiUrl + url
	return new Promise((resolve, reject) => {
		axios.get(_url)
		.then((response)=>{
			 resolve(response.data)
		})
		.catch((err)=>{
			 reject(err)
		})
	} )
}