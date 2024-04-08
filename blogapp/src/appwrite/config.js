import conf from "../conf/conf";
import { Client, Databases, Storage,Query ,ID} from "appwrite";

export class Service{
    client=new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.databases=new Storage(this.client)
        this.bucket=new Storage(this.client)
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID,
            conf.appwriteCollectionID,slug)
        } catch (error) {
            console.log("Appwrite Service::getPost()::",error);
            return false
        }
    }
    async getPost(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID
            ,conf.appwriteCollectionID,queries)
        } catch (error) {
            console.log("Appwrite Service:: getPost()::",error)
            return false
        }
    }
    async createPost({title,slug,content,featuredImage,status,userID}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID,
                conf.appwriteCollectionID,slug,{
                    title,content,status,featuredImage,userID
                })
        } catch (error) {
            console.log("Appwrite Service::createPost()::",error);
            return false
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID,
                conf.appwriteCollectionID,slug,{
                    title,content,status,featuredImage
                })
        } catch (error) {
            console.log("Appwrite Service::createPost()::",error);
            return false
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID,
                conf.appwriteCollectionID,slug)
                return true
        } catch (error) {
            console.log("Appwrite Service::createPost()::",error);
            return false
        }
    }

    // Storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,ID.unique(),file
            )
        } catch (error) {
            console.log("Appwrite Service::uploadFile()::",error);
            return false
        }
    }
    async deleteFile(filID){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,fileID
            )
        } catch (error) {
            console.log("Appwrite Service::deleteFile()::",error);
            return false
        }
    }
    getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.appwriteBucketID,fileID)
        .href
    }
}
const service=new Service()
export default service