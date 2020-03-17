export const defaults = {
    isLoggedIn : Boolean(localStorage.getItem("token")) || false  
};

export const resolvers = {
    Mutation: {
        logUserIn:(_, {token}, {cache}) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut: (_, __,{token}) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
    
};