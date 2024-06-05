
export async function signInAccount({ email, password }) {
    try {
        const session = await fetch(`https://login.demoapi.xyz/api/auth/local`, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ identifier:email, password }),
            method: "POST",
            // credentials: 'include'
        })
        console.log(session)
        const ans = await session.json();
        console.log(ans)
        localStorage.setItem("loggedIn", true)
        localStorage.setItem("user", email)
        // if (session.ok) {
        // } else {
        //    return false
        // }
        // return session.ok;
        return true
    } catch (error) {
        console.log(error);
    }
}