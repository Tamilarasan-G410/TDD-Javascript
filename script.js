//Side bar
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo_content');
logo.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// User Management-queryselectors
const userNameInput = document.querySelector('#userName');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailIDInput = document.querySelector('#emailID');
const addUserForm = document.querySelector('.add-user form');
const usersTableBody = document.querySelector('#usersTable tbody');
const actionButtons = document.querySelector("#actionButtons")
const addUserModalBtn = document.querySelector('.newUser')
const addUserModal = document.querySelector('.addUserModal')
const errormessage1 = document.querySelector('.error-message1')
const errormessage2 = document.querySelector('.error-message2')
const errormessage3 = document.querySelector('.error-message3')
const errormessage4 = document.querySelector('.error-message4')
const successmessage = document.querySelector('#successmessage1')

// Group Management-queryselectors
const groupNameInput = document.querySelector('#groupName');
const createGroupForm = document.querySelector('#createGroupForm');
const groupsTableBody = document.querySelector('#groupsTable tbody');
const addGroupModalButton = document.querySelector(".newGroup")
const addGroupModal = document.querySelector(".addGroupModal")
const addUsersToGroupForm = document.querySelector('#addUsersToGroupForm');
const addUserButton = document.querySelector("#showAddUserForm")
const removeUserButton = document.querySelector('#showRemoveUserForm')
const closebutton1 = document.querySelector(".close-btn1");
const closebutton2 = document.querySelector(".close-btn2");
const addRemoveUserModal = document.querySelector('#addRemoveUserModal');
const viewGroupModal = document.querySelector('#viewGroupModal');
const viewGroupName = document.querySelector('#viewGroupName');
const successmessage2 = document.querySelector('#successmessage2')
const userActionForm = document.querySelector('#userActionForm');
const submitAddUserButton = document.querySelector('#submitAddUserButton')
const submitRemoveUserButton = document.querySelector('#submitRemoveUserButton')

// Role Management-queryselectors
const addRoleModalButton = document.querySelector(".newRole")
const addRoleModal = document.querySelector(".addRoleModal")
const roleNameInput = document.querySelector('.roleName');
const roleDescriptionInput = document.querySelector('.roleDescription');
const createRoleForm = document.querySelector('.createRoleForm');
const rolesTableBody = document.querySelector('.rolesTable tbody');
const assignUsersModal = document.querySelector('#assignUsersModal');
const assignGroupsModal = document.querySelector('#assignGroupsModal');
const assignUserSelect = document.querySelector('#assignUserSelect');
const assignGroupSelect = document.querySelector('#assignGroupSelect');
const assignUserRole = document.querySelector('#assignUserRole');
const assignGroupRole = document.querySelector('#assignGroupRole');
const closebutton3 = document.querySelector('.close-btn3');
const closebutton4 = document.querySelector('.close-btn4');
const assignUserButton = document.querySelector('#assignUserButton');
const assignGroupButton = document.querySelector('#assignGroupButton');
const successmessage3 = document.querySelector('#successmessage3')

//Event listeners
rolesTableBody.addEventListener('click', handleRoleActions);
closebutton3.addEventListener('click', () => {
    assignUsersModal.style.display = 'none';
});
closebutton4.addEventListener('click', () => {
    assignGroupsModal.style.display = 'none';
});
assignUserButton.addEventListener('click', () => {
    handleAssignUser();
});

