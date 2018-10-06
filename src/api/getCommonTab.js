import {ERR_OK} from 'api/config'
import {getData} from 'api/getData'
//获取页面tab数据
export function getCommonTab(url,tab){
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