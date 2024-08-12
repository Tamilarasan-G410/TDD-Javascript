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
const addButton = document.querySelector('.addButton');

// Group Management (group.html)
const groupNameInput = document.querySelector('#groupName');
const createGroupForm = document.querySelector('#createGroupForm');
const groupsTableBody = document.querySelector('#groupsTable tbody');
const selectGroup = document.querySelector('#selectGroup');
const selectUsers = document.querySelector('#selectUsers');
const addUsersToGroupForm = document.querySelector('#addUsersToGroupForm');

// Modals
const addRemoveUserModal = document.getElementById('addRemoveUserModal');
const viewGroupModal = document.getElementById('viewGroupModal');

// Event listeners
createGroupForm.addEventListener('submit', createGroup);
addUsersToGroupForm.addEventListener('submit', handleAddRemoveUser);
groupsTableBody.addEventListener('click', handleGroupActions);
addUserForm.addEventListener('submit', addUser);
addButton.addEventListener('click',addUser)
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

// Group Management (group.html)
function createGroup(event) {
    event.preventDefault();
    const group = {
        groupName: groupNameInput.value,
        users: [] // Initialize with an empty array of users
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
    groups.forEach((group, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${group.groupName}</td>
            <td>
                <button class="view" data-index="${index}">View group</button>
                <button class="edit" data-index="${index}">Edit group name</button>
                <button class="delete" data-index="${index}">Delete group</button>
                <button class="add-remove-user" data-index="${index}">Add/Remove Users</button>
            </td>
        `;
        groupsTableBody.appendChild(row);
    });
}

function handleGroupActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('view')) {
        openViewGroupModal(index);
    } else if (event.target.classList.contains('edit')) {
        editGroup(index);
    } else if (event.target.classList.contains('delete')) {
        deleteGroup(index);
    } else if (event.target.classList.contains('add-remove-user')) {
        openAddRemoveUserModal(index);
    }
}

function openAddRemoveUserModal(groupId) {
    addRemoveUserModal.style.display = 'block';
    populateUserSelect();
    document.getElementById('currentGroupId').value = groupId;
}

function closeAddRemoveUserModal() {
    addRemoveUserModal.style.display = 'none';
}

function handleAddRemoveUser(event) {
    event.preventDefault();
    const groupId = document.getElementById('currentGroupId').value;
    const action = document.querySelector('input[name="action"]:checked').value;
    const userName = document.getElementById('userSelect').value;

    const groups = loadFromLocalStorage('groups');
    if (action === 'add') {
        const group = groups[groupId];
        if (!group.users.includes(userName)) {
            group.users.push(userName);
            saveToLocalStorage('groups', groups);
        }
    } else if (action === 'remove') {
        const group = groups[groupId];
        const userIndex = group.users.indexOf(userName);
        if (userIndex > -1) {
            group.users.splice(userIndex, 1);
            saveToLocalStorage('groups', groups);
        }
    }
    closeAddRemoveUserModal();
    renderGroups();
}

function populateUserSelect() {
    const userSelect = document.getElementById('userSelect');
    const users = loadFromLocalStorage('users') || [];
    userSelect.innerHTML = '<option value="">Select User</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.userName;
        option.textContent = `${user.firstName} ${user.lastName} (${user.userName})`;
        userSelect.appendChild(option);
    });
}

function openViewGroupModal(groupId) {
    viewGroupModal.style.display = 'block';
    displayGroupDetails(groupId);
}

function closeViewGroupModal() {
    viewGroupModal.style.display = 'none';
}

function displayGroupDetails(groupId) {
    const groups = loadFromLocalStorage('groups');
    const group = groups[groupId];
    document.getElementById('groupName').textContent = `Group Name: ${group.groupName}`;
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    group.users.forEach(userName => {
        const userItem = document.createElement('li');
        userItem.textContent = userName;
        userList.appendChild(userItem);
    });
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

    // Set User Management as active by default
    const userManagement = document.querySelector('.user-management');
    const groupManagement = document.querySelector('.group-management');
    const roleManagement = document.querySelector('.role-management');
    
    // Add 'active' class to the User Management section
    userManagement.classList.add('active');
    
    // Set the corresponding navigation link as selected
    const userNavLink = document.querySelector('.sidebar ul li a[href="#user-management"]');
    if (userNavLink) {
        userNavLink.classList.add('selected');
    }

    // Handle navigation clicks
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            userManagement.classList.remove('active');
            groupManagement.classList.remove('active');
            roleManagement.classList.remove('active');

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.classList.add('active');
                // Remove 'selected' class from all nav links
                document.querySelectorAll('.sidebar ul li a').forEach(navLink => {
                    navLink.classList.remove('selected');
                });
                // Add 'selected' class to the clicked nav link
                this.classList.add('selected');
            }
        });
    });
});
module.exports={
    renderUsers,
    deleteUser,
    renderGroups,
    openAddRemoveUserModal,
    populateUserSelect,
    handleAddRemoveUser,
    openViewGroupModal,
    displayGroupDetails,
    editUser,
    handleUserActions,
    editGroup,
    deleteGroup,
    loadFromLocalStorage
}