<template>
    <div id="post-details">      
      <div class="container post-details-2">
        <div class="row">
          <div class="col-12">
            <button @click="backInPostDetails()" id="back-btn" type="button" class="btn btn-primary">Back</button>
            <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Name: {{postDetails.user.name}}</h5>
                <p class="card-text">Email: {{postDetails.user.email}}</p>
              </div>
            </div> <br>
            <div class="card border-dark mb-3" style="width: 70rem">
              <div class="card-body text-dark">
                <h5 class="card-title">{{postDetails.title}}</h5>
                <p v-html="postDetails.content" class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'postdetails',
  props: ['postDetails', 'backInPostDetails']
}
</script>

<style>
#back-btn {
  margin-bottom: 40px;
  margin-right: 70px;
}
.post-details-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

#post-details {
  margin-left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 50%;
  height: 50%;
}

#back-btn {
  background-color: #006088;
  font-weight: bold;
  height: 50px;
  width: 100px;
}
</style>