import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
    return (
        <div className='rounded-lg shadow-lg card-base-100'>
            <div className='card-body'>
                <h2 className='text-3x my-4 font-bod card-title'>
                    Latest Repositories
                </h2>
                {repos.map((repo) => {
                    return <RepoItem key={repo.id} repo={repo} />;
                })}
            </div>
        </div>
    );
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;