assignGroupButton.addEventListener('click', () => {
    handleAssignGroup();
});
createGroupForm.addEventListener('submit', createGroup);
addUsersToGroupForm.addEventListener('submit', handleAddRemoveUser);
groupsTableBody.addEventListener('click', handleGroupActions);
addUserForm.addEventListener('submit', addUser);
addUserModalBtn.addEventListener('click',()=>{
addUserModal.style.display='block';
})
usersTableBody.addEventListener('click', handleUserActions);
addUserButton.addEventListener('click', () => {
    actionButtons.style.display='none';
    userActionForm.style.display = 'block';
    submitAddUserButton.style.display = 'inline';
    submitRemoveUserButton.style.display = 'none';
    const groupId = document.querySelector('#currentGroupId').value;
    populateUserSelect(groupId, 'add');
});
removeUserButton.addEventListener('click', () => {
    actionButtons.style.display='none';
    userActionForm.style.display = 'block';
    submitAddUserButton.style.display = 'none';
    submitRemoveUserButton.style.display = 'inline';
    const groupId = document.querySelector('#currentGroupId').value;
    populateUserSelect(groupId, 'remove');
});
submitAddUserButton.addEventListener('click', () => handleAddRemoveUser('add'));
submitRemoveUserButton.addEventListener('click', () => handleAddRemoveUser('remove'));
closebutton1.addEventListener('click',closeAddRemoveUserModal)
closebutton2.addEventListener('click',closeViewGroupModal)
addGroupModalButton.addEventListener('click',()=>{
    addGroupModal.style.display='block';
})
addRoleModalButton.addEventListener('click',()=>{
    addRoleModal.style.display='block'
})
createRoleForm.addEventListener('submit', createRole);

// Save to local storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Load from local storage
function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
    renderUsers();
    renderGroups();
    renderRoles();

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

//user management

//validation
function validateUserInput(userName, firstName, lastName, emailID) {
    const namePattern = /^[A-Za-z]+$/; // Allows only letters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    if (!namePattern.test(userName)) {
        errormessage1.style.color="red";
        errormessage1.innerHTML = "User name should only contain letters";
        setTimeout(() => {
            errormessage1.innerHTML="";
        }, 1800);
        return false;
    }
    if (!namePattern.test(firstName)) {
        errormessage2.style.color="red";
        errormessage2.innerHTML = "First name should only contain letters.";
        setTimeout(() => {
            errormessage2.innerHTML="";
        }, 1800);
        return false;
    }
    if (!namePattern.test(lastName)) {
        errormessage3.style.color="red";
        errormessage3.innerHTML = "Last name should only contain letters";
        setTimeout(() => {
            errormessage3.innerHTML="";
        }, 1800);
        return false;
    }
    if (!emailPattern.test(emailID)) {
        errormessage4.style.color="red";
        errormessage4.innerHTML = "Not a valid emailID";
        setTimeout(() => {
            errormessage4.innerHTML="";
        }, 1800);
        return false;
    }
    return true;
}
//Adding new user
function addUser(event) {
    event.preventDefault();
    const userName = userNameInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const emailID = emailIDInput.value.trim();
    if (validateUserInput(userName, firstName, lastName, emailID)) {
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
        addUserModal.style.display='none';
        successmessage.style.display='block'
        setTimeout(() => {
            successmessage.style.display='none'
        }, 1800);
    }
}

//Render user
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
                <button class="editu" data-index="${index}">Edit</button>
                <button class="deleteu" data-index="${index}">Delete</button>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

//Handle user actions (edit and delete)
function handleUserActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('editu')) {
        editUser(index);
    } else if (event.target.classList.contains('deleteu')) {
        deleteUser(index);
    }
}

//Edit user details
function editUser(index) {
    addUserModal.style.display='block';
    const users = loadFromLocalStorage('users');
    const user = users[index];
    userNameInput.value = user.userName;
    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
    emailIDInput.value = user.emailID;
    deleteUser(index);
}

//Delete user
function deleteUser(index) {
    const users = loadFromLocalStorage('users');
    users.splice(index, 1);
    saveToLocalStorage('users', users);
    renderUsers();
}

// Group Management

//Adding a new group
function createGroup(event) {
    event.preventDefault();
    addGroupModal.style.display='none';
    const group = {
        groupName: groupNameInput.value,
        users: [] 
    };
    const groups = loadFromLocalStorage('groups');
    groups.push(group);
    saveToLocalStorage('groups', groups);
    renderGroups();
    createGroupForm.reset();
    successmessage2.style.display='block'
    setTimeout(() => {
        successmessage2.style.display='none'
    }, 1800);
}

