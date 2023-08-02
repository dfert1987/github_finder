import React, { useEffect, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import { useParams } from 'react-router-dom';

function User() {
    const { getUser, user } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        getUser(params.login);
        // getUserRepos(params.login);
    }, [getUser, params.login]);

    return <div>{user.login}</div>;
}

export default User;
