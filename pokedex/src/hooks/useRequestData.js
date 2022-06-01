// import axios from "axios"
// import { useEffect, useState } from "react"
// import { BASE_URL } from "../constants/url"

// const useRequestData = (path, initialState) => {

//     const [data, setData] = useState(initialState)

//     const getData = () => {
//         console.log(`${BASE_URL}/${path}`)
//         axios
//             .get(`${BASE_URL}/${path}`)

//             .then((response) => {
//                 setData(response.data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }
//     useEffect(() => {
//         getData()
//     }, [path])


//     return [data, getData]
// }

// export default useRequestData 