import { Client, Databases } from 'appwrite';
export const client = new Client();
export const databases = new Databases(client);

const projectID= import.meta.env.PUBLIC_APPWRITE_PROJECT_ID;
const endpoint= import.meta.env.PUBLIC_APPWRITE_ENDPOINT;

client
    .setEndpoint(endpoint)
    .setProject(projectID);