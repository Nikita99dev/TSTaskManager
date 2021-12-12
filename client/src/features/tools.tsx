export async function regUser(url: string, user: object) {
  try {
    const rUser = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

    if (rUser.status === 200) {
      return rUser.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function logUserTool(url: string, user: object) {
  try {
    const loguser = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

    if (loguser.status === 200) {
      return loguser.json();
    }
  } catch (error) {
    throw error;
  }
}


export async function createTodoTool(url: string, todo: object){
  console.log(todo, '00000000000000000')
  try {
    const created = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({content: todo, isDone: false})
    })

    if(created.status === 200){
      return created.json()
    }
  } catch (e) {
    throw e
  }
}
