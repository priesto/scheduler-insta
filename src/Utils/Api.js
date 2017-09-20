const Api = {};

Api.fetchAccounts = () => {
    return fetch('http://localhost:8080/accounts')
        .then((res) => res.json())
        .then((accounts) => accounts)
        .catch((err) => err);
}

Api.addAccount = (account) => {
    return fetch('http://localhost:8080/accounts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(account)
    })
    .then(res => res.json())
    .then(success => success)
    .catch(err => err)
}

Api.deleteAccount = (id) => {
    return fetch('http://localhost:8080/accounts', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({_id: id})
    })
    .then(res => res.json())
    .then(success => success)
    .catch(err => err)
}

Api.fetchPosts = () => {}

export default Api;