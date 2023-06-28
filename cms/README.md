# Cms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## some commands

## installing bootstrap
npm install --save bootstrap@3 => The @3 is important!
## add Bootstrap to the styles[]add Bootstrap to the styles[]
don't forget to edit angular.json under the styles part with:
"node_modules/bootstrap/dist/css/bootstrap.min.css"

## automatic create the component inside app folder
ng g c name --flat ##this will not create the folder
ng g c name --flat --spec false will not create the folder and  test file
ng g c folder/name --spec false create the component inside the folder
ng g c folder/name --skip-tests
ng g c folder/name --skipTests true

## creating a project with prefix
ng new name --prefix=name --no-strict

## Pushing to git-repo
git init  --although angular will initialize the app upon creation
git commit -m "first commit" --and also commit everything
git branch -M main 
git remote add origin https://github.com/gregazores/wdd-430-nextperience.git
git push -u origin main

## creating a service
ng g s

## ng serve with port specified

## DATA BINDING
from ts code to template(HTML) STRING INTERPOLATION {{ data }} (has to resolve to string in the end)
  OR PROPERTY BINDING [property] = "data"
from template(HTML) to ts code EVENT BINDING (event) = "expression"
and then there is two way binding [(ngModel)] = "data"

## LOCAL REFERENCE
-can be placed to any local HTML element to have access to everything on that 
-element like value properties etc
-get access to an element with all it's properties
example: #element

## <ng-content></ng-content>
-so everything placed between opening and closing tag of your own component is deleted by angular (default)
-<ng-content></ng-content> will allow you to reinsert that data
-<ng-content></ng-content> serves a a hook for angular to insert the data
-@ViewContent or was it @ContentChild will allow you to access the referenced element inside this <ng-content></ng-content> 

## Lifecycle hooks
-ngOnChanges called after a bound input property changes like the ones decorated with @Input
-ngOnInit called once the component is initialized (after the object was created). This will get run after the constructor
-ngDoCheck called during every change detection run like event happening or timer fired or obeservable was resolved etc
-ngAfterContentInit called after content (ng-content) has been projected into view
-ngAfterContentChecked -called everytime the projected content has been checked
-ngAfterViewInit called after the component's view (and child views) has been initialized
-ngAfterViewChecked called everytime the vieew (and child views) have been checked
-ngOnDestroy called once the component is about to be destroyed (for cleanup purposes)
