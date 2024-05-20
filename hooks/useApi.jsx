import { useState } from "react"

export default useApi = (apiFunction) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const request = async(...args)=> {
        const res = await apiFunction(...args)
        if(!res.ok){
          setError(true);
          setData([])
        }else{
          setError(false)
          setLoading(false)
          setData(res.data)
        }
    }

    return {data, error, loading, request}
}