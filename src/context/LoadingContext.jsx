import React, { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext();

const useLoadingContext = ()=> useContext(LoadingContext)

const LoadingContextProvider=({children})=>{
	const [isLoading, setIsLoading]=useState(true)

	// 模擬加載
	useEffect(()=>{
		setTimeout(()=>{
			setIsLoading(false)
		}, 2000)
	},[])

	return <LoadingContext.Provider value={{isLoading, setIsLoading}}>{children}</LoadingContext.Provider>;
}

export {useLoadingContext, LoadingContextProvider}
