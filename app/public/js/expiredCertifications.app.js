var expiredCertificationsApp = new Vue({
      el: '#expiredCertificationsApp',
      data: {
        ExpiredCertifications: [{
          renewedDate: '',
          firstName: '',
          lastName: ''

        }],
        certifications: {
          certificationName: ""
        },

        newcerts: {
          renewedDate: '',
          expirationDate: '',
          certStatus: ''
        }

    },
    methods: {
      fetchExpiredCertifications() {
        fetch('api/expiredCertifications/')
        .then(response => response.json())
        .then(json => {
          this.ExpiredCertifications=json;
          console.log(this.ExpiredCertifications);
})
},


  handleexpiredCerts() {
        fetch('api/expiredCertifications/certsfiltered.php', {
          method: 'POST',
          body: JSON.stringify(this.certifications),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => { this.ExpiredCertifications=json;
        console.log(this.ExpiredCertifications);
      })
      },
},
created() {
  this.fetchExpiredCertifications();
  // this.fetchExpCertsFilter();
}
});
