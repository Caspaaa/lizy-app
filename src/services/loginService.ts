export const getToken = async (user: any) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getToken`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    const responseJSON = await response.json()
    
    return responseJSON.token;
}


export const authenticate = async (): Promise<boolean> => {
    const { status } = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  
    return status === 200;
  };