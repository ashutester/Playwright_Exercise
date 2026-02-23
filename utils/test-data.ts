import dotenv from 'dotenv';
dotenv.config();

export const DemoUsers = {
    standard: {
        username: process.env.STANDARD_TEST_USERNAME || 'rahulshettyacademy',
        password: process.env.STANDARD_TEST_PASSWORD || 'Learning@830$3mK2'
    },
    invalid:{
        username: process.env.INVALID_TEST_USERNAME || '1234',
        password: process.env.INVALID_TEST_PASSWORD || '1234'
    }
};
export const testURLs = {
    orangehrm : process.env.demo_BASE_URL || 'https://rahulshettyacademy.com/loginpagePractise/',
    todoMVC: process.env.TODOMVC_BASE_URL || 'https://demo.playwright.dev/todomvc',

};

export const APIEndpoints = {
    jsonPlaceholder: process.env.JSONPLACEHOLDER_API || 'https://jsonplaceholder.typicode.com',
    fakeStoreAPI: process.env.FAKESTOREAPI_URL || 'https://fakestoreapi.com',
    reqres: process.env.REQRES_API || 'https://reqres.in/api'
};