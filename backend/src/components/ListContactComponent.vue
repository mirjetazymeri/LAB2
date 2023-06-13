<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in Contacts" :key="contact._id">
              <td>{{ contact.name }}</td>
              <td>{{ contact.lastname }}</td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.description }}</td>
              <td>
                
                <button
                  @click.prevent="deleteContact(contact._id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        Contacts: [],
      };
    },
    created() {
      let apiURL = "http://localhost:4000/apiC";
      axios
        .get(apiURL)
        .then((res) => {
          this.Contacts = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      deleteContact(id) {
        let apiURL = `http://localhost:4000/apiC/delete-contact/${id}`;
        let indexOfArrayItem = this.Contacts.findIndex((i) => i._id === id);
  
        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.Contacts.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
  
  <style>
  .btn-success {
    color:  #4267b2;
    margin-right: 10px;
  }
  </style>
  