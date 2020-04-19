// All links
const all = new Vue({
  el: '#all',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=All&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// Accessibility links
  const accessibility = new Vue({
    el: '#accessibility',
      data: {
          items: []
      },
      mounted: function(){
         this.loadItems();
      },

      methods: {
          loadItems: function(){
              let self = this
              let id = "appT3d0zzRdiap8bV";
              let key = "keyKvL1yJCWSr0N0U"; // read only key
              this.items = []

              axios.get("https://api.airtable.com/v0/"+id+"/All?view=A11y&sortField=ID&sortDirection=desc", {
                    headers: { Authorization: "Bearer "+key }
                  })
                  .then(function(response){
                    self.items = response.data.records
                  })
                  .catch(function(error){
                  console.log(error);
              })
          }
      }
    });

// Code links
const code = new Vue({
  el: '#code',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=Code&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// CSS links
const css = new Vue({
  el: '#css',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=CSS&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// Design links
const design = new Vue({
  el: '#design',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=Design&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// How To links
const howto = new Vue({
  el: '#howto',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=HowTo&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// Process links
const process = new Vue({
  el: '#process',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=Process&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// Tools links
const tools = new Vue({
  el: '#tools',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=Tools&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

// UI links
const ui = new Vue({
  el: '#ui',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },

    methods: {
        loadItems: function(){
            let self = this
            let id = "appT3d0zzRdiap8bV";
            let key = "keyKvL1yJCWSr0N0U"; // read only key
            this.items = []

            axios.get("https://api.airtable.com/v0/"+id+"/All?view=UI&sortField=ID&sortDirection=desc", {
                  headers: { Authorization: "Bearer "+key }
                })
                .then(function(response){
                  self.items = response.data.records
                })
                .catch(function(error){
                console.log(error);
            })
        }
    }
  });

  // UX links
  const ux = new Vue({
    el: '#ux',
      data: {
          items: []
      },
      mounted: function(){
         this.loadItems();
      },

      methods: {
          loadItems: function(){
              let self = this
              let id = "appT3d0zzRdiap8bV";
              let key = "keyKvL1yJCWSr0N0U"; // read only key
              this.items = []

              axios.get("https://api.airtable.com/v0/"+id+"/All?view=UX&sortField=ID&sortDirection=desc", {
                    headers: { Authorization: "Bearer "+key }
                  })
                  .then(function(response){
                    self.items = response.data.records
                  })
                  .catch(function(error){
                  console.log(error);
              })
          }
      }
    });

// Make current nav link visually indicated as active
function setNavigation() {
    let current_location = location.pathname.split('/')[1];
    if (current_location === "") return;
    let menu_items = document.querySelector("header").getElementsByTagName("a");
    for (let i = 0, len = menu_items.length; i < len; i++) {
      if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
        menu_items[i].className = "current";
      }
    }
  }
  setNavigation()
