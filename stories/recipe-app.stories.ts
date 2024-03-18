import { html, TemplateResult } from 'lit';
import '../src/recipe-app.js';

export default {
  title: 'RecipeApp',
  component: 'recipe-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <recipe-app style="--recipe-app-background-color: ${backgroundColor}" .header=${header}></recipe-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
