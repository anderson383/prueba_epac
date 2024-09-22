
export type PostFormValuesType = {
  title?: string;
  body?: string;
}

export type PostFormResponseType = {
  title: string;
  body: string;
  id: number
}

export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
}