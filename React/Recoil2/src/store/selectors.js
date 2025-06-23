import {selector} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

export const totalNotificationSelector = selector({
    key : "NotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagingkAtomCount = get(messagingAtom);
        const notificationsAtomCount = get(notificationsAtom);
        return networkAtomCount + jobsAtomCount + messagingkAtomCount + notificationsAtomCount;
    }
})