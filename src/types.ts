export type Post = {
   id?: number;
   name: string;
   body: string;
   email: string;
   userId: number;
};

export type Todo = {
   id: number;
   title: string;
   completed: boolean;
};

type Address = {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
};

type Company = {
   name: string;
   catchPhrase: string;
   bs: string;
};

export type User = {
   id: number;
   email: string;
   username: string;
   name: string;
   phone: string;
   website: string;
   address: Address;
   company: Company;
};

export type UserAlbum = {
   id: number;
   title: string;
};

export type UserTodo = Todo;

export type UserPost = {
   id: number;
   title: string;
   body: string;
};
