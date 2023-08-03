const LogoutButton = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    };
    return (
        <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
    );
};
export default LogoutButton;