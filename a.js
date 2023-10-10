var ldap = require('./main')

client = new ldap({
    uri: "ldaps://ldap.aegee.org",
    debug: 1,
    timeout: 10000, // = 1min
    ntimeout: 10000, //10s for network timeout
    base: 'dc=aegee,dc=org',
    scope: ldap.BASE,
    connect() {
	console.log('init connect 1')
	this.bind({binddn: 'uid=zzz,cn=users,dc=aegee,dc=org', password: 'yyy'}, x => {
	    console.log('init connect 2')
	    if (x && x.message != 'Success') reject('BIND ERROR ' + x)
	})
	console.log('init connect 3')
    }
}, (err) => console.log('LDAP init err', err)
		 )
