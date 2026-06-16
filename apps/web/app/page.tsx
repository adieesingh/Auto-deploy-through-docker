import {prismaClient} from "@repo/db/client"
export default async function Home(){
    const user = await prismaClient.user.findMany()
  return <div style={{display:"flex",height:"100px"}}>
    {JSON.stringify(user)}
  </div>
}


export const revalidate = 60