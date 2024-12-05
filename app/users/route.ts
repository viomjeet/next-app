export const users = [
    { id: 1, name: "vikas", },
    { id: 2, name: "kapil" }
]

export async function GET(){
    Response.json(users);
}
export async function POST(){
    
}