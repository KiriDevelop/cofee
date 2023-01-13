import { 
    COMMENT_CREATE, 
    COMMENT_UPDATE, 
    COMMENT_DELETE,
    COMMENTS_LOAD 
} from './types'

const initialState = {
    comments: []
}

export const comReducer = (state = initialState, action) => {
    console.log('commentsLoad', action)
    switch(action.type) {
        
        case COMMENT_CREATE:
            return {
                ...state,
            comments: [...state.comments, action.data]
            }

        case COMMENTS_LOAD:
             const commentsNew = action.data.map(res => {
                return {
                    text: res.name,
                    id: res.id
                }
             })
            return {
                ...state,
            comments: commentsNew
            }

        case COMMENT_UPDATE:
            const { data } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex(res => res.id === data.id);
            // для обноваления комментария мы вырезаем старый комментарий из массива и вставляем на его место новый
            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1 )
            ];

            return {
                ...state,
            comments: nextComments
            }

            case COMMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(res => res.id === id);
                // для удаления комментария из массива просто находим его айди мапом и слайсим
                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1 )
                ];

                return {
                    ...state,
                comments: nextComments
                }
            })();

        default: 
        return state;

    }
}