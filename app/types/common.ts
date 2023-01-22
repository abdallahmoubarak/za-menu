export interface childrenProp {
  children: React.ReactNode;
}

/************************ useAuth types ************************/
export interface useSignTypes {
  setMsg: Function;
  setIsLoading: Function;
}

export interface signTypes {
  name?: string;
  email: string;
  password: string;
}

/************************ useMessages types ************************/

export interface createMessageType {
  from: string;
  to: string;
  content: string;
}

export interface useGetMessagesType {
  me: string;
  other: string;
  enabled?: boolean;
}

/************************ useUser types ************************/
export interface userTypes {
  id: string;
  name?: string;
  phone?: string;
  profile_url?: string;
  email: string;
  password?: string;
}
//

export interface CategoryProps {
  name: string;
  products: Product[];
}
export interface Product {
  name: string;
  price: number;
  description?: string;
}
