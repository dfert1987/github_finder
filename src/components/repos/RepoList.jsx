import React from 'react';
import PropTypes from 'prop-types';

function RepoList({ repos }) {
    return (
        <div className='rounded-lg shadow-lg card-base-100'>
            <div className='card-body'>
                <h2 className='text-3x my-4 font-bod card-title'>
                    Top Repositories
                </h2>
                {repos.map((repo) => {
                    return <h3>{repo.name}</h3>;
                })}
            </div>
        </div>
    );
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;
