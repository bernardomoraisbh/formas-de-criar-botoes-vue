import Vue from 'vue';

Vue.component('ButtonString', {
  template: '<button @click="click"> Click ButtonString {{ count }} times </button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonTemplateString', {
  template: `<button @click="click"> 
              Click ButtonTemplateString {{ count }} times
            </button>`,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonXTemplate', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonInline', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonRender', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
  render(createElement) {
    return createElement(
      'button',
      {
        on: {
          click: this.click,
        },
      },
      [
        `Click ButtonRender ${this.count} times`,
      ],
    );
  },
});

Vue.component('ButtonJSX', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
  render() {
    return (
      <button onCick={this.click}>
        Click Button JSX Template { this.count } times
      </button>
    );
  },
});