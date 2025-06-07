export interface ITodoFireBase {
  title: string
  isFavorite: boolean
  completed: boolean
}

export type FireBaseTodoObj = { [id: string]: ITodoFireBase }

// export type FireBaseTodoKey = [id: string]
