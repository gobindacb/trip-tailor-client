import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { Icon } from 'react-icons-kit';
import {github} from 'react-icons-kit/fa/github';
import {google} from 'react-icons-kit/fa/google'



const SocialLogin = () => {

    const { googleLogin, githubLogin, twitterLogin } = UseAuth();
    
    // navigation after socialLogin
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    
    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result =>{
            if (result.user){
                navigate(from);
                
            }
        });
    };

    return (
        <>
            <div className='divider'>Continue with</div>
            <div className='flex gap-2 justify-center items-center mb-4'>
                <button onClick={() =>handleSocialLogin(googleLogin)} className='btn btn-outline'><Icon icon={google} size={20} />Google</button>
                {/* <button onClick={() =>handleSocialLogin(twitterLogin)} className='btn btn-outline'>Twitter</button> */}
                <button onClick={() =>handleSocialLogin(githubLogin)} className='btn btn-outline'><Icon icon={github} size={20} /> Github</button>
            </div>
        </>
    );
};

export default SocialLogin;