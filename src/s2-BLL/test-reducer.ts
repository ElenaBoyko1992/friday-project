const initialState = {}

type InitialStateType = typeof initialState

export const testReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}


export type ActionsType = any