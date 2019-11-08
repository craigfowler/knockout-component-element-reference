// Import stylesheets
import './style.css';
import ko from 'knockout';
import MyComponentMarkup from './MyComponent.html';
import { MyComponent } from './MyComponent';

// Write TypeScript code!
ko.components.register('MyComponent', {
template: MyComponentMarkup,
viewModel: { createViewModel: (p : any, ci : KnockoutComponentTypes.ComponentInfo) => new MyComponent(ci.element) }
})

ko.applyBindings(document.documentElement);