const ActionTypes = {// Типы action'ов для dispatcher'а
    setPosts: "SET-POSTS",
    pagination: "PAGINATION",
    writeName:"WRITE-NAME",
    writeTheme:"WRITE-THEME",
    writeText:"WRITE-TEXT",
    setPaginationState:"SET-PAGINATION-STATE",
    setIsPaginate:"SET-IS-PAGINATE"
}
let initialState = {//Дефолтные данные state'а
    posts:[],
    nameWritten:'',
    themeWritten:'',
    textWritten:'',
    currentPage:1,
    pageSize:3,
    isPaginate:true,
    id:0
};
const blogReducer = (state = initialState, action) => {
    switch (action.type) {//Switch для обработки типов Action Creator'a
        case ActionTypes.setPosts://Обработка добавления записей
            return {
                ...state,
                posts: action.posts
            };
        case ActionTypes.pagination://Обработка пагинации
            switch(action.paginationType){
                case 'next':
                    return {...state,currentPage:state.currentPage+1};
                case 'previous':
                    return state.currentPage>1?{...state,currentPage:state.currentPage-1}:state;
                default:
                    return state;
            }
        case ActionTypes.writeName://Обработка написания имени
        return {
            ...state,
            nameWritten: action.name
        };
        case ActionTypes.writeText://Обработка написания текста записи
        return {
            ...state,
            textWritten: action.text
        };
        case ActionTypes.writeTheme://Обработка написания темы записи
        return {
            ...state,
            themeWritten: action.theme
        };
        case ActionTypes.setIsPaginate://Обработка условия isPaginate для оптимизации навигации по сайту
            return action.isPaginate===false ? {...state,isPaginate:true} : {...state,isPaginate:false};
        default:
            return state;
    }
}
//Action Creator страницы блога для
export const PaginationAC=(paginationType)=>{//Пагинации
    return{
        type:ActionTypes.pagination,
        paginationType:paginationType
    }
}
export const SetPostsAC =(posts)=> {//Добавления постов
    return {
        type: ActionTypes.setPosts,
        posts:posts
    }
}
export const WriteNameAC=(name)=>{//Написания имени
    return {
        type:ActionTypes.writeName,
        name:name
    }
}
export const WriteThemeAC=(theme)=>{//Написания темы для записи
    return {
        type:ActionTypes.writeTheme,
        theme:theme
    }
}
export const WriteTextAC=(text)=>{//Написания текста для записи
    return {
        type:ActionTypes.writeText,
        text:text
    }
}
export const SetIsPaginateAC=(isPaginate)=>{//Условия для навигации по сайту
    return{
        type:ActionTypes.setIsPaginate,
        isPaginate:isPaginate
    }
}




export default blogReducer;