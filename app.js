const app1 = Vue.createApp({
  data() {
    return {
      headerText: "This is the header section",
    };
  },
  methods: {
    clickedSean() {
        alert('You clicked the Sean McGillis button!');
    }
  },
});
app1.mount("header");
const app2 = Vue.createApp({
  data() {
    return {
      projectText: "Here is where the projects section will go",
    };
  },
  methods: {},
});
app2.mount("#projects");
const app3 = Vue.createApp({
  data() {
    return {
      skillsText: "Here is where the skills section will go",
    };
  },
  methods: {},
});
app3.mount("#skills");
const app4 = Vue.createApp({
  data() {
    return {
      aboutText: "Here is where the about section will go",
    };
  },
  methods: {},
});
app4.mount("#about");
const app5 = Vue.createApp({
  data() {
    return {
      contactText: "Here is where the contact form will go",
    };
  },
  methods: {},
});
app5.mount("#contact");
