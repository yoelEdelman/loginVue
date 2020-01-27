new Vue({
    el: '#main',
    data: {
        email: '',
        password: '',
        response: {}
    },
    methods: {
        login() {
            let obj = new FormData
            obj.append('email', this.email)
            obj.append('password', this.password)
            console.log('okay man')
            fetch('http://127.0.0.1:8080/login.php', {
                method: 'POST',
                headers: new Headers(),
                body: obj
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.response = data
                })
                .catch((data) => {
                    console.log('ca marche pas')
                })
        }
    }
})