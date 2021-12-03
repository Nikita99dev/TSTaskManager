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
