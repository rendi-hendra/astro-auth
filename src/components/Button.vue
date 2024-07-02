<script setup>
const props = defineProps(["title", "hallo"]);
</script>

<template>
  <div>
    <label
      for="username"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Username</label
    >
    <input
      type="text"
      name="username"
      id="username"
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Username"
      v-model="InputUsername"
      required="true"
    />
  </div>
  <button
    @click="hallo"
    type="button"
    class="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  >
    Test
  </button>
</template>

<script>
export default {
  data() {
    return {
      InputUsername: "",
    };
  },

  // methods: {
  //   hallo() {
  //     console.log("Test");
  //   },
  // },
};
</script>
