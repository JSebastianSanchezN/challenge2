import { ref } from 'vue'
import { db } from './config'
import { collection, addDoc, query, where, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore';

const useCollection=(table) => {
    const error = ref(null)
    const isPending=ref(false)

    const getAll = async (condition) => {
        const results = [];
        let resDoc = null, q=null;
        if(condition && condition.length == 3){
            q= query(collection(db, table), where(condition[0], condition[1], condition[2]),orderBy('createAt', 'desc'));
        }else{
            q=query(collection(db,table));
        }
        resDoc = await getDocs(q)
        resDoc.forEach(doc=>{results.push({...doc.data(),id:doc.id}) });
        return results;
    }

    const add=async (doc)=>{
        error.value=null
        isPending.value=true
        try {
            let resDoc = await addDoc(collection(db,table),doc)
            console.log('document ID: '+resDoc.id)
            isPending.value=false
            return resDoc;
        }
        catch (err){
            console.log(err.message)
            error.value='could not send the message'
            isPending.value=false
            return null;
        }
    }
    const deleted=async (nombre)=>{
        error.value=null
        isPending.value=true

        try {
            let resDoc = await getAll(collection(db,table))
            resDoc.forEach (element => {
                if(element.name==nombre.name){
                    deleteDoc(doc(db, table, element.id))
                }
            });
            isPending.value=false
            return resDoc;
        }
        
        catch (err){
            console.log(err.message)
            error.value='could not send the message'
            isPending.value=false
            return null;
        }
    }
    return {error, isPending, add, deleted, getAll}
}

export default useCollection