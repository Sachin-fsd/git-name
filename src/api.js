
export async function signInAccount({ email, password }) {
    try {
        alert(JSON.stringify({email,password}))
        const session = await fetch(`https://conference-pkoe.onrender.com/login`, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
            method: "POST",
            // credentials: 'include'
        })
        alert(JSON.stringify(session))
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