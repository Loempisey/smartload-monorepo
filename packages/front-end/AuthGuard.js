import React from "react";
import {fireAuth} from './services/firebase'
import { USERSTATE, LOADINGSTATE } from './states/userState'
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";



export function AuthGuard({ children }) {
    const [loading, setLoading] = useRecoilState(LOADINGSTATE);
    const router = useRouter();
    const [user, setUser] = useRecoilState(USERSTATE);
    React.useEffect(() => {
        console.log(fireAuth)
        const unsubscribed = fireAuth.onAuthStateChanged((person) => {
            if (!person) {
                setUser(null);
                setLoading(false)
            }
            else setUser({
                uid: person.uid,
                email: person.email,
                username: person.displayName,
                profile: person.photoURL,
                password: person.password, 
            });
            setLoading(false)
        });
        return () => unsubscribed();
    },[]);
        React.useEffect(() => {
            console.log(!Boolean(user)&&!loading)
            if (!loading && !user) {
                router.push('/')
            }
        }, [user,loading]);

        return (
            <div >
                {children}
            </div>
        );
    };
