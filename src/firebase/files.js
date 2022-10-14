import { firebaseStorage } from "./config";
import {ref, uploadBytesResumable, listAll, deleteObject} from "firebase/storage"

export const upload = (file) => {
    if (!file) {
        alert ("Please choose a file first!")
    }

    const storageRef = ref(firebaseStorage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask
}

export const getAll = async()=>{
    const listRef = ref(firebaseStorage,'/files/');
    return listAll(listRef)
}

export const deleted = (file) => {
    const deleteRef = ref(firebaseStorage, `/files/${file.name}`)
    const deleteImg = deleteObject(deleteRef)
    return deleteImg
}