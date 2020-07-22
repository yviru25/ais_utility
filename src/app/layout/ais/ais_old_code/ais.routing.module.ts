import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AisComponent } from './ais.component';

const routes: Routes = [
    {
        path: '',
        component: AisComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AISRoutingModule {}
