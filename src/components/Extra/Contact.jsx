import logo from '../../assets/logo.png'
import UseAuth from '../../hooks/UseAuth';

const Contact = () => {
    const {user} = UseAuth();

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-2">
            <div className="flex flex-col items-center justify-center">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                    <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src={logo} alt="" className="scroll-pl-8 h-52 md:h-64" />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" defaultValue={user?.displayName} placeholder="" className="w-full p-3 rounded dark:bg-gray-100 border-2" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" defaultValue={user?.email} className="w-full p-3 rounded dark:bg-gray-100 border-2" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded border-2"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;