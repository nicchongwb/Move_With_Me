const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

            login: async (username, password) => {
                const opts = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "username": username,
                        "password": password
                    })
                }
                
                try {
                    const resp = await fetch('http://localhost:5000/token', opts)
                    if(resp.status !== 200) {
                        alert("error");
                        return false;
                    }
                    else alert("error");
    
                    const data = await resp.json();
                    console.log("this came from backend", data);
                    sessionStorage.setItem("token", data.token);
                    setStore({ token: data.token })
                    return true;    
                } 
                catch (error) {
                    console.error("erorr2 error logging in");
                }
            },

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;