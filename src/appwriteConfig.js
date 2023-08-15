import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64da930a484f9d47edbb");

export const account = new Account(client);

export default client;
