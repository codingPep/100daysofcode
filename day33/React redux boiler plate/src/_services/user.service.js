import API from "../_helpers/";

export const userService = {
    login,
    signup
}

async function login(email, password) {
    const res =await axios.post(API.baseURL + "/user/login", {
        email: email,
        password: password
    });

    if (res.data === "")
    {
        window.localStorage.setItem('auth', JSON.stringify(res.data));
        return res.data;
    }
}