import axios from 'axios'
import {ERR_OK,apiUrl} from 'api/config'


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

export function getTab(url,tab){
	getData(url).
	then((res)=>{
		if (res.code === ERR_OK){
		let _res = res.data
		for(let i=1;i<_res.length-1;i++){
			tab.push(_res[i])
			}
		}
	},(err)=>{
		console.log(err)
	})
}