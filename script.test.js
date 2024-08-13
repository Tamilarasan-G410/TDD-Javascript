const fs = require('fs');
const path = require('path');
describe('HTML Testing', () => {
    describe('User-page testing',()=>{
        beforeEach(() => {
            const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
            document.body.innerHTML = html;
        });

        test('All html components are correctly displayed', () => {
            const formTitle = document.querySelector(".add-user h3 ")
            const userName = document.querySelector("#userName")
            const firstName = document.querySelector("#firstName")
            const lastName = document.querySelector("#lastName")
            const emailID = document.querySelector("#emailID")
            const addButton = document.querySelector(".addButton")
            const userListHeading = document.querySelector('.user-list h3');
            const userTable = document.querySelector('#usersTable');
            const userTableHeaders = document.querySelectorAll('#usersTable thead th');
            const userTableHeaderTexts = Array.from(userTableHeaders).map(header => header.textContent);

        
            //Whether the title of the form is present
            expect(formTitle).not.toBeNull();
            expect(formTitle.textContent).toBe('Add User')

            //Whether the input text box is displayed and check its attributes
            expect(userName).not.toBeNull();
            expect(userName.getAttribute('placeholder')).toBe('Username');
            expect(userName.getAttribute('autocomplete')).toBe('off');
            expect(userName.hasAttribute('required')).toBe(true);

            expect(firstName).not.toBeNull();
            expect(firstName.getAttribute('placeholder')).toBe('First name');
            expect(firstName.getAttribute('autocomplete')).toBe('off');
            expect(firstName.hasAttribute('required')).toBe(true);

            expect(lastName).not.toBeNull();
            expect(lastName.getAttribute('placeholder')).toBe('Last name');
            expect(lastName.getAttribute('autocomplete')).toBe('off');
            expect(lastName.hasAttribute('required')).toBe(true);

            expect(emailID).not.toBeNull();
            expect(emailID.getAttribute('placeholder')).toBe('Email id');
            expect(emailID.getAttribute('autocomplete')).toBe('off');
            expect(emailID.hasAttribute('required')).toBe(true);
            
            
            //Whether the add button is displayed and check its title and type
            expect(addButton).not.toBeNull();
            expect(addButton.textContent).toBe('Add user');
            expect(addButton.title).toBe("Add the user");
            expect(addButton.disabled).toBe(false)
            expect(addButton.getAttribute('type')).toBe('submit'); 
             
            //Users table testing
            //Whether the title of the table is present
            expect(userListHeading.textContent).toBe('Users List');

            //Whether the table is present
            expect(userTable).not.toBeNull();
            
            //Whther the heading of the table are correctly displayed
            expect(userTableHeaderTexts).toEqual(['Username', 'Email', 'First Name', 'Last Name', 'Actions']);
             
        }); 
    });
    describe('Group-page testing',()=>{
        beforeEach(() => {
            const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
            document.body.innerHTML = html;
        });

        test('All html components are correctly displayed', () => {
           
            // const groupHeading = document.querySelector('.group-management h2');
            const groupFormTitle = document.querySelector('.group-form h3')
            const groupForm = document.querySelector('#createGroupForm');
            const groupLabel = document.querySelector('label[for="groupName"]');
            const groupInput = document.querySelector('#groupName');
            const groupButton = document.querySelector('.createGroup');
            const groupListTitle = document.querySelector('.group-list h3');
            const groupListTable = document.querySelector('#groupsTable');
            const groupListheaders = groupListTable.querySelectorAll('thead th');
            const groupListHeaderTexts = Array.from(groupListheaders).map(header => header.textContent.trim());
 
            //Whether the create group form is displayed
            expect(groupFormTitle.textContent).toBe('Create Group');
            expect(groupForm).not.toBeNull();
            expect(groupLabel.textContent).toBe('Group Name:');
            expect(groupInput).not.toBeNull();
            expect(groupInput.required).toBe(true);
            expect(groupButton.textContent).toBe('Create Group');
              
            
            // whether the "Groups List" table is displayed
            expect(groupListTitle.textContent).toBe('Groups List');
            expect(groupListTable).not.toBeNull();
            expect(groupListHeaderTexts).toEqual(['Group Name', 'Actions']);
        });
    });
    describe('Roles-page testing',()=>{
        beforeEach(() => {
            const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
            document.body.innerHTML = html;
        });

        test('All html components are correctly displayed', () => {
            const roleMangementHeading = document.querySelector('.role-management h2');
            const createRoleFormTitle = document.querySelector('.role-form h3');
            const createRoleForm = document.querySelector('.createRoleForm');
            const roleNameLabel = document.querySelector('label[for="roleName"]');
            const roleNameInput = document.querySelector('.roleName');
            const roleDescriptionLabel = document.querySelector('label[for="roleDescription"]');
            const roleDescriptionInput = document.querySelector('.roleDescription');
            const createRoleButton = document.querySelector('.createRoleBtn');
            const rolesListTitle = document.querySelector('.role-list h3');
            const rolesListTable = document.querySelector('.rolesTable');
            const rolesListheaders = rolesListTable.querySelectorAll('thead th');
            const rolesListheadersTexts = Array.from(rolesListheaders).map(header => header.textContent.trim());
            const assignRolesToUsersFormTitle = document.querySelector('.assign-role-to-user-form h3');
            const assignRolesToUsersForm = document.querySelector('.assignRoleToUserForm');
            const assignRolesToUsersLabel = document.querySelector('label[for="selectRole"]');
            const assignRolesToUsersRoleSelect = document.querySelector('.selectRole');
            const rolesToUsersLabel = document.querySelector('label[for="selectRoleUsers"]');
            const rolesToUsersSelect = document.querySelector('.selectRoleUsers');
            const assignRolesToUsersButton = document.querySelector('.assignRolesToUsersBtn');
            const assignRolesToGroupFormTitle = document.querySelector('.assign-role-to-group-form h3');
            const assignRolesToGroupForm = document.querySelector('.assignRoleToGroupForm');
            const assignRolesToGroupLabel = document.querySelector('label[for="selectRoleForGroup"]');
            const assignRolesToGroupRoleSelect = document.querySelector('.selectRoleForGroup');
            const RolesToGroupsLabel = document.querySelector('label[for="selectRoleGroups"]');
            const RolesToGroupsSelect = document.querySelector('.selectRoleGroups');
            const assignButton = document.querySelector('.assignRolesToGroupsBtn');
            const roleSectionTitle = document.querySelector('.view-role-assignments h3');
            const roleAssignmentForm = document.querySelector('.viewRoleAssignmentsForm');
            const roleLabel = document.querySelector('label[for="selectRoleToView"]');
            const roleSelect = document.querySelector('.selectRoleToView');
            const viewButton = document.querySelector('.viewAssignmentBtn');
            const roleAssignmentTable = document.querySelector('.roleAssignmentsTable');
            const roleAssignmentHeaders = roleAssignmentTable.querySelectorAll('thead th');
            const roleAssignmentHeaderTexts = Array.from(roleAssignmentHeaders).map(header => header.textContent.trim());


           

            // Testing of create role form
            expect(createRoleFormTitle.textContent).toBe('Create Role');
            expect(createRoleForm).not.toBeNull();
            expect(roleNameLabel.textContent).toBe('Role Name:');
            expect(roleNameInput).not.toBeNull();
            expect(roleNameInput.required).toBe(true);
            expect(roleDescriptionLabel.textContent).toBe('Role Description:');
            expect(roleDescriptionInput).not.toBeNull();
            expect(roleDescriptionInput.required).toBe(true);
            expect(createRoleButton.textContent).toBe('Create Role');
     
            //Testing roles list table
            expect(rolesListTitle.textContent).toBe('Roles List');
            expect(rolesListTable).not.toBeNull();
            expect(rolesListheadersTexts).toEqual(['Role Name', 'Description', 'Actions']);
        
            //Test assign roles to user section
            expect(assignRolesToUsersFormTitle.textContent).toBe('Assign Roles to Users');
            expect(assignRolesToUsersForm).not.toBeNull();
            expect(assignRolesToUsersLabel.textContent).toBe('Select Role:');
            expect(assignRolesToUsersRoleSelect).not.toBeNull();
            expect(assignRolesToUsersRoleSelect.required).toBe(true);
            expect(rolesToUsersLabel.textContent).toBe('Select Users:');
            expect(rolesToUsersSelect).not.toBeNull();
            expect(rolesToUsersSelect.required).toBe(true);
            expect(assignRolesToUsersButton.textContent).toBe('Assign Roles to Users');
       
            //Test assign roles to group section
            expect(assignRolesToGroupFormTitle.textContent).toBe('Assign Roles to Groups');
            expect(assignRolesToGroupForm).not.toBeNull();
            expect(assignRolesToGroupLabel.textContent).toBe('Select Role:');
            expect(assignRolesToGroupRoleSelect).not.toBeNull();
            expect(assignRolesToGroupRoleSelect.required).toBe(true);
            expect(RolesToGroupsLabel.textContent).toBe('Select Groups:');
            expect(RolesToGroupsSelect).not.toBeNull();
            expect(RolesToGroupsSelect.required).toBe(true);
            expect(assignButton.textContent).toBe('Assign Roles to Groups');
        
            //Test view role assignment section
            expect(roleSectionTitle.textContent).toBe('View Role Assignments');
            expect(roleAssignmentForm).not.toBeNull();
            expect(roleLabel.textContent).toBe('Select Role:');
            expect(roleSelect).not.toBeNull();
            expect(roleSelect.required).toBe(true);
            expect(viewButton.textContent).toBe('View Assignments');
            expect(roleAssignmentTable).not.toBeNull();
            expect(roleAssignmentHeaderTexts).toEqual(['Users', 'Groups']);
        });
    })
});
describe('Javascript testing',()=>{
    let userName;
    let firstName;
    let lastName;
    let emailID;
    let form;
    let groupNameInput;
    let createGroupForm;
    let logo;
    let sidebar;
    let addUserButton, removeUserButton, submitAddUserButton, submitRemoveUserButton, userActionForm,addRemoveUserModal,viewGroupModal;
    let closebutton1;
    let closebutton2;

    beforeEach(()=>{
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        document.body.innerHTML = html;

        userName = document.querySelector("#userName")
        firstName = document.querySelector("#firstName")
        lastName = document.querySelector("#lastName")
        emailID = document.querySelector("#emailID")
        form = document.querySelector('.add-user-form')
        groupNameInput = document.querySelector('#groupName');
        createGroupForm = document.querySelector('#createGroupForm');
        logo = document.querySelector('.logo');
        sidebar = document.querySelector('.sidebar');
        addUserButton = document.getElementById('showAddUserForm');
        removeUserButton = document.getElementById('showRemoveUserForm');
        submitAddUserButton = document.getElementById('submitAddUserButton');
        submitRemoveUserButton = document.getElementById('submitRemoveUserButton');
        userActionForm = document.getElementById('userActionForm');
        addRemoveUserModal = document.getElementById('addRemoveUserModal');
        viewGroupModal=document.querySelector('#viewGroupModal')
        closebutton1=document.querySelector(".close-btn1");
        closebutton2=document.querySelector(".close-btn2");

        jest.resetModules();
        require('./script.js');

        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn()
        };
        Object.defineProperty(window, 'localStorage', {
          value: localStorageMock,
          writable: true,
        });
    })
    afterEach(() => {
        localStorage.getItem.mockClear();
        localStorage.setItem.mockClear();
        localStorage.removeItem.mockClear();
        localStorage.clear.mockClear();
    });
    describe('Sidebar testing',()=>{
        test('sidebar class toggles when logo is clicked', () => {
            expect(sidebar.classList.contains('active')).toBe(false);
            logo.click();
            expect(sidebar.classList.contains('active')).toBe(true);
            logo.click();
            expect(sidebar.classList.contains('active')).toBe(false);
        });
    })
    describe('Add user functionality testing',()=>{
        test('User gets added when all the necessary details are entered and submitted',()=>{
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='gugugaga';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).toHaveBeenCalledWith("users", JSON.stringify([{  userName: 'tamilarasan',
                firstName: 'tamil',
                lastName: 'arasan',
                emailID: 'gugugaga' }]));
        })
        test('User gets added when all the necessary details are entered and press the add button',()=>{
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='gugugaga';
            const addButton = document.querySelector('.addButton')
            addButton.click();
            expect(localStorage.setItem).toHaveBeenCalledWith("users", JSON.stringify([{  userName: 'tamilarasan',
                firstName: 'tamil',
                lastName: 'arasan',
                emailID: 'gugugaga' }]));
        })
        test('Users are displayed in the user table after getting added',()=>{
            const {renderUsers}=require("./script.js")
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            expect(usersTableBody.children.length).toBe(2);
           // Test first row (John Doe)
            const firstRow = usersTableBody.children[0];
            expect(firstRow.children[0].textContent).toBe(mockUsers[0].userName);
            expect(firstRow.children[1].textContent).toBe(mockUsers[0].emailID);
            expect(firstRow.children[2].textContent).toBe(mockUsers[0].firstName);
            expect(firstRow.children[3].textContent).toBe(mockUsers[0].lastName);
            const firstEditButton = firstRow.querySelector('.editu');
            const firstDeleteButton = firstRow.querySelector('.deleteu');
            expect(firstEditButton.getAttribute('data-index')).toBe('0');
            expect(firstDeleteButton.getAttribute('data-index')).toBe('0');

            // Test second row (Jane Smith)
            const secondRow = usersTableBody.children[1];
            expect(secondRow.children[0].textContent).toBe(mockUsers[1].userName);
            expect(secondRow.children[1].textContent).toBe(mockUsers[1].emailID);
            expect(secondRow.children[2].textContent).toBe(mockUsers[1].firstName);
            expect(secondRow.children[3].textContent).toBe(mockUsers[1].lastName);
            const secondEditButton = secondRow.querySelector('.editu');
            const secondDeleteButton = secondRow.querySelector('.deleteu');
            expect(secondEditButton.getAttribute('data-index')).toBe('1');
            expect(secondDeleteButton.getAttribute('data-index')).toBe('1');
        })
    })
    describe('Edit functionality testing',()=>{
        test('editUser function populates the form with user data and deletes the user', () => {
            const { editUser} = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            editUser(0);
    
            // Check if form fields are populated correctly
            expect(userName.value).toBe(mockUsers[0].userName);
            expect(firstName.value).toBe(mockUsers[0].firstName);
            expect(lastName.value).toBe(mockUsers[0].lastName);
            expect(emailID.value).toBe(mockUsers[0].emailID);
    
    
            const updatedUsers = [
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify(updatedUsers));
        });
    })
    describe('Delete user functionality testing', () => {
        test('User gets deleted when delete button is clicked', () => {
            const { renderUsers } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            renderUsers();
    
            const usersTableBody = document.querySelector('#usersTable tbody');
            const deleteButtons = usersTableBody.querySelectorAll('.deleteu');
            deleteButtons[0].click();
            const updatedUsers = [
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify(updatedUsers));
            localStorage.getItem.mockReturnValue(JSON.stringify(updatedUsers));
            renderUsers();
            const updatedUsersTableBody = document.querySelector('#usersTable tbody');
            expect(updatedUsersTableBody.children.length).toBe(1);
            const remainingRow = updatedUsersTableBody.children[0];
            expect(remainingRow.children[0].textContent).toBe(updatedUsers[0].userName);
            expect(remainingRow.children[1].textContent).toBe(updatedUsers[0].emailID);
            expect(remainingRow.children[2].textContent).toBe(updatedUsers[0].firstName);
            expect(remainingRow.children[3].textContent).toBe(updatedUsers[0].lastName);
        });
    });
    describe('Handle user action functionality testing', () => {
        test('Clicking the edit button populates the form with the user\'s data and deletes the user', () => {
            const { renderUsers } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            const editButton = usersTableBody.querySelectorAll('.editu')[0];
            const event = {
                target: editButton
            };
            const { handleUserActions} = require('./script.js');
            handleUserActions(event);
    
            expect(userName.value).toBe('john_doe');
            expect(firstName.value).toBe('John');
            expect(lastName.value).toBe('Doe');
            expect(emailID.value).toBe('john@example.com');
    
        });
    
        test('Clicking the delete button removes the user from the list', () => {
            const { renderUsers } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            const deleteButton = usersTableBody.querySelectorAll('.deleteu')[0];
            const event = {
                target: deleteButton
            };
            const { handleUserActions } = require('./script.js');
            handleUserActions(event);
            const updatedUsers = [
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify(updatedUsers));
            localStorage.getItem.mockReturnValue(JSON.stringify(updatedUsers));
            renderUsers();
            const updatedUsersTableBody = document.querySelector('#usersTable tbody');
            expect(updatedUsersTableBody.children.length).toBe(1);
            const remainingRow = updatedUsersTableBody.children[0];
            expect(remainingRow.children[0].textContent).toBe(updatedUsers[0].userName);
            expect(remainingRow.children[1].textContent).toBe(updatedUsers[0].emailID);
            expect(remainingRow.children[2].textContent).toBe(updatedUsers[0].firstName);
            expect(remainingRow.children[3].textContent).toBe(updatedUsers[0].lastName);
        });
    });
    describe('Group Management', () => {
        test('createGroup adds a group to localStorage and renders it', () => {
            groupNameInput.value = 'Developers';
            createGroupForm.dispatchEvent(new Event('submit'));

            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{
                groupName: 'Developers',
                users: []
            }]));
        });

        test('Groups are displayed in the group table after getting added', () => {
            const { renderGroups } = require("./script.js");
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe'] },
                { groupName: 'Users', users: [] }
            ];

            // Mock the return value of loadFromLocalStorage
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));

            // Call the function to test
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            // Check the number of rows
            expect(groupsTableBody.children.length).toBe(2);

            // Check each row's content
            const firstRow = groupsTableBody.children[0];
            expect(firstRow.children[0].textContent).toBe(mockGroups[0].groupName);
            const firstViewButton = firstRow.querySelector('.view');
            expect(firstViewButton.getAttribute('data-index')).toBe('0');

            const secondRow = groupsTableBody.children[1];
            expect(secondRow.children[0].textContent).toBe(mockGroups[1].groupName);
            const secondViewButton = secondRow.querySelector('.view');
            expect(secondViewButton.getAttribute('data-index')).toBe('1');
        });

        test('openAddRemoveUserModal() function shows the modal and populates the user select dropdown', () => {
            const { openAddRemoveUserModal, populateUserSelect } = require("./script.js");
            openAddRemoveUserModal(0);
            expect(addRemoveUserModal.style.display).toBe('block');

            // Check if users are populated
            const mockUsers = [
                { userName: 'john_doe', firstName: 'John', lastName: 'Doe', emailID: 'john@example.com' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            populateUserSelect();
            const userSelect = document.getElementById('userSelect');
            expect(userSelect.children.length).toBe(2); 
        });
    });
    describe('Delete group functionality', () => {
        test('Pressing the delete button deletes the group',()=>{
            const { renderGroups } = require('./script.js');
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] },
                { groupName: 'Editors', users: ['mary_jones'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();

            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const deleteButtons = groupsTableBody.querySelectorAll('.delete');
            deleteButtons[0].click();
            const updatedGroup = [
                {groupName: 'Editors', users: ['mary_jones'] }
            ];
            expect(localStorage.setItem).toHaveBeenCalledWith('groups', JSON.stringify(updatedGroup));
            localStorage.getItem.mockReturnValue(JSON.stringify(updatedGroup));
            renderGroups();
            const updatedGroupsTableBody = document.querySelector('#groupsTable tbody');
            expect(updatedGroupsTableBody.children.length).toBe(1);
            const remainingRow = updatedGroupsTableBody.children[0];
            expect(remainingRow.children[0].textContent).toBe(updatedGroup[0].groupName);
        });
    });

    describe('DOMContentLoaded Event Listener and Sidebar Navigation', () => {
        let userManagement;
        let groupManagement;
        let roleManagement;

        beforeEach(() => {
            // Get references to necessary elements
            userManagement = document.querySelector('.user-management');
            groupManagement = document.querySelector('.group-management');
            roleManagement = document.querySelector('.role-management');

            // Simulate DOMContentLoaded
            document.dispatchEvent(new Event('DOMContentLoaded'));
        });
        test('clicking sidebar link activates the correct section', () => {
            // Initial state: No section should be active
            expect(userManagement.classList.contains('active')).toBe(true);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(false);

            // Simulate clicking the user management link
            const userLink = document.querySelector('a[href="#user-management"]');
            userLink.click();

            // Verify that the correct section is active
            expect(userManagement.classList.contains('active')).toBe(true);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(false);

            // Simulate clicking the group management link
            const groupLink = document.querySelector('a[href="#group-management"]');
            groupLink.click();

            // Verify that the correct section is active
            expect(userManagement.classList.contains('active')).toBe(false);
            expect(groupManagement.classList.contains('active')).toBe(true);
            expect(roleManagement.classList.contains('active')).toBe(false);

            // Simulate clicking the role management link
            const roleLink = document.querySelector('a[href="#role-management"]');
            roleLink.click();

            // Verify that the correct section is active
            expect(userManagement.classList.contains('active')).toBe(false);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(true);
        });
    });

    describe('Display group functionality testing', () => {
        let groupNameElement;
        let userListElement;
    
        beforeEach(() => {
            groupNameElement = document.querySelector('#groupName');
            userListElement = document.querySelector('#userList');
        });
    
        test('correctly displays group details', () => {
            const { displayGroupDetails } = require('./script.js');
            const mockGroups = [
                { groupName: 'Developers', users: ['john_doe', 'jane_smith'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            displayGroupDetails(0);
            expect(groupNameElement.textContent).toBe('Group Name: Developers');
            const userItems = userListElement.querySelectorAll('li');
            expect(userItems.length).toBe(2);
            expect(userItems[0].textContent).toBe('john_doe');
            expect(userItems[1].textContent).toBe('jane_smith');
        });
    
        test('handles empty user list correctly', () => {
            const { displayGroupDetails } = require('./script.js');
            const mockGroups = [
                { groupName: 'EmptyGroup', users: [] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            displayGroupDetails(0);
            expect(groupNameElement.textContent).toBe('Group Name: EmptyGroup');
            const userItems = userListElement.querySelectorAll('li');
            expect(userItems.length).toBe(0);
        });
    });
    describe('Add/remove users from group modal testing',()=>{
        test('Clicking add/remove user button displays the add/remove modal',()=>{
            const { renderGroups } = require('./script.js');
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] },
                { groupName: 'Editors', users: ['mary_jones'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();

            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const addremoveUserButton = groupsTableBody.querySelectorAll('.add-remove-user');
            addremoveUserButton[0].click();

            expect(addRemoveUserModal.style.display).toBe('block');
            expect(addUserButton).not.toBeNull();
            expect(removeUserButton).not.toBeNull(); 

            addUserButton.click()
            expect(userActionForm.style.display).toBe('block');
            expect(submitAddUserButton.style.display).toBe('inline');
            expect(submitRemoveUserButton.style.display).toBe('none');

            removeUserButton.click()
            expect(userActionForm.style.display).toBe('block');
            expect(submitAddUserButton.style.display).toBe('none');
            expect(submitRemoveUserButton.style.display).toBe('inline');

            closebutton1.click();
            expect(addRemoveUserModal.style.display).toBe('none');
        })
    })
    describe('View group members modal testing',()=>{
        test('Clicking view button displays the view modal',()=>{
            const { renderGroups } = require('./script.js');
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] },
                { groupName: 'Editors', users: ['mary_jones'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();

            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const viewUserButton = groupsTableBody.querySelectorAll('.view');
            viewUserButton[0].click();

            expect(viewGroupModal.style.display).toBe('block')

            closebutton2.click()
            expect(viewGroupModal.style.display).toBe('none');
        })
    })
    describe('Add/remove users from the group testing',()=>{
        test('Add user to the group',()=>{
            const { renderGroups,handleAddRemoveUser } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' },
                { userName: 'user1', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const addremoveUserButton = groupsTableBody.querySelector('.add-remove-user');
            addremoveUserButton.click();
            const userSelect = document.querySelector("#userSelect")
            addUserButton.click();
            userSelect.value='user1';
            handleAddRemoveUser('add')
            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{  groupName:  'Admins',
                users: ['john_doe', 'jane_smith','user1']}]));
        });
        test('Delete user from the group',()=>{
            const { renderGroups,handleAddRemoveUser } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' },
                { userName: 'user1', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith','user1'] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const addremoveUserButton = groupsTableBody.querySelectorAll('.add-remove-user');
            addremoveUserButton[0].click();
            removeUserButton.click();
            const userSelect = document.querySelector("#userSelect")
            userSelect.value='user1';
            handleAddRemoveUser('remove')
            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{  groupName:  'Admins',
                users: ['john_doe', 'jane_smith']}]));
        });
    })  

})


