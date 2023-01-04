export type childrenProp = { children: React.ReactNode };

/************************ useAuth types ************************/
export type useSignTypes = {
  setMsg: Function;
  setIsLoading: Function;
};

export type signTypes = {
  name?: string;
  email: string;
  password: string;
};

/************************ useMessages types ************************/

export type createMessageType = {
  from: string;
  to: string;
  content: string;
};

export type useGetMessagesType = {
  me: string;
  other: string;
  enabled?: boolean;
};

/************************ useUser types ************************/
export type userTypes = {
  id: string;
  name?: string;
  phone?: string;
  profile_url?: string;
};
