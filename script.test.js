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
            const addDeleteFormTitle = document.querySelector('.adddelete-users-to-group-form h3');
            const addDeleteForm = document.querySelector('#addUsersToGroupForm');
            const addDeleteGroupLabel = document.querySelector('label[for="selectGroup"]');
            const addDeletGroupSelect = document.querySelector('#selectGroup');
            const usersLabel = document.querySelector('label[for="selectUsers"]');
            const usersSelect = document.querySelector('#selectUsers');
            const addGroupButton = document.querySelector('.addGroup');
 
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
              
            
            //whether the Add/Delete Users to Group form is displayed
            expect(addDeleteFormTitle.textContent).toBe('Add/Delete Users to Group');
            expect(addDeleteForm).not.toBeNull();
            expect(addDeleteGroupLabel.textContent).toBe('Select Group:');
            expect(addDeletGroupSelect).not.toBeNull();
            expect(addDeletGroupSelect.required).toBe(true);
            expect(usersLabel.textContent).toBe('Select Users:');
            expect(usersSelect).not.toBeNull();
            expect(usersSelect.required).toBe(true);
            expect(addGroupButton.textContent).toBe('Add Users to Group');
            
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


            //Whether the title is displayed
            expect(roleMangementHeading.textContent).toBe('Role Management');

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
    

    beforeEach(()=>{
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        document.body.innerHTML = html;

        userName = document.querySelector("#userName")
        firstName = document.querySelector("#firstName")
        lastName = document.querySelector("#lastName")
        emailID = document.querySelector("#emailID")
        form = document.querySelector('.add-user-form')

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
        test('User gets added when all the necessary details are entered and press the enter button',()=>{
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
    
            // Mock the return value of loadFromLocalStorage
            localStorage.getItem.mockReturnValue(JSON.stringify(mockUsers));
    
            // Call the function to test
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            // Check the number of rows
            expect(usersTableBody.children.length).toBe(2);
    
            // Check each row's content
           // Test first row (John Doe)
            const firstRow = usersTableBody.children[0];
            expect(firstRow.children[0].textContent).toBe(mockUsers[0].userName);
            expect(firstRow.children[1].textContent).toBe(mockUsers[0].emailID);
            expect(firstRow.children[2].textContent).toBe(mockUsers[0].firstName);
            expect(firstRow.children[3].textContent).toBe(mockUsers[0].lastName);
            const firstEditButton = firstRow.querySelector('.edit');
            const firstDeleteButton = firstRow.querySelector('.delete');
            expect(firstEditButton.getAttribute('data-index')).toBe('0');
            expect(firstDeleteButton.getAttribute('data-index')).toBe('0');

            // Test second row (Jane Smith)
            const secondRow = usersTableBody.children[1];
            expect(secondRow.children[0].textContent).toBe(mockUsers[1].userName);
            expect(secondRow.children[1].textContent).toBe(mockUsers[1].emailID);
            expect(secondRow.children[2].textContent).toBe(mockUsers[1].firstName);
            expect(secondRow.children[3].textContent).toBe(mockUsers[1].lastName);
            const secondEditButton = secondRow.querySelector('.edit');
            const secondDeleteButton = secondRow.querySelector('.delete');
            expect(secondEditButton.getAttribute('data-index')).toBe('1');
            expect(secondDeleteButton.getAttribute('data-index')).toBe('1');
        })
    })
    describe('Delete user functionality testing',()=>{
        test('The user is deleted when the delete function is called', () => {
            const{renderUsers,deleteUser}=require("./script.js")
            const initialUsers = [
                { userName: 'john_doe', emailID: 'john@example.com', firstName: 'John', lastName: 'Doe' },
                { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
            ];
            localStorage.getItem.mockReturnValue(JSON.stringify(initialUsers));
            renderUsers();
            const usersTableBody = document.querySelector('#usersTable tbody');
            expect(usersTableBody.children.length).toBe(2);
            deleteUser(0);
            expect(localStorage.setItem).toHaveBeenCalledWith(
                'users',
                JSON.stringify([
                    { userName: 'jane_smith', emailID: 'jane@example.com', firstName: 'Jane', lastName: 'Smith' }
                ])
            );
            renderUsers();
            expect(usersTableBody.children.length).toBe(1);
            const remainingRow = usersTableBody.children[0];
            expect(remainingRow.children[0].textContent).toBe('jane_smith');
            expect(remainingRow.children[1].textContent).toBe('jane@example.com');
            expect(remainingRow.children[2].textContent).toBe('Jane');
            expect(remainingRow.children[3].textContent).toBe('Smith');
        });
        
    });
})
