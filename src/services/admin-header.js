export default function adminHeader() {
    const admin = JSON.parse(sessionStorage.getItem('admin'));

    if(admin && admin.accessToken) {
        return { 'Authorization': 'Bearer ' + admin.accessToken };
    } else {
        return {}
    }
}