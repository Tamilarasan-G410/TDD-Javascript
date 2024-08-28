const fs = require('fs');
const path = require('path');
describe('HTML Testing', () => {
    describe('User-page testing',()=>{
        beforeEach(() => {
            const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
            document.body.innerHTML = html;
        });

        test('All html components are correctly displayed', () => {
            const page= document.querySelector(".user-management")
            const pageHeading = page.querySelector(".header")
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
            const addUserModal = document.querySelector(".newUser")
             
            //Title page of is displayed
            expect(pageHeading.textContent).toBe('User management system')
            // Add user button is displayed
            expect(addUserModal).not.toBeNull()

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
           
            const page= document.querySelector(".group-management")
            const pageHeading = page.querySelector(".header")
            const groupFormTitle = document.querySelector('.group-form h3')
            const groupForm = document.querySelector('#createGroupForm');
            const groupInput = document.querySelector('#groupName');
            const groupButton = document.querySelector('.createGroup');
            const groupListTitle = document.querySelector('.group-list h3');
            const groupListTable = document.querySelector('#groupsTable');
            const groupListheaders = groupListTable.querySelectorAll('thead th');
            const groupListHeaderTexts = Array.from(groupListheaders).map(header => header.textContent.trim());
            const addGroupModal = document.querySelector(".newGroup")
 
            //Title page of is displayed
             expect(pageHeading.textContent).toBe('Group management system')

            //Add group button is displayed

            expect(addGroupModal).not.toBeNull();
    
            //Whether the create group form is displayed
            expect(groupFormTitle.textContent).toBe('Create Group');
            expect(groupForm).not.toBeNull();
            expect(groupInput).not.toBeNull();
            expect(groupInput.required).toBe(true);
            expect(groupInput.getAttribute('autocomplete')).toBe('off');
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
            const page= document.querySelector(".role-management")
            const pageHeading = page.querySelector(".header")
            const createRoleFormTitle = document.querySelector('.role-form h3');
            const createRoleForm = document.querySelector('.createRoleForm');
            const roleNameInput = document.querySelector('.roleName');
            const roleDescriptionInput = document.querySelector('.roleDescription');
            const createRoleButton = document.querySelector('.createRoleBtn');
            const rolesListTitle = document.querySelector('.role-list h3');
            const rolesListTable = document.querySelector('.rolesTable');
            const rolesListheaders = rolesListTable.querySelectorAll('thead th');
            const rolesListheadersTexts = Array.from(rolesListheaders).map(header => header.textContent.trim());
            const addRoleModal = document.querySelector('.newRole')
            const rolesAssignmentsTile = document.querySelector('.role-list-assignments h3');
            const rolesAssignmentsTable = document.querySelector('.rolesTableAssignments')
            const rolesAssignmentsHeader = rolesAssignmentsTable.querySelectorAll('thead th');
            const rolesAssignmentsHeaderTexts = Array.from(rolesAssignmentsHeader).map(header => header.textContent.trim());
            
            //Title page of is displayed
            expect(pageHeading.textContent).toBe('Role management system')

            //Add role button is displayed
            expect(addRoleModal).not.toBeNull();

            // Testing of create role form
            expect(createRoleFormTitle.textContent).toBe('Create Role');
            expect(createRoleForm).not.toBeNull();
            expect(roleNameInput).not.toBeNull();
            expect(roleNameInput.getAttribute('placeholder')).toBe('Role Name');
            expect(roleNameInput.required).toBe(true);
            expect(roleDescriptionInput).not.toBeNull();
            expect(roleNameInput.getAttribute('autocomplete')).toBe('off');
            expect(roleDescriptionInput.getAttribute('placeholder')).toBe('Role Description');
            expect(roleDescriptionInput.required).toBe(true);
            expect(roleDescriptionInput.getAttribute('autocomplete')).toBe('off');
            expect(createRoleButton.textContent).toBe('Create Role');
     
            //Testing roles list table
            expect(rolesListTitle.textContent).toBe('Roles List');
            expect(rolesListTable).not.toBeNull();
            expect(rolesListheadersTexts).toEqual(['Role Name', 'Description', 'Actions']);

            //Testing roles assignment table
            expect(rolesAssignmentsTile.textContent).toBe('Role assignments')
            expect(rolesAssignmentsTable).not.toBeNull();
            expect(rolesAssignmentsHeaderTexts).toEqual(['Role Name','Users','Groups'])
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
    let addUserModalBtn;
    let addUserModal;
    let addGroupModalBtn;
    let addGroupModal;
    let addRoleModalBtn;
    let addRoleModal;
    let roleNameInput;
    let roleNameDescriptionInput;
    let createRoleForm;
    let successmessage;
    let successmessage2;
    let successmessage3;

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
        addUserModalBtn=document.querySelector(".newUser")
        addUserModal=document.querySelector(".addUserModal")
        addGroupModalBtn=document.querySelector(".newGroup")
        addGroupModal=document.querySelector(".addGroupModal")
        addRoleModalBtn=document.querySelector(".newRole")
        addRoleModal=document.querySelector(".addRoleModal")
        roleNameInput=document.querySelector(".roleName")
        roleNameDescriptionInput=document.querySelector(".roleDescription")
        createRoleForm=document.querySelector(".createRoleForm")
        successmessage = document.querySelector('#successmessage1')
        successmessage2 = document.querySelector('#successmessage2')
        successmessage3 = document.querySelector('#successmessage3')

        jest.resetModules();
        require('./script.js');

        // mock timers
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');

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
        jest.useRealTimers(); 
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
    describe('DOMContentLoaded Event Listener and Sidebar Navigation', () => {
        let userManagement;
        let groupManagement;
        let roleManagement;

        beforeEach(() => {
            userManagement = document.querySelector('.user-management');
            groupManagement = document.querySelector('.group-management');
            roleManagement = document.querySelector('.role-management');

            document.dispatchEvent(new Event('DOMContentLoaded'));
        });
        test('clicking sidebar link activates the correct section', () => {
            expect(userManagement.classList.contains('active')).toBe(true);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(false);

            const userLink = document.querySelector('a[href="#user-management"]');
            userLink.click();

            expect(userManagement.classList.contains('active')).toBe(true);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(false);

            const groupLink = document.querySelector('a[href="#group-management"]');
            groupLink.click();

            expect(userManagement.classList.contains('active')).toBe(false);
            expect(groupManagement.classList.contains('active')).toBe(true);
            expect(roleManagement.classList.contains('active')).toBe(false);

            const roleLink = document.querySelector('a[href="#role-management"]');
            roleLink.click();

            expect(userManagement.classList.contains('active')).toBe(false);
            expect(groupManagement.classList.contains('active')).toBe(false);
            expect(roleManagement.classList.contains('active')).toBe(true);
        });
        test('handles case when userNavLink is not found', () => {
            const userLink = document.querySelector('a[href="#user-management"]');
            userLink.parentNode.removeChild(userLink);
    
            document.dispatchEvent(new Event('DOMContentLoaded'));
    
            const selectedLink = document.querySelector('.sidebar ul li a.selected');
            expect(selectedLink).toBe(null); 
        });
    });
    describe('Add user functionality testing',()=>{
        test('Add user modal is displayed when the add user button is clicked and closed when the close button is clicked',()=>{
            addUserModalBtn.click();
            expect(addUserModal.style.display).toBe('block');
            const closebutton5 = document.querySelector('.close-btn5');
            closebutton5.click();
            expect(addUserModal.style.display).toBe('none')
        })
        test('User gets added when all the necessary details are entered and submitted',()=>{
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='gg.tamilarasan@gmail.com';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).toHaveBeenCalledWith("users", JSON.stringify([{  userName: 'tamilarasan',
                firstName: 'tamil',
                lastName: 'arasan',
                emailID: 'gg.tamilarasan@gmail.com' }]));
            expect(successmessage.style.display).toBe("block");   
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(successmessage.style.display).toBe("none");

        })
        test('User gets added when all the necessary details are entered and press the add button',()=>{
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='gg.tamilarasan@gmail.com';
            const addButton = document.querySelector('.addButton')
            addButton.click();
            expect(localStorage.setItem).toHaveBeenCalledWith("users", JSON.stringify([{  userName: 'tamilarasan',
                firstName: 'tamil',
                lastName: 'arasan',
                emailID: 'gg.tamilarasan@gmail.com' }]));
        })
        test('User is not added when User name has numbers and symbols',()=>{
            const errormessage1=document.querySelector('.error-message1')
            userName.value='tamilarasan45@';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='gg.tamilarasan@gmail.com';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).not.toHaveBeenCalledWith()
            expect(errormessage1.innerHTML).toBe('User name should only contain letters');
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(errormessage1.innerHTML).toBe("");
        })
        test('User is not added when first name has numbers and symbols',()=>{
            const errormessage2=document.querySelector('.error-message2')
            userName.value='tamilarasan';
            firstName.value='tamil45@';
            lastName.value='arasan';
            emailID.value='gg.tamilarasan@gmail.com';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).not.toHaveBeenCalledWith()
            expect(errormessage2.innerHTML).toBe('First name should only contain letters.');
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(errormessage2.innerHTML).toBe("");
        })
        test('User is not added when last name has numbers and symbols',()=>{
            const errormessage3=document.querySelector('.error-message3')
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan45@';
            emailID.value='gg.tamilarasan@gmail.com';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).not.toHaveBeenCalledWith()
            expect(errormessage3.innerHTML).toBe('Last name should only contain letters');
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(errormessage3.innerHTML).toBe("");
        })
        test('User is not added when emailid is not valid',()=>{
            const errormessage4=document.querySelector('.error-message4')
            userName.value='tamilarasan';
            firstName.value='tamil';
            lastName.value='arasan';
            emailID.value='ggtamilarasangmailcom';
            form.dispatchEvent(new Event('submit'));
            expect(localStorage.setItem).not.toHaveBeenCalledWith()
            expect(errormessage4.innerHTML).toBe('Not a valid emailID');
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(errormessage4.innerHTML).toBe("");
        })
        test('When the user table is empty , the "no data available" message is displayed',()=>{
            const {renderUsers}=require("./script.js")
            renderUsers()
            const usersTableBody = document.querySelector('#usersTable tbody');
            expect(usersTableBody.children.length).toBe(1);
            const noDataMessageRow =  usersTableBody.querySelector('.no-data-message1');
            expect(noDataMessageRow).not.toBeNull()
            expect(noDataMessageRow.textContent).toBe('No data available');
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
            const noDataMessageRow =  usersTableBody.querySelector('.no-data-message1');
            expect(noDataMessageRow).toBeNull()
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
    describe('Edit user functionality testing',()=>{
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
        test('When the user is deleted , whether the no data available message is displayed or not',()=>{
            const { renderUsers } = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            const deleteButton = usersTableBody.querySelector('.deleteu');
            deleteButton.click();
            const updatedUsers = [];
            localStorage.getItem.mockReturnValue(JSON.stringify(updatedUsers));
            renderUsers();
            expect(usersTableBody.children.length).toBe(1);
            const noDataMessageRow = usersTableBody.querySelector('.no-data-message1');
            expect(noDataMessageRow).not.toBeNull()
            expect(noDataMessageRow.textContent).toBe('No data available');
        })
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
    describe('Add group functionality testing', () => {
        test('Add group modal is displayed when the add group button is clicked',()=>{
            addGroupModalBtn.click();
            expect(addGroupModal.style.display).toBe('block');
        })
        test('Pressing the create group button adds a group to localStorage and renders it', () => {
            groupNameInput.value = 'Developers';
            createGroupForm.dispatchEvent(new Event('submit'));

            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{
                groupName: 'Developers',
                users: []
            }]));
            expect(successmessage2.style.display).toBe("block");   
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(successmessage2.style.display).toBe("none");
        });
        test('When the group table is empty , the "no data available" message is displayed',()=>{
            const { renderGroups } = require("./script.js");
            renderGroups()
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            expect(groupsTableBody.children.length).toBe(1);
            const noDataMessageRow =  groupsTableBody.querySelector('.no-data-message2');
            expect(noDataMessageRow).not.toBeNull()
            expect(noDataMessageRow.textContent).toBe('No data available');
        })
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
            const noDataMessageRow =  groupsTableBody.querySelector('.no-data-message2');
            expect(noDataMessageRow).toBeNull()

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
    describe('Delete group functionality testing', () => {
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
        test('When  the group is deleted , whether the no data available message is displayed or not',()=>{
            const { renderGroups } = require('./script.js');
            const mockGroups = [{ groupName: 'Admins', users: ['john_doe', 'jane_smith'] }];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockGroups));
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const deleteButton = groupsTableBody.querySelector('.delete');
            deleteButton.click();
            const updatedGroup = [];
            localStorage.getItem.mockReturnValue(JSON.stringify(updatedGroup));
            renderGroups();
            expect(groupsTableBody.children.length).toBe(1);
            const noDataMessageRow =  groupsTableBody.querySelector('.no-data-message2');
            expect(noDataMessageRow).not.toBeNull()
            expect(noDataMessageRow.textContent).toBe('No data available');
        })
    });

    describe('Display group functionality testing', () => {
        let groupNameElement;
        let userListElement;
    
        beforeEach(() => {
            groupNameElement = document.querySelector('#viewGroupName');
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
            
            const userList = document.querySelector('#userList');
            const listItems = userList.getElementsByTagName('li');
            expect(listItems).toHaveLength(2);
            expect(listItems[0].textContent).toBe('john_doe');
            expect(listItems[1].textContent).toBe('jane_smith');
            expect(viewGroupModal.style.display).toBe('block')

            closebutton2.click()
            expect(viewGroupModal.style.display).toBe('none');
        })
    })
    describe('Add/remove users from the group testing',()=>{
        test('Add user to the group',()=>{
            const { renderGroups} = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' },
                { userName: 'user1', emailID: 'user1@example.com', firstName: 'User', lastName: 'One' }
            ];
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] }
            ];
            localStorage.getItem.mockImplementation((key) => {
                if (key === 'users') return JSON.stringify(mockUsers);
                if (key === 'groups') return JSON.stringify(mockGroups);
            });
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const addremoveUserButton = groupsTableBody.querySelectorAll('.add-remove-user');
            addremoveUserButton[0].click();
            addUserButton.click();
            const userSelect = document.querySelector('#userSelect');
            userSelect.value = 'user1'; 
            submitAddUserButton.click();
            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{ groupName:'Admins',
                users: ['john_doe', 'jane_smith','user1']}]));
        });
        test('Delete user from the group',()=>{
            const { renderGroups} = require('./script.js');
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' },
                { userName: 'user1', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith','user1'] }
            ];
            localStorage.getItem.mockImplementation((key) => {
                if (key === 'users') return JSON.stringify(mockUsers);
                if (key === 'groups') return JSON.stringify(mockGroups);
            });
            renderGroups();
            const groupsTableBody = document.querySelector('#groupsTable tbody');
            const addremoveUserButton = groupsTableBody.querySelectorAll('.add-remove-user');
            addremoveUserButton[0].click();
            removeUserButton.click();
            const userSelect = document.querySelector("#userSelect")
            userSelect.value='user1';
            submitRemoveUserButton.click();
            expect(localStorage.setItem).toHaveBeenCalledWith("groups", JSON.stringify([{ groupName:'Admins',
                users: ['john_doe', 'jane_smith']}]));
        })
    })  
    describe('Add role testing',()=>{
        test('Add role modal is displayed when the add role button is clicked',()=>{
            addRoleModalBtn.click();
            expect(addRoleModal.style.display).toBe('block');
        })
        test('Pressing the create role button adds the role to localStorage and renders it', () => {
            roleNameInput.value = 'Developers';
            roleNameDescriptionInput.value='Write and develop code'
            createRoleForm.dispatchEvent(new Event('submit'));

            expect(localStorage.setItem).toHaveBeenCalledWith("roles", JSON.stringify([{
                roleName: 'Developers',
                roleDescription: 'Write and develop code'
            }]));
            expect(successmessage3.style.display).toBe("block");   
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
            jest.runAllTimers();
            expect(successmessage3.style.display).toBe("none");
        });
        test('When the role table and role assignment table are empty, the "no data available" message is displayed', () => {
            const { renderRoles } = require("./script.js");
            renderRoles();
            const rolesTableBodies = document.querySelectorAll('.rolesTable tbody, .rolesTableAssignments tbody');
            rolesTableBodies.forEach((tableBody) => {
                expect(tableBody.children.length).toBe(1);
                const noDataMessageRow = tableBody.querySelector('.no-data-message3');
                expect(noDataMessageRow).not.toBeNull();
                expect(noDataMessageRow.textContent).toBe('No data available');
            });
        });
        
        test('Roles are displayed in the role table after getting added', () => {
            const { renderRoles } = require("./script.js");
            const mockRoles = [
                { roleName: 'Developers', roleDescription: 'Write and develop code' },
                {  roleName: 'Managers', roleDescription: 'Manage the people'}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRoles));

            renderRoles();
            const rolesTableBody = document.querySelector('.rolesTable tbody');
            // Check the number of rows
            expect(rolesTableBody.children.length).toBe(2);

            // Check each row's content
            const firstRow = rolesTableBody.children[0];
            expect(firstRow.children[0].textContent).toBe(mockRoles[0].roleName);
            expect(firstRow.children[1].textContent).toBe(mockRoles[0].roleDescription);
            const firstAssignUsersButton = firstRow.querySelector('.roleU');
            expect(firstAssignUsersButton.getAttribute('data-index')).toBe('0');
            const firstAssignGroupsButton = firstRow.querySelector('.roleG');
            expect(firstAssignGroupsButton.getAttribute('data-index')).toBe('0');


            const secondRow = rolesTableBody.children[1];
            expect(secondRow.children[0].textContent).toBe(mockRoles[1].roleName);
            expect(secondRow.children[1].textContent).toBe(mockRoles[1].roleDescription);
            const secondAssignUsersButton = secondRow.querySelector('.roleU');
            expect(secondAssignUsersButton.getAttribute('data-index')).toBe('1');
            const secondAssignGroupsButton = secondRow.querySelector('.roleG');
            expect(secondAssignGroupsButton.getAttribute('data-index')).toBe('1');
        });
    })
    describe('assignRole and AssignGroup modal closing testing',()=>{
        test('Pressing the close button closes the assignUserToRole Modal and assignGroupRole modal',()=>{
            const { renderRoles } = require("./script.js");
            const mockRoles = [
                { roleName: 'Developers', roleDescription: 'Write and develop code' },
                {  roleName: 'Managers', roleDescription: 'Manage the people'}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRoles));
            renderRoles();
            const rolesTableBody = document.querySelector('.rolesTable tbody');
            const assignUserBtn = rolesTableBody.querySelectorAll('.roleU');
            assignUserBtn[0].click();
            const assignUsersModal = document.querySelector('#assignUsersModal');
            expect(assignUsersModal.style.display).toBe('block');
            const closebutton3 = document.querySelector('.close-btn3');
            closebutton3.click();
            expect(assignUsersModal.style.display).toBe('none');

            const assignGroupBtn = rolesTableBody.querySelectorAll('.roleG');
            assignGroupBtn[0].click();
            const assignGroupsModal = document.querySelector('#assignGroupsModal');
            expect(assignGroupsModal.style.display).toBe('block');
            const closebutton4 = document.querySelector('.close-btn4');
            closebutton4.click();
            expect(assignGroupsModal.style.display).toBe('none');
        })
    })
    describe('Display of details in the role assignement table',()=>{
        test('Whether the details are displayed in the role assignment table',()=>{
            const { renderRoles } = require("./script.js");
            const mockRoles = [
                { roleName: 'Developers', roleDescription: 'Write and develop code',assignedGroups:["naanga gethu thaan"],
                    assignedUsers:["Tamilarasan",'g']},
                {  roleName: 'Managers', roleDescription: 'Manage the people',assignedGroups:["naangaa gethu thaan"],
                    assignedUsers:["Tamil",'b']}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRoles));
            renderRoles();
            const rolesTableAssignments = document.querySelector('.rolesTableAssignments tbody');
            const firstRow = rolesTableAssignments.children[0];
            expect(firstRow.children[0].textContent).toBe('Developers');
            expect(firstRow.children[1].textContent).toBe("Tamilarasan, g");
            expect(firstRow.children[2].textContent).toBe("naanga gethu thaan");
            const secondRow = rolesTableAssignments.children[1];
            expect(secondRow.children[0].textContent).toBe( 'Managers');
            expect(secondRow.children[1].textContent).toBe("Tamil, b");
            expect(secondRow.children[2].textContent).toBe('naangaa gethu thaan');
        })
    })
    describe('updateRoleAssignments functionality testing',()=>{
        test('Testing the updateRoleAssignments function with valid role index',()=>{
            const { renderRoles,updateRoleAssignments } = require("./script.js");
            const mockRoles = [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups:[],
                    assignedUsers:[]},
                {  roleName: 'Role2', roleDescription: 'Manage the people',assignedGroups:[],
                    assignedUsers:[]}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRoles));
            renderRoles();
            const roleIndex = 1;
            const userAssignments = ['User1', 'User2'];
            const groupAssignments = ['Group1', 'Group2'];
            // Call the function
            updateRoleAssignments(roleIndex, userAssignments, groupAssignments);
            expect(localStorage.setItem).toHaveBeenCalledWith('roles',JSON.stringify( [
            { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups: [] ,assignedUsers: []},
            { roleName: 'Role2', roleDescription: 'Manage the people', assignedGroups: ['Group1', 'Group2'],assignedUsers: ['User1', 'User2'], },
        ]));
        })
        test('Testing the updateRoleAssignments function with invalid role index', () => {
            const { updateRoleAssignments } = require("./script.js");
            const mockRoles = [
                { roleName: 'Role1', roleDescription: 'Write and develop code', assignedGroups: [], assignedUsers: [] }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRoles));
            
            const invalidRoleIndex = 1; // Index out of bounds for mockRoles
            const userAssignments = ['User1', 'User2'];
            const groupAssignments = ['Group1', 'Group2'];
            
            // Call the function
            updateRoleAssignments(invalidRoleIndex, userAssignments, groupAssignments);
            
            // No role should be updated, so localStorage.setItem should not be called
            expect(localStorage.setItem).not.toHaveBeenCalled();
        });
    })
    describe('Add users and groups to the role',()=>{
        test('Add users to the role',()=>{
            const{renderRoles,updateRoleAssignments}=require("./script.js")
            const mockUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' },
                { userName: 'User1', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            const mockRoles = [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups:[],
                    assignedUsers:[]},
                {  roleName: 'Role2', roleDescription: 'Manage the people',assignedGroups:[],
                    assignedUsers:[]}
            ];
            localStorage.getItem.mockImplementation((key) => {
                if (key === 'users') return JSON.stringify(mockUsers);
                if (key === 'roles') return JSON.stringify(mockRoles);
            });
            renderRoles();
            const rolesTableBody = document.querySelector('.rolesTable tbody');
            const assignUserBtn = rolesTableBody.querySelectorAll('.roleU');
            assignUserBtn[0].click();
            const userSelect = document.querySelector('#assignUserSelect');
            userSelect.value = 'User1'; 
            const assignUser = document.querySelector("#assignUserButton")
            assignUser.click();
            updateRoleAssignments(0, ['User1'], []);
            expect(localStorage.setItem).toHaveBeenCalledWith('roles',JSON.stringify( [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups: [] ,assignedUsers: ['User1']},
                { roleName: 'Role2', roleDescription: 'Manage the people', assignedGroups: [],assignedUsers: [] }
            ]));
            const mockRolesAfter = [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups:[],
                    assignedUsers:['User1']},
                {  roleName: 'Role2', roleDescription: 'Manage the people',assignedGroups:[],
                    assignedUsers:[]}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRolesAfter));
            renderRoles();
            const rolesTableAssignments = document.querySelector('.rolesTableAssignments tbody');
            const firstRow = rolesTableAssignments.children[0];
            expect(firstRow.children[0].textContent).toBe('Role1');
            expect(firstRow.children[1].textContent).toBe("User1");
            expect(firstRow.children[2].textContent).toBe("");
            const secondRow = rolesTableAssignments.children[1];
            expect(secondRow.children[0].textContent).toBe( 'Role2');
            expect(secondRow.children[1].textContent).toBe("");
            expect(secondRow.children[2].textContent).toBe('');
        })
        test('Add Groups to the role',()=>{
            const{renderRoles,updateRoleAssignments}=require("./script.js")
            const mockGroups = [
                { groupName: 'Admins', users: ['john_doe', 'jane_smith'] }
            ];
            const mockRoles = [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups:[],
                    assignedUsers:[]},
                {  roleName: 'Role2', roleDescription: 'Manage the people',assignedGroups:[],
                    assignedUsers:[]}
            ];
            localStorage.getItem.mockImplementation((key) => {
                if (key === 'groups') return JSON.stringify(mockGroups);
                if (key === 'roles') return JSON.stringify(mockRoles);
            });
            renderRoles();
            const rolesTableBody = document.querySelector('.rolesTable tbody');
            const assignGroupBtn = rolesTableBody.querySelectorAll('.roleG');
            assignGroupBtn[1].click();
            const userSelect = document.querySelector('#assignGroupSelect');
            userSelect.value = 'Admins'; 
            const assignGroup = document.querySelector("#assignGroupButton")
            assignGroup.click();
            updateRoleAssignments(1,[], ['Admins']);
            expect(localStorage.setItem).toHaveBeenCalledWith('roles',JSON.stringify( [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups: [] ,assignedUsers: []},
                { roleName: 'Role2', roleDescription: 'Manage the people', assignedGroups: ['Admins'],assignedUsers: [] }
            ]));
            const mockRolesAfter = [
                { roleName: 'Role1', roleDescription: 'Write and develop code',assignedGroups:[],
                    assignedUsers:[]},
                {  roleName: 'Role2', roleDescription: 'Manage the people',assignedGroups:['Admins'],
                    assignedUsers:[]}
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(mockRolesAfter));
            renderRoles();
            const rolesTableAssignments = document.querySelector('.rolesTableAssignments tbody');
            const firstRow = rolesTableAssignments.children[0];
            expect(firstRow.children[0].textContent).toBe('Role1');
            expect(firstRow.children[1].textContent).toBe("");
            expect(firstRow.children[2].textContent).toBe("");
            const secondRow = rolesTableAssignments.children[1];
            expect(secondRow.children[0].textContent).toBe( 'Role2');
            expect(secondRow.children[1].textContent).toBe("");
            expect(secondRow.children[2].textContent).toBe('Admins');
        })
    })
})