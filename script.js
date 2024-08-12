const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo_content');

logo.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// User Management (index.html)
const userNameInput = document.querySelector('#userName');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailIDInput = document.querySelector('#emailID');
const addUserForm = document.querySelector('.add-user form');
const usersTableBody = document.querySelector('#usersTable tbody');
const addButton = document.querySelector('.addButton')

// Group Management (group.html)
const groupNameInput = document.querySelector('#groupName');
const createGroupForm = document.querySelector('#createGroupForm');
const groupsTableBody = document.querySelector('#groupsTable tbody');
const selectGroup = document.querySelector('#selectGroup');
const selectUsers = document.querySelector('#selectUsers');
const addUsersToGroupForm = document.querySelector('#addUsersToGroupForm');

// Group Management (group.html)
createGroupForm.addEventListener('submit', createGroup);
addUsersToGroupForm.addEventListener('submit', addUsersToGroup);
groupsTableBody.addEventListener('click', handleGroupActions);

// User Management (index.html)
addUserForm.addEventListener('submit', addUser);
addButton.addEventListener('clcick',addUser);
usersTableBody.addEventListener('click', handleUserActions);

// Save to local storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Load from local storage
function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
// User Management (index.html)
function addUser(event) {
    event.preventDefault();
    const user = {
        userName: userNameInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        emailID: emailIDInput.value
    };
    const users = loadFromLocalStorage('users');
    users.push(user);
    saveToLocalStorage('users', users);
    renderUsers();
    addUserForm.reset();
}

function renderUsers() {
    const users = loadFromLocalStorage('users');
    usersTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.userName}</td>
            <td>${user.emailID}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

function handleUserActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('edit')) {
        editUser(index);
    } else if (event.target.classList.contains('delete')) {
        deleteUser(index);
    }
}

function editUser(index) {
    const users = loadFromLocalStorage('users');
    const user = users[index];
    userNameInput.value = user.userName;
    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
    emailIDInput.value = user.emailID;
    deleteUser(index);
}

function deleteUser(index) {
    const users = loadFromLocalStorage('users');
    users.splice(index, 1);
    saveToLocalStorage('users', users);
    renderUsers();
}

//Group Management (group.html)
function createGroup(event) {
    event.preventDefault();
    const group = {
        groupName: groupNameInput.value
    };
    const groups = loadFromLocalStorage('groups');
    groups.push(group);
    saveToLocalStorage('groups', groups);
    renderGroups();
    createGroupForm.reset();
}

function renderGroups() {
    const groups = loadFromLocalStorage('groups');
    groupsTableBody.innerHTML = '';
    selectGroup.innerHTML = '';
    groups.forEach((group, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${group.groupName}</td>
            <td>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            </td>
        `;
        groupsTableBody.appendChild(row);
        const option = document.createElement('option');
        option.value = index;
        option.textContent = group.groupName;
        selectGroup.appendChild(option);
    });
}

function addUsersToGroup(event) {
    event.preventDefault();
    const groupIndex = selectGroup.value;
    const selectedUsers = Array.from(selectUsers.selectedOptions).map(option => option.value);
    const groups = loadFromLocalStorage('groups');
    const group = groups[groupIndex];
    group.users.push(...selectedUsers);
    saveToLocalStorage('groups', groups);
}

function handleGroupActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('edit')) {
        editGroup(index);
    } else if (event.target.classList.contains('delete')) {
        deleteGroup(index);
    }
}

function editGroup(index) {
    const groups = loadFromLocalStorage('groups');
    const group = groups[index];
    groupNameInput.value = group.groupName;
    deleteGroup(index);
}

function deleteGroup(index) {
    const groups = loadFromLocalStorage('groups');
    groups.splice(index, 1);
    saveToLocalStorage('groups', groups);
    renderGroups();
}
// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
    renderUsers();
    renderGroups();
    const userManagement = document.querySelector('.user-management');
    const groupManagement = document.querySelector('.group-management');
    const roleManagement = document.querySelector('.role-management');

    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            userManagement.classList.remove('active');
            groupManagement.classList.remove('active');
            roleManagement.classList.remove('active');

            const target = document.querySelector(this.getAttribute('href'));
            target.classList.add('active');
        });
    });
});

module.exports={
    renderUsers,
    deleteUser
}