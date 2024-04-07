import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthSerivce{
    client=new client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                return this.login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service::getCurrentUser()::",error);
        }
        return null
    }
    async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("Appwrite service::logout()::",error);
        }
    }
}

const authService=new AuthSerivce()
export default authService