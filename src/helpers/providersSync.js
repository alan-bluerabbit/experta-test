import firebase from 'firebase'
import firebaseConfig from '../config/firebase'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default {
    getAllProviders: async () => {
        return firebase
            .firestore()
            .collection('providers')
            .get().then(query => {
                let providers = []
                query.forEach(doc => {
                    providers.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                return providers
            })
    },
    createProvider: async (provider) => {
        const providerWithTimeStamp = {
            ...provider,
            created: firebase.firestore.Timestamp.now().seconds,
        }
        return firebase
            .firestore()
            .collection('providers')
            .add(providerWithTimeStamp)
    },
    updateProvider: async (provider) => {
        return firebase
            .firestore()
            .collection('providers')
            .doc(`${provider.id}`)
            .update({
                name: provider.name,
                mail: provider.mail,
                address: provider.address,
                cuit: provider.cuit,
                phone: provider.phone,
                resinc: provider.resinc
            });
    },
    deleteProvider: (providerId) => {
        return firebase
          .firestore()
          .collection('providers')
          .doc(`${providerId}`)
          .delete()
      },
}