//Rendering groups
function renderGroups() {
    const groups = loadFromLocalStorage('groups');
    groupsTableBody.innerHTML = '';
    groups.forEach((group, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${group.groupName}</td>
            <td>
                <button class="view" data-index="${index}">View group</button>
                <button class="delete" data-index="${index}">Delete group</button>
                <button class="add-remove-user" data-index="${index}">Add/Remove Users</button>
            </td>
        `;
        groupsTableBody.appendChild(row);
    });
}

//Handle group actions
function handleGroupActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('view')) {
        openViewGroupModal(index);
    } else if (event.target.classList.contains('delete')) {
        deleteGroup(index);
    } else if (event.target.classList.contains('add-remove-user')) {
        openAddRemoveUserModal(index);
    }
}

function openAddRemoveUserModal(groupId) {
    addRemoveUserModal.style.display = 'block';
    document.getElementById('currentGroupId').value = groupId;
    document.getElementById('userActionForm').style.display = 'none'; 
}
function closeAddRemoveUserModal() {
    addRemoveUserModal.style.display = 'none';
    actionButtons.style.display='flex';
}

//Add or remove user from the group
function handleAddRemoveUser(action) {
    const groupId = document.querySelector('#currentGroupId').value;
    const userName = document.querySelector('#userSelect').value;
    const groups = loadFromLocalStorage('groups');
    const group = groups[groupId];

    if (action === 'add') {
        if (!group.users.includes(userName)) {
            group.users.push(userName);
            saveToLocalStorage('groups', groups);
        }
    } else if (action === 'remove') {
        const userIndex = group.users.indexOf(userName);
        if (userIndex > -1) {
            group.users.splice(userIndex, 1);
            saveToLocalStorage('groups', groups);
        }
    }
    closeAddRemoveUserModal();
    renderGroups();
}

function populateUserSelect(groupId = null, action = '') {
    const userSelect = document.getElementById('userSelect');
    const users = loadFromLocalStorage('users') || [];
    const groups = loadFromLocalStorage('groups') || [];
    
    userSelect.innerHTML = '<option value="">Select User</option>';
    
    if (groupId !== null) {
        const group = groups[groupId];
        if (group) {
            const usersInGroup = group.users;
            users.forEach(user => {
                if (action === 'add' && !usersInGroup.includes(user.userName) || 
                    action === 'remove' && usersInGroup.includes(user.userName)) {
                    const option = document.createElement('option');
                    option.value = user.userName;
                    option.textContent = `${user.userName}`;
                    userSelect.appendChild(option);
                }
            });
        }
    } else {
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.userName;
            option.textContent = `${user.userName}`;
            userSelect.appendChild(option);
        });
    }
}

function openViewGroupModal(groupId) {
    viewGroupModal.style.display = 'block';
    displayGroupDetails(groupId);
}

function closeViewGroupModal() {
    viewGroupModal.style.display = 'none';
    actionButtons.style.display='flex';
}

function displayGroupDetails(groupId) {
    const groups = loadFromLocalStorage('groups');
    const group = groups[groupId];
    viewGroupName.textContent = `Group Name: ${group.groupName}`;
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    group.users.forEach(userName => {
        const userItem = document.createElement('li');
        userItem.textContent = userName;
        userList.appendChild(userItem);
    });
}

//Delete group
function deleteGroup(index) {
    const groups = loadFromLocalStorage('groups');
    groups.splice(index, 1);
    saveToLocalStorage('groups', groups);
    renderGroups();
}

//Role management

//Adding a new role
function createRole(event) {
    event.preventDefault();
    addRoleModal.style.display='none';
    const role = {
        roleName: roleNameInput.value,
        roleDescription: roleDescriptionInput.value
    };
    const roles = loadFromLocalStorage('roles');
    roles.push(role);
    saveToLocalStorage('roles', roles);
    renderRoles();
    createRoleForm.reset();
    successmessage3.style.display='block'
    setTimeout(() => {
        successmessage3.style.display='none'
    }, 1800);
}

//Render roles
function renderRoles() {
    const roles = loadFromLocalStorage('roles');
    rolesTableBody.innerHTML = '';
    roles.forEach((role, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${role.roleName}</td>
            <td>${role.roleDescription}</td>
            <td>
                <button class="roleU" data-index="${index}">Assign Users</button>
                <button class="roleG" data-index="${index}">Assign Groups</button>
            </td>
        `;
        rolesTableBody.appendChild(row);
    });
   
    const rolesTableAssignmentsBody = document.querySelector('.rolesTableAssignments tbody');
    rolesTableAssignmentsBody.innerHTML = '';

    roles.forEach(role => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${role.roleName}</td>
            <td>${role.assignedUsers ? role.assignedUsers.join(', ') : 'None'}</td>
            <td>${role.assignedGroups ? role.assignedGroups.join(', ') : 'None'}</td>
        `;
        rolesTableAssignmentsBody.appendChild(row);
    });
}

//Assigning role to user
function handleAssignUser() {
    const roleIndex = parseInt(currentAssignUserRoleIndex.value);
    const userName = assignUserSelect.value;
    
    if (roleIndex >= 0 && userName) {
        const roles = loadFromLocalStorage('roles');
        const role = roles[roleIndex];
        if (!role.assignedUsers) role.assignedUsers = [];
        if (!role.assignedUsers.includes(userName)) {
            role.assignedUsers.push(userName);
            updateRoleAssignments(roleIndex, role.assignedUsers, role.assignedGroups || []);
        }
    }
    assignUsersModal.style.display = 'none';
}

//Assigning group to user
function handleAssignGroup() {
    const roleIndex = parseInt(currentAssignGroupRoleIndex.value);
    const groupName = assignGroupSelect.value;
    
    if (roleIndex >= 0 && groupName) {
        const roles = loadFromLocalStorage('roles');
        const role = roles[roleIndex];
        if (!role.assignedGroups) role.assignedGroups = [];
        if (!role.assignedGroups.includes(groupName)) {
            role.assignedGroups.push(groupName);
            updateRoleAssignments(roleIndex, role.assignedUsers || [], role.assignedGroups);
        }
    }
    assignGroupsModal.style.display = 'none';
}

function openAssignUserModal(index) {
    assignUsersModal.style.display = 'block';
    assignUserSelect.innerHTML = '<option value="">Select User</option>';
    populateUserSelectU();
    document.querySelector('#currentAssignUserRoleIndex').value = index;
    assignUserRole.textContent = `Assign to Role: ${loadFromLocalStorage('roles')[index].roleName}`;
}

function openAssignGroupModal(index) {
    assignGroupsModal.style.display = 'block';
    assignGroupSelect.innerHTML = '<option value="">Select Group</option>';
    populateGroupSelect();
    document.querySelector('#currentAssignGroupRoleIndex').value = index;
    assignGroupRole.textContent = `Assign to Role: ${loadFromLocalStorage('roles')[index].roleName}`;
}

function populateUserSelectU() {
    const users = loadFromLocalStorage('users') || [];
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.userName;
        option.textContent = user.userName;
        assignUserSelect.appendChild(option);
    });
}

function populateGroupSelect() {
    const groups = loadFromLocalStorage('groups') || [];
    groups.forEach(group => {
        const option = document.createElement('option');
        option.value = group.groupName;
        option.textContent = group.groupName;
        assignGroupSelect.appendChild(option);
    });
}

//Handling role action (add user and groups to roles)
function handleRoleActions(event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains('roleU')) {
        openAssignUserModal(index);
    } else if (event.target.classList.contains('roleG')) {
        openAssignGroupModal(index);
    }
}

function updateRoleAssignments(roleIndex, userAssignments, groupAssignments) {
    const roles = loadFromLocalStorage('roles');
    if (roles[roleIndex]) {
        roles[roleIndex].assignedUsers = userAssignments;
        roles[roleIndex].assignedGroups = groupAssignments;
        saveToLocalStorage('roles', roles);
        renderRoles(); 
    }
}

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
    deleteGroup,
    loadFromLocalStorage,
    saveToLocalStorage,
    handleAddRemoveUser,
    renderRoles,
    handleAssignUser,
    populateUserSelectU,
    openAssignUserModal,
    openAssignGroupModal,
    updateRoleAssignments,
    handleAssignGroup
}