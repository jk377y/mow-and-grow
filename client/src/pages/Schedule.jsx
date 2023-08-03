import LogoutButton from '../components/LogoutButton';
const Schedule = () => {
    const username = sessionStorage.getItem('username');
    return (
        <>
            <h2>Schedule</h2>
            {username && (
                <>
                    <div className='schedule-wrapper'>
                        <h3>Hello <span>{username}</span></h3>
                        <LogoutButton />
                    </div>
                    <div className='schedule-calendar'>
                        
                    </div>
                </>
            )}
        </>
    );
};
export default Schedule;