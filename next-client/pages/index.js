import Base from "../layouts/Base";
import { useEffect, useState } from "react";

export default function Home() {
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState('')

   useEffect(() => {
       (
           async () => {
               try {
                   const response = await fetch('http://localhost:8000/user', {
                       credentials: 'include',
                   });

                   const content = await response.json();
                   console.log(content)

                   if (content.name) {
                       setMessage(`Hi ${content.name}`)
                       setAuth(true);
                   }

               } catch (e) {
                   console.log(e.message)
                   setAuth(false)
                   setMessage('You are not logged in')
               }
           }
       )();
   });

  return (
      <Base auththenticated={auth}>
          {message}
      </Base>
  )
}

// export async function getStaticProps() {
//     const res = await fetch('http://127.0.0.1:8000/api/podcast/')
//     const podcasts = await res.json()
//
//     return {
//         props: {
//             podcasts
//         }
//     }
// }

