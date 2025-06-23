import {atom} from "recoil"

export const networkAtom = atom({
    key : "NetworkAtom" ,
    default : 104
})
export const jobsAtom = atom({
    key : "JobsAtom" ,
    default : 0
})
export const messagingAtom = atom({
    key : "messagingAtom" ,
    default : 0
})
export const notificationsAtom = atom({
    key : "notificationsAtom" ,
    default : 12
})

