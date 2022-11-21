export interface FormState {
    query: string,
    category?: string
}

export interface FormAction {
    type: 'set_query'|'change_category',
    payload: any
}

export default function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "set_query":
            return {...state, query: action.payload};
        case "change_category":
            return {...state, category: action.payload};

    }
}
