class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ frirstName, lastName}){
        const id = this.id;
        this.storage[id] = {id, frirstName, lastName};
        this.id++

    };

    getUsers() {
        return Object.values(this.storage);

    };

    getUser(id) {
        return this.storage[id];

    };

    updateUser(id, {frirstName, lastName}) {
        this.storage[id] = {id, frirstName, lastName};

    }

    deleteUser(id) {
        return this.storage[id];

    }
}



module.exports = new UsersStorage();
