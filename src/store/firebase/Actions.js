import {getAll, upload} from '../../firebase/files';
import { deleteObject, getDownloadURL } from 'firebase/storage';

export const handleUpload = async (context,file)=>{
    const uploadTask = upload(file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) *100
            );
            context.commit('setPercentage', percent)
        },
        (err) => console.log(err),
        async()=>{
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            context.commit('addFile',url)
        }
    );
}

export const handleGetAll = async (context, data) => {
    const {items} = await getAll();
    items.forEach(async(itemRef)=>{
        const url = await getDownloadURL(itemRef);
        context.commit('addFile', url)
    });
}

export const handleDeleted = async (context,data) => {
    const {items} = await getAll();
    for(var i=0;i<items.length;i++){
        if(items[i].fullPath=='files/'+data){
            const url = await getDownloadURL(items[i]);
            context.commit('deleteFile',url)
            deleteObject(items[i])
        }
    }
}