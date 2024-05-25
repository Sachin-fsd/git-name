
export async function signInAccount({ email, password }) {
    try {
        const session = await fetch(`http://localhost:8080/login`, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
            method: "POST",
            credentials: 'include'
        })
        console.log(session)
        const ans = await session.json();
        console.log(ans)
        if (session.ok) {
            localStorage.setItem("loggedIn", true)
        } else {
           return false
        }
        return session.ok;
    } catch (error) {
        console.log(error);
    }
}