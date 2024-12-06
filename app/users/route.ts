export const users = [
    { id: 1, name: "vikas", email: "vikas@gmail.com" },
    { id: 2, name: "kapil", email: "kapil@gmail.com" },
]

export async function GET() {
    return await Response.json(users);
}
export async function POST(request: Request) {
    const user = await request.json()
    if (users.filter((o: any) => o.email === user.email).length > 0) {
        return new Response(JSON.stringify({ "error": { "message": "Email already exist" }, status: 409 }))
    } else {
        const newUser = { id: users.length + 1, name: user.name, email: user.email }
        users.push(newUser)
        return new Response(JSON.stringify(user), { headers: { "Content-Type": "aplication/json" }, status: 201 })
    }
}