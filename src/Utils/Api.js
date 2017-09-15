const Api = {};

Api.fetchAccounts = () => {
    return fetch('http://localhost:8080/accounts')
        .then((res) => res.json())
        .then((accounts) => accounts)
        .catch((err) => err);
}

Api.fetchPosts = () => {}

export default Api;