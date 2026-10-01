require ('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (const usernameArray of args) {
        combinedObject.users.push(...usernameArray);
    }

    combinedObject.merge_date = new Date().toString('M/d/yyyy');
    return combinedObject;
}


export default {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
