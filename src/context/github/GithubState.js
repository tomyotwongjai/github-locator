import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import * as Types from '../types';

function GithubState(props) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users

    const searchUsers = async text => {
        setLoading();

        const url = `https://api.github.com/search/users?q=${text}`;

        const res = await axios.get(url);

        dispatch({
            type: Types.SEARCH_USERS,
            payload: res.data.items,
        })
    }

    // Clear Results
    const clearUsers = () => dispatch({ type: Types.CLEAR_USERS });

    // Set Loading
    const setLoading = () => dispatch({ type: Types.SET_LOADING });

  return (
    <GithubContext.Provider 
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            }}
        >
        {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState