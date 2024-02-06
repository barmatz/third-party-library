export type User = {
    name: string;
  };
  
  export function createUser(name: User["name"]): User {
    return {
      name,
    };
  }
  