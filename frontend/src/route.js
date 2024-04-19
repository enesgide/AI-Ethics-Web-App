
import React from 'react';


import Home from './views/home'
import Login from './views/login'
import Profile from './views/profile'
import Signup from './views/signup'
import ResetPWD from './views/resetpwd/resetpwd'
import NewPWD from './views/resetpwd/newpwd'
import VerifyEmail from './views/verifyemail'
import SupAdminProject from './views/supplieradmin/project'
import Detail from './views/supplieradmin/project/detail'
import NewProject from './views/supplieradmin/project/newproject'
import SupProject from './views/supplier/project'
import Message from './views/supplier/message'
import ValidatorProject from './views/validator/project'
import RegulatorProject from './views/regulator/project'
import AdministratorProject from './views/administrator/projectlist/project'
import RegulatorProject from './views/regulator/project';
import LawsTable from './views/regulator/LawsTable';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        
    },
    {
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        path: '/userinfo',
        component: Profile,
        exact: true,
    },
    {
        path: '/signup',
        component: Signup,
        exact: true,
    },
    {
        path: '/resetpassword',
        component: ResetPWD,
        exact: true,
    },
    {
        path: '/resetpassword/newpassword/:username/:token',
        component: NewPWD,
        exact: true,
    },
    {
        path: '/verifyemail/:username/:useremail/:token',
        component: VerifyEmail,
    },
    
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/project1',
        component: SupAdminProject,
        children:[
            {
                path: '/detail',
                component: Detail
            },
            {
                path: '/newproject',
                component: NewProject
            }
        ],
        exact: true,
    },
    {
        path: '/project2',
        component: SupProject,
        exact: true,
    },
    {
        path: '/message',
        component: Message,
        exact: true,
    },
    {
        path: '/project3',
        component: ValidatorProject,
        exact: true,
    },
    {
        path: '/project4',
        component: AdministratorProject
    },
    {
        path: '/project5',
        component: RegulatorProject,
        exact: true,
    },
    {
        path: '/lawstable',
        component: LawsTable,
        exact: true,
    },
    {
        path: '/addlaw',
        component: AddLaw,
        exact: true,
    },
    {
        path: '/addclause',
        component: AddClause,
        exact: true,
    },

    {}
];
 
export {routes